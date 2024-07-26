import { description, title, url } from '$lib/config'
import type { Blog } from '$lib/types.js'

export async function GET({ fetch }) {
    const response = await fetch('api/blogs')
    const blogs: Blog[] = await response.json()

    const headers = { 'Content-Type': 'application/xml' }

    const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${title}</title>
				<description>${description}</description>
				<link>${url}</link>
				<atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
				${blogs
            .map(
                (blog) => `
						<item>
							<title>${blog.title}</title>
							<description>${blog.description}</description>
							<link>${url}/${blog.slug}</link>
							<guid isPermaLink="true">${url}/${blog.slug}</guid>
							<pubDate>${new Date(blog.date).toUTCString()}</pubDate>
						</item>
					`
            )
            .join('')}
			</channel>
		</rss>
	`.trim()

    return new Response(xml, { headers })
}
