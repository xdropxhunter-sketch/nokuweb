import { LinkGrid, SeoPage } from '../seo-pages'

export const metadata = {
  title: 'Noku Terms of Service',
  description:
    'Read the Noku Terms of Service, including acceptable use, Discord server administration, availability, termination, liability, and contact details.',
  alternates: { canonical: 'https://nokuuu.netlify.app/terms' },
  openGraph: {
    title: 'Noku Terms of Service',
    description:
      'Terms for using Noku, a Discord bot for cross-server communication and interaction.',
    url: 'https://nokuuu.netlify.app/terms',
    type: 'website',
  },
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By using Noku, you agree to these Terms of Service.',
      'If you do not agree with these terms, you must discontinue use of the service.',
    ],
  },
  {
    title: '2. Service Description',
    content: [
      'Noku is a Discord bot that enables communication and interaction between separate Discord servers through features including cross-server communication, matchmaking systems, multiplayer activities, translation services, and related functionality.',
      'Noku is not affiliated with, endorsed by, or operated by Discord Inc.',
    ],
  },
  {
    title: '3. Eligibility',
    content: [
      "Users must comply with Discord's Terms of Service and Community Guidelines when using Noku.",
      'Server administrators are responsible for ensuring their communities use Noku in accordance with applicable rules and laws.',
    ],
  },
  {
    title: '4. Acceptable Use',
    content: [
      'Users may not use Noku to:',
      [
        'Harass, threaten, or abuse others',
        'Distribute spam or malicious content',
        "Violate Discord's Terms of Service",
        'Engage in illegal activities',
        'Circumvent moderation systems',
        'Interfere with the operation of Noku',
      ],
    ],
  },
  {
    title: '5. Server Administration',
    content: [
      "Server administrators control whether their server participates in Noku's network.",
      'Administrators may disconnect from the network or use available tools to block or report other servers.',
    ],
  },
  {
    title: '6. Availability',
    content: [
      'Noku is provided on an "as is" and "as available" basis.',
      'We do not guarantee uninterrupted availability, error-free operation, or permanent access to any feature.',
    ],
  },
  {
    title: '7. Termination',
    content: [
      'We reserve the right to restrict, suspend, or terminate access to Noku at any time for violations of these Terms or for operational, security, or legal reasons.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    content: [
      'To the maximum extent permitted by law, Noku and its operators shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from use of the service.',
      'Users assume responsibility for their use of Noku and any content transmitted through the service.',
    ],
  },
  {
    title: '9. Future Premium Features',
    content: [
      'Noku may offer optional premium features in the future. Additional terms may apply to paid services if introduced.',
    ],
  },
  {
    title: '10. Modifications',
    content: [
      'We reserve the right to modify these Terms at any time. Continued use of Noku after modifications constitutes acceptance of the updated Terms.',
    ],
  },
  {
    title: '11. Contact',
    content: [
      'Questions regarding these Terms may be directed to:',
      { href: 'mailto:xdropxhunter@gmail.com', label: 'xdropxhunter@gmail.com' },
    ],
  },
]

function LegalSection({ title, content }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/10 sm:p-6">
      <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-white/65 sm:text-base">
        {content.map((item, index) => {
          if (Array.isArray(item)) {
            return (
              <ul key={index} className="list-disc space-y-2 pl-5">
                {item.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )
          }

          if (typeof item === 'object') {
            return (
              <p key={item.href}>
                <a href={item.href} className="font-medium text-[#A5A8FF] transition hover:text-white">
                  {item.label}
                </a>
              </p>
            )
          }

          return <p key={index}>{item}</p>
        })}
      </div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <SeoPage
      badge="Terms of Service"
      title="Noku Terms of Service"
      description="The rules for using Noku responsibly across Discord servers, including acceptable use, availability, and account restrictions."
    >
      <div className="py-8">
        <div className="mb-5 inline-flex rounded-full border border-[#5865F2]/30 bg-[#5865F2]/10 px-3 py-1 text-xs font-semibold text-[#C4C7FF]">
          Last Updated: May 31, 2026
        </div>
        <div className="grid gap-4">
          {sections.map((section) => (
            <LegalSection key={section.title} {...section} />
          ))}
        </div>
      </div>
      <LinkGrid />
    </SeoPage>
  )
}
