<script lang="ts">
	import { author, socials, about } from '$lib/config';
	import { Facebook, House, Send, Instagram, Mail, Linkedin, Github } from 'lucide-svelte';
</script>

<footer>
	<h1 class="text-sm font-semibold px-4 uppercase">About {author.split(' ')[0]}</h1>
	<div class="flex px-4 py-4 gap-x-6">
		<div class="relative">
			<div class="absolute inset-0 blur-sm bg-slate-800 opacity-10 rounded-full"></div>
			<img src="./avatar.png" alt="logo" class="h-28" />
		</div>
		<div class="max-w-lg space-y-4">
			<p class="text-justify">
				{about}
			</p>
			<ul class="flex gap-4">
				<li>
					<a href={socials.website}>
						<House />
					</a>
				</li>
				<li>
					<a href={socials.github}>
						<Github />
					</a>
				</li>
				<li>
					<a href={socials.linkedin}>
						<Linkedin />
					</a>
				</li>
				<li>
					<a href={socials.mail}>
						<Mail />
					</a>
				</li>
				<li>
					<a href={socials.instagram}>
						<Instagram />
					</a>
				</li>
				<li>
					<a href={socials.facebook}>
						<Facebook />
					</a>
				</li>
				<li>
					<a href={socials.telegram}>
						<Send />
					</a>
				</li>
			</ul>
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		gap: 0.5rem;
		background-color: hsl(var(--foreground));
		color: hsl(var(--background));
	}
</style>
