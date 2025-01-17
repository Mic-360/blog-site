import { dev } from '$app/environment';

export const title = 'No-Nonsense Blogs';
export const author = 'Bhaumic Singh';
export const avatar = './avatar-no-bg.png';
export const description =
  'This is a blog site built with SvelteKit. Which covers the adventures of my developer journey. It is a place where I share my thoughts, ideas, and experiences.';
export const version = '0.0.5';
export const url = dev
  ? 'http://localhost:5173'
  : 'https://blog-bhaumics-projects.vercel.app';
export const apiUrl = `${url}/api/blogs`;
export const debug = dev ? true : false;
export const log = dev ? true : false;
export const socials = {
  website: 'https://bhaumic.me/',
  github: 'https://github.com/mic-360',
  linkedin: 'https://www.linkedin.com/in/bhaumic/',
  mail: 'mailto:bhaumiksingh2000@gmail.com',
  instagram: 'https://www.instagram.com/just.a.fat.rat/',
  facebook: 'https://www.facebook.com/miczx',
  telegram: 'https://t.me/bhaumic',
};
export const about =
  'Bhaumic Singh is a full stack web and android developer, expert in flutter app development and custom rom development, now a student, gamer, boyfriend, optimistic, and an Assassins creed fanboy. He is a failed writer, and a game developer.';
