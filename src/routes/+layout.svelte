<script lang="ts">
  import '../app.css';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
  import { Ripple } from '../components';
  import { Header, Footer, Animate } from '../components';
  export const structuredData = JSON.stringify(data.structuredData);
</script>

<svelte:head>
  <script type="application/ld+json">
{structuredData}
  </script>
</svelte:head>

<div class="layout">
  <Header />
  <main>
    <Animate url={data.url}>
      <slot />
      <Ripple />
    </Animate>
  </main>
  <Footer />
</div>

<style>
  .layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: var(--background);
    border-radius: 0.5rem;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    main {
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {
    main {
      padding: 0.5rem;
    }
  }
</style>
