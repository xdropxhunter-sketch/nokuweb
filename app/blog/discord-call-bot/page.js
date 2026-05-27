import { LinkGrid, SeoPage, inviteUrl } from '../../seo-pages'

export const metadata = {
  title: 'What Is a Discord Call Bot? — Noku Blog',
  description:
    'Learn how a Discord call bot works, how Noku enables cross-server chat, and why server-to-server chat helps communities meet.',
  alternates: { canonical: 'https://nokuuu.netlify.app/blog/discord-call-bot' },
}

export default function BlogPostPage() {
  return (
    <SeoPage
      badge="Guide"
      title="What Is a Discord Call Bot?"
      description="A discord call bot lets one Discord server connect with another for a live shared conversation. Noku makes that feel simple and polished."
    >
      <article className="max-w-3xl space-y-8 py-8 text-white/65">
        <p className="leading-7">
          A Discord server call is a way for two communities to meet without merging servers or
          asking members to jump into a new place. With Noku, a server can start a call and open a
          live bridge to chat with another Discord server.
        </p>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Why cross-server chat matters</h2>
          <p className="mt-3 leading-7">
            A cross-server chat bot helps communities discover each other while keeping their own
            channels, roles, and culture intact. It is ideal for social servers, gaming groups, and
            communities that want fresh conversation without losing control.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">How Noku keeps it simple</h2>
          <p className="mt-3 leading-7">
            Server owners set a channel, members use <span className="font-mono text-white">/call</span>,
            and Noku handles the server-to-server chat bridge. If a match is not right, the server
            can skip, report, block, or end the call.
          </p>
        </div>
        <a
          href={inviteUrl}
          className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1e1f22] shadow-xl transition hover:bg-white/90"
        >
          Invite Noku
        </a>
      </article>
      <LinkGrid />
    </SeoPage>
  )
}
