# React Quiz App

A simple quiz application built with React and Vite.

## Project Overview

This application allows users to take quizzes on various topics. It features:
- Multiple choice questions
- Score tracking
- Navigation between questions
- (Add any other key features here)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm (comes with Node.js)

### Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Quiz-App # Or your project's root directory name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`. The application will automatically reload if you change any of the source files.

4.  **Build for production:**
    To create a production build, run:
    ```bash
    npm run build
    ```
    The production-ready static files will be placed in the `dist/` directory.

5.  **Preview production build locally:**
    After building, you can preview the production build using:
    ```bash
    npm run preview
    ```
    This will serve the contents of the `dist` folder, typically at `http://localhost:4173`.

## Linting

To check the code for linting issues, run:
```bash
npm run lint
```

## Deployment

### Deploying to Render

This project is configured for easy deployment to [Render](https://render.com/) as a Static Site.

1.  **Push your code to a GitHub/GitLab repository.**

2.  **Create a new Static Site service on Render:**
    *   Connect your Git repository.
    *   Render should automatically detect the settings from the `render.yaml` file in your repository.
    *   **Build Command**: `npm install && npm run build` (This should be pre-filled from `render.yaml`)
    *   **Publish Directory**: `dist` (This should be pre-filled from `render.yaml`)

3.  **Deploy!** Render will build and deploy your application.

The `render.yaml` file included in this repository configures the deployment:
```yaml
services:
  - type: static_site
    name: react-quiz-app # You can change this name in Render's UI or here
    env: node # Build environment
    buildCommand: npm install && npm run build
    staticPublishPath: dist # Output directory
    routes:
      - type: rewrite # Important for SPAs
        source: /*
        destination: /index.html
```

### Environment Variables

For this specific static site deployment, no special environment variables are typically required for the build or runtime *unless* your application specifically uses them (e.g., `VITE_API_URL` if you're fetching data from an API).

If your application *does* require environment variables starting with `VITE_` to be available during the build process (e.g., for an API endpoint), you can set them in the Render dashboard under the "Environment" section for your service. Render will make these available during the `npm run build` step.

---

This README provides a good starting point. You might want to add more details about the quiz app's specific features or any other relevant information.
