# ballet-pilates

A modern, full-stack React application built with TanStack Start and deployed on Vercel.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm serve
```

## Development Workflow

- **`pnpm dev`** - Start development server on port 3000
- **`pnpm build`** - Build the application for production
- **`pnpm serve`** - Preview production build locally
- **`pnpm codegen`** - Regenerate GraphQL types from Hygraph schema

## Deployment

This project deploys to Vercel. The build command (`pnpm build`) outputs to `.vercel/output/` using the Vercel Build Output API format, which Vercel detects automatically.

### Environment Variables

Set the following in the Vercel dashboard for each environment (Production, Preview, Development):

| Variable | Description |
|---|---|
| `VITE_CMS_API` | Hygraph GraphQL endpoint |
| `VITE_TOKEN` | Hygraph authentication token |
| `VITE_TITLE_PREFIX` | Optional title prefix (e.g. for staging) |

## Styling & Components

### Tailwind CSS v4
Pre-configured with the `@tailwindcss/vite` plugin and CSS variables for theming.

### Shadcn/UI Components
Add accessible components using Shadcn/UI:

```bash
pnpx shadcn@latest add button
pnpx shadcn@latest add card
```

## File-Based Routing

Uses [TanStack Router](https://tanstack.com/router/latest) with file-based routing. Routes are automatically generated from files in `src/routes/`.

### Adding a Route

Add a new file in `./src/routes/` — TanStack will automatically generate the route boilerplate.

### Adding Links

```tsx
import { Link } from "@tanstack/react-router";

<Link to="/about">About</Link>
```

### Layout

The root layout lives in `src/routes/__root.tsx`. Add shared UI there and use `<Outlet />` where child routes should render.

## Data Fetching

### GraphQL / Hygraph

Define queries with the `graphql()` tag and fetch with the `CMSRequest` utility:

```typescript
import { graphql } from "@/gql/gql";
import { CMSRequest } from "@/utils/cms-request";

const myQuery = graphql(`
  query MyQuery {
    ...
  }
`);

const data = await CMSRequest<MyQuery>(myQuery);
```

After modifying queries, regenerate types:

```bash
pnpm codegen
```

### TanStack Query

```tsx
const { data } = useSuspenseQuery({
  queryKey: ["hygraph", "my-key"],
  queryFn: () => CMSRequest<MyQuery>(myQueryDocument),
});
```

## Testing

Uses [Vitest](https://vitest.dev/) with jsdom and `@testing-library/react`:

```bash
pnpm test
```

## Tech Stack

### Core Framework
- **TanStack Start** - Full-stack React framework with SSR
- **React 19** - Latest React with concurrent features
- **TypeScript** - Strict type checking

### Routing & Data
- **TanStack Router** - Type-safe, file-based routing
- **TanStack Query** - Server state management with SSR integration
- **Hygraph** - Headless CMS (GraphQL)

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS with CSS variables
- **Shadcn/UI** - Accessible component library
- **DaisyUI** - Tailwind component classes
- **Lucide React** - Icon set

### Build & Deployment
- **Vite** - Build tool and dev server
- **Nitro** - Server engine (`@tanstack/nitro-v2-vite-plugin`)
- **Vercel** - Hosting and preview deployments

## Learn More

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Vercel](https://vercel.com/docs)
- [Hygraph](https://hygraph.com/docs)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
