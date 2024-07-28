<script lang="ts">
  import { title, description, author, url, avatar } from '$lib/config';
  import type { PageData } from './$types';
  import { ArrowUpRight } from 'lucide-svelte';
  import { formatDate } from '$lib/utils';
  import { Pulse } from '../components';
  export let data: PageData;
  export let searchTerm = '';
  export let currentPage = 1;
  export const itemsPerPage = 5;

  $: filteredBlogs = data.blogs.filter((blog) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      blog.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm))
    );
  });

  $: paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function nextPage() {
    if (currentPage * itemsPerPage < filteredBlogs.length) {
      currentPage += 1;
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage -= 1;
    }
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content="svelte, sveltekit, blog, web development" />
  <meta name="author" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={avatar} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={avatar} />
</svelte:head>

<section class="blogs-section">
  <input
    type="text"
    placeholder="Search blogs..."
    bind:value={searchTerm}
    class="search-bar"
  />
  {#each paginatedBlogs as blog}
    <article class="blog-article">
      <div class="blog-content">
        <img src={blog.thumbnail} alt={blog.tags[0]} class="blog-thumbnail" />
        <div class="blog-details">
          <div class="blog-text">
            <h1 class="blog-title">
              {blog.title}
            </h1>
            <p class="blog-description">
              {blog.description}
            </p>
          </div>
          <a href={blog.slug} class="read-more-link">
            <span class="read-more-text">Read more ...</span>
            <Pulse>
              <span class="read-more-icon">
                <ArrowUpRight />
              </span>
            </Pulse>
          </a>
          <div class="author-info">
            <img class="author-avatar" src={avatar} alt={author} />
            <div class="author-details">
              <p class="author-name">{author}</p>
              <p class="author-date">{formatDate(blog.date)}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  {/each}
  <div class="pagination">
    <button on:click={prevPage} disabled={currentPage === 1}>Previous</button>
    <button
      on:click={nextPage}
      disabled={currentPage * itemsPerPage >= filteredBlogs.length}>Next</button
    >
  </div>
  <div class="gradient-bottom"></div>
</section>

<style>
  .search-bar {
    margin-bottom: 1rem;
    border: 0.1rem solid #4b5563;
    padding: 0.5rem;
    width: 30%;
    border-radius: 2rem;
    background-color: rgba(24, 24, 27, 0.3);
    color: white;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.4),
      0 6px 20px rgba(0, 0, 0, 0.01);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .pagination {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    gap: 1rem;
  }

  .pagination button {
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: white;
    border: 0.1rem solid #4b5563;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.4),
      0 6px 20px rgba(0, 0, 0, 0.01);
  }

  .blogs-section {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 2.5rem;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .blogs-section::-webkit-scrollbar {
    display: none;
  }

  .blog-article {
    width: 75%;
    max-width: 100%;
    border-radius: 0.75rem;
  }

  .blog-content {
    background: linear-gradient(
      to left,
      rgba(24, 24, 27, 0.7),
      rgba(24, 24, 27, 0.1)
    );
    border-radius: 0.75rem;
    display: flex;
    gap: 1rem;
    padding: 1rem;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.4),
      0 6px 20px rgba(0, 0, 0, 0.01);
    transform: translateZ(0);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .blog-content:hover {
    transform: translateY(-10px);
    box-shadow:
      0 8px 16px rgba(0, 0, 0, 0.2),
      0 12px 40px rgba(0, 0, 0, 0.2);
  }

  .blog-thumbnail {
    height: auto;
    width: 50%;
    border-radius: 0.75rem;
  }

  .blog-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.5;
    text-align: left;
  }

  .blog-text {
    margin-bottom: 2rem;
  }

  .blog-title {
    text-align: start;
    color: white;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .blog-description {
    text-align: start;
    color: #e5e7eb;
    font-size: 1rem;
  }

  .read-more-link {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .read-more-text {
    padding: 0.1rem 1rem;
    border-radius: 9999px;
    background-color: white;
    color: #4b5563;
    border: 1px solid #e5e7eb;
  }

  .read-more-icon {
    display: flex;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 9999px;
    padding: 0.25rem;
    background-color: white;
    color: #4b5563;
    border: 1px solid #e5e7eb;
  }

  .author-info {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
  }

  .author-avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    margin-right: 1rem;
  }

  .author-details {
    font-size: 0.875rem;
  }

  .author-name {
    color: white;
    line-height: 1;
  }

  .author-date {
    color: #6b7280;
  }

  .gradient-bottom {
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 33.3333%;
    background: linear-gradient(to top, rgba(24, 24, 27, 0.7));
  }

  /* Media Queries for responsiveness */
  @media (max-width: 1024px) {
    .blog-article {
      width: 90%;
    }

    .blog-content {
      flex-direction: column;
      align-items: center;
    }

    .blog-thumbnail {
      width: 100%;
    }

    .blog-details {
      width: 100%;
      align-items: center;
      text-align: center;
    }

    .read-more-link {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .search-bar {
      width: 50%;
    }

    .blog-details {
      align-items: flex-start;
    }

    .blog-title {
      font-size: 1.5rem;
    }

    .blog-description {
      font-size: 0.875rem;
    }

    .read-more-text {
      font-size: 0.875rem;
    }

    .read-more-icon {
      height: 1.25rem;
      width: 1.25rem;
    }

    .author-avatar {
      width: 2rem;
      height: 2rem;
    }

    .author-details {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .search-bar {
      width: 75%;
    }

    .blog-details {
      align-items: flex-start;
    }

    .blogs-section {
      padding: 1rem;
    }

    .blog-title {
      font-size: 1.25rem;
    }

    .blog-description {
      font-size: 0.75rem;
    }

    .read-more-text {
      font-size: 0.75rem;
    }

    .read-more-icon {
      height: 1rem;
      width: 1rem;
    }

    .author-avatar {
      width: 1.5rem;
      height: 1.5rem;
    }

    .author-details {
      font-size: 0.625rem;
    }
  }
</style>
