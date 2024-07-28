<script lang="ts">
  import './markdown.css';
  import type { PageData } from './$types';
  import { author, url } from '$lib/config';
  import copy from 'copy-to-clipboard';
  import { onMount } from 'svelte';

  export let data: PageData;
  /**
   * This function will go through all the 'pre' elements
   * on the page and add a copy button to them.
   */
  onMount(() => {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach((block) => {
      // Set position relative on the pre element
      block.style.position = 'relative';

      const copyPrompt = document.createElement('div');
      copyPrompt.className = 'copy-prompt';
      copyPrompt.style.cssText = `
				position: absolute;
				top: 6px;
				right: 8px;
				cursor: pointer;
			`;

      const copyIcon = document.createElement('img');
      copyIcon.src = '/copy.svg';
      copyIcon.alt = 'Copy code';
      copyIcon.style.cssText = `
				width: 15px;
				border: 1px solid var(--border);
				border-radius: 3px;
				padding: 2px;
			`; // Adjust size as needed

      copyPrompt.appendChild(copyIcon);
      block.appendChild(copyPrompt);

      copyPrompt.addEventListener('click', () => {
        const codeElement = block.querySelector('code');
        if (codeElement) {
          copy(codeElement.textContent ?? '');
        }

        // Visual feedback for copy action
        copyIcon.style.opacity = '0.5';
        setTimeout(() => {
          copyIcon.style.opacity = '1';
        }, 200);
      });
    });
  });

  function getRandomColor() {
    const colors = [
      '#f44336', // Red
      '#4caf50', // Green
      '#2196f3', // Blue
      '#ffeb3b', // Yellow
      '#9c27b0', // Purple
      '#e91e63', // Pink
      '#3f51b5', // Indigo
      '#009688', // Teal
      '#ff9800', // Orange
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  }
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.description} />
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content={author} />
  <meta name="keywords" content={data.meta.tags.join(',')} />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:image" content={data.meta.thumbnail} />
  <meta property="og:url" content="{url}/{data.meta.slug}" />
  <meta property="og:type" content="website" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={data.meta.title} />
  <meta property="twitter:description" content={data.meta.description} />
  <meta property="twitter:image" content={data.meta.thumbnail} />
</svelte:head>

<article>
  <hgroup>
    <h1 class="article-title">{data.meta.title}</h1>
  </hgroup>
  <div class="tags-container">
    {#each data.meta.tags as tags}
      <a href={data.meta.slug} class="tag-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="tag-icon"
          width="8"
          height="8"
          viewBox="0 0 24 24"
          fill="none"
          stroke={getRandomColor()}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><path
            d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
          /><circle cx="7.5" cy="7.5" r=".5" fill={getRandomColor()} /></svg
        >
        <span class="tag-text">{tags} |</span>
      </a>
    {/each}
  </div>
  <div class="markdown-body">
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  article {
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    margin: 2.5rem auto;
  }

  .article-title {
    font-size: 3rem; /* text-5xl */
  }

  .tags-container {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 0.5rem; /* gap-x-2 */
    padding: 0.5rem 0.1rem; /* py-4 px-2 */
  }

  .tag-link {
    display: flex; /* flex */
    align-items: center; /* items-center */
    gap: 0.25rem; /* gap-x-1 */
    border-radius: 0.75rem; /* rounded-xl */
  }

  .tag-text {
    font-size: 0.8rem; /* text-md */
    font-family: var(--font-mono); /* font-mono */
  }

  .tag-icon {
    transform: rotate(90deg); /* rotate-90 */
    margin-top: 0.15rem; /* mt-[0.15rem] */
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 1024px) {
    article {
      width: 90%;
    }

    .article-title {
      font-size: 2.5rem; /* text-4xl */
    }
  }

  @media (max-width: 768px) {
    article {
      width: 95%;
    }

    .article-title {
      font-size: 2rem; /* text-3xl */
    }

    .tag-link {
      padding: 0.2rem 0.4rem; /* px-1 */
    }

    .tag-text {
      font-size: 0.7rem; /* text-sm */
    }
  }

  @media (max-width: 480px) {
    .article-title {
      font-size: 1.5rem; /* text-2xl */
    }

    .tag-link {
      padding: 0.1rem 0.3rem; /* px-0.5 */
    }

    .tag-text {
      font-size: 0.6rem; /* text-xs */
    }
  }

  /* Responsive tags-container */
  @media (max-width: 768px) {
    .tags-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .tags-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
