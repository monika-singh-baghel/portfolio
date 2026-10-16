import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Code2, Mail, Copy, Check, Download, ExternalLink, Menu, X, ArrowRight, GraduationCap, Briefcase, Award, Video, Mic, MonitorUp, MessageSquare, ChevronDown, Phone, MapPin, Sun, Moon, Send } from 'lucide-react'
import { profile, links, skills, projects, timeline, certs } from './data'

const nav = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']
const btn = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5'
const primary = `${btn} bg-gradient-to-r from-violet to-indigo-500 text-[#ffffff] shadow-lg shadow-violet/25 hover:shadow-violet/40`
const ghost = `${btn} border border-line bg-panel text-slate-200 hover:border-violet/60`

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay, ease: 'easeOut' }}>{children}</motion.div>
  )
}
function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <Reveal><p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h2></Reveal>
      <div className="mt-10">{children}</div>
    </section>
  )
}
const Chip = ({ children }: { children: ReactNode }) => <span className="rounded-lg border border-line bg-ink/60 px-2.5 py-1 font-mono text-xs text-slate-300">{children}</span>

function ThemeToggle() {
  const [light, setLight] = useState(() => document.documentElement.classList.contains('light'))
  const toggle = () => { const next = !light; setLight(next); document.documentElement.classList.toggle('light', next); try { localStorage.setItem('theme', next ? 'light' : 'dark') } catch { /* ignore */ } }
  return <button onClick={toggle} aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'} title={light ? 'Dark mode' : 'Light mode'}
    className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel text-slate-400 transition hover:border-violet/60 hover:text-violet">{light ? <Moon size={18} /> : <Sun size={18} />}</button>
}

function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const f = () => setScrolled(window.scrollY > 16); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'border-b border-line bg-ink/85 backdrop-blur' : ''}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-3 font-semibold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet/60 bg-panel text-sm font-extrabold grad-text">MS</span>
          <span className="hidden sm:block">Monika Singh</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map(n => <li key={n}><a href={`#${n.toLowerCase()}`} className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-panel hover:text-white">{n}</a></li>)}
          <li className="ml-2"><ThemeToggle /></li>
          <li className="ml-1"><a href={profile.resume} download="Monika_Singh_Resume.pdf" className={`${primary} !py-2`}><Download size={16} />Resume</a></li>
        </ul>
        <div className="flex items-center gap-2 md:hidden"><ThemeToggle />
          <button className="rounded-lg p-2 text-white" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      </nav>
      {open && <ul className="space-y-1 border-t border-line px-5 pb-5 pt-3 md:hidden">
        {nav.map(n => <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-panel">{n}</a></li>)}
        <li><a href={profile.resume} download="Monika_Singh_Resume.pdf" className={`${primary} w-full`}><Download size={16} />Download Resume</a></li></ul>}
    </header>
  )
}

function Ambient() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const move = (e: PointerEvent) => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { ref.current?.style.setProperty('--mx', e.clientX + 'px'); ref.current?.style.setProperty('--my', e.clientY + 'px') }) }
    window.addEventListener('pointermove', move, { passive: true })
    return () => { window.removeEventListener('pointermove', move); cancelAnimationFrame(raf) }
  }, [])
  return <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"><div className="aurora a1" /><div className="aurora a2" /><div className="grid-bg" /><div ref={ref} className="spot" /></div>
}
function Socials({ className = '' }: { className?: string }) {
  const items = [[links.linkedin, Linkedin, 'LinkedIn'], [links.github, Github, 'GitHub'], [links.leetcode, Code2, 'LeetCode']] as const
  return <div className={`flex gap-2 ${className}`}>{items.map(([h, I, l]) => <a key={l} href={h} target="_blank" rel="noopener noreferrer" aria-label={l}
    className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel text-slate-400 transition hover:border-cyan/60 hover:text-cyan"><I size={18} /></a>)}</div>
}

function PhotoCard() {
  const k = (t: string) => <span className="text-violet">{t}</span>, s = (t: string) => <span className="text-cyan">{t}</span>
  return (
    <div className="relative mx-auto w-full max-w-sm pb-8 lg:max-w-md">
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-violet via-indigo-500 to-cyan opacity-50 blur-xl" aria-hidden />
      <div className="relative rounded-[2rem] bg-gradient-to-tr from-violet via-indigo-500 to-cyan p-[2px]">
        <img src="/monika.jpg" alt="Portrait of Monika Singh" width={800} height={1000} className="aspect-[4/5] w-full rounded-[1.9rem] object-cover object-top" />
      </div>
      <div className="absolute -bottom-0 -left-2 w-60 rounded-xl border border-line bg-panel/95 p-3 font-mono text-[12px] leading-6 text-slate-300 shadow-xl sm:-left-10">
        <div>{k('const')} monika = {'{'}</div>
        <div>&nbsp;&nbsp;role: {s("'Full-Stack Dev'")},</div>
        <div>&nbsp;&nbsp;stack: [{s("'React'")}, {s("'Node.js'")}],</div>
        <div>{'}'}</div>
      </div>
    </div>
  )
}
function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-2">
      <Reveal>
        <p className="font-mono text-sm text-cyan">Hi, I'm Monika Singh</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">Building digital experiences. <span className="grad-text">Solving real problems.</span></h1>
        <p className="mt-5 text-lg text-slate-300">Computer Science Engineering student and aspiring Software Engineer / Full-Stack Developer at Chandigarh University.</p>
        <p className="mt-3 max-w-xl text-slate-400">I enjoy problem-solving with C++ and data structures, and turning ideas into useful web software, from complaint tracking to real-time video meetings.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={primary}>Explore My Projects <ArrowRight size={16} /></a>
          <a href={profile.resume} download="Monika_Singh_Resume.pdf" className={ghost}><Download size={16} />Download Resume</a></div>
        <Socials className="mt-8" />
      </Reveal>
      <Reveal delay={0.15}><PhotoCard /></Reveal>
    </section>
  )
}
function About() {
  return (
    <Section id="about" eyebrow="About" title="A problem-solver who ships">
      <div className="grid gap-8 md:grid-cols-5">
        <Reveal className="space-y-4 text-slate-400 md:col-span-3">
          <p>{profile.summary}</p>
          <p>I'm pursuing a B.E. in Computer Science at Chandigarh University. I've built full-stack apps with React, Node.js, Express and MongoDB, completed a web development internship, and explored data analysis with Python during a data science internship.</p>
          <p>I'm looking for software engineering and full-stack roles where I can keep learning while building practical applications.</p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="rounded-2xl border border-line bg-panel p-6">
            <img src="/monika.jpg" alt="Monika Singh" width={64} height={80} loading="lazy" className="h-20 w-16 rounded-2xl border border-violet/50 object-cover object-top" />
            <dl className="mt-5 space-y-3 text-sm">
              <div><dt className="text-slate-500">Education</dt><dd className="text-white">B.E. Computer Science, Chandigarh University</dd></div>
              <div><dt className="text-slate-500">CGPA</dt><dd className="text-white">8.67</dd></div>
              <div><dt className="text-slate-500">Languages</dt><dd className="text-white">English, Hindi</dd></div>
              <div><dt className="text-slate-500">Based in</dt><dd className="text-white">{profile.location}</dd></div>
            </dl></div>
        </Reveal>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((c, i) => <Reveal key={c.title} delay={i * 0.05}>
          <div className="h-full rounded-2xl border border-line bg-panel p-5 transition hover:border-violet/50">
            <h3 className="font-semibold text-white">{c.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{c.items.map(t => <Chip key={t}>{t}</Chip>)}</div></div></Reveal>)}
      </div>
    </Section>
  )
}

function Frame({ url, children }: { url: string; children: ReactNode }) {
  return <div className="overflow-hidden rounded-xl border border-line bg-ink">
    <div className="flex items-center gap-2 border-b border-line px-3 py-2"><i className="h-2.5 w-2.5 rounded-full bg-slate-700" /><i className="h-2.5 w-2.5 rounded-full bg-slate-700" /><i className="h-2.5 w-2.5 rounded-full bg-slate-700" />
      <span className="ml-2 truncate rounded bg-panel px-2 py-0.5 font-mono text-[10px] text-slate-500">{url}</span></div>{children}</div>
}
function SyncMock() {
  return <Frame url="syncmeet · meeting room"><div className="p-3">
    <div className="grid grid-cols-2 gap-2">{['MS', 'A', 'B', 'C'].map((n, i) => <div key={n + i} className={`grid h-20 place-items-center rounded-lg border ${i === 0 ? 'border-cyan/60' : 'border-line'} bg-panel text-sm font-bold text-slate-400`}>{n}</div>)}</div>
    <div className="mt-3 flex justify-center gap-2 text-slate-300">{[Mic, Video, MonitorUp, MessageSquare].map((I, i) => <span key={i} className="grid h-8 w-8 place-items-center rounded-full border border-line bg-panel"><I size={14} /></span>)}</div></div></Frame>
}

function Projects() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Things I've built">
      <div className="space-y-8">
        {projects.map((p, i) => <Reveal key={p.id} delay={i * 0.08}>
          <article className="group overflow-hidden rounded-3xl border border-line bg-panel/60 p-5 transition hover:border-violet/50 md:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="transition duration-300 group-hover:-translate-y-1">{p.image ? <Frame url={({ govai: 'govai-complaint-system.vercel.app', syncmeet: 'syncmeet · landing page', dsa: 'dsa-instructor-ai-l45d.onrender.com', traffic: 'monika-singh-baghel-traffic-analyser.streamlit.app' } as Record<string, string>)[p.id]}><img src={p.image} alt={p.imageAlt} loading="lazy" className="block w-full" /></Frame> : <SyncMock />}
                {!p.image && <p className="mt-2 text-center text-[11px] text-slate-600">Illustrative interface preview, not a live screenshot</p>}</div>
              <div>
                <p className="font-mono text-xs text-cyan">{p.category}{p.period ? ` · ${p.period}` : ''}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-slate-400">{p.problem}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-slate-300">{p.features.map(f => <li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-violet" />{f}</li>)}</ul>
                <div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <Chip key={t}>{t}</Chip>)}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.demo ? <a href={p.demo} target="_blank" rel="noopener noreferrer" className={primary}>View Live Demo <ExternalLink size={16} /></a>
                    : <span className={`${ghost} cursor-not-allowed opacity-60`} title="Add the URL in src/data.ts">Live demo: add URL in data.ts</span>}
                  <a href={p.repo || links.github} target="_blank" rel="noopener noreferrer" className={ghost}><Github size={16} />{p.repo ? 'View Source Code' : 'GitHub Profile'}</a>
                  <button onClick={() => setOpen(open === p.id ? null : p.id)} aria-expanded={open === p.id} className={ghost}>Case study <ChevronDown size={16} className={open === p.id ? 'rotate-180' : ''} /></button>
                </div></div></div>
            {open === p.id && <div className="mt-8 grid gap-6 border-t border-line pt-6 md:grid-cols-2">
              <div><h4 className="font-semibold text-white">Problem & solution</h4><p className="mt-2 text-sm text-slate-400">{p.problem} I built it end to end with {p.tech.slice(0, 4).join(', ')}.</p>
                <h4 className="mt-5 font-semibold text-white">My contribution</h4><p className="mt-2 text-sm text-slate-400">Designed and implemented the application, as listed in the resume bullets above.</p></div>
              <div><h4 className="font-semibold text-white">Data flow</h4>
                <ol className="mt-3 space-y-2">{p.flow.map((f, n) => <li key={f} className="flex items-center gap-3 text-sm"><span className="grid h-6 w-6 place-items-center rounded-full bg-violet/20 font-mono text-xs text-violet">{n + 1}</span>{f}</li>)}</ol></div></div>}
          </article></Reveal>)}
      </div>
    </Section>
  )
}

function Experience() {
  const icon = { edu: GraduationCap, work: Briefcase }
  return (
    <Section id="experience" eyebrow="Experience & Education" title="My journey so far">
      <ol className="relative space-y-6 border-l border-line pl-8">
        {timeline.map((t, i) => { const I = icon[t.kind as 'edu' | 'work']; return <Reveal key={t.role} delay={i * 0.06}><li className="relative">
          <span className="absolute -left-[3.15rem] grid h-9 w-9 place-items-center rounded-full border border-violet/50 bg-ink text-violet"><I size={16} /></span>
          <div className="rounded-2xl border border-line bg-panel p-5"><p className="font-mono text-xs text-cyan">{t.date}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{t.role}</h3><p className="text-sm text-slate-400">{t.org}</p><p className="mt-2 text-sm text-slate-400">{t.note}</p></div></li></Reveal> })}
      </ol>
      <h3 className="mb-5 mt-16 text-xl font-bold text-white">Certifications, achievements & involvement</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{certs.map((c, i) => <Reveal key={c.title} delay={i * 0.05}>
        <div className="h-full rounded-2xl border border-line bg-panel p-5"><Award className="text-violet" size={20} /><h4 className="mt-3 font-semibold text-white">{c.title}</h4>
          <p className="text-xs text-cyan">{c.org}</p><p className="mt-2 text-sm text-slate-400">{c.note}</p></div></Reveal>)}</div>
      <h3 className="mb-5 mt-16 text-xl font-bold text-white">Coding profiles</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{([['GitHub', links.github, Github], ['LeetCode', links.leetcode, Code2], ['Codolio', links.codolio, Code2], ['GeeksforGeeks', links.gfg, Code2], ['Codeforces', links.codeforces, Code2], ['CodeChef', links.codechef, Code2], ['HackerRank', links.hackerrank, Code2], ['LinkedIn', links.linkedin, Linkedin]] as const).map(([n, h, I]) =>
        <a key={n} href={h} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-line bg-panel p-4 text-white transition hover:-translate-y-1 hover:border-cyan/60">
          <span className="flex items-center gap-2"><I size={18} className="text-cyan" />{n}</span><ExternalLink size={14} className="text-slate-600 group-hover:text-cyan" /></a>)}</div>
    </Section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const [f, setF] = useState({ name: '', email: '', msg: '' })
  const copy = async () => { try { await navigator.clipboard.writeText(profile.email) } catch { const t = document.createElement('textarea'); t.value = profile.email; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove() } setCopied(true); setTimeout(() => setCopied(false), 2000) }
  const submit = (e: React.FormEvent) => { e.preventDefault()
    const body = `${f.msg}\n\n${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + f.name)}&body=${encodeURIComponent(body)}` }
  const field = 'mt-1.5 w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-violet focus:outline-none'
  const card = 'flex items-center gap-4 rounded-2xl border border-line bg-panel p-4 transition hover:border-violet/50'
  const ico = 'grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet/15 text-violet'
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal><p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Contact</p>
        <h2 className="mt-2 text-3xl font-extrabold text-white md:text-5xl">Get in <span className="grad-text">touch</span></h2>
        <p className="mt-4 max-w-xl text-slate-400">Have an interesting opportunity? Recruiters and collaborators are welcome to reach out. I'd love to hear from you.</p></Reveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Reveal className="space-y-3">
          <div className={card}><span className={ico}><Mail size={20} /></span>
            <div className="min-w-0 flex-1"><p className="text-xs text-slate-500">Email</p><a href={`mailto:${profile.email}`} className="block truncate text-white hover:text-violet">{profile.email}</a></div>
            <button onClick={copy} aria-label="Copy email address" className="rounded-lg border border-line p-2 text-slate-400 hover:text-cyan" aria-live="polite">{copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}</button></div>
          <div className={card}><span className={ico}><Phone size={20} /></span><div><p className="text-xs text-slate-500">Phone</p><a href={`tel:${profile.phone}`} className="text-white hover:text-violet">{profile.phone}</a></div></div>
          <div className={card}><span className={ico}><MapPin size={20} /></span><div><p className="text-xs text-slate-500">Location</p><p className="text-white">{profile.location}</p></div></div>
          <div className="flex gap-3 pt-2">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={ghost}><Linkedin size={16} />LinkedIn</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className={ghost}><Github size={16} />GitHub</a></div>
          {copied && <p className="text-sm text-emerald-400" role="status">Email copied to clipboard</p>}
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="rounded-2xl border border-line bg-panel p-6">
            <label className="block text-sm text-slate-300">Your name<input required value={f.name} onChange={e => setF({ ...f, name: e.target.value })} className={field} placeholder="Jane Doe" autoComplete="name" /></label>
            <label className="mt-4 block text-sm text-slate-300">Your email<input required type="email" value={f.email} onChange={e => setF({ ...f, email: e.target.value })} className={field} placeholder="jane@company.com" autoComplete="email" /></label>
            <label className="mt-4 block text-sm text-slate-300">Message<textarea required rows={5} value={f.msg} onChange={e => setF({ ...f, msg: e.target.value })} className={field} placeholder="Tell me about the opportunity..." /></label>
            <button type="submit" className={`${primary} mt-5 w-full`}><Send size={16} />Send Message</button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 md:flex-row">
        <div className="text-center md:text-left"><p className="font-semibold text-white">Monika Singh</p><p className="text-sm text-slate-500">CS student building useful full-stack software.</p></div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-white">{n}</a>)}</nav>
        <Socials />
      </div>
      <p className="pb-6 text-center text-xs text-slate-600">© {new Date().getFullYear()} Monika Singh</p>
    </footer>
  )
}

export default function App() {
  return <><Ambient /><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main><Footer /></>
}
