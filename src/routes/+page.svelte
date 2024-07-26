<script lang="ts">
	import { title, description, author } from '$lib/config';
	import type { PageData } from './$types';
	import { ArrowUpRight } from 'lucide-svelte';
	import { formatDate } from '$lib/utils';
	export let data: PageData;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="blogs-section">
	{#each data.blogs as blog}
		<article class="blog-article">
			<div class="blog-content">
				<img src={blog.thumbnail} alt={blog.tags[0]} class="blog-thumbnail" />
				<div class="blog-details">
					<div class="blog-text">
						<h1 class="blog-title">
							{blog.title}
						</h1>
						<p class="blog-description">
							{blog.description}
						</p>
					</div>
					<a href={blog.slug} class="read-more-link">
						<span class="read-more-text">Read more ...</span>
						<span class="read-more-icon">
							<ArrowUpRight />
						</span>
					</a>
					<div class="author-info">
						<img class="author-avatar" src="/avatar.png" alt={author} />
						<div class="author-details">
							<p class="author-name">{author}</p>
							<p class="author-date">{formatDate(blog.date)}</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	{/each}
	<div class="gradient-bottom"></div>
</section>

<style>
	.blogs-section {
		position: relative;
		display: flex; /* flex */
		flex-direction: column; /* flex-col */
		gap: 1rem; /* gap-4 */
		width: 100%; /* w-full */
		height: 100%; /* h-screen */
		align-items: center; /* items-center */
		padding: 2.5rem; /* p-10 */
		overflow-y: scroll; /* overflow-y-scroll */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.blogs-section::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera */
	}

	.blog-article {
		width: 75%; /* w-3/4 */
		max-width: 100%; /* max-w-full */
		border-radius: 0.75rem; /* rounded-xl */
	}

	.blog-content {
		background: linear-gradient(
			to left,
			rgba(24, 24, 27, 0.7),
			rgba(24, 24, 27, 0.1)
		); /* bg-gradient-to-l from-zinc-900/70 */
		border-radius: 0.75rem; /* rounded-xl */
		display: flex; /* flex */
		gap: 1rem; /* gap-x-4 */
		padding: 1rem; /* p-4 */
	}

	.blog-thumbnail {
		height: auto; /* h-72 */
		width: 50%; /* w-1/2 */
		border-radius: 0.75rem; /* rounded-xl */
	}

	.blog-details {
		display: flex; /* flex */
		flex-direction: column; /* flex-col */
		justify-content: space-between; /* justify-between */
		line-height: 1.5; /* leading-normal */
	}

	.blog-text {
		margin-bottom: 2rem; /* mb-8 */
	}

	.blog-title {
		color: white; /* text-white */
		font-weight: 700; /* font-bold */
		font-size: 2rem; /* text-xl */
		margin-bottom: 0.5rem; /* mb-2 */
	}

	.blog-description {
		color: #e5e7eb; /* text-gray-200 */
		font-size: 1rem; /* text-base */
	}

	.read-more-link {
		display: flex; /* flex */
		gap: 0.5rem; /* gap-x-2 */
		align-items: center; /* items-center */
	}

	.read-more-text {
		padding: 0.1rem 1rem; /* px-4 */
		border-radius: 9999px; /* rounded-full */
		background-color: white; /* bg-white */
		color: #4b5563; /* text-gray-600 */
		border: 1px solid #e5e7eb; /* border border-gray-200 */
	}

	.read-more-icon {
		display: flex;
		align-items: center;
		height: 1.5rem; /* h-6 */
		width: 1.5rem; /* w-6 */
		border-radius: 9999px; /* rounded-full */
		padding: 0.25rem; /* p-1 */
		background-color: white; /* bg-white */
		color: #4b5563; /* text-gray-600 */
		border: 1px solid #e5e7eb; /* border border-gray-200 */
	}

	.author-info {
		margin-top: 0.5rem; /* mt-2 */
		display: flex; /* flex */
		align-items: center; /* items-center */
	}

	.author-avatar {
		width: 2.5rem; /* w-10 */
		height: 2.5rem; /* h-10 */
		border-radius: 9999px; /* rounded-full */
		margin-right: 1rem; /* mr-4 */
	}

	.author-details {
		font-size: 0.875rem; /* text-sm */
	}

	.author-name {
		color: white; /* text-white */
		line-height: 1; /* leading-none */
	}

	.author-date {
		color: #6b7280; /* text-gray-500 */
	}

	.gradient-bottom {
		pointer-events: none;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 33.3333%;
		background: linear-gradient(to top, rgba(24, 24, 27, 0.7));
	}
</style>
