import { routes } from '$lib/routes';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${routes
							.map(
								(route) => `
                    <url>
                        <loc>${new URL(route.path, 'https://yourdomain.com').href}</loc>
                        <lastmod>${new Date(route.lastmod).toISOString()}</lastmod>
                        <changefreq>${route.changefreq}</changefreq>
                        <priority>${route.priority}</priority>
                    </url>
                `
							)
							.join('')}
        </urlset>
    `.trim();

	return new Response(xml, { headers });
};
