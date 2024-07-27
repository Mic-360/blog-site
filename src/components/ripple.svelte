<script lang="ts">
	export let mainCircleSize = 210;
	export let mainCircleOpacity = 0.24;
	export let numCircles = 8;
</script>

<div class="background-container">
	{#each Array.from({ length: numCircles }, (_, i) => {
		const size = mainCircleSize + i * 70;
		const opacity = mainCircleOpacity - i * 0.03;
		const animationDelay = `${i * 0.06}s`;
		const borderStyle = i === numCircles - 1 ? 'dashed' : 'solid';
		const borderOpacity = 5 + i * 5;

		return { key: i, className: `circle-${i}`, size, opacity, animationDelay, borderStyle, borderOpacity };
	}) as { key, className, size, opacity, animationDelay, borderStyle, borderOpacity }}
		<div
			class="circle {className}"
			data-index={key}
			style="
            --size: {size}px;
            --opacity: {opacity};
            --animation-delay: {animationDelay};
            --border-style: {borderStyle};
            --border-opacity: {borderOpacity / 100};
            --i: {key};
        "
		></div>
	{/each}
</div>

<style>
	.background-container {
		position: absolute; /* absolute */
		z-index: -10; /* -z-10 */
		inset: 0; /* inset-0 */
		display: flex; /* flex */
		align-items: center; /* items-center */
		justify-content: center; /* justify-center */
		background-color: rgba(255, 255, 255, 0.05); /* bg-white/5 */
		mask-image: linear-gradient(to bottom, white, transparent); /* mask-image */
	}

	.circle {
		position: absolute; /* absolute */
		animation: ripple var(--duration, 2s) ease calc(var(--i, 0) * 0.2s) infinite;
		border-radius: 50%; /* rounded-full */
		background-color: rgba(255, 255, 255, 0.25); /* bg-foreground/25 */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* shadow-xl */
		top: 50%; /* top-1/2 */
		left: 50%; /* left-1/2 */
		transform: translate(-50%, -50%); /* translate-x-1/2 translate-y-1/2 */
		width: var(--size);
		height: var(--size);
		opacity: var(--opacity);
		border-style: var(--border-style);
		border-width: 1px;
		border-color: rgba(var(--foreground-rgb), var(--border-opacity));
	}

	@keyframes ripple {
		0%,
		100% {
			transform: translate(-50%, -50%) scale(1);
		}
		50% {
			transform: translate(-50%, -50%) scale(0.9);
		}
	}
</style>
