# AGENTS.md

This file provides guidance to agentic coding assistants working in this TanStack Start codebase.

## Development Workflow

1. Make a feature branch
2. Do the work and verify the work with the dev server
3. Push the branch to `origin` (github)

### Other useful notes

- you can assume that `pnpm dev` will be running already

## Development Commands

### Core Commands

- `pnpm dev` - Start development server on port 3000
- `pnpm build` - Build for production (runs build.sh script)
- `pnpm v:build` - Direct Vite build command
- `pnpm serve` - Preview production build locally
- `pnpm deploy` - Deploy to staging environment
- `pnpm deploy:prod` - Deploy to production
- `pnpm cf-typegen` - Generate Cloudflare environment types

### Code Generation

- `pnpm codegen` - Generate GraphQL types and queries using graphql-codegen
- Uses codegen.ts configuration for Hygraph CMS integration

### Testing

- Uses Vitest for testing (configured in vite.config.ts)
- No explicit test script in package.json - check vite.config.ts for test setup
- Testing libraries: @testing-library/react, jsdom, vitest

## Architecture Overview

### Core Stack

- **TanStack Start**: Full-stack React framework with file-based routing
- **TanStack Router**: Type-safe routing with SSR integration
- **TanStack Query**: Server state management
- **React 19**: Latest React with concurrent features
- **TypeScript**: Strict mode enabled
- **Vite**: Build tool and dev server
- **Tailwind CSS v4**: Utility-first styling
- **Cloudflare Workers**: Edge deployment platform

### Project Structure

- `src/routes/` - File-based routes (auto-generates routeTree.gen.ts)
- `src/components/` - Reusable React components
- `src/components/ui/` - Shadcn UI components
- `src/integrations/tanstack-query/` - Query client setup
- `src/lib/utils.ts` - Utility functions (clsx/tailwind-merge)
- `src/utils/` - App-specific utilities (SEO, CMS requests, logging)
- `src/gql/` - Generated GraphQL types and queries
- `@/*` alias maps to `src/*`

## Code Style Guidelines

### Import Organization

```typescript
// External libraries first
import React from "react";
import { Link } from "@tanstack/react-router";

// Internal imports with @/* alias
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CMSRequest } from "@/utils/cms-request";
```

### Component Patterns

- Use functional components with TypeScript interfaces
- Leverage class-variance-authority (CVA) for component variants
- Follow Shadcn UI patterns for new components
- Use `cn()` utility for conditional Tailwind classes

### GraphQL Integration

- Define queries using `graphql()` tagged template from `@/gql/gql`
- Use `CMSRequest<T>()` utility for type-safe GraphQL requests
- Run `pnpm codegen` after modifying queries to regenerate types
- Hygraph CMS as backend (schema in graphql.schema.json)

### TanStack Query Patterns

```typescript
// Route components use useSuspenseQuery for SSR
const { data } = useSuspenseQuery({
  queryKey: ["hygraph", "home"],
  queryFn: () => CMSRequest<HomePageQuery>(homePageQueryDocument),
});

// Client-side mutations use useMutation
const mutation = useMutation({
  mutationFn: exampleFunction,
  onSuccess: (data) => console.log("Success:", data),
});
```

### TypeScript Configuration

- Strict mode enabled
- Path aliases: `@/*` → `src/*`
- No unused locals/parameters allowed
- ES2022 target with DOM libraries

### Styling Guidelines

- Use Tailwind CSS v4 with CSS variables
- DaisyUI classes for component styling (btn, card, etc.)
- Semantic color tokens (primary, secondary, accent)
- Responsive design with mobile-first approach
- Use `font-serif` for body text (per root layout)

### Error Handling

- Implement error boundaries in routes
- Use DefaultCatchBoundary component
- GraphQL errors handled by CMSRequest utility

### File Naming

- Components: PascalCase (e.g., HomeCarousel.tsx)
- Utilities: camelCase (e.g., cms-request.ts)
- Routes: File-based with TanStack conventions
- Types: Generated automatically for GraphQL

### Development Patterns

- Server functions for secure operations
- Middleware chains for auth/logging/validation
- Environment variables via import.meta.env
- Cloudflare Workers deployment with Wrangler

### SEO & Meta

- Use seo utility from @/utils/seo for meta tags
- Include proper meta descriptions and titles
- Add structured data where relevant
- Use semantic HTML5 elements

### Performance Considerations

- Leverage TanStack Query caching
- Use React 19 concurrent features
- Optimize images with proper sizing
- Implement code splitting where beneficial
- Edge caching via Cloudflare

## Special Notes

### Shadcn Components

- Add new components: `pnpx shadcn@latest add <component>`
- Configured with "new-york" style, Zinc base color
- CSS variables enabled for theming
- Icons: Lucide React

### GraphQL Workflow

1. Modify/add queries in components
2. Run `pnpm codegen` to regenerate types
3. Use generated types for type safety
4. CMSRequest utility handles authentication

### Environment Variables

- VITE_CMS_API: Hygraph GraphQL endpoint
- VITE_TOKEN: Hygraph authentication token
- VITE_TITLE_PREFIX: Optional title prefix for environments

### Cloudflare Integration

- Custom server entry at `src/server.ts`
- Type generation with `pnpm cf-typegen`
- Deploy via Wrangler with staging/production environments

