import { url } from '$lib/config';
import type { RequestHandler } from './$types';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const generateRobotsTxt = (Url: string): string =>
	`
User-agent: *
Disallow: /admin/
Disallow: /login/
Disallow: /register/
Allow: /

Sitemap: ${Url}/sitemap.xml
`.trim();

export const GET: RequestHandler = async ({ setHeaders }) => {
	try {
		const robotsTxt = generateRobotsTxt(url);

		setHeaders({
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=0, s-max-age=600',
			Pragma: 'no-cache', // HTTP 1.0 backward compatibility
			Expires: '0' // Ensures immediate expiration
		});

		return new Response(robotsTxt, { status: 200 });
	} catch (error) {
		console.error('Error generating robots.txt:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
};
