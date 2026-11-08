export function createLoader() {

  const loader = document.createElement('div')

  loader.className = 'loader'

  loader.innerHTML = `

    <div class="loader-inner">

      <div class="loader-top">
        <span>JASON TAI PORTFOLIO</span>
        <span>EST. 2026</span>
      </div>

      <div class="loader-center">

        <h1 class="loader-title">
          TAI TECK HWA<span></span>
        </h1>

        <p>
          DEVELOPER · CYBERSECURITY · DATA SCIENCE
        </p>

      </div>

      <div class="loader-footer">
        <span>INITIALIZING EXPERIENCE</span>
        <span class="loader-number">000%</span>
      </div>

      <div class="loader-progress">
        <div class="loader-progress-bar"></div>
      </div>

    </div>

  `

  document.body.prepend(loader)

  return loader
}