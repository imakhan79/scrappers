# Scraperrs — website

Marketing site for **Scraperrs**. Vite + React + TypeScript + Tailwind CSS v4.
Contact-form enquiries are stored in Supabase (`public.leads`).

## Run locally

```bash
npm install
cp .env.example .env   # then fill in the values
npm run dev
```

## Environment

| Variable | Used by |
| --- | --- |
| `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` | Browser — contact form |
| `DATABASE_URL` | Server-side tooling / migrations only — never expose to the browser |

## Database

Run `supabase/migrations/20260929000000_create_leads.sql` once (Supabase SQL editor, or `psql "$DATABASE_URL" -f …`).
It creates `public.leads` with row-level security: the public can insert enquiries but cannot read them.
View submissions in the Supabase dashboard → Table editor → `leads`.

## Brand

The brand name is written **Scraperrs** everywhere. `src/components/Logo.tsx` is a placeholder wordmark — replace it with the official logo.
