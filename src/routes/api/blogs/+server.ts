import type { Blog } from '$lib/types';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

const getBlogs = async () => {
	let blogs: Blog[] = [];
	const paths = import.meta.glob('/src/articles/*{.svx,.md,.svelte.md}', {
		eager: true
	});
	for (const path in paths) {
		const file = paths[path];
		const slug = path
			.split('/')
			.at(-1)
			?.replace('.svx', '')
			.replace('.md', '')
			.replace('.svelte.md', '');
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Blog, 'slug'>;
			metadata.published && blogs.push({ slug, ...metadata } satisfies Blog);
		}
	}
	blogs = blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return blogs;
};

export const GET: RequestHandler = async () => {
	const blogs = await getBlogs();
	return json(blogs);
};
