---
description: How to deploy the Next.js portfolio to Netlify
---

# Deploying to Netlify

You can deploy your Next.js application to Netlify using **Git Integration** (Recommended) or **Drag & Drop**.

## Method 1: Git Integration (Recommended)
This method automatically redeploys your site whenever you push changes to GitHub.

1.  **Push your code to GitHub**:
    Ensure your latest code is pushed to your GitHub repository (`dixitayush/Portfolio-next`).

2.  **Log in to Netlify**:
    Go to [app.netlify.com](https://app.netlify.com) and log in.

3.  **Add New Site**:
    - Click **"Add new site"** > **"Import from an existing project"**.
    - Select **GitHub**.
    - Authorize Netlify to access your GitHub account.
    - Search for and select your repository: `Portfolio-next`.

4.  **Configure Build Settings**:
    Netlify should automatically detect Next.js. Verify these settings:
    - **Build Command**: `npm run build`
    - **Publish Directory**: `.next` (Netlify handles this automatically, usually it's left blank or defaults correctly).
    - **Runtime**: Netlify will automatically install the Next.js Runtime.

5.  **Deploy**:
    Click **"Deploy Portfolio-next"**.

## Method 2: Drag & Drop (Manual)
Use this if you cannot push to GitHub.

1.  **Build Locally**:
    Run the build command in your terminal:
    ```powershell
    npm run build
    ```
    *Note: For a static export (HTML/CSS/JS only), you would need `output: 'export'` in `next.config.ts`, but for a standard Next.js app, Netlify prefers the Git method to support SSR/API routes.*

    **If you want to do a static export (no SSR/API routes):**
    1.  Add `output: 'export'` to `next.config.ts`.
    2.  Run `npm run build`.
    3.  This creates an `out` folder.
    4.  Drag and drop the `out` folder to the "Sites" tab in Netlify.

## Environment Variables
If you use any environment variables (like API keys), remember to add them in **Site Settings > Environment variables** on Netlify.
