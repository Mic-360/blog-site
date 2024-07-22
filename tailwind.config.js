/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'var(--font- sans)',
				mono: 'var(--font-mono)'
			},
			animation: {
				ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite'
			},
			keyframes: {
				ripple: {
					'0%, 100%': {
						transform: 'translate(-50%, -50%) scale(1)'
					},
					'50%': {
						transform: 'translate(-50%, -50%) scale(0.9)'
					}
				}
			}
		}
	},
	plugins: ['@tailwindcss/typography']
};
