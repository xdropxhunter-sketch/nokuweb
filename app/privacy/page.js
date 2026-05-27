import { LinkGrid, SeoPage } from '../seo-pages'

export const metadata = {
  title: 'Privacy Policy — Noku',
  description:
    'Privacy policy for Noku, a Discord call bot and cross-server chat bot for Discord communities.',
  alternates: { canonical: 'https://nokuuu.netlify.app/privacy' },
}

export default function PrivacyPage() {
  return (
    <SeoPage
      badge="Privacy"
      title="Privacy Policy"
      description="A clear overview of how Noku handles data while powering Discord server calls and cross-server chat."
    >
      <section className="space-y-8 py-8 text-white/65">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Information Noku Uses</h2>
          <p className="mt-3 leading-7">
            Noku may process Discord server IDs, channel IDs, user IDs, command usage, and message
            content needed to relay server-to-server chat during an active call.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">How Data Is Used</h2>
          <p className="mt-3 leading-7">
            Data is used to operate the discord call bot, connect communities, run safety controls,
            and keep cross-server chat working reliably.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Retention</h2>
          <p className="mt-3 leading-7">
            Noku keeps only the information needed to provide the service, investigate reports, and
            prevent abuse. Server owners can remove the bot to stop future processing.
          </p>
        </div>
      </section>
      <LinkGrid />
    </SeoPage>
  )
}
