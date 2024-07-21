<script lang="ts">
	export let mainCircleSize = 210;
	export let mainCircleOpacity = 0.24;
	export let numCircles = 8;
</script>

<div
	class="absolute -z-10 inset-0 flex items-center justify-center bg-white/5"
	style="mask-image: linear-gradient(to bottom, white, transparent)"
>
	{#each Array.from({ length: numCircles }, (_, i) => {
		const size = mainCircleSize + i * 70;
		const opacity = mainCircleOpacity - i * 0.03;
		const animationDelay = `${i * 0.06}s`;
		const borderStyle = i === numCircles - 1 ? 'dashed' : 'solid';
		const borderOpacity = 5 + i * 5;

		return { key: i, className: `absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 [--i:${i}]`, style: `
				width: ${size}px;
				height: ${size}px;
				opacity: ${opacity};
				animation-delay: ${animationDelay};
				border-style: ${borderStyle};
				border-width: 1px;
				border-color: rgba(var(--foreground-rgb), ${borderOpacity / 100});
			` };
	}) as { className, style }}
		<div class={className} {style}></div>
	{/each}
</div>
