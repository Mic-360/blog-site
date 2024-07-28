<script lang="ts">
	import { title, description, version, author, socials, avatar } from '$lib/config';
</script>

<header>
	<div class="header-container">
		<div class="header-image-container">
			<div class="header-image-overlay"></div>
			<img src={avatar} alt="logo" class="avatar" />
		</div>
		<div class="header-title-container">
			<h1 class="header-title">{title}</h1>
			<span class="header-author-container">
				- <a href={socials.website} class="author-link">
					{author}
				</a>
			</span>
		</div>
		<h3 class="header-version">Version: {version}</h3>
	</div>
	<h2 class="header-description">{description}</h2>
</header>

<style>
	header {
		display: flex; /* flex */
		flex-direction: column; /* flex-col */
		padding: 1rem; /* p-4 */
		gap: 1rem; /* gap-4 */
	}
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		gap: 0.5rem;
	}
	.header-image-container {
		position: relative; /* relative */
	}

	.header-image-overlay {
		position: absolute; /* absolute */
		top: 0; /* inset-0 */
		right: 0; /* inset-0 */
		bottom: 0; /* inset-0 */
		left: 0; /* inset-0 */
		filter: blur(1rem); /* blur-lg */
		background-color: #93c5fd; /* bg-blue-300 */
		opacity: 0.1; /* opacity-10 */
		border-radius: 9999px; /* rounded-full */
	}

	.avatar {
		height: 7rem; /* h-28 */
		border-radius: 9999px; /* rounded-full */
	}

	.header-title-container {
		display: flex; /* flex */
		flex-direction: column; /* flex-col */
	}

	.header-title {
		font-size: 2.5rem; /* text-5xl */
		font-weight: 600; /* font-semibold */
		text-transform: uppercase; /* uppercase */
	}

	.header-author-container {
		text-align: right; /* text-right */
	}

	.author-link {
		cursor: pointer; /* cursor-pointer */
		text-underline-offset: 0.125rem; /* underline-offset-2 */
	}
	.author-link:hover {
		text-decoration: underline; /* hover:underline */
	}

	.header-version {
		text-align: right; /* text-right */
		font-weight: 700; /* font-bold */
	}

	.header-description {
		margin: 0 auto;
		padding: 0 10rem;
		text-align: center; /* text-center */
		font-size: medium;
		font-weight: 400;
	}

	/* Media Queries for responsiveness */
	@media (max-width: 768px) {
		.header-container {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.header-title {
			font-size: 2rem; /* text-4xl */
		}

		.header-version {
			text-align: center;
		}

		.header-description {
			padding: 0 2rem;
		}
	}

	@media (max-width: 480px) {
		.header-title {
			font-size: 1.5rem; /* text-3xl */
		}

		.avatar {
			height: 4rem; /* h-20 */
		}

		.header-description {
			padding: 0 1rem;
		}
	}
</style>
