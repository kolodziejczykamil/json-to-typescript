# JSON → TypeScript Generator

Convert JSON to TypeScript types instantly.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint (strict)
- Prettier
- Husky
- lint-staged
- commitlint

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run typecheck

# Format code
npm run format
```

## Project Structure

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
  lib/
  styles/
  types/
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/).

Examples:

- `feat: add JSON input validation`
- `fix: resolve type generation bug`
- `chore: update dependencies`
