import { LinkGrid, SeoPage } from '../seo-pages'

export const metadata = {
  title: 'Noku Privacy Policy',
  description:
    'Read the Noku Privacy Policy, including what Discord bot data Noku processes, how information is used, retention, security, and contact details.',
  alternates: { canonical: 'https://nokuuu.netlify.app/privacy' },
  openGraph: {
    title: 'Noku Privacy Policy',
    description:
      'Privacy information for Noku, a Discord bot for cross-server communication and interaction.',
    url: 'https://nokuuu.netlify.app/privacy',
    type: 'website',
  },
}

const sections = [
  {
    title: '1. Introduction',
    content: [
      'Noku ("the Bot", "we", "our", or "us") is a Discord bot that enables communication and interaction between separate Discord servers. By using Noku, you agree to the collection and use of information in accordance with this Privacy Policy.',
      'Noku is not affiliated with, endorsed by, or operated by Discord Inc.',
    ],
  },
  {
    title: '2. Information We Collect',
    content: [
      'Noku may collect and process the following information:',
      [
        'Discord User IDs',
        'Discord Server (Guild) IDs',
        'Discord Channel IDs',
        'Message content transmitted through Noku features',
        'Configuration settings necessary for bot functionality',
      ],
      "Noku does not intentionally collect personal information beyond what is provided through Discord's platform and required for operation of the service.",
    ],
  },
  {
    title: '3. How Information Is Used',
    content: [
      'Collected information may be used to:',
      [
        'Relay messages between participating servers',
        'Provide cross-server communication features',
        'Facilitate language translation services',
        'Operate matchmaking and multiplayer features',
        'Support moderation and safety systems',
        'Maintain service functionality and reliability',
        'Develop and improve Noku features',
      ],
    ],
  },
  {
    title: '4. Data Sharing',
    content: [
      'Noku may transmit message content between participating servers when users utilize communication features.',
      'We do not sell user data to third parties.',
      'Information may be disclosed when required by law or to protect the security, integrity, or operation of the service.',
    ],
  },
  {
    title: '5. Data Retention',
    content: [
      'Noku retains only the information reasonably necessary to operate its services.',
      'Message content may be temporarily processed to facilitate communication and feature functionality. Long-term conversation history is not intentionally stored by Noku.',
    ],
  },
  {
    title: '6. Server Participation',
    content: [
      "Server administrators choose whether their server participates in Noku's network.",
      'Administrators may disconnect, block, or report participating servers using available bot features.',
    ],
  },
  {
    title: '7. Future Premium Features',
    content: [
      'Noku may introduce optional premium features in the future. Additional information regarding payment processing or premium services will be provided if such features become available.',
    ],
  },
  {
    title: '8. Security',
    content: [
      'We take reasonable measures to protect information processed by Noku. However, no method of electronic storage or transmission is completely secure.',
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      "Noku is intended for use within Discord and relies on Discord's platform requirements. Users must comply with Discord's Terms of Service and age requirements.",
    ],
  },
  {
    title: '10. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. Continued use of Noku after changes are posted constitutes acceptance of the revised policy.',
    ],
  },
  {
    title: '11. Contact',
    content: [
      'For questions regarding this Privacy Policy, contact:',
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

export default function PrivacyPage() {
  return (
    <SeoPage
      badge="Privacy Policy"
      title="Noku Privacy Policy"
      description="How Noku handles Discord data while providing cross-server communication, translation, moderation, and multiplayer features."
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
