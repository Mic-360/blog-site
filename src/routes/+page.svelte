<script>
	import '../app.css';
	import { title, description } from '$lib/config';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="flex flex-col gap-4 w-full h-screen justify-center items-center">
	<h1 class="text-5xl">Welcome to <span class="font-bold text-orange-400">Svelte</span>Kit</h1>
	<p>
		Visit <a
			class="underline underline-offset-2 decoration-slate-400 hover:text-blue-400 hover:decoration-blue-400"
			href="https://kit.svelte.dev">kit.svelte.dev</a
		> to read the documentation.
	</p>
</section>
