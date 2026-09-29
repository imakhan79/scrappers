import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, Check, CircleAlert, LoaderCircle } from 'lucide-react'
import { BRAND, services } from '../content'

type Fields = { name: string; email: string; company: string; service: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY: Fields = { name: '', email: '', company: '', service: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.name.trim()) e.name = 'Enter your name so we know who to reply to.'
  if (!f.email.trim()) e.email = 'Enter your email address.'
  else if (!EMAIL_RE.test(f.email.trim())) e.email = 'Enter an email address like name@company.com.'
  if (f.message.trim().length < 10) e.message = 'Tell us a little about your project (at least 10 characters).'
  return e
}

const LABELS: Record<keyof Fields, string> = {
  name: 'Name',
  email: 'Work email',
  company: 'Company',
  service: 'What do you need?',
  message: 'Project details',
}

export function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [showSummary, setShowSummary] = useState(false)
  const summaryRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const honeypot = useRef<HTMLInputElement>(null)

  const set = (k: keyof Fields) => (v: string) => {
    const next = { ...fields, [k]: v }
    setFields(next)
    // Once a field has been judged, keep its error in sync as the user fixes it.
    if (touched[k]) setErrors((prev) => ({ ...prev, [k]: validate(next)[k] }))
  }
  const blur = (k: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [k]: true }))
    setErrors((prev) => ({ ...prev, [k]: validate(fields)[k] }))
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    setTouched({ name: true, email: true, message: true })
    const hasErrors = Object.keys(found).some((k) => found[k as keyof Fields])
    setShowSummary(hasErrors)
    if (hasErrors) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    if (honeypot.current?.value) {
      setStatus('success') // silently drop bots
      return
    }

    setStatus('submitting')
    try {
      // Loaded on demand so the Supabase SDK stays out of the initial bundle.
      const { supabase } = await import('../lib/supabase')
      if (!supabase) throw new Error('Supabase is not configured')
      const { error } = await supabase.from('leads').insert({
        name: fields.name.trim(),
        email: fields.email.trim(),
        company: fields.company.trim() || null,
        service: fields.service || null,
        message: fields.message.trim(),
      })
      if (error) throw error
      setStatus('success')
      setFields(EMPTY)
      setTouched({})
      requestAnimationFrame(() => successRef.current?.focus())
    } catch (err) {
      console.error('[contact] submit failed', err)
      setStatus('error')
    }
  }

  const errorList = (Object.keys(errors) as (keyof Fields)[]).filter((k) => errors[k])

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-fg-inverse sm:py-32" aria-labelledby="contact-title">
      <div className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_20%_30%,black,transparent_70%)]" />
      <div className="pointer-events-none absolute top-10 -left-40 size-[34rem] rounded-full bg-brand/10 blur-[120px]" aria-hidden="true" />

      <div className="container-x relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="tabular-nums">05</span>
            <span className="pixel-glyph" aria-hidden="true" />
            Start a project
          </p>
          <h2 id="contact-title" className="mt-5 text-h2">
            Let’s build <span className="text-brand">without limits.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-fg-inverse-muted">
            Tell us where you are and where you want to go. The {BRAND} team will come back to you with next steps.
          </p>
          <ul className="mt-10 space-y-4">
            {['One point of contact from day one', 'Solutions tailored to your goals', 'Continuous support, 24/7'].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-xs bg-brand/15 text-brand">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg bg-paper p-6 text-fg shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)] sm:p-10">
          {status === 'success' ? (
            <div ref={successRef} tabIndex={-1} role="status" className="flex min-h-[26rem] flex-col items-start justify-center outline-none">
              <span className="grid size-14 place-items-center rounded-md bg-brand text-ink">
                <Check className="size-7" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-3xl font-bold">Thanks — message received.</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-fg-muted">
                We’ll review your project and reply to you by email shortly.
              </p>
              <button type="button" onClick={() => setStatus('idle')} className="btn-ink mt-8">
                Send another message
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} aria-describedby="form-note" className="relative">
              {showSummary && errorList.length > 0 && (
                <div
                  ref={summaryRef}
                  tabIndex={-1}
                  role="alert"
                  className="mb-8 rounded-md border border-red-700/30 bg-red-50 p-4 text-sm text-red-800 outline-none focus-visible:ring-2 focus-visible:ring-red-700"
                >
                  <p className="flex items-center gap-2 font-semibold">
                    <CircleAlert className="size-4" aria-hidden="true" />
                    Please fix {errorList.length === 1 ? 'this' : `these ${errorList.length}`} before sending:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    {errorList.map((k) => (
                      <li key={k}>
                        <a href={`#f-${k}`} className="underline underline-offset-2">
                          {LABELS[k]}: {errors[k]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label={LABELS.name} required error={errors.name}>
                  {(p) => (
                    <input {...p} type="text" autoComplete="name" value={fields.name} onChange={(e) => set('name')(e.target.value)} onBlur={blur('name')} />
                  )}
                </Field>
                <Field id="email" label={LABELS.email} required error={errors.email}>
                  {(p) => (
                    <input {...p} type="email" inputMode="email" autoComplete="email" value={fields.email} onChange={(e) => set('email')(e.target.value)} onBlur={blur('email')} />
                  )}
                </Field>
                <Field id="company" label={LABELS.company} hint="Optional">
                  {(p) => (
                    <input {...p} type="text" autoComplete="organization" value={fields.company} onChange={(e) => set('company')(e.target.value)} />
                  )}
                </Field>
                <Field id="service" label={LABELS.service} hint="Optional">
                  {(p) => (
                    <select {...p} value={fields.service} onChange={(e) => set('service')(e.target.value)}>
                      <option value="">Not sure yet</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
                <div className="sm:col-span-2">
                  <Field id="message" label={LABELS.message} required error={errors.message}>
                    {(p) => (
                      <textarea {...p} rows={5} value={fields.message} onChange={(e) => set('message')(e.target.value)} onBlur={blur('message')} />
                    )}
                  </Field>
                </div>
              </div>

              {/* Honeypot: hidden from people and assistive tech, tempting to bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                  Leave this empty
                  <input ref={honeypot} type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {status === 'error' && (
                <p role="alert" className="mt-6 flex items-start gap-2 rounded-md bg-red-50 p-4 text-sm text-red-800">
                  <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  Something went wrong and your message wasn’t sent. Please try again in a moment.
                </p>
              )}

              <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p id="form-note" className="text-sm text-fg-muted">
                  <span className="text-brand-deep" aria-hidden="true">*</span> Required fields
                </p>
                <button type="submit" className="btn-ink group min-w-44" disabled={status === 'submitting'} aria-disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <>
                      <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

type ControlProps = {
  id: string
  name: string
  required?: boolean
  'aria-invalid'?: boolean
  'aria-describedby'?: string
  className: string
}

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  hint?: string
  error?: string
  children: (props: ControlProps) => ReactNode
}) {
  const fid = `f-${id}`
  return (
    <div>
      <label htmlFor={fid} className="flex items-baseline justify-between text-sm font-semibold">
        <span>
          {label}
          {required && (
            <span className="ml-0.5 text-brand-deep" aria-hidden="true">
              *
            </span>
          )}
        </span>
        {hint && <span className="font-normal text-fg-muted">{hint}</span>}
      </label>
      {children({
        id: fid,
        name: id,
        required,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? `${fid}-error` : undefined,
        className: `mt-2 block min-h-12 w-full rounded-md border bg-white px-4 py-3 text-base text-fg transition-[border-color,box-shadow] outline-none placeholder:text-fg-muted/70 focus:border-ink focus:ring-4 focus:ring-brand/25 ${
          error ? 'border-red-700' : 'border-paper-line hover:border-fg/30'
        }`,
      })}
      {error && (
        <p id={`${fid}-error`} className="mt-2 flex items-start gap-1.5 text-sm text-red-800">
          <CircleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
