import './styles/main.css'
import './styles/loader.css'
import './styles/responsive.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import { createLoader } from './components/loader.js'
import { createNavbar } from './components/navbar.js'
import { initAnimations } from './animations/animation.js'

gsap.registerPlugin(ScrollTrigger)

// Create loading screen
const loader = createLoader()

// Create website
document.querySelector('#app').innerHTML = `

  ${createNavbar()}

  <main>

    <!-- HERO -->

    <section class="hero" id="home">

      <div class="hero-top">
        <span>PORTFOLIO — 2026</span>
        <span>BASED IN MALAYSIA ↗</span>
      </div>

      <div class="hero-content">

        <p class="hero-intro">HELLO, I'M JASON.</p>

        <h1 class="hero-title">
          BUILDING<br>
          <span>BEYOND</span>
          <span class="outline">LIMITS.</span>
        </h1>

        <div class="hero-bottom">

          <p>
            Developer exploring the intersection
            of software, cybersecurity and data science.
          </p>

          <a href="#projects" class="hero-button">
            EXPLORE MY WORK <span>↘</span>
          </a>

        </div>

      </div>

      <div class="hero-scroll">
        SCROLL TO EXPLORE ↓
      </div>

    </section>


    <!-- ABOUT -->

    <section class="section about" id="about">

      <p class="section-label">01 — ABOUT ME</p>

      <div class="about-content">

        <h2>
          Curious mind.<br>
          <span>Technical mindset.</span><br>
          Endless possibilities.
        </h2>

        <p>
          I'm a Computer Science student passionate about
          software development, cybersecurity and data science.

          I enjoy turning ideas into practical digital solutions
          and continuously improving my technical skills.
        </p>

      </div>

    </section>


    <!-- PROJECTS -->

    <section class="section projects" id="projects">

      <p class="section-label">02 — SELECTED WORK</p>

      <h2>Things I've <span>built.</span></h2>

      <article class="project-card">

        <div class="project-info">
          <span>01 / WEB DEVELOPMENT</span>
          <span>2026</span>
        </div>

        <h3>SmartShop <span>↗</span></h3>

        <p>Smart Shopping Platform</p>

        <div class="project-tech">
          PYTHON / FLASK / SQLITE / JAVASCRIPT
        </div>

      </article>


      <article class="project-card">

        <div class="project-info">
          <span>02 / CYBERSECURITY</span>
          <span>IN DEVELOPMENT</span>
        </div>

        <h3>Security Analyzer <span>↗</span></h3>

        <p>Cybersecurity & Data Analysis Tool</p>

        <div class="project-tech">
          PYTHON / DATA ANALYSIS
        </div>

      </article>

    </section>


    <!-- SKILLS -->

    <section class="section skills" id="skills">

      <p class="section-label">03 — TECHNOLOGIES</p>

      <h2>My technical <span>toolkit.</span></h2>

      <div class="skills-list">
        <span>PYTHON</span>
        <span>JAVASCRIPT</span>
        <span>HTML / CSS</span>
        <span>FLASK</span>
        <span>SQL</span>
        <span>GIT / GITHUB</span>
      </div>

    </section>


    <!-- CONTACT -->

    <section class="section contact" id="contact">

      <p class="section-label">04 — CONTACT</p>

      <h2>
        Let's create<br>
        something <span>great.</span>
      </h2>

      <a href="mailto:YOUR_EMAIL@example.com">
        GET IN TOUCH ↗
      </a>

    </section>

  </main>


  <footer>
    <span>© 2026 JASON</span>
    <span>DESIGNED & DEVELOPED BY JASON</span>
    <a href="#home">BACK TO TOP ↑</a>
  </footer>

  <div class="cursor-glow"></div>

`

// Smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// Initialize animations
initAnimations(loader)