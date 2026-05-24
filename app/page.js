'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Plug,
  MessageSquare,
  SkipForward,
  ShieldCheck,
  Hash,
  Volume2,
  Bell,
  Pin,
  Users,
  Search,
  Smile,
  Plus,
  Gift,
  Sticker,
  Send,
  CircleDot,
  Sparkles,
  Compass,
  Inbox,
  Mic,
  Headphones,
  Settings,
  ChevronDown,
} from 'lucide-react'

const INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=1508173727953584308&permissions=4504426945832960&integration_type=0&scope=bot+applications.commands'
const SUPPORT_URL = '#'
const NOKU_AVATAR = '/noku.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

function Avatar({ initials, color, src }) {
  if (src) {
    return (
      <img
        src={src}
        alt={initials}
        className="h-10 w-10 shrink-0 rounded-full object-cover shadow-md ring-2 ring-[#5865F2]/40"
      />
    )
  }
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white shadow-md"
      style={{ background: color }}
    >
      {initials}
    </div>
  )
}

function ServerCircle({ label, color, active, ring, icon }) {
  return (
    <div className="group relative flex items-center justify-center">
      {active && (
        <span className="absolute -left-2 h-9 w-1 rounded-r-full bg-white" />
      )}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-[26px] text-sm font-bold text-white shadow-lg transition-all duration-300 group-hover:rounded-[16px] ${ring ? 'ring-2 ring-[#5865F2] ring-offset-2 ring-offset-[#1e1f22]' : ''}`}
        style={{ background: color }}
      >
        {icon ?? label}
      </div>
    </div>
  )
}

function Pill({ children, icon: Icon }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]">
      {Icon && <Icon className="h-3.5 w-3.5 text-[#A5A8FF]" />}
      {children}
    </div>
  )
}

function CommandPill({ cmd }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-4 py-2.5 font-mono text-sm text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
    >
      <span className="text-[#A5A8FF]">/</span>
      <span>{cmd}</span>
    </motion.div>
  )
}

function FeatureCard({ icon: Icon, title, text, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-sm"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#5865F2]/10 blur-3xl transition group-hover:bg-[#5865F2]/20" />
      <div className="relative">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#5865F2] to-[#7C3AED] shadow-lg shadow-[#5865F2]/20">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="mb-1.5 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/60">{text}</p>
      </div>
    </motion.div>
  )
}

function ChatMessage({ name, server, color, text, isBot, time, delay = 0, src }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      className="group flex gap-3 rounded-md px-2 py-1.5 hover:bg-white/[0.025]"
    >
      <Avatar initials={name.slice(0, 2).toUpperCase()} color={color} src={src} />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className={`text-[15px] font-semibold ${isBot ? 'text-[#A5A8FF]' : 'text-white'}`}>
            {name}
          </span>
          {isBot && (
            <span className="inline-flex items-center gap-1 rounded-[4px] bg-[#5865F2] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              <Sparkles className="h-2.5 w-2.5" />
              BOT
            </span>
          )}
          {server && (
            <span className="rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-medium text-white/60">
              {server}
            </span>
          )}
          <span className="text-[11px] text-white/40">{time}</span>
        </div>
        <p className="mt-0.5 text-[14.5px] leading-relaxed text-white/85">{text}</p>
      </div>
    </motion.div>
  )
}

function DiscordMockup() {
  const reduce = useReducedMotion()
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-tr from-[#5865F2]/30 via-[#7C3AED]/20 to-transparent blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1e1f22] shadow-2xl shadow-black/60"
      >
        {/* macOS-style top bar */}
        <div className="flex items-center gap-1.5 border-b border-black/40 bg-[#101113] px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ED6A5E]" />
          <span className="h-3 w-3 rounded-full bg-[#F4BF50]" />
          <span className="h-3 w-3 rounded-full bg-[#61C554]" />
          <div className="ml-3 text-[11px] text-white/40">noku.app</div>
        </div>

        <div className="flex h-[520px] sm:h-[560px]">
          {/* Server rail */}
          <div className="hidden w-[72px] flex-col items-center gap-2 bg-[#1a1b1e] py-3 sm:flex">
            <div className="group relative flex items-center justify-center">
              <span className="absolute -left-2 h-9 w-1 rounded-r-full bg-white" />
              <img
                src={NOKU_AVATAR}
                alt="Noku"
                className="h-12 w-12 rounded-[26px] object-cover shadow-lg ring-2 ring-[#5865F2] ring-offset-2 ring-offset-[#1a1b1e] transition-all duration-300 group-hover:rounded-[16px]"
              />
            </div>
            <div className="my-1 h-[2px] w-8 rounded bg-white/10" />
            <ServerCircle label="A" color="#23A559" />
            <ServerCircle label="B" color="#F23F42" />
            <ServerCircle label="GG" color="#F0B232" />
            <ServerCircle label="+" color="#2b2d31" icon={<Plus className="h-5 w-5 text-[#23A559]" />} />
            <ServerCircle label="E" color="#2b2d31" icon={<Compass className="h-5 w-5 text-[#23A559]" />} />
          </div>

          {/* Channel sidebar */}
          <div className="hidden w-56 flex-col bg-[#2b2d31] sm:flex">
            <div className="flex items-center justify-between border-b border-black/30 px-4 py-3 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-[15px] font-semibold text-white">Noku Hub</span>
              </div>
              <ChevronDown className="h-4 w-4 text-white/60" />
            </div>
            <div className="flex-1 overflow-y-auto px-2 py-3 no-scrollbar">
              <div className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-white/40">
                Text Channels
              </div>
              <ChannelItem name="welcome" />
              <ChannelItem name="general" />
              <ChannelItem name="cross-server" active />
              <ChannelItem name="announcements" />
              <div className="mt-3 px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-white/40">
                Voice Channels
              </div>
              <VoiceItem name="Lounge" />
              <VoiceItem name="Music" />
            </div>
            {/* User strip */}
            <div className="flex items-center gap-2 bg-[#232428] px-2 py-2">
              <Avatar initials="YO" color="linear-gradient(135deg,#5865F2,#7C3AED)" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13px] font-semibold text-white">you</div>
                <div className="truncate text-[11px] text-[#23A559]">Online</div>
              </div>
              <Mic className="h-4 w-4 text-white/60" />
              <Headphones className="h-4 w-4 text-white/60" />
              <Settings className="h-4 w-4 text-white/60" />
            </div>
          </div>

          {/* Main chat */}
          <div className="flex min-w-0 flex-1 flex-col bg-[#313338]">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-black/30 px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2 min-w-0">
                <Hash className="h-5 w-5 shrink-0 text-white/60" />
                <span className="truncate text-[15px] font-semibold text-white">cross-server</span>
                <span className="hidden h-4 w-px bg-white/15 md:block" />
                <span className="hidden truncate text-xs text-white/50 md:inline">
                  Bridged with another community
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Bell className="h-4 w-4" />
                <Pin className="h-4 w-4" />
                <Users className="h-4 w-4" />
                <div className="hidden items-center gap-1 rounded bg-black/30 px-2 py-1 text-[11px] md:flex">
                  <Search className="h-3 w-3" />
                  <span>Search</span>
                </div>
              </div>
            </div>

            {/* Connection banner */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mx-4 mt-3 flex items-center gap-3 rounded-lg border border-[#5865F2]/30 bg-[#5865F2]/10 px-3 py-2"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#23A559] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#23A559]" />
              </div>
              <div className="text-[12.5px] text-white/85">
                <span className="font-semibold text-white">Noku</span> connected{' '}
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-medium">Server A</span>{' '}
                <span className="text-white/50">↔</span>{' '}
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-medium">Server B</span>
              </div>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 space-y-1 overflow-y-auto px-3 py-4 no-scrollbar">
              <div className="px-2 py-3 text-center">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-white/40">
                  <span className="h-px w-12 bg-white/10" />
                  Today
                  <span className="h-px w-12 bg-white/10" />
                </div>
              </div>

              <ChatMessage
                name="Lynex"
                server="Server A"
                color="linear-gradient(135deg,#F23F42,#F0B232)"
                text="yo anyone here?"
                time="Today at 8:14 PM"
                delay={0.5}
              />
              <ChatMessage
                name="Simols"
                server="Server B"
                color="linear-gradient(135deg,#23A559,#1FB6FF)"
                text="hii from another server 👋"
                time="8:14 PM"
                delay={0.9}
              />
              <ChatMessage
                name="Noku"
                isBot
                src={NOKU_AVATAR}
                color="linear-gradient(135deg,#5865F2,#7C3AED)"
                text="Servers connected successfully. Messages will now relay both ways."
                time="8:14 PM"
                delay={1.3}
              />
              <ChatMessage
                name="Ari"
                server="Server B"
                color="linear-gradient(135deg,#A855F7,#EC4899)"
                text="this feels like one big server 😄"
                time="8:15 PM"
                delay={1.7}
              />
              <ChatMessage
                name="Kove"
                server="Server A"
                color="linear-gradient(135deg,#1FB6FF,#5865F2)"
                text="wait that's actually clean"
                time="8:15 PM"
                delay={2.1}
              />
            </div>

            {/* Input */}
            <div className="px-4 pb-4">
              <div className="flex items-center gap-3 rounded-lg bg-[#383a40] px-3 py-2.5">
                <Plus className="h-5 w-5 text-white/60" />
                <span className="flex-1 text-sm text-white/45">Message #cross-server</span>
                <Gift className="h-5 w-5 text-white/60" />
                <Sticker className="h-5 w-5 text-white/60" />
                <Smile className="h-5 w-5 text-white/60" />
                <Send className="h-5 w-5 text-[#A5A8FF]" />
              </div>
              <div className="mt-1.5 px-1 text-[11px] text-white/40">
                Bridged via <span className="font-medium text-[#A5A8FF]">Noku</span> • Reply directly to send across servers
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating connection chip */}
      {!reduce && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ delay: 1, duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-5 left-6 hidden items-center gap-2 rounded-full border border-white/10 bg-[#1e1f22]/90 px-3 py-1.5 text-xs text-white/80 backdrop-blur md:flex"
        >
          <CircleDot className="h-3.5 w-3.5 text-[#23A559]" />
          Live bridge active
        </motion.div>
      )}

      {/* Waving Noku mascot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: 'backOut' }}
        className="absolute -right-2 -top-8 z-20 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-[#1e1f22]/95 px-3 py-2 shadow-xl backdrop-blur md:flex"
      >
        <motion.img
          src={NOKU_AVATAR}
          alt="Noku"
          animate={{ rotate: [0, -6, 6, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-[#5865F2]/60"
          style={{ transformOrigin: '50% 80%' }}
        />
        <div className="pr-1">
          <div className="text-[12px] font-semibold leading-tight text-white">
            Hi, I'm Noku{' '}
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
              style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
            >
              👋
            </motion.span>
          </div>
          <div className="text-[10.5px] text-white/55">bridging your servers</div>
        </div>
      </motion.div>
    </div>
  )
}

function ChannelItem({ name, active }) {
  return (
    <div
      className={`group mb-0.5 flex items-center gap-1.5 rounded px-2 py-1.5 text-[14px] font-medium ${
        active ? 'bg-white/10 text-white' : 'text-white/55 hover:bg-white/[0.04] hover:text-white/80'
      }`}
    >
      <Hash className="h-4 w-4 text-white/40" />
      <span className="truncate">{name}</span>
      {active && (
        <span className="ml-auto h-2 w-2 rounded-full bg-[#5865F2]" />
      )}
    </div>
  )
}

function VoiceItem({ name }) {
  return (
    <div className="group mb-0.5 flex items-center gap-1.5 rounded px-2 py-1.5 text-[14px] font-medium text-white/55 hover:bg-white/[0.04] hover:text-white/80">
      <Volume2 className="h-4 w-4 text-white/40" />
      <span className="truncate">{name}</span>
    </div>
  )
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0c10]">
      {/* Top nav */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 pb-2 pt-6">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <img
              src={NOKU_AVATAR}
              alt="Noku"
              className="h-9 w-9 rounded-xl object-cover shadow-lg shadow-[#5865F2]/30 ring-2 ring-[#5865F2]/50"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0b0c10] bg-[#23A559]" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-white">Noku</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#commands" className="transition hover:text-white">Commands</a>
          <a href={SUPPORT_URL} className="transition hover:text-white">Support</a>
        </nav>
        <a
          href={INVITE_URL}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1e1f22] shadow-lg transition hover:bg-white/90"
        >
          Invite
          <Plus className="h-4 w-4" />
        </a>
      </header>

      {/* Hero */}
      <section className="hero-glow relative mx-auto max-w-7xl px-6 pb-20 pt-10 md:pt-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1.25fr]"
        >
          <div>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#23A559] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#23A559]" />
                </span>
                Built for Discord communities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-[64px] font-extrabold leading-[0.95] tracking-tight text-white sm:text-[80px] lg:text-[96px]"
            >
              <span className="gradient-text">Noku</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl"
            >
              Cross-server chat, built for Discord communities.
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Connect your server with another live community and start chatting instantly.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                href={INVITE_URL}
                className="group inline-flex items-center gap-2 rounded-full bg-[#5865F2] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#5865F2]/30 transition hover:bg-[#4752C4]"
              >
                <Plus className="h-4 w-4 transition group-hover:rotate-90" />
                Invite Noku
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                href={SUPPORT_URL}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/[0.08]"
              >
                <Inbox className="h-4 w-4" />
                Support Server
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/45">
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Safe controls</span>
              <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> Slash commands</span>
              <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> Real avatars relayed</span>
            </motion.div>
          </div>

          {/* Mockup */}
          <div className="relative">
            <DiscordMockup />
          </div>
        </motion.div>
      </section>

      {/* Native Feel Strip */}
      <section className="relative border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2.5 px-6 py-6 sm:gap-3">
          <Pill icon={Sparkles}>Discord-native</Pill>
          <Pill icon={CircleDot}>Slash commands</Pill>
          <Pill icon={Users}>Real avatar-style relay</Pill>
          <Pill icon={Compass}>Server matching</Pill>
          <Pill icon={ShieldCheck}>Safe controls</Pill>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <motion.h3 variants={fadeUp} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Designed around the Discord experience.
          </motion.h3>
          <motion.p variants={fadeUp} className="mt-3 text-white/60">
            Four simple actions. Zero friction. Feels native to your server.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <FeatureCard icon={Plug} title="Connect" text="Match your server with another community." />
          <FeatureCard icon={MessageSquare} title="Chat" text="Messages appear with usernames and avatars." />
          <FeatureCard icon={SkipForward} title="Skip" text="Move to another server anytime." />
          <FeatureCard icon={ShieldCheck} title="Control" text="Report, block, and end calls easily." />
        </motion.div>
      </section>

      {/* Commands */}
      <section id="commands" className="relative mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 backdrop-blur sm:p-10"
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Commands</h3>
              <p className="mt-1 text-sm text-white/55">Everything from your chat box. No menus.</p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-white/60">
              type / in any channel
            </span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <CommandPill cmd="setup" />
            <CommandPill cmd="call" />
            <CommandPill cmd="skip" />
            <CommandPill cmd="endcall" />
            <CommandPill cmd="report" />
            <CommandPill cmd="blockserver" />
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#5865F2]/25 via-[#7C3AED]/15 to-[#0b0c10] px-8 py-16 text-center sm:px-12 sm:py-20"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[#5865F2]/30 blur-[140px]" />
          </div>
          <h3 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Make your server feel connected.
          </h3>
          <p className="mx-auto mt-4 max-w-md text-white/65">
            One click. Instantly bridged with a live community.
          </p>
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            href={INVITE_URL}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1e1f22] shadow-xl shadow-black/30 transition hover:bg-white/90"
          >
            <Plus className="h-4 w-4 transition group-hover:rotate-90" />
            Invite Noku
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 bg-[#0a0b0e]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <img
              src={NOKU_AVATAR}
              alt="Noku"
              className="h-8 w-8 rounded-lg object-cover ring-1 ring-white/10"
            />
            <p className="text-sm text-white/65">
              Noku — Cross-server chat bot for Discord communities.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/45">
            <a href={INVITE_URL} className="hover:text-white">Invite</a>
            <a href={SUPPORT_URL} className="hover:text-white">Support</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#commands" className="hover:text-white">Commands</a>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-4 text-center text-[11px] text-white/35">
            Noku is an independent Discord bot and is not affiliated with Discord Inc.
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
