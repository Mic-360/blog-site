import { url, title, author, description } from '$lib/config';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ url }: { url: URL }) => {
	return {
		url: url.pathname,
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'Blog',
			name: title,
			url: url.href,
			author: {
				'@type': 'Person',
				name: author
			},
			description: description
		}
	};
};
