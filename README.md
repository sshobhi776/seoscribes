# OptiFlow Landing Page

Marketing website for OptiFlow - deployed to `example.com`

## Setup

```bash
npm install
npm run dev
```

Runs on port 3001 by default to avoid conflicts with the main app.

## Environment Variables

Create a `.env.local` file:

```bash
# URL of the app subdomain (for CTAs like "Get Started", "Login")
NEXT_PUBLIC_APP_URL=https://app.example.com
```

## Deployment (Vercel)

1. Create a new Vercel project for this folder
2. Add the domain `example.com`
3. Set environment variable `NEXT_PUBLIC_APP_URL=https://app.example.com`

## Pages

- `/` - Landing page with hero, features, pricing
- `/about` - About page
- `/contact` - Contact page
- `/privacy` - Privacy policy
- `/terms` - Terms of service

All CTAs (Get Started, Login, Register) link to `app.example.com`.
