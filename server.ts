import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import AppServerModule from './src/main.server';
import { sitemapHandler } from './server/sitemap';


import bootstrap from './src/main.server';
import { routes } from './src/app/app-routing.module'; // Import your routes




// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Test API endpoint
  server.get('/api/test', (req, res) => {
    console.log('✅ API test endpoint hit!');
    res.json({ message: 'Backend is working!', timestamp: new Date() });
  });

  // Sitemap XML endpoint
  server.get('/sitemap.xml', async (req, res) => {
    console.log('✅ Sitemap route hit!');
    try {
      const sitemap = await generateSitemap(req);
      res.header('Content-Type', 'application/xml');
      res.header('Cache-Control', 'public, max-age=3600');
      res.send(sitemap);
    } catch (error) {
      console.error('❌ Error generating sitemap:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  // Robots.txt (optional)
  server.get('/robots.txt', (req, res) => {
    const robotsTxt = `User-agent: *
    Allow: /
    Sitemap: ${req.protocol}://${req.get('host')}/sitemap.xml`;
    res.header('Content-Type', 'text/plain');
    res.send(robotsTxt);
  }); server.get('/sitemap.xml', async (req, res) => {
    console.log('✅ Sitemap route hit!');
    try {
      const sitemap = await generateSitemap(req);
      res.header('Content-Type', 'application/xml');
      res.header('Cache-Control', 'public, max-age=3600');
      res.send(sitemap);
    } catch (error) {
      console.error('❌ Error generating sitemap:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  // ============================================
  // Example API endpoint (for testing)
  // ============================================
  server.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!', timestamp: new Date() });
  });




  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));



  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });


  return server;
}

/*start*/


// ============================================
// SITEMAP GENERATION LOGIC
// ============================================

async function generateSitemap(req: express.Request): Promise<string> {
  const baseUrl = `${req.protocol}://${req.get('host')}`;

  console.log('🔍 Generating sitemap for:', baseUrl);

  // YOUR STATIC ROUTES - Automatically extracted from app.routes.ts
  const staticRoutes = [
    '/',
    '/tarifs',
    '/tarifs/ongles',
    '/tarifs/cils',
    '/tarifs/sourcils',
    '/tarifs/tous',
    '/photos',
    '/contactez-nous',
    '/a-propos-de-nous',
    '/categorie/extension-de-cils-marrakech',
    '/categorie/sourcils-marrakech',
    '/categorie/ongles-marrakech',

    // Extension cils services
    '/categorie/extension-de-cils/cil-à-cil-a-marrakech',
    '/categorie/extension-de-cils/extensions-volume-naturel-marrakech',
    '/categorie/extension-de-cils/extensions-volume-marrakech',
    '/categorie/extension-de-cils/extension-mega-volume-marrakech',
    '/categorie/extension-de-cils/remplissage-extensions-cils',
    '/categorie/extension-de-cils/depose-extensions-cils',
    '/categorie/extension-de-cils/coloration-cils-marrakech',
    '/categorie/extension-de-cils/lamination-cils-marrakech',

    // Sourcils services
    '/categorie/sourcils/brow-lamination',
    '/categorie/sourcils/restruction-sourcils',
    '/categorie/sourcils/teintre-sourcils',
    '/categorie/sourcils/épilation-sourcils',

    // Ongles services
    '/categorie/ongles/manucure-semi-permanente-marrakech',
    '/categorie/ongles/extension-ongles-gel-marrakech',
    '/categorie/ongles/depose-ongles-marrakech',
    '/categorie/ongles/pedicure-gel-marrakech',
    '/categorie/ongles/art-et-design-ongles-marrakech',
  ];

  // Get dynamic routes from your data sources
  const dynamicRoutes = await fetchDynamicRoutes();

  // Combine all routes
  const allPaths = [...new Set([...staticRoutes, ...dynamicRoutes.map(r => r.url)])];
  console.log('📝 Total routes in sitemap:', allPaths.length);

  const validRoutes = allPaths.map(path => {
    const dynamicData = dynamicRoutes.find(r => r.url === path);
    return {
      url: path,
      lastmod: dynamicData?.lastmod || new Date().toISOString().split('T')[0],
      changefreq: dynamicData?.changefreq || getDefaultChangeFreq(path),
      priority: dynamicData?.priority || getDefaultPriority(path)
    };
  });

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${validRoutes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

function getDefaultChangeFreq(path: string): string {
  if (path === '/') return 'daily';
  if (path.includes('/blog')) return 'weekly';
  if (path.includes('/products') || path.includes('/services')) return 'weekly';
  return 'monthly';
}

function getDefaultPriority(path: string): string {
  if (path === '/') return '1.0';
  if (path.includes('/blog')) return '0.8';
  if (path.includes('/services') || path.includes('/products')) return '0.8';
  if (path.includes('/contact')) return '0.7';
  return '0.6';
}

// ============================================
// FETCH DYNAMIC ROUTES
// Replace this with your actual data fetching
// ============================================

async function fetchDynamicRoutes() {
  const routes: Array<{ url: string, lastmod?: string, changefreq: string, priority: string }> = [];

  try {
    // Example: Fetch blog posts from your API/database
    const blogPosts = await fetchBlogPosts();
    routes.push(...blogPosts.map(post => ({
      url: `/blog/${post.slug}`,
      lastmod: post.updatedAt,
      changefreq: 'weekly',
      priority: '0.8'
    })));

    // Example: Fetch products/services
    const products = await fetchProducts();
    routes.push(...products.map(product => ({
      url: `/services/${product.id}`,
      lastmod: product.updatedAt,
      changefreq: 'monthly',
      priority: '0.7'
    })));
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
  }

  return routes;
}

// Example data fetching - REPLACE WITH YOUR ACTUAL IMPLEMENTATION
async function fetchBlogPosts() {
  // TODO: Replace with actual API call or database query
  // Example using fetch:
  // const response = await fetch('https://yourapi.com/api/posts');
  // return await response.json();

  return [
    { slug: 'first-post', updatedAt: '2024-01-15' },
    { slug: 'second-post', updatedAt: '2024-02-20' }
  ];
}

async function fetchProducts() {
  // TODO: Replace with actual API call or database query
  return [
    { id: 'facial-treatment', updatedAt: '2024-01-10' },
    { id: 'hair-styling', updatedAt: '2024-02-15' }
  ];
}

/** end */
function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
