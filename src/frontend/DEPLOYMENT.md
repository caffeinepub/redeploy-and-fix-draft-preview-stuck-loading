# Frontend Deployment Guide

## Quick Redeploy Checklist

This guide covers the essential steps to redeploy the frontend after making changes.

### Prerequisites
- Node.js and pnpm installed
- DFX (Internet Computer SDK) installed
- Backend canister deployed

### Build & Deploy Steps

1. **Clean Install Dependencies**
   ```bash
   cd frontend
   pnpm install
   ```

2. **Generate Backend Bindings**
   ```bash
   dfx generate backend
   ```
   This creates the TypeScript interfaces for the backend canister.

3. **Build Frontend**
   ```bash
   pnpm build:skip-bindings
   ```
   This compiles the React app and copies environment configuration.

4. **Deploy to Internet Computer**
   ```bash
   dfx deploy frontend
   ```

### Verification Checklist

After deployment, verify the following in the preview:

- [ ] Portfolio page loads without indefinite loading spinner
- [ ] **About section** renders with profile image and summary
- [ ] **Experience section** displays all 4 work positions
- [ ] **Projects section** shows all 5 personal projects
- [ ] **Contact section** displays form and social links
- [ ] Navigation menu works and highlights active sections
- [ ] Dark/light theme toggle functions correctly
- [ ] Contact form submission works (check browser console for errors)

### Troubleshooting

**Issue: Preview stuck on loading spinner**
- Check browser console for errors
- Verify backend canister is running: `dfx canister status backend`
- Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Redeploy both backend and frontend

**Issue: "Actor not initialized" error**
- Ensure backend bindings are generated: `dfx generate backend`
- Check that `frontend/src/backend.d.ts` exists
- Verify canister IDs in `frontend/env.json`

**Issue: Portfolio content not displaying**
- Check that DataInitializer successfully seeded data
- Open browser DevTools → Network tab → filter by "query"
- Verify `getPortfolioContent` call returns data

### Development Mode

For local development with hot reload:
