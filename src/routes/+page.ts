import type { PageLoad } from './$types';
import { dev } from '$app/environment';
import type { Blog } from '$lib/types';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

export const load = (async ({ fetch }) => {
	const res = await fetch('api/blogs');
	const blogs: Blog[] = await res.json();
	return { blogs };
}) satisfies PageLoad;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

