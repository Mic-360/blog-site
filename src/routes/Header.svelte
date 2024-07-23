<script lang="ts">
	import { title, description, version, author, siteUrl } from '$lib/config';
</script>

<header>
	<div class="header-image-container">
		<div class="header-image-overlay"></div>
		<img src="./avatar.png" alt="logo" class="avatar" />
	</div>
	<h1 class="header-title">{title}</h1>
	<span class="header-author-container">
		- <a href={siteUrl} class="author-link">
			{author}
		</a>
	</span>
	<h2 class="header-description">{description}</h2>
	<h3 class="header-version">Version: {version}</h3>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		gap: 0.5rem;
	}
	.header-image-container {
		position: relative; /* relative */
	}

	.header-image-overlay {
		position: absolute; /* absolute */
		top: 0; /* inset-0 */
		right: 0; /* inset-0 */
		bottom: 0; /* inset-0 */
		left: 0; /* inset-0 */
		filter: blur(1rem); /* blur-lg */
		background-color: #93c5fd; /* bg-blue-300 */
		opacity: 0.1; /* opacity-10 */
		border-radius: 9999px; /* rounded-full */
	}

	.avatar {
		height: 7rem; /* h-28 */
	}

	.header-title {
		font-size: 3rem; /* text-5xl */
		font-weight: 600; /* font-semibold */
		text-transform: uppercase; /* uppercase */
	}

	.header-author-container {
		text-align: right; /* text-right */
		width: 100vw; /* w-screen */
		max-width: 28rem; /* max-w-md */
	}

	.author-link {
		cursor: pointer; /* cursor-pointer */
		text-underline-offset: 0.125rem; /* underline-offset-2 */
	}
	.author-link:hover {
		text-decoration: underline; /* hover:underline */
	}

	.header-description {
		max-width: 40rem; /* max-w-screen-sm */
		text-align: center; /* text-center */
		font-size: medium;
		font-weight: 400;
	}

	.header-version {
		text-align: right; /* text-right */
		width: 100vw; /* w-screen */
		max-width: 28rem; /* max-w-md */
		font-weight: 700; /* font-bold */
	}
</style>
