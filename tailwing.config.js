import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
  theme: {
    extend: {},
  },
  plugins: [skeleton],
};
