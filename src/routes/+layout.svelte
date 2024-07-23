<script lang="ts">
	import '../app.css';

	import Ripple from '$lib/ripple.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="layout">
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
		position: relative;
		overflow: hidden;
		background-color: var(--background);
		border-radius: 0.5rem;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
