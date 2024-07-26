<script lang="ts">
	import { blur } from 'svelte/transition';
	export let url = '';
</script>

{#key url}
	<div class="transition" transition:blur={{ amount: 25 }}>
        <slot/>
    </div>
{/key}

<style>
    .transition {
        height: 100%;
    }
</style>