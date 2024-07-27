import { description, title } from '$lib/config';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const manifest = {
		name: title,
		short_name: 'Blogs',
		description,
		start_url: '/',
		background_color: '#ffffff',
		theme_color: '#000000',
		display: 'standalone',
		icons: [
			{ src: '/avatar.png', type: 'image/png', sizes: '192x192' },
			{ src: '/avatar.png', type: 'image/png', sizes: '512x512' }
		]
	};

	new Headers({
		'content-type': 'application/json'
	});

	return new Response(JSON.stringify(manifest));
};

export const prerender = true;
