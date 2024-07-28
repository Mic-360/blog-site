import type { Blog, BlogPost } from '$lib/types';
import { apiUrl, url } from './config';

const dynamicRoutes = async () => {
  const response = await fetch(apiUrl);
  const dynamicRoutes: Blog[] = await response.json();

  return dynamicRoutes.map((route) => ({
    path: `/${route.slug}`,
    lastmod: route.date,
    priority: 0.8,
    changefreq: 'daily',
  }));
};

export const routes = [
  {
    path: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 1.0,
  },
  {
    path: '/api/blogs',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.8,
  },
  {
    path: '/rss.xml',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    path: '/manifest.webmanifest',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    path: '/robots.txt',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.6,
  },
  ...(await dynamicRoutes()),
];
