---
title: Blog Site Template
description: Welcome to the Blog Site! This project is built using SvelteKit and aims to provide a platform for sharing blogs on various topics. Below you will find information on how to use the site, as well as guidelines for contributing to the project.
date: '2024-7-27'
tags:
  - sveltekit
  - svelte
  - typescript
  - mdsvex
  - markdown-plugins
  - vite
published: true
thumbnail: /banner.png
---

![banner](/banner.png)

<br/>

<div align="center">

![Vercel](https://vercelbadge.vercel.app/api/Mic-360/blog-site)

  <div>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs" />
    <img src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00" alt="svelte" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel" />
  </div>

</div>

<br />

# Blog Site

Welcome to the Blog Site! This project is built using SvelteKit and aims to provide a platform for sharing blogs on various topics. Below you will find information on how to use the site, as well as guidelines for contributing to the project.

## Table of Contents

## Usage

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/) (version 9 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mic-360/blog-site.git
   cd blog-site
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

This will start the server at `http://localhost:5173`. You can now open your browser and navigate to this URL to see the blog site in action.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will create an optimized build of the project in the `build` directory.

### Previewing the Production Build

To preview the production build, run:

```bash
npm run preview
```

This will start a local server to serve the production build at `http://localhost:5174`.

## Development

### Project Structure

- `src/routes`: Contains the Svelte components for the different routes of the site.
- `src/lib`: Contains utility functions and reusable components.
- `static`: Contains static assets like images and icons.
- `mdsvex.config.js`: Configuration for the mdsvex preprocessor.
- `svelte.config.js`: Configuration for SvelteKit.
- `vite.config.ts`: Configuration for Vite.

### Adding a New Blog Post

1. Create a new Markdown file in the `src/articles` directory.
2. Add the necessary frontmatter at the top of the file:

   ```markdown
   ---
   title: 'Your Blog Title'
   description: 'A brief description of your blog post.'
   date: 'YYYY-MM-DD'
   tags: ['tag1', 'tag2']
   published: true
   thumbnail: '/path/to/thumbnail.jpg'
   ---
   ```

3. Write your blog content below the frontmatter.

4. Save the file and navigate to the development server to see your new blog post.

## Contribution Guidelines

We welcome contributions from the community! To contribute, please follow these guidelines:

### Reporting Issues

If you encounter any issues or bugs, please report them by creating a new issue in the [GitHub Issues](https://github.com/Mic-360/blog-site/issues) section.

### Submitting Pull Requests

1. Fork the repository.
2. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them with a clear and concise message:

   ```bash
   git commit -m "Add feature: your feature description"
   ```

4. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request in the main repository, describing your changes and referencing any related issues.

### Code Style

Please follow the existing code style and conventions used in the project. Ensure your code is well-documented and includes comments where necessary.

### Testing

Before submitting a pull request, make sure to test your changes thoroughly. If applicable, add new tests to cover your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for more details.

---

Thank you for contributing to the Blog Site! If you have any questions or need further assistance, feel free to reach out. Happy coding!
