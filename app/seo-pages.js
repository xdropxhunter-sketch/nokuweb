import { ArrowRight, Bot, FileText, Hash, HelpCircle, MessageCircle, Newspaper, ShieldCheck } from 'lucide-react'

export const siteUrl = 'https://nokuuu.netlify.app'
export const inviteUrl = 'https://discord.com/oauth2/authorize?client_id=1508173727953584308&permissions=4504426945832960&integration_type=0&scope=bot+applications.commands'

export const navLinks = [
  { href: '/discord-call-bot', label: 'Discord Call Bot' },
  { href: '/commands', label: 'Commands' },
  { href: '/blog', label: 'Blog' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export const faqItems = [
  {
    question: 'What is a discord call bot?',
    answer:
      'A discord call bot connects two Discord communities so members can talk through a shared text bridge without leaving their own servers.',
  },
  {
    question: 'How does Noku support cross-server chat?',
    answer:
      'Noku works as a cross-server chat bot by matching two active servers, relaying messages both ways, and keeping the conversation inside configured channels.',
  },
  {
    question: 'Can my members chat with another Discord server?',
    answer:
      'Yes. Use /call to start a Discord server call, and Noku creates a server-to-server chat with another live community.',
  },
  {
    question: 'Can server owners end a call?',
    answer:
      'Yes. Server owners and moderators can use /endcall to close the bridge when the conversation is finished.',
  },
]

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Noku',
    applicationCategory: 'CommunicationApplication',
    operatingSystem: 'Discord',
    url: siteUrl,
    description:
      'Noku is a Discord call bot and cross-server chat bot for server-to-server chat between Discord communities.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="/" className="flex items-center gap-2.5">
        <img
          src="/noku.jpg"
          alt="Noku"
          className="h-9 w-9 rounded-xl object-cover shadow-lg shadow-[#5865F2]/30 ring-2 ring-[#5865F2]/50"
        />
        <span className="text-[15px] font-semibold tracking-tight text-white">Noku</span>
      </a>
      <nav className="hidden items-center gap-5 text-sm text-white/55 md:flex">
        {navLinks.slice(0, 3).map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href={inviteUrl}
        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1e1f22] shadow-lg transition hover:bg-white/90"
      >
        Invite
        <ArrowRight className="h-4 w-4" />
      </a>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <img src="/noku.jpg" alt="Noku" className="h-8 w-8 rounded-lg object-cover ring-1 ring-white/10" />
          <p className="text-sm text-white/55">Noku connects Discord communities with server-to-server chat.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/45">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export function SeoPage({ badge, title, description, children }) {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      <div className="hero-glow relative overflow-hidden">
        <SiteHeader />
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-14 pt-10 sm:pb-16 sm:pt-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#23A559]" />
            {badge}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">{description}</p>
        </section>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-20">{children}</div>
      <SiteFooter />
    </main>
  )
}

export function LinkGrid() {
  return (
    <section className="border-t border-white/10 py-10">
      <h2 className="text-2xl font-bold tracking-tight text-white">Explore Noku</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm font-semibold text-white transition hover:border-[#5865F2]/50 hover:bg-white/[0.06]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export const pageIcons = {
  Bot,
  FileText,
  Hash,
  HelpCircle,
  MessageCircle,
  Newspaper,
  ShieldCheck,
}
