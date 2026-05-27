import { Newspaper } from 'lucide-react'
import { LinkGrid, SeoPage } from '../seo-pages'

export const metadata = {
  title: 'Noku Blog — Discord Call Bot Guides',
  description:
    'Guides about Discord call bots, cross-server chat bots, server-to-server chat, and community discovery with Noku.',
  alternates: { canonical: 'https://nokuuu.netlify.app/blog' },
}

const posts = [
  {
    href: '/blog/discord-call-bot',
    title: 'What Is a Discord Call Bot?',
    text: 'A short guide to Discord server calls, cross-server chat bots, and how Noku connects communities.',
  },
]

export default function BlogPage() {
  return (
    <SeoPage
      badge="Blog"
      title="Discord Community Guides"
      description="Short, practical notes on using Noku for server-to-server chat and premium cross-server community experiences."
    >
      <section className="grid gap-4 py-8 md:grid-cols-2">
        {posts.map((post) => (
          <a
            key={post.href}
            href={post.href}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#5865F2]/50 hover:bg-white/[0.06]"
          >
            <Newspaper className="h-6 w-6 text-[#A5A8FF]" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">{post.text}</p>
          </a>
        ))}
      </section>
      <LinkGrid />
    </SeoPage>
  )
}
