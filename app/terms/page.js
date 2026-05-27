import { LinkGrid, SeoPage } from '../seo-pages'

export const metadata = {
  title: 'Terms of Service — Noku',
  description:
    'Terms of service for Noku, the Discord call bot for server-to-server chat and cross-server conversations.',
  alternates: { canonical: 'https://nokuuu.netlify.app/terms' },
}

export default function TermsPage() {
  return (
    <SeoPage
      badge="Terms"
      title="Terms of Service"
      description="Use Noku responsibly when connecting Discord communities through live server-to-server chat."
    >
      <section className="space-y-8 py-8 text-white/65">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Acceptable Use</h2>
          <p className="mt-3 leading-7">
            Do not use Noku to harass, spam, impersonate, or abuse another Discord server. Server
            owners are responsible for how their community uses each Discord server call.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Service Availability</h2>
          <p className="mt-3 leading-7">
            Noku may change, pause, or limit features to protect the cross-server chat experience and
            keep the service stable.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Safety Controls</h2>
          <p className="mt-3 leading-7">
            Reports, blocks, skips, and ended calls may be used to improve matching quality and reduce
            abuse across server-to-server chat.
          </p>
        </div>
      </section>
      <LinkGrid />
    </SeoPage>
  )
}
