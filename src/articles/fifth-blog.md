---
title: Fifth post
description: Fifth post.
date: '2023-4-18'
tags:
  - sveltekit
  - svelte
published: true
thumbnail: https://media.licdn.com/dms/image/D4D0BAQGLG9fD9CKeuA/company-logo_200_200/0/1686144597460/twinversetech_logo?e=1729728000&v=beta&t=VllpZqAxl_sxCySQHgzlu-TBI4EceRfhAJgIWuV_ohs
---

## markdown

Hey friends



```ts title="Say hello to Shiki highlighting"

import './markdown.css';
import type { PageData } from './$types';
import { author } from '$lib/config';
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
		'#ff9800' // Orange
	];

	return colors[Math.floor(Math.random() * colors.length)];
}
```
