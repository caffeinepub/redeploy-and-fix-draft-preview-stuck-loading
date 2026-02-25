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
- [ ] **Skills section** displays soft and hard skills
- [ ] **Experience section** displays all work positions
- [ ] **Projects section** shows all personal projects
- [ ] **Portfolio section** displays portfolio links
- [ ] **Contact section** displays form and social links
- [ ] Navigation menu works and highlights active sections
- [ ] Dark/light theme toggle functions correctly
- [ ] Contact form submission works (check browser console for errors)

### Custom Domain Setup (VikalpGameDesign.com)

To connect your custom domain **VikalpGameDesign.com** to your deployed Internet Computer frontend canister:

#### Step 1: Get Your Canister Domain

After deploying your frontend, note the canister URL from the deployment output. It will look like:

