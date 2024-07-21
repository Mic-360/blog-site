import { dev } from '$app/environment';

export const title = 'Homegrown Blogs';
export const author = 'Bhaumic Singh';
export const description =
	'This is a blog site built with SvelteKit. Which covers the adventures of my developer journey. It is a place where I share my thoughts, ideas, and experiences.';
export const version = '0.0.1';
export const apiUrl = 'https://api.example.com';
export const debug = false;
export const log = true;
export const siteUrl = 'https://bhaumic.me/';
export const url = dev ? 'http://localhost:5173' : 'https://example.com';
export const socials = {
	website: siteUrl,
	github: 'https://github.com/mic-360',
	linkedin: 'https://www.linkedin.com/in/bhaumic/',
	mail: 'mailto:bhaumiksingh2000@gmail.com',
	instagram: 'https://www.instagram.com/just.a.fat.rat/',
	facebook: 'https://www.facebook.com/miczx',
	telegram: 'https://t.me/bhaumic'
};
export const about =
	'Bhaumic Singh is a full stack web and android developer, expert in flutter app development and custom rom development, now a student, gamer, boyfriend, optimistic, and an Assassins creed fanboy. He is a failed writer, and a game developer.';
