import type { PageLoad } from './$types';
import type { BlogPost } from '$lib/types';

export const load = (async ({ params }) => {
	try {
		const blog = await import(`../../articles/${params.slug}.md`);
		const blogPost: BlogPost = {
			content: blog.default,
			meta: blog.metadata
		};
		return blogPost;
	} catch (error) {
		throw new Error(`Failed to load ${params.slug}.md`);
	}
}) satisfies PageLoad;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
