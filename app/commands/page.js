import { Hash, MessageCircle, ShieldCheck } from 'lucide-react'
import { inviteUrl, LinkGrid, SeoPage } from '../seo-pages'

export const metadata = {
  title: 'Noku Commands — Discord Call Bot Commands',
  description:
    'Explore Noku commands for Discord server calls, cross-server chat, moderation, and server-to-server chat control.',
  alternates: { canonical: 'https://nokuuu.netlify.app/commands' },
}

const commands = [
  { name: '/setup', text: 'Set the channel Noku should use for cross-server chat.' },
  { name: '/call', text: 'Start a Discord server call and connect with another community.' },
  { name: '/skip', text: 'Skip the current match and look for another server.' },
  { name: '/endcall', text: 'End the active server-to-server chat safely.' },
  { name: '/report', text: 'Report a server if the conversation needs review.' },
  { name: '/blockserver', text: 'Block a server from future matches.' },
]

export default function CommandsPage() {
  return (
    <SeoPage
      badge="Slash commands"
      title="Commands for Discord Server Calls"
      description="Noku keeps server-to-server chat simple. These commands help server owners start, control, and protect every cross-server conversation."
    >
      <section className="grid gap-3 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {commands.map((command) => (
          <div key={command.name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#A5A8FF]">
              <Hash className="h-4 w-4" />
              {command.name}
            </div>
            <p className="mt-3 text-sm leading-6 text-white/60">{command.text}</p>
          </div>
        ))}
      </section>
      <section className="border-t border-white/10 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <MessageCircle className="h-6 w-6 text-[#A5A8FF]" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">For live community discovery</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Use Noku as a discord call bot when your members want a clean way to chat with another
              Discord server in real time.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <ShieldCheck className="h-6 w-6 text-[#A5A8FF]" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">For server owners</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Moderation commands keep each Discord server call controlled, reportable, and easy to end.
            </p>
          </div>
        </div>
        <a
          href={inviteUrl}
          className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1e1f22] shadow-xl transition hover:bg-white/90"
        >
          Invite Noku
        </a>
      </section>
      <LinkGrid />
    </SeoPage>
  )
}
