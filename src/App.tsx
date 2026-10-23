import { useEffect, useRef, useState } from "react"
import logo from "/public/campfire_logo.svg"
import heroVideo from "/public/loop.mp4"

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={down ? "arrow-down" : undefined}
    >
      <path
        d="M4 12h15M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function VideoIllustration() {
  return (
    <div className="service-art video-art" aria-hidden="true">
      <div className="art-orbit" />
      <div className="storyboard storyboard-back">
        <span>01 / THE IDEA</span>
        <div className="storyboard-landscape">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="storyboard storyboard-front">
        <div className="storyboard-top">
          <span>THE STORY COMES TO LIFE</span>
          <span className="record-dot" />
        </div>
        <div className="storyboard-screen">
          <span className="play-symbol" />
          <div className="screen-sun" />
          <div className="screen-hill" />
          <div className="screen-hill second" />
        </div>
        <div className="timeline">
          <span />
          <span />
          <span />
          <span />
          <i />
        </div>
      </div>
      <span className="art-note">
        A little perspective. A lot of possibility.
      </span>
      <svg className="art-spark" width="39" height="39" viewBox="0 0 40 40">
        <path
          d="m20 1 1 14L32 6l-8 12 15 2-15 2 8 12-11-9-1 14-2-14-11 9 8-12-14-2 14-2L7 6l11 9Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

function AiTrainingIllustration() {
  return (
    <div className="service-art software-art" aria-hidden="true">
      <div className="code-grid" />
      <div className="browser-art">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <i>something-good.app</i>
        </div>
        <div className="browser-content">
          <div className="code-panel">
            <span className="code-comment">// make AI useful</span>
            <span>
              <b>const</b> learning = &#123;
            </span>
            <span className="code-indent">
              thoughtful: <em>true</em>,
            </span>
            <span className="code-indent">
              builtFor: <em>"people"</em>,
            </span>
            <span className="code-indent">
              readyFor: <em>"what's next"</em>
            </span>
            <span>&#125;</span>
            <span className="code-last">practiceTogether(learning)</span>
          </div>
          <div className="interface-panel">
            <span className="interface-label" />
            <span className="interface-title" />
            <span className="interface-line" />
            <span className="interface-line short" />
            <div className="interface-blocks">
              <span />
              <span />
            </div>
            <span className="interface-button" />
          </div>
        </div>
      </div>
      <div className="build-badge">
        <span>✓</span> Learn it. Use it. Make it yours.
      </div>
    </div>
  )
}

const steps = [
  {
    number: "01",
    title: "Gather around.",
    text: "We listen first. Tell us where you are, where you want to go, and what's getting in the way.",
  },
  {
    number: "02",
    title: "Find the direction.",
    text: "Together, we turn the big picture into a clear plan, with the right approach for your goals.",
  },
  {
    number: "03",
    title: "Make it happen.",
    text: "We roll up our sleeves, keep you in the loop, and bring your project to life with care.",
  },
]

function App() {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const syncMotion = () => {
      if (motion.matches) video.current?.pause()
      else void video.current?.play().catch(() => {})
    }
    syncMotion()
    motion.addEventListener("change", syncMotion)
    return () => motion.removeEventListener("change", syncMotion)
  }, [])

  const toggleVideo = () => {
    if (video.current?.paused) void video.current.play().catch(() => {})
    else video.current?.pause()
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Campfire Firm home">
          <img src={logo} alt="" />
          <span>
            campfire <span className="brand-firm">FIRM</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "Close" : "Menu"}
          <span>{menuOpen ? "−" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          className={menuOpen ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          <a href="#services" onClick={() => setMenuOpen(false)}>
            What we do
          </a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>
            How we work
          </a>
          <a
            className="nav-contact"
            href="mailto:hello@campfirefirm.com"
            onClick={() => setMenuOpen(false)}
          >
            Let's talk <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <video
            ref={video}
            className="hero-video"
            src={heroVideo}
            poster="/hero-poster.jpg"
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">
              {/* <span /> Creative thinking. Thoughtful building. */}
            </p>
            <h1 id="hero-title">
              Big ideas.
              <br />
              Good company.
            </h1>
            <p className="hero-description">
              A creative and technical partner to bring it all to life.
            </p>
            <a
              className="button button-coral"
              href="mailto:hello@campfirefirm.com"
            >
              Let's make something <Arrow />
            </a>
          </div>
          <div className="hero-bottom">
            <span>VIDEO + AI TRAINING</span>
            <a href="#services">
              A little more about us <Arrow down />
            </a>
          </div>
          <button
            className="video-toggle"
            type="button"
            onClick={toggleVideo}
            aria-label={
              playing ? "Pause background video" : "Play background video"
            }
            title={playing ? "Pause background video" : "Play background video"}
          >
            {playing ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  d="M4 2v10M10 2v10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path d="m4 2 8 5-8 5Z" fill="currentColor" />
              </svg>
            )}
          </button>
        </section>

        <section
          className="intro-section section-shell"
          aria-label="Meet Campfire Firm"
        >
          <p className="eyebrow section-label">A spark is all it takes.</p>
          <div>
            <h2>
              Some ideas need a storyteller.
              <br />
              Some need a builder.
              <br />
              <span>We bring both to the table.</span>
            </h2>
            <p>
              Campfire Firm brings video development and AI training together.
              We bring creative curiosity and practical know-how to the same
              conversation, helping you turn “what if” into something real.
            </p>
          </div>
        </section>

        <section
          className="services-section section-shell"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-label">What we do</p>
              <h2 id="services-title">
                A creative partner.
              </h2>
            </div>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <VideoIllustration />
              <div className="service-copy">
                <div className="service-title">
                  <h3>Stories that connect.</h3>
                  <span className="service-number">01</span>
                </div>
                <p className="service-subtitle">Video development</p>
                <p>
                  Bring your story into focus. From the first idea to the final
                  edit, we help turn complex ideas into clear, compelling video.
                </p>
                <ul className="service-tags" aria-label="Video services">
                  <li>Creative development</li>
                  <li>Production</li>
                  <li>Post-production</li>
                </ul>
                <a
                  className="text-link"
                  href="mailto:hello@campfirefirm.com?subject=Let%E2%80%99s%20talk%20video"
                >
                  Let's tell your story <Arrow />
                </a>
              </div>
            </article>
            <article className="service-card">
              <AiTrainingIllustration />
              <div className="service-copy">
                <div className="service-title">
                  <h3>AI that works for people.</h3>
                  <span className="service-number">02</span>
                </div>
                <p className="service-subtitle">
                  AI training
                </p>
                <p>
                  Make the complex feel approachable. We help your team
                  understand AI, use it thoughtfully, and put it to work on
                  real tasks.
                </p>
                <ul className="service-tags" aria-label="AI training services">
                  <li>Team workshops</li>
                  <li>AI fundamentals</li>
                  <li>Practical workflows</li>
                </ul>
                <a
                  className="text-link"
                  href="mailto:hello@campfirefirm.com?subject=Let%E2%80%99s%20talk%20AI%20training"
                >
                  Let's learn together <Arrow />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section
          className="approach-section"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-label">How we work</p>
                <h2 id="approach-title">
                  Good work starts
                  <br />
                  with a conversation.
                </h2>
              </div>
              <p>
                Consider us part of your team. We ask good questions, speak
                plainly, and care about the details. You bring the vision; we'll
                help find the way forward.
              </p>
            </div>
            <div className="steps">
              {steps.map((step) => (
                <article className="step" key={step.number}>
                  <span className="step-number">
                    {step.number}
                    <span />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="approach-note">
              <span className="small-spark">✳</span> We're here to help you succeed.
            </div>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-copy">
            <p className="eyebrow">There's room around the fire.</p>
            <h2 id="contact-title">
              Bring your spark.
              <br />
              Let's make it <em>real.</em>
            </h2>
            <p>
              A new project, a tricky challenge, or just the start of an idea.
              <br className="desktop-break" /> We'd love to hear what you're
              thinking.
            </p>
            <a
              className="button button-cream"
              href="mailto:hello@campfirefirm.com"
            >
              Say hello <Arrow />
            </a>
            <a className="contact-email" href="mailto:hello@campfirefirm.com">
              hello@campfirefirm.com
            </a>
          </div>
          <div className="contact-illustration" aria-hidden="true">
            <div className="contact-orbit orbit-one" />
            <div className="contact-orbit orbit-two" />
            <div className="contact-orbit orbit-three" />
            <span className="contact-star star-one">✳</span>
            <span className="contact-star star-two">✳</span>
            <span className="contact-dot" />
            <img src="/animation.gif" alt="" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a
          className="brand footer-brand"
          href="#"
          aria-label="Campfire Firm home"
        >
          <img src={logo} alt="" />
          <span>
            campfire<span className="brand-firm">FIRM</span>
          </span>
        </a>
        <p>Creative minds. Practical magic.</p>
        <span className="copyright">
          © {new Date().getFullYear()} Campfire Firm
        </span>
        <a href="#main" className="back-to-top" aria-label="Back to top">
          <Arrow down />
        </a>
      </footer>
    </>
  )
}

export default App
