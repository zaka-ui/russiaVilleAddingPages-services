// server/sitemap.ts
import { Request, Response } from 'express';
import { ROUTES } from './sitemap.routes';
import fetch from 'node-fetch';

const BASE_URL = 'https://russiavillebeauty.ma'; // change avec ton domaine

// Fonction pour vérifier si une page contient la meta noindex
async function isIndexable(url: string): Promise<boolean> {
  try {
    const html = await fetch(url).then(res => res.text());
    return !html.includes('noindex');
  } catch (e) {
    console.error('Erreur fetch:', url);
    return false;
  }
}

export async function sitemapHandler(req: Request, res: Response) {

  const urls: string[] = [];

  for (const route of ROUTES) {
    const fullUrl = `${BASE_URL}/${route}`;

    const indexable = await isIndexable(fullUrl);

    if (indexable) {
      urls.push(fullUrl);
    }
  }

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          url => `
        <url>
          <loc>${url}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.9</priority>
        </url>`
        )
        .join('')}
    </urlset>
  `.trim();

  res.header('Content-Type', 'application/xml');
  res.send(xml);
}
