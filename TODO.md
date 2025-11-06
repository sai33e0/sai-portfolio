# Deployment to Vercel TODO

- [x] Update next.config.js: Remove 'output: export', 'trailingSlash: true', 'images: unoptimized', and adjust images config for Vercel
- [x] Update app/layout.tsx: Change metadataBase and related URLs to 'https://sai-portfolio.vercel.app'
- [ ] Update app/robots.ts: Change sitemap URL to 'https://sai-portfolio.vercel.app/sitemap.xml'
- [ ] Update package.json: Remove 'deploy' and 'deploy:force' scripts
- [ ] Remove leftover files: Delete DEPLOYMENT_FIXES.md, DEPLOYMENT_STATUS.md, DEPLOYMENT.md, GITHUB_PAGES_FIX.md
- [ ] Followup: Run 'npm run build' to verify no errors
- [ ] Followup: Deploy to Vercel via CLI or dashboard
