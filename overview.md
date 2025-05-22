# Project Overview: sophie

## Introduction

`sophie` is a personal assistant application. The goal of this project is to develop a helpful and interactive assistant that can be integrated into a web page.

## Key Technologies

The project utilizes the following technologies:

*   **Frontend:** React is used to build the user interface components, including the main component for displaying Sophie.
*   **Backend (Planned):** A Node.js backend is planned for handling more complex operations and data persistence (e.g., using SQLite, Turso, or Cloudflare).
*   **Testing:** GitHub Actions are configured for automated testing of the React components.
*   **Deployment (Planned):** The project aims to be deployed, with considerations for platforms like GitHub Pages, Netlify, Vercel, or a Digital Ocean droplet.

## Project Structure

The repository is organized as follows:

*   `.github/`: Contains GitHub Actions workflows for CI/CD and issue templates.
*   `agents/`: Includes Markdown files related to agent design, such as `ProjectManagerAgent.md`.
*   `docs/`: Contains project documentation, including design documents, requirements, and plans, built using Sphinx.
*   `public/`: Stores static assets and the output of the documentation build.
*   `src/`: Contains the source code for the React frontend components (e.g., `SophieAgent.jsx`, `Card.jsx`) and their tests.
*   `server.js`: A placeholder or initial setup for the Node.js backend.
*   Configuration files (e.g., `package.json`, `webpack.config.js`, `pyproject.toml`) manage dependencies and build processes for both JavaScript and Python parts of the project.

## Development Status

The project is currently under active development. Key frontend components have been created, and CI/CD pipelines are set up for testing. Documentation is a significant part of the project, with many planning and design documents already in place.

Future development will focus on building out the backend, implementing data storage, and deploying the application.
