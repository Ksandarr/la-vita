# La Vita e Bella App - GitHub Pages Deployment Guide

This guide explains how to deploy your La Vita e Bella React application to GitHub Pages using GitHub Actions.

## Prerequisites

1. Your code must be in a GitHub repository named "la-vita"
2. GitHub Pages must be enabled for your repository

## Setup Instructions

### 1. Push Your Code to GitHub (if not done already)

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - La Vita e Bella luxury villa rental app"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR-USERNAME/la-vita.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your **la-vita** repository on GitHub.com
2. Click the **"Settings"** tab (in the top menu of your repository)
3. Scroll down in the left sidebar and click **"Pages"**
4. Under **"Source"**, select **"GitHub Actions"** (NOT "Deploy from a branch")

```
Repository Settings → Pages → Source: GitHub Actions ✓
```

### 3. Trigger Deployment

The deployment will trigger automatically when you:
- Push commits to the `main` branch
- Manually trigger it from the Actions tab

**To manually trigger:**
1. Go to the **"Actions"** tab in your repository
2. Click **"Deploy La Vita e Bella to GitHub Pages"** workflow
3. Click **"Run workflow"** → **"Run workflow"**

### 4. Access Your Deployed Site

Once deployment completes successfully, your site will be available at:

```
https://YOUR-USERNAME.github.io/la-vita/
```

## Configuration Details

### Vite Configuration
The `vite.config.js` is configured for GitHub Pages deployment:

```javascript
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/la-vita/' : '/',
})
```

### Workflow Overview
The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. ✅ Check out your code
2. ✅ Setup Node.js 18 with npm caching
3. ✅ Install dependencies (`npm ci`)
4. ✅ Build the React app (`npm run build`)
5. ✅ Deploy to GitHub Pages

## File Structure

```
la-vita/                           # Your repository root
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions workflow
├── src/                           # React source code
├── public/                        # Static assets
├── dist/                          # Build output (created by Vite)
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Build configuration (updated for GitHub Pages)
└── DEPLOYMENT.md                  # This file
```

## Troubleshooting

### Build Fails
- Check the Actions tab for error details
- Test locally: `npm run build`
- Common issues: linting errors, missing dependencies

### 404 Errors
- Ensure the repository name is exactly "la-vita"
- Check that GitHub Pages is set to "GitHub Actions" source
- Wait a few minutes after deployment for Pages to update

### Changes Not Reflecting
- Clear browser cache
- Check if the GitHub Action completed successfully
- GitHub Pages can take 5-10 minutes to propagate changes

## Development

To run locally:
```bash
npm install
npm run dev
```
Development server: `http://localhost:5173`

To test production build locally:
```bash
npm run build
npm run preview
```

## Next Steps

1. ✅ Vite config updated for `/la-vita/` base path
2. ✅ GitHub Actions workflow ready
3. 🔄 Push to GitHub and enable Pages
4. 🚀 Your luxury villa rental site will be live!

Your La Vita e Bella app is now ready for seamless GitHub Pages deployment! 🏖️✨