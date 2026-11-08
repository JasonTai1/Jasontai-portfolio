import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initAnimations(loader) {

  // =================================
  // 1. LOADING ANIMATION
  // =================================

  const progress = { value: 0 }

  const timeline = gsap.timeline()

  timeline.to(progress, {
    value: 100,
    duration: 6,
    ease: 'power1.inOut',

    onUpdate: () => {

      const percentage = Math.round(progress.value)

      const number = String(percentage).padStart(3, '0')

      const numberElement = loader.querySelector('.loader-number')
      const progressBar = loader.querySelector('.loader-progress-bar')

      if (numberElement) {
        numberElement.textContent = `${number}%`
      }

      if (progressBar) {
        gsap.set(progressBar, {
          width: `${percentage}%`
        })
      }

    }

  })

  .to('.loader-inner', {
    opacity: 0,
    y: -30,
    duration: 0.5
  })

  .to(loader, {
    yPercent: -100,
    duration: 1,
    ease: 'power4.inOut'
  })

  .set(loader, {
    display: 'none'
  })

  // =================================
  // 2. HERO ANIMATION
  // =================================

  .from('.navbar', {
    y: -30,
    opacity: 0,
    duration: 0.8
  })

  .from('.hero-intro', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.3')

  .from('.hero-title', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out'
  }, '-=0.4')

  .from('.hero-bottom', {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, '-=0.5')


  // =================================
  // 3. SCROLL REVEAL
  // =================================

  gsap.utils.toArray('.section').forEach((section) => {

    gsap.from(section.querySelectorAll(
      '.section-label, h2, p, .project-card, .skills-list'
    ), {

      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        once: true
      }

    })

  })


  // =================================
  // 4. DESKTOP INTERACTIONS
  // =================================

  const hasMouse = window.matchMedia('(pointer: fine)').matches

  if (hasMouse) {

    // Custom cursor

    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    
    const cursorLabel = document.createElement('span')
    cursorLabel.className = 'cursor-label'
    
    cursor.appendChild(cursorLabel)
    document.body.appendChild(cursor)
    
    // Smooth cursor movement
    gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50
    })
    
    const moveX = gsap.quickTo(cursor, 'x', {
        duration: 0.3,
        ease: 'power3.out'
    })
    
    const moveY = gsap.quickTo(cursor, 'y', {
        duration: 0.3,
        ease: 'power3.out'
    })
    
    // Particle trail
     
    let lastParticle = 0
    
    window.addEventListener('mousemove', (event) => {
        
        moveX(event.clientX)
        moveY(event.clientY)
        
        const now = performance.now()
        
        if (now - lastParticle < 35) return
        
        lastParticle = now
        
        const particle = document.createElement('span')
        
        particle.className = 'cursor-particle'
        
        particle.style.left = `${event.clientX}px`
        particle.style.top = `${event.clientY}px`
        
        document.body.appendChild(particle)
        
        gsap.to(particle, {
            scale: 0,
            opacity: 0,
            duration: 0.65,
            ease: 'power2.out',
            onComplete: () => particle.remove()
        })
    })
    
    // Interactive hover states
    document.querySelectorAll('a, button, .project-card').forEach((element) => {

    element.addEventListener('mouseenter', () => {

    cursor.classList.add('cursor-active')

    if (element.classList.contains('project-card')) {
      cursorLabel.textContent = '↗'
    } else {
      cursorLabel.textContent = 'CLICK'
    }
})

    element.addEventListener('mouseleave', () => {

    cursor.classList.remove('cursor-active')
    cursorLabel.textContent = ''

  })

})


    // Cursor hover

    document.querySelectorAll('a, button, .project-card').forEach((element) => {

      element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover')
      })

      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover')
      })

    })


    // 3D Project Cards

    document.querySelectorAll('.project-card').forEach((card) => {

      card.addEventListener('mousemove', (event) => {

        const rect = card.getBoundingClientRect()

        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        const rotateX = (rect.height / 2 - y) / 30
        const rotateY = (x - rect.width / 2) / 30

        gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.4,
          ease: 'power2.out',
          transformPerspective: 1000
        })

      })

      card.addEventListener('mouseleave', () => {

        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'power3.out'
        })

      })

    })


    // Magnetic Buttons

    document.querySelectorAll('.hero-button, .navbar-contact').forEach((button) => {

      button.addEventListener('mousemove', (event) => {

        const rect = button.getBoundingClientRect()

        const x = event.clientX - rect.left - rect.width / 2
        const y = event.clientY - rect.top - rect.height / 2

        gsap.to(button, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.4,
          ease: 'power2.out'
        })

      })

      button.addEventListener('mouseleave', () => {

        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)'
        })

      })

    })


    // Hero Parallax

    const hero = document.querySelector('.hero')
    const heroTitle = document.querySelector('.hero-title')

    if (hero && heroTitle) {

      hero.addEventListener('mousemove', (event) => {

        const rect = hero.getBoundingClientRect()

        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5

        gsap.to(heroTitle, {
          x: x * 12,
          y: y * 12,
          duration: 0.8,
          ease: 'power2.out'
        })

      })

      hero.addEventListener('mouseleave', () => {

        gsap.to(heroTitle, {
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        })

      })

    }

  }

  ScrollTrigger.refresh()

}