# Specification

## Summary
**Goal:** Fix the draft preview getting stuck on loading by removing split React Query caches and improving error handling, then redeploy.

**Planned changes:**
- Remove the nested `QueryClientProvider`/`QueryClient` from `frontend/src/App.tsx` so the app uses the single shared provider in `frontend/src/main.tsx`.
- Update the portfolio page loading UX to show an explicit error message and a retry control when `usePortfolioContent` / `getPortfolioContent()` fails (spinner only during active loading).
- Create a fresh build and redeploy so the preview reliably loads and renders the portfolio sections.

**User-visible outcome:** Opening the deployed preview loads the portfolio page and renders About, Experience, Projects, and Contact without an indefinite loading spinner; if loading fails, users see an error message with a retry option.
