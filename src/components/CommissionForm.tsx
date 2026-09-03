import { FormEvent, useState } from 'react'

interface FormState {
  name: string
  email: string
  bladeType: string
  length: string
  mounting: string
  budget: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  bladeType: '',
  length: '',
  mounting: '',
  budget: '',
  message: '',
}

const budgetRanges = ['$1,500 – $3,000', '$3,000 – $6,000', '$6,000 – $12,000', '$12,000+']

export default function CommissionForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.bladeType.trim()) next.bladeType = 'Please select a blade type.'
    if (!form.message.trim()) next.message = 'Tell us a little about the commission.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border hairline bg-charcoal px-8 py-16 text-center">
        <p className="font-mono text-xs uppercase tracking-widest2 text-gold">Inquiry Sent</p>
        <p className="mt-4 font-serif text-2xl text-ivory">YOUR INQUIRY HAS BEEN RECEIVED.</p>
        <p className="mt-3 text-sm text-ivory/55">
          A member of the atelier will reply within two business days to begin the consultation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Field label="Name" error={errors.name}>
        <input
          type="text"
          value={form.name}
          onChange={set('name')}
          aria-invalid={Boolean(errors.name)}
          className={inputClass(Boolean(errors.name))}
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={form.email}
          onChange={set('email')}
          aria-invalid={Boolean(errors.email)}
          className={inputClass(Boolean(errors.email))}
        />
      </Field>

      <Field label="Blade Type" error={errors.bladeType}>
        <select
          value={form.bladeType}
          onChange={set('bladeType')}
          aria-invalid={Boolean(errors.bladeType)}
          className={inputClass(Boolean(errors.bladeType))}
        >
          <option value="">Select a blade type</option>
          <option>Katana</option>
          <option>Wakizashi</option>
          <option>Tanto</option>
          <option>Undecided</option>
        </select>
      </Field>

      <Field label="Preferred Length">
        <input type="text" placeholder="e.g. 72 cm" value={form.length} onChange={set('length')} className={inputClass(false)} />
      </Field>

      <Field label="Mounting Style">
        <input
          type="text"
          placeholder="e.g. black lacquer, shirasaya"
          value={form.mounting}
          onChange={set('mounting')}
          className={inputClass(false)}
        />
      </Field>

      <Field label="Budget Range">
        <select value={form.budget} onChange={set('budget')} className={inputClass(false)}>
          <option value="">Select a range</option>
          {budgetRanges.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </Field>

      <Field label="Message" error={errors.message} className="sm:col-span-2">
        <textarea
          rows={5}
          value={form.message}
          onChange={set('message')}
          aria-invalid={Boolean(errors.message)}
          className={inputClass(Boolean(errors.message))}
        />
      </Field>

      <div className="sm:col-span-2">
        <button
          type="submit"
          data-cursor="INQUIRE"
          className="w-full border border-ivory py-4 font-mono text-xs uppercase tracking-widest2 text-ivory transition-colors hover:border-gold hover:text-gold sm:w-auto sm:px-10"
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  )
}

function inputClass(invalid: boolean) {
  return `w-full border-b bg-transparent py-2.5 text-sm text-ivory outline-none transition-colors placeholder:text-ivory/25 focus:border-gold ${
    invalid ? 'border-crimson-bright' : 'border-ivory/20'
  }`
}

function Field({
  label,
  error,
  children,
  className = '',
}: {
  label: string
  error?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-ivory/40">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1.5 block text-xs text-crimson-bright">{error}</span>}
    </label>
  )
}
