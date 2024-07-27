<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	import { Ripple } from '../components';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Animate from './Animate.svelte';
</script>

<div class="layout">
	<Header />
	<main>
		<Animate url={data.url}>
			<slot />
			<Ripple />
		</Animate>
	</main>
	<Footer />
</div>

<style>
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

	@media (max-width: 768px) {
		main {
			padding: 1rem;
		}
	}

	@media (max-width: 480px) {
		main {
			padding: 0.5rem;
		}
	}
</style>
