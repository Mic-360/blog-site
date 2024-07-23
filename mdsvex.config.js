import { createHighlighter } from '@bitmachina/highlighter';

/** @type {import('mdsvex').MdsvexOptions} */
const MdsvexOptions = {
	extensions: ['.svelte.md', '.md', '.svx'],
	highlight: {
		highlighter: await createHighlighter({ theme: 'css-variables' })
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default MdsvexOptions;
