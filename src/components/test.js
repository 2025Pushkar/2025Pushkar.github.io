// File: pages/about.tsx
import React, { useState, useEffect, useRef } from 'react'
import { NextSeo } from 'next-seo'
import {
  ChevronRight,
  Download,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Database,
  Brain,
  Cloud,
  ExternalLink,
  Sun,
  Moon,
} from 'lucide-react'

// ——————————————————————————————————————————————
// Hook: Dark Mode Toggle (with localStorage persistence)
// ——————————————————————————————————————————————
function useDarkMode() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])
  const toggle = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }
  return { theme, toggle }
}

// ——————————————————————————————————————————————
// Data: Experiences (with date + location)
// ——————————————————————————————————————————————
type Experience = {
  title: string
  company: string
  date: string
  location: string
  description: string
  tech: string[]
}
const experiences: Experience[] = [
  {
    title: 'Graduate Software Developer Intern',
    company: 'Regeneron',
    date: 'May 2025 – Present',
    location: 'Sleepy Hollow, NY',
    description:
      'Architected an AI-driven analytics platform (Snowflake, Snowpark, Cortex LLM), reducing query latency by 70% and automating insights for commercial teams.',
    tech: ['Python', 'AI/ML', 'Snowflake', 'Streamlit'],
  },
  {
    title: 'Graduate Software Developer Intern',
    company: 'Binghamton University',
    date: 'Jan 2025 – May 2025',
    location: 'Binghamton, NY',
    description:
      'Built a scalable micro-internship platform (Next.js, TypeScript, PostgreSQL), implemented ML-powered candidate ranking, secure multi-role auth, and Dockerized deployment.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Python', 'Docker'],
  },
  {
    title: 'Data Engineer',
    company: 'KrtrimaIQ Cognitive Solutions',
    date: 'Jun 2024 – Dec 2024',
    location: 'Remote',
    description:
      'Led full-stack development of company website and digital assistants, built robust ETL pipelines (Azure Data Factory, SCD), and engineered dashboards handling 60,000+ rows.',
    tech: ['React.js', 'Next.js', 'Python', 'Azure', 'ETL'],
  },
  {
    title: 'Implementation Consultant',
    company: 'Alvaria Inc.',
    date: 'Jan 2023 – May 2024',
    location: 'Rockville, MD',
    description:
      'Implemented cloud-based Workforce Management Systems for enterprise clients; wrote complex SQL scripts for data analysis and migration.',
    tech: ['SQL', 'Cloud', 'Client Support'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Spookfish Innovations',
    date: 'Jun 2022 – Dec 2022',
    location: 'Albany, NY',
    description:
      'Developed sorting algorithms and ML models in C++ for coin classification, achieving 95% accuracy.',
    tech: ['C++', 'Machine Learning'],
  },
]

// ——————————————————————————————————————————————
// Data: Projects / Case Studies
// ——————————————————————————————————————————————
type Project = {
  title: string
  role: string
  tech: string[]
  overview: string
  impact: string
  links: { github?: string; live?: string }
}
const projects: Project[] = [
  {
    title: 'Micro-Internship Platform',
    role: 'Graduate Full-Stack Developer',
    tech: ['Next.js', 'PostgreSQL', 'Docker', 'FastAPI', 'OAuth2'],
    overview:
      'A web platform matching students to short-term projects, with role-based access, secure auth, and ML-powered candidate ranking.',
    impact:
      'Enabled Binghamton University to onboard +100 micro-interns per semester; reduced manual vetting time by 60%.',
    links: { github: 'https://github.com/youruser/micro-internship', live: 'https://microinterns.com' },
  },
  {
    title: 'Regeneron Analytics Portal',
    role: 'Data Engineer Intern',
    tech: ['Snowflake', 'Snowpark', 'Streamlit', 'Python', 'YAML'],
    overview:
      'Interactive dashboard letting non-technical teams query datasets in natural language and generate anomaly reports.',
    impact:
      'Automated KPI reporting; saved 15+ hours/week for commercial stakeholders.',
    links: { github: '', live: '' },
  },
  // …add more as desired
]

// ——————————————————————————————————————————————
// Main Component
// ——————————————————————————————————————————————
const AboutPage: React.FC = () => {
  const { theme, toggle } = useDarkMode()
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'experience' | 'projects'>('overview')

  // refs for scroll-spy
  const overviewRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const expRef = useRef<HTMLElement>(null)
  const projRef = useRef<HTMLElement>(null)

  // IntersectionObserver → update activeTab
  useEffect(() => {
    const sections = [
      { id: 'overview', ref: overviewRef },
      { id: 'skills', ref: skillsRef },
      { id: 'experience', ref: expRef },
      { id: 'projects', ref: projRef },
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveTab(e.target.id as any)
          }
        })
      },
      { rootMargin: '0px', threshold: 0.5 }
    )
    sections.forEach((s) => s.ref.current && observer.observe(s.ref.current))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <NextSeo
        title="About | Pushkar Wani"
        description="Full-Stack Developer & Data Engineer portfolio—skills, experience, and projects."
        openGraph={{
          url: 'https://yourdomain.com/about',
          title: 'About | Pushkar Wani',
          description: 'Full-Stack Developer & Data Engineer portfolio—skills, experience, and projects.',
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-slate-900 dark:text-slate-100">
        {/* Header with Dark-Mode Toggle */}
        <header className="flex justify-end p-4">
          <button
            onClick={toggle}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
          {/* Hero & Download */}
          <section className="text-center space-y-4">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Full-Stack Developer & Data Engineer
            </p>
            <button
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/Pushkar_Pramod_Wani.pdf'
                link.download = 'Pushkar_Pramod_Wani.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              aria-label="Download résumé"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Download className="w-5 h-5" />
              Download Résumé
            </button>
          </section>

          {/* Tabs */}
          <nav aria-label="About sections" className="border-b border-slate-200">
            <ul className="flex space-x-4">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
              ].map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => {
                      setActiveTab(tab.id as any)
                      document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                    className={`px-4 py-2 font-medium ${
                      activeTab === tab.id
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-slate-600 hover:text-blue-600'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Overview */}
          <section id="overview" ref={overviewRef} className="space-y-4" tabIndex={-1}>
            {['Hi, I’m Pushkar Wani—a passionate Full-Stack Developer and Data Engineer…',
              'With a strong foundation in Python, React.js, Next.js, and PostgreSQL…',
              'Currently, I’m a Graduate Software Developer Intern at Regeneron…',
              'I believe that great software is about more than just code…',
              'When I’m not coding, you’ll find me hiking or exploring new tech trends…'
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p>{line}</p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section id="skills" ref={skillsRef} className="grid md:grid-cols-2 gap-6" tabIndex={-1}>
            {[
              { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript'], icon: <Code className="w-5 h-5" /> },
              { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL'], icon: <Database className="w-5 h-5" /> },
              { category: 'Cloud & Data', items: ['AWS', 'GCP', 'Azure', 'Snowflake'], icon: <Cloud className="w-5 h-5" /> },
              { category: 'AI/ML', items: ['Machine Learning', 'MLOps', 'LLM Integration'], icon: <Brain className="w-5 h-5" /> },
            ].map((grp) => (
              <div
                key={grp.category}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-blue-100 rounded">{grp.icon}</div>
                  <h3 className="font-semibold">{grp.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {grp.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section id="experience" ref={expRef} className="space-y-8" tabIndex={-1}>
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-6">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p className="text-sm text-slate-500">
                      <MapPin className="inline w-4 h-4 mr-1 align-text-bottom" />
                      {exp.location}
                    </p>
                  </div>
                  <time className="text-sm text-slate-400">{exp.date}</time>
                </div>
                <p className="mt-2">{exp.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-blue-100 rounded-full text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section id="projects" ref={projRef} className="space-y-8" tabIndex={-1}>
            {projects.map((p, i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-1">{p.title}</h4>
                <p className="text-sm text-slate-500 mb-2">{p.role}</p>
                <p className="mb-2"><strong>Overview:</strong> {p.overview}</p>
                <p className="mb-4"><strong>Impact:</strong> {p.impact}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-slate-100 rounded-full text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo for ${p.title}`}
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" /> Code
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo of ${p.title}`}
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  )
}

export default AboutPage
