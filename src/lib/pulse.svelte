<script>
	export let pulseColor = '#435745';
	export let duration = '1.5s';
</script>

<button class="relative-button" style="--pulse-color: {pulseColor}; --duration: {duration}">
	<div class="relative-content"><slot /></div>
	<div class="pulse-background"></div>
</button>

<style>
	@keyframes pulse {
		0%,
		100% {
			box-shadow: 0 0 0 0 var(--pulse-color);
		}
		50% {
			box-shadow: 0 0 0 4px var(--pulse-color);
		}
	}

	.pulse-background {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		border-radius: 99999px;
		animation: pulse var(--duration) ease-out infinite;
		transform: translate(-50%, -50%);
	}

	.relative-button {
		position: relative;
		background-color: transparent;
		border: none;
	}

	.relative-content {
		position: relative;
	}
</style>
