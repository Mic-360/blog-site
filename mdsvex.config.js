import { createHighlighter } from '@bitmachina/highlighter';
import rehypeSlug from 'rehype-slug';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeMathjax from 'rehype-mathjax';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';

/** @type {import('mdsvex').MdsvexOptions} */
const MdsvexOptions = {
  extensions: ['.svelte.md', '.md', '.svx'],
  layout: {
    _: './src/mdsvex.svelte',
  },
  highlight: {
    highlighter: await createHighlighter({ theme: 'css-variables' }),
  },
  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [remarkToc, remarkUnwrapImages, remarkFrontmatter, remarkGfm],
  rehypePlugins: [rehypeSlug, rehypeMathjax],
};

export default MdsvexOptions;
