/** @type {import('mdsvex').MdsvexOptions} */
const MdsvexOptions = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default MdsvexOptions;
