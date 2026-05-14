'use client';

import { useState } from 'react';
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck, Sparkles } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';

const CONTACT = {
  email: 'contact@socialmoon.in',
  phone: '+91 9118439107',
  address: 'Lucknow, Uttar Pradesh, India',
};

const SERVICES = [
  'Creative marketing campaign',
  'Content & social growth',
  'Lead generation',
  'Personal brand',
  'Website development',
  'App development',
  'AI automation / internal tool',
  'Full scope build',
];

const MEMORY_CHECK = [
  { label: 'Message', text: 'What should the audience remember?' },
  { label: 'Proof', text: 'What can we honestly show or explain?' },
  { label: 'Place', text: 'Where should attention land: page, app, inbox, call, or store?' },
  { label: 'System', text: 'What needs to exist behind the campaign?' },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [formResponse, setFormResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormResponse('');

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      const data = await response.json();
      setFormResponse(data.message || (response.ok ? 'Message sent.' : 'Something went wrong.'));
      if (response.ok) setFormState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch {
      setFormResponse('Could not send the message right now. Please email contact@socialmoon.in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <PageHero
        eyebrow="Start a conversation"
        title="Tell us what your brand should be remembered for."
        description="Bring the product, offer, audience, or problem. We will shape the next step around memorable marketing first, then website, app, automation, or full-scope build support if the campaign needs it."
        icon={MessageCircle}
        primaryCta={{ label: 'Write the brief', href: '#contact-form' }}
        secondaryCta={{ label: 'View work', href: '/portfolio' }}
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-200">Memory test</p>
          <div className="mt-4 grid grid-cols-1 gap-3">
            {MEMORY_CHECK.map((item, index) => (
              <div key={item.label} className="grid grid-cols-[2.75rem_1fr] gap-3 rounded-2xl bg-white/5 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff4d2e] text-xs font-black text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block text-sm font-black text-white">{item.label}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-slate-300">{item.text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <Section id="contact-form">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff4d2e]">Project signal</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Give us the real context.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Short is fine. Clear is better. Tell us what you want people to notice, believe, click, book, buy, or build around.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" value={formState.name} onChange={handleChange} required />
                <Field label="Email" name="email" type="email" value={formState.email} onChange={handleChange} required />
                <Field label="Phone / WhatsApp" name="phone" value={formState.phone} onChange={handleChange} />
                <Field label="Brand / company" name="company" value={formState.company} onChange={handleChange} />
              </div>

              <label className="mt-4 block">
                <span className="text-sm font-bold text-slate-800">What do you need?</span>
                <select name="service" value={formState.service} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fffdf8] px-4 py-3 text-sm outline-none focus:border-[#ff4d2e]">
                  <option value="">Select one</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-4 block">
                <span className="text-sm font-bold text-slate-800">Brief</span>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="What are you selling or building? Who is it for? What should people remember? Do you already have a website, app, audience, or proof we should know about?"
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-[#fffdf8] px-4 py-3 text-sm leading-6 outline-none focus:border-[#ff4d2e]"
                />
              </label>

              {formResponse && <p className="mt-4 rounded-2xl bg-[#fffdf8] p-3 text-sm font-semibold text-slate-700">{formResponse}</p>}

              <button disabled={isSubmitting} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/20 disabled:opacity-60 sm:w-auto">
                {isSubmitting ? 'Sending...' : 'Send brief'}
                <Send className="h-4 w-4" />
              </button>
            </form>

            <aside className="space-y-4">
              <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
                <Sparkles className="h-6 w-6 text-orange-200" />
                <h2 className="mt-5 text-2xl font-black">What happens next?</h2>
                <div className="mt-5 space-y-4">
                  {['We read the brief for message, proof, landing path, and system needs.', 'We reply with the cleanest next step instead of a forced package.', 'If something is unclear, we ask before quoting or promising.'].map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-black text-orange-200">{index + 1}</span>
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-[#ff4d2e]" />
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  We do not invent numbers, fake case studies, fixed results, or made-up timelines. If we cannot verify or explain it, it does not belong in the plan.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: Mail },
                  { label: 'Phone / WhatsApp', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}`, icon: Phone },
                  { label: 'Base', value: CONTACT.address, icon: MapPin },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#fff1ec] text-[#ff4d2e]">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-black uppercase tracking-[0.16em] text-slate-500">{item.label}</span>
                      <span className="mt-1 block break-words text-sm font-bold text-slate-950">{item.value}</span>
                    </span>
                    {item.href && <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-700" />}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-800">{label}</span>
      <input {...props} className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#fffdf8] px-4 py-3 text-sm outline-none focus:border-[#ff4d2e]" />
    </label>
  );
}
