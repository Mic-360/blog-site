<script lang="ts">
	import { author, socials, about } from '$lib/config';
	import { Facebook, House, Send, Instagram, Mail, Linkedin, Github } from 'lucide-svelte';
</script>

<footer>
	<h1 class="about-title">About {author.split(' ')[0]}</h1>
	<div class="about-container">
		<div class="image-container">
			<div class="image-overlay"></div>
			<img src="./avatar.png" alt="logo" class="avatar" />
		</div>
		<div class="about-text-container">
			<p class="about-text">
				{about}
			</p>
			<ul class="social-links">
				<a href={socials.website}>
					<House />
				</a>
				<a href={socials.github}>
					<Github />
				</a>
				<a href={socials.linkedin}>
					<Linkedin />
				</a>
				<a href={socials.mail}>
					<Mail />
				</a>
				<a href={socials.instagram}>
					<Instagram />
				</a>
				<a href={socials.facebook}>
					<Facebook />
				</a>
				<a href={socials.telegram}>
					<Send />
				</a>
			</ul>
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		background-color: hsl(var(--foreground));
		color: hsl(var(--background));
	}
	.about-title {
		font-size: 0.875rem; /* text-sm */
		font-weight: 600; /* font-semibold */
		padding-left: 0.5rem; /* px-4 */
		text-transform: uppercase; /* uppercase */
	}

	.about-container {
		display: flex; /* flex */
		align-items: center; /* items-center */
		gap: 0 1.5rem; /* gap-x-6 */
	}

	.image-container {
		position: relative; /* relative */
	}

	.image-overlay {
		position: absolute; /* absolute */
		top: 0; /* inset-0 */
		right: 0; /* inset-0 */
		bottom: 0; /* inset-0 */
		left: 0; /* inset-0 */
		filter: blur(4px); /* blur-sm */
		background-color: #2d3748; /* bg-slate-800 */
		opacity: 0.1; /* opacity-10 */
		border-radius: 9999px; /* rounded-full */
	}

	.avatar {
		height: 7rem; /* h-28 */
	}

	.about-text-container {
		display: flex; /* flex */
		flex-direction: column; /* flex-col */
		max-width: 32rem; /* max-w-lg */
		gap: 1rem; /* gap-4 */
	}

	.about-text {
		text-align: justify; /* text-justify */
	}

	.social-links {
		display: flex; /* flex */
		justify-content: flex-start; /* justify-start */
		gap: 0 1rem; /* gap-4 */
	}
</style>
