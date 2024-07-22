<script lang='ts'>
	import { title, description } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="flex flex-col gap-4 w-full h-screen">

</section>
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
