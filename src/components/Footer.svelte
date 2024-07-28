<script lang="ts">
	import { author, socials, about, avatar } from '$lib/config';
	import { Facebook, House, Send, Instagram, Mail, Linkedin, Github } from 'lucide-svelte';
</script>

<footer>
	<h1 class="about-title">About {author.split(' ')[0]}</h1>
	<div class="about-container">
		<div class="image-container">
			<div class="image-overlay"></div>
			<img src={avatar} alt="logo" class="avatar" />
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
				<a
					href="http://validator.w3.org/feed/check.cgi?url=https%3A//blog-site-steel-three.vercel.app/rss.xml"
					><img
						src="https://validator.w3.org/feed/images/valid-rss-rogers.png"
						alt="[Valid RSS]"
						title="Validate my RSS feed"
						class="rss"
					/></a
				>
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
		font-size: 1rem; /* text-sm */
		font-weight: 800; /* font-bold */
		padding-left: 0.5rem; /* px-4 */
		text-transform: uppercase; /* uppercase */
		margin-bottom: 1rem; /* mb-4 */
		color: blue; /* text-blue-500 */
	}

	.about-container {
		display: flex; /* flex */
		align-items: center; /* items-center */
		gap: 0 2rem; /* gap-x-6 */
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
		height: 9rem; /* h-36 */
		border-radius: 9999px; /* rounded-full */
	}

	.about-text-container {
		display: flex; /* flex */
		flex-direction: column; /* flex-col */
		max-width: 32rem; /* max-w-lg */
		gap: 2rem; /* gap-8 */
	}

	.about-text {
		text-align: justify; /* text-justify */
	}

	.social-links {
		display: flex; /* flex */
		justify-content: flex-start; /* justify-start */
		gap: 0 1rem; /* gap-4 */
	}

	.rss {
		height: 1.5rem; /* h-6 */
	}

	/* Media Queries */
	@media (max-width: 768px) {
		.about-container {
			flex-direction: column; /* flex-col */
			align-items: center; /* items-center */
			gap: 1rem; /* gap-4 */
		}

		.avatar {
			height: 5rem; /* h-20 */
			border-radius: 9999px; /* rounded-full */
		}

		.about-text-container {
			max-width: 100%; /* full width */
			text-align: center; /* center text */
		}

		.about-title {
			text-align: center;
		}

		.social-links {
			justify-content: flex-start; /* justify-start */
		}
	}

	@media (max-width: 480px) {
		.about-title {
			font-size: 0.875rem; /* text-xs */
		}

		.avatar {
			height: 4rem; /* h-16 */
			border-radius: 9999px; /* rounded-full */
		}

		.about-text-container {
			padding: 0 1rem; /* px-4 */
		}
	}
</style>
