import type { PageLoad } from "./[slug]/$types";

export const prerender = true;

export const load: PageLoad = (async ({ url }: { url: URL }) => {
    return {
        url: url.pathname
    }
});