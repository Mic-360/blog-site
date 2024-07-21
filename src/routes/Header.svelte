<script lang="ts">
	import { title, description, version, author, siteUrl } from '$lib/config';
</script>

<header>
	<div class="relative">
		<div class="absolute inset-0 blur-lg bg-blue-300 opacity-10 rounded-full"></div>
		<img src="./avatar.png" alt="logo" class="h-28" />
	</div>
	<h1 class="text-5xl font-semibold uppercase">{title}</h1>
	<span class="text-right w-screen max-w-md"
		>-{' '}<a href={siteUrl} class="cursor-pointer hover:underline underline-offset-2">
			{author}
		</a></span
	>
	<h2 class="max-w-screen-sm text-center">{description}</h2>
	<h3 class="text-right w-screen max-w-md font-bold">Version: {version}</h3>
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
</style>
