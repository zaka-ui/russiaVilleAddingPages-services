// server/sitemap.ts
import express from 'express';
import {staticRoutes} from './sitemap.routes'

// ============================================
// SITEMAP GENERATION LOGIC
// ============================================

export async function generateSitemap(req: express.Request): Promise<string> {
  const baseUrl = `${req.protocol}://${req.get('host')}`;
  // Get dynamic routes from your data sources
  const dynamicRoutes = await fetchDynamicRoutes();

  // Combine all routes
  const allPaths = [...new Set([...staticRoutes, ...dynamicRoutes.map(r => r.url)])];
  console.log('Total routes in sitemap:', allPaths.length);

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


