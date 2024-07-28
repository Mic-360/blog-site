<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status === 404 ? 'Page Not Found' : 'Error'}</title>
  <meta name="description" content={$page.error?.message} />
</svelte:head>

<section class="error-section">
  <h1>{$page.status}</h1>
  <h1>{$page.status !== 404 ? 'Page Not Found' : 'An Error Occurred'}</h1>
  <p>{$page.error?.message}</p>
  {#if $page.status !== 404}
    <a href="/">Go back to the homepage</a>
  {/if}
</section>

<style>
  .error-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  a {
    font-size: 1rem;
    color: var(--primary-color);
    text-decoration: underline;
    text-underline-offset: 0.25rem;
    border: 1px solid var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition:
      background-color 0.3s,
      color 0.3s;
  }
  a:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
</style>
