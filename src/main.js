import './app.postcss';
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
import '@skeletonlabs/skeleton/styles/skeleton.css';
import App from './App.svelte';

const app = new App({
  target: document.body
});

export default app;
