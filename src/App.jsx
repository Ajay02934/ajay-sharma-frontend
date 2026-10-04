import { useEffect, useState } from 'react'

const profileImage =
  'https://raw.githubusercontent.com/Ajay02934/ajay-sharma-portfolio/main/4a870363-cebd-4646-aa10-bbf209a86fad.png'

const skills = [
  { name: 'React.js', level: 'Advanced', tag: 'UI' },
  { name: 'JavaScript', level: 'Advanced', tag: 'Logic' },
  { name: 'HTML5 / CSS3', level: 'Advanced', tag: 'Web' },
  { name: 'REST API / AJAX', level: 'Advanced', tag: 'Data' },
  { name: 'Responsive UI', level: 'Advanced', tag: 'UX' },
  { name: 'UI / UX Implementation', level: 'Strong', tag: 'Design' },
  { name: 'Git / Vite', level: 'Strong', tag: 'Tools' },
]

const projects = [
  {
    number: '01',
    title: 'Raghav Jyotish Ujjain',
    type: 'Frontend · Responsive Website',
    description:
      'A service-focused website for astrology and puja services in Ujjain, designed with strong visual hierarchy, clear CTAs and responsive layouts.',
    features: ['Responsive UI', 'Service sections', 'Enquiry flow'],
    image: 'https://raw.githubusercontent.com/Ajay02934/ajay-sharma-frontend/main/Screenshot%20%28692%29.png',
  },
  {
    number: '02',
    title: 'Ujjain Travel',
    type: 'Frontend · Travel Website',
    description:
      'A travel booking experience for local rides, airport transfers and tour packages, with a conversion-focused booking form and mobile-friendly UI.',
    features: ['Booking UI', 'Form interactions', 'Responsive layout'],
    image: 'https://raw.githubusercontent.com/Ajay02934/ajay-sharma-frontend/main/Screenshot%20%28693%29.png',
  },
  {
    number: '03',
    title: 'AI Job Search Agent',
    type: 'Frontend · Dashboard · Web App',
    description:
      'A modern job-search dashboard with job discovery, applications, resumes, settings and search activity presented through a clean dark interface.',
    features: ['Dashboard UI', 'Data cards', 'Job workflow'],
    image: 'https://raw.githubusercontent.com/Ajay02934/ajay-sharma-frontend/main/Screenshot%20%28695%29.png',
  },
]

const experiences = [
  {
    year: '2023 — Present',
    title: 'Frontend Web Developer',
    company: 'Frontend Development Projects',
    text: 'Building production websites and application interfaces with React, JavaScript, HTML and modern CSS, with a focus on clean UX, responsiveness and maintainable frontend code.',
  },
  {
    year: 'Earlier',
    title: 'Frontend Web Developer',
    company: 'Agency & Freelance Work',
    text: 'Worked on responsive websites, interactive UI, API-driven screens, landing pages and frontend improvements across client projects.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const handler = (event) => {
      const target = document.querySelector(event.currentTarget.getAttribute('href'))
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    }
    links.forEach((link) => link.addEventListener('click', handler))
    return () => links.forEach((link) => link.removeEventListener('click', handler))
  }, [])

  return (
    <div className="site-shell">
      <div className="top-line" />

      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="Ajay Sharma home">
          <span className="brand-mark">AS</span>
          <span>
            <strong>Ajay Sharma</strong>
            <small>Frontend Developer</small>
          </span>
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="dot" /> Available for frontend opportunities</p>
            <h1>
              Interfaces that feel
              <span className="accent"> simple.</span>
            </h1>
            <p className="hero-text">
              I’m Ajay — a frontend-focused web developer building fast, responsive and
              thoughtful digital experiences with React, JavaScript and modern CSS.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View selected work <span>↘</span></a>
              <a className="button button-ghost" href="#contact">Get in touch</a>
            </div>
            <div className="hero-meta">
              <span>5+ years experience</span>
              <span>Indore · India</span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="portrait-frame">
              <img src={profileImage} alt="Ajay Sharma" />
              <div className="portrait-tag">
                <span className="tag-pulse" />
                React · JS · UI
              </div>
            </div>
            <div className="floating-card floating-card-top">
              <span className="mini-label">Current focus</span>
              <strong>Frontend craft</strong>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="mini-label">Approach</span>
              <strong>Clean · Fast · Responsive</strong>
            </div>
          </div>
        </section>

        <section className="marquee-strip" aria-label="Technology list">
          <div>
            <span>REACT</span><i>✦</i><span>JAVASCRIPT</span><i>✦</i><span>CSS</span><i>✦</i><span>RESPONSIVE UI</span><i>✦</i><span>API INTEGRATION</span><i>✦</i>
          </div>
        </section>

        <section id="about" className="section two-col">
          <div className="section-heading reveal">
            <p className="section-kicker">01 / About</p>
            <h2>Frontend is where<br /><em>ideas become usable.</em></h2>
          </div>
          <div className="about-copy reveal">
            <p className="lead">
              I like turning complex requirements into interfaces that are easy to understand,
              quick to use and built to last.
            </p>
            <p>
              My experience spans React and JavaScript frontend work, responsive UI, REST APIs,
              modern CSS and production web development. I focus on interfaces that are
              fast, accessible, responsive and easy to maintain — not just pretty screens.
            </p>
            <div className="about-stats">
              <div><strong>5+</strong><span>Years in web development</span></div>
              <div><strong>20+</strong><span>Projects & client builds</span></div>
              <div><strong>∞</strong><span>Curiosity for better UX</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading reveal">
            <p className="section-kicker">02 / Skills</p>
            <h2>A toolkit for<br /><em>real-world UI.</em></h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-card reveal" key={skill.name}>
                <span className="skill-index">0{index + 1}</span>
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
                <span className="skill-tag">{skill.tag}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading work-heading reveal">
            <div>
              <p className="section-kicker">03 / Selected work</p>
              <h2>Built to solve,<br /><em>not just impress.</em></h2>
            </div>
            <p className="heading-note">Real project previews — local services, travel booking and an AI-powered job dashboard.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-image-wrap">
                  <img className="project-image" src={project.image} alt={`${project.title} website preview`} loading="lazy" />
                </div>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-features">
                    {project.features.map((feature) => <span key={feature}>{feature}</span>)}
                  </div>
                </div>
                <div className="project-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading reveal">
            <p className="section-kicker">04 / Experience</p>
            <h2>Experience with<br /><em>the whole picture.</em></h2>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-row reveal" key={item.year + item.title}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-copy">
                  <h3>{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.text}</p>
                </div>
                <span className="timeline-mark">+</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner reveal">
            <p className="section-kicker">05 / Contact</p>
            <h2>Have a frontend<br /><em>problem to solve?</em></h2>
            <p>Let’s build something useful, polished and genuinely easy to use.</p>
            <a className="contact-email" href="mailto:ajaysharmaas.094@gmail.com">ajaysharmaas.094@gmail.com <span>↗</span></a>
            <div className="contact-phone">
              <a href="tel:+917974639689">+91 7974639689</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Ajay Sharma</span>
        <span>Frontend Developer · React · JavaScript · UI</span>
      </footer>
    </div>
  )
}

export default App
