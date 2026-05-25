import { ArrowRight, Bot, Hash, MessageCircle, PhoneCall, ShieldCheck } from 'lucide-react'

const INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=1508173727953584308&permissions=4504426945832960&integration_type=0&scope=bot+applications.commands'

export const metadata = {
  title: 'Discord Call Bot — Noku',
  description:
    'Noku is a Discord call bot that connects your server with another Discord server for live cross-server chat. Start a server-to-server call with /call.',
  alternates: {
    canonical: 'https://nokuuu.netlify.app/discord-call-bot',
  },
  openGraph: {
    title: 'Discord Call Bot — Noku',
    description:
      'Noku is a Discord call bot that connects your server with another Discord server for live cross-server chat. Start a server-to-server call with /call.',
    url: 'https://nokuuu.netlify.app/discord-call-bot',
    type: 'website',
  },
}

const commands = [
  { name: '/setup', text: 'Choose the channel where cross-server chat should happen.' },
  { name: '/call', text: 'Start a Discord server call and connect with another live server.' },
  { name: '/skip', text: 'Move on if the current match is not the right fit.' },
  { name: '/endcall', text: 'Close the bridge cleanly when the conversation is done.' },
]

function Section({ eyebrow, title, children, icon: Icon }) {
  return (
    <section className="border-t border-white/10 py-10">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5865F2]/15 text-[#A5A8FF] ring-1 ring-[#5865F2]/25">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">{eyebrow}</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">{title}</h2>
        </div>
      </div>
      <div className="max-w-3xl text-base leading-7 text-white/65">{children}</div>
    </section>
  )
}

export default function DiscordCallBotPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white">
      <div className="hero-glow relative overflow-hidden">
        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src="/noku.jpg"
              alt="Noku"
              className="h-9 w-9 rounded-xl object-cover shadow-lg shadow-[#5865F2]/30 ring-2 ring-[#5865F2]/50"
            />
            <span className="text-[15px] font-semibold tracking-tight text-white">Noku</span>
          </a>
          <a
            href={INVITE_URL}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1e1f22] shadow-lg transition hover:bg-white/90"
          >
            Invite
            <ArrowRight className="h-4 w-4" />
          </a>
        </header>

        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pb-20 sm:pt-16">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#23A559]" />
              Built for server-to-server chat
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl">
              Discord Call Bot for Cross-Server Chat
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Noku is a premium-feeling discord call bot for communities that want to chat with
              another Discord server in real time, without leaving their own server.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={INVITE_URL}
                className="inline-flex items-center gap-2 rounded-full bg-[#5865F2] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5865F2]/30 transition hover:bg-[#4752C4]"
              >
                Invite Noku
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#commands"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/[0.08]"
              >
                View Commands
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <Section eyebrow="01" title="What is Noku?" icon={Bot}>
          <p>
            Noku is a cross-server chat bot for Discord communities. It creates a live bridge
            between two servers so members can meet, talk, and share messages while staying inside
            their own channels.
          </p>
        </Section>

        <Section eyebrow="02" title="How the Discord server call works" icon={PhoneCall}>
          <p>
            Start a Discord server call with <span className="font-mono text-white">/call</span>.
            Noku matches your server with another active community, opens a server-to-server chat,
            and relays messages both ways until the call ends.
          </p>
        </Section>

        <section id="commands" className="border-t border-white/10 py-10">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5865F2]/15 text-[#A5A8FF] ring-1 ring-[#5865F2]/25">
              <Hash className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">03</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">Commands</h2>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {commands.map((command) => (
              <div
                key={command.name}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="font-mono text-sm font-semibold text-[#A5A8FF]">{command.name}</div>
                <p className="mt-2 text-sm leading-6 text-white/60">{command.text}</p>
              </div>
            ))}
          </div>
        </section>

        <Section eyebrow="04" title="Invite Noku" icon={MessageCircle}>
          <p>
            Add Noku to your Discord server to create a polished way for members to chat with
            another Discord server. It is simple, direct, and built around safe cross-community
            conversations.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={INVITE_URL}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1e1f22] shadow-xl transition hover:bg-white/90"
            >
              Invite Noku
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-white/45">
              <ShieldCheck className="h-4 w-4" />
              Safe controls for server owners
            </span>
          </div>
        </Section>
      </div>
    </main>
  )
}
