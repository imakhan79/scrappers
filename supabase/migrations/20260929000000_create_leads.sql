-- Contact-form enquiries from the Scraperrs website.
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 200),
  email       text not null check (char_length(email) between 3 and 320 and email like '%_@_%._%'),
  company     text check (char_length(company) <= 200),
  service     text check (char_length(service) <= 200),
  message     text not null check (char_length(message) between 10 and 5000)
);

alter table public.leads enable row level security;

-- Visitors (anon key) may submit a lead but can never read, change or delete leads.
drop policy if exists "Anyone can submit a lead" on public.leads;
create policy "Anyone can submit a lead"
  on public.leads for insert
  to anon, authenticated
  with check (true);

grant insert on public.leads to anon, authenticated;
