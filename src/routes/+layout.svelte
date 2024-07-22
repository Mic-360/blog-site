<script lang="ts">
	import '../app.css';

	import Ripple from '$lib/ripple.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="layout relative overflow-hidden bg-background md:shadow-xl rounded-lg">
	<Header />
	<main>
		<slot />

		<Ripple />
	</main>
	<Footer />
</div>

<style lang="postcss">
	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
