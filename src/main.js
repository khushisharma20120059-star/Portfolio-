import './style.css'
import {
  profile, stats, toolkit, techFlow, projects, leadership, credentials, recognition,
  contact, terminalLines, navItems, footerTagline, footerCopyright, footerSub, systemName,
  pythonKit, dataComp, academicTrend, academicScores
} from './data.js'

const app = document.getElementById('app')

if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, radii) {
    const r = typeof radii === 'number' ? radii : (Array.isArray(radii) ? radii[0] : 0)
    this.moveTo(x + r, y)
    this.lineTo(x + w - r, y)
    this.quadraticCurveTo(x + w, y, x + w, y + r)
    this.lineTo(x + w, y + h - r)
    this.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
    this.lineTo(x + r, y + h)
    this.quadraticCurveTo(x, y + h, x, y + h - r)
    this.lineTo(x, y + r)
    this.quadraticCurveTo(x, y, x + r, y)
    this.closePath()
  }
}

function buildNav() {
  const nav = document.createElement('nav')
  nav.className = 'nav'
  nav.innerHTML = `
    <div class="container nav-inner">
      <div class="nav-brand">&lt;${systemName}&gt;</div>
      <button class="menu-toggle" id="menuToggle" aria-label="Menu"><i class="fas fa-bars"></i></button>
      <ul class="nav-links" id="navLinks">
        ${navItems.map((item, i) => `<li><a href="#${item.toLowerCase()}" class="nav-link">${item}</a></li>`).join('')}
      </ul>
    </div>
  `
  return nav
}

function buildHero() {
  const hero = document.createElement('section')
  hero.className = 'hero'
  hero.id = 'about'
  hero.innerHTML = `
    <div class="container">
      <div class="hero-badge">${profile.profileVersion}</div>
      <h1 class="hero-name">${profile.name} <span>${profile.lastName}</span></h1>
      <p class="hero-sub">${profile.tagline}</p>
      <p class="hero-sub">${profile.tagline2}</p>
      <p class="hero-sub">${profile.tagline3}</p>
      <div class="hero-tags">
        <span class="hero-tag"><i class="fas fa-chart-line"></i>${profile.bio}</span>
      </div>
      <div class="hero-btns">
        <a href="#work" class="btn-primary">View My Work</a>
        <a href="#contact" class="btn-outline">Let's Connect</a>
      </div>
      <div class="hero-terminal">
        <div class="terminal-header">
          <div class="terminal-dot r"></div><div class="terminal-dot y"></div><div class="terminal-dot g"></div>
        </div>
        <div class="terminal-body" id="terminalBody"></div>
      </div>
    </div>
  `
  return hero
}

function buildProfile() {
  const section = document.createElement('section')
  section.id = 'profile'
  section.innerHTML = `
    <div class="container">
      <div class="section-label">01 &nbsp;/ QUANT PROFILE</div>
      <h2 class="section-title">The Numbers Behind the Profile</h2>
      <p class="section-desc">Academic quantitative performance indicators reflecting a strong foundation in mathematics and analytical reasoning.</p>
      <div class="profile-grid reveal">
        <div>
          <div class="stat-grid">
            ${stats.map(s => `
              <div class="stat-item">
                <div class="stat-value">${s.value}</div>
                <div class="stat-label">${s.label}</div>
              </div>
            `).join('')}
          </div>
          <div class="chart-container" style="margin-top:24px;">
            <div class="chart-label"><span>Semester 1 — Math</span><span>${academicScores.sem1}/100</span></div>
            <div class="chart-bar"><div class="chart-fill sem1" style="width:0%" data-width="${academicScores.sem1}%"></div></div>
            <div class="chart-label"><span>Semester 2 — Math</span><span>${academicScores.sem2}/100</span></div>
            <div class="chart-bar"><div class="chart-fill sem2" style="width:0%" data-width="${academicScores.sem2}%"></div></div>
            <div class="chart-range"><span>0</span><span>50</span><span>100</span></div>
          </div>
        </div>
        <div>
          <div class="profile-card">
            <div class="profile-card-header">
              <div class="profile-version">${profile.profileVersion}</div>
              <h3 style="font-size:1.2rem;margin-top:8px;">Academic Quantitative Performance</h3>
              <p style="color:var(--fg-dim);font-size:0.9rem;margin-top:4px;">Selected academic indicators</p>
            </div>
            <div style="display:flex;gap:8px;margin:16px 0;">
              <span style="font-family:var(--font-mono);font-size:0.7rem;padding:4px 10px;background:rgba(30,58,95,0.06);border:1px solid var(--border);border-radius:8px;">Sem 1</span>
              <span style="font-family:var(--font-mono);font-size:0.7rem;padding:4px 10px;background:rgba(255,140,66,0.06);border:1px solid var(--border);border-radius:8px;">Sem 2</span>
            </div>
            <div style="height:200px;position:relative;">
              <canvas id="academicChart"></canvas>
            </div>
          </div>
          <div class="profile-card" style="margin-top:16px;">
            <div class="profile-cat-title" style="font-family:var(--font-mono);font-size:0.7rem;color:var(--accent);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">${profile.profileVersion.split(' ')[0]} TOOLKIT</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
              ${pythonKit.map(t => `<span class="toolkit-tag">${t}</span>`).join('')}
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
              ${dataComp.map(t => `<span class="toolkit-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top:32px;overflow:hidden;position:relative;height:40px;">
        <div style="display:flex;gap:32px;white-space:nowrap;animation:scroll 30s linear infinite;">
          ${academicTrend.split('').map((c,i) => `<span style="font-family:var(--font-mono);font-size:0.85rem;color:${i%2===0?'var(--accent)':'var(--fg-dim)'};">${c}</span>`).join('')}
          ${academicTrend.split('').map((c,i) => `<span style="font-family:var(--font-mono);font-size:0.85rem;color:${i%2===0?'var(--accent)':'var(--fg-dim)'};">${c}</span>`).join('')}
        </div>
        <style>@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }</style>
      </div>
    </div>
  `
  return section
}

function buildAbout() {
  const section = document.createElement('section')
  section.id = 'work'
  section.innerHTML = `
    <div class="container">
      <div class="section-label">02 &nbsp;/ ABOUT THE ANALYST</div>
      <h2 class="section-title">About</h2>
      <p class="section-desc">Jyoti Sharma is a BCA student at Sri Guru Tegh Bahadur Institute of Management and Information Technology under GGSIPU, with a strong interest in quantitative analysis, financial data, programming and emerging technology. Her academic performance reflects a strong quantitative foundation, including a 9.32 CGPA and university mathematics scores of 92/100 in Semester 1 and 89/100 in Semester 2. She enjoys transforming raw information into structured insights using Python, SQL, Excel and exploratory data analysis. Her journey combines analytical rigor with creative problem-solving, always seeking to turn data into meaningful decisions.</p>
      <div class="mindset-bar reveal">
        ${['DATA','CLEAN','ANALYZE','MODEL','VISUALIZE','DECIDE'].map((step, i) => `<div class="mindset-step">${step}</div>`).join('')}
      </div>
    </div>
  `
  return section
}

function buildToolkit() {
  const section = document.createElement('section')
  section.id = 'skills'
  section.innerHTML = `
    <div class="container">
      <div class="section-label">03 &nbsp;/ THE TOOLKIT</div>
      <h2 class="section-title">Skills &amp; Competencies</h2>
      <p class="section-desc">A comprehensive overview of quantitative, programming, data, and communication tools.</p>
      <div class="toolkit-grid reveal">
        ${Object.entries(toolkit).map(([cat, items]) => `
          <div class="toolkit-category">
            <div class="toolkit-cat-title">${cat.toUpperCase()}</div>
            <div class="toolkit-items">
              ${items.map(t => `<span class="toolkit-tag">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="profile-card" style="margin-top:24px;overflow:hidden;">
        <div class="profile-cat-title" style="font-family:var(--font-mono);font-size:0.7rem;color:var(--accent);letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;">TECHNOLOGY FLOW</div>
        <div class="tech-flow">
          ${techFlow.map((node, i) => `
            ${i > 0 ? '<span class="tech-arrow"><i class="fas fa-chevron-right"></i></span>' : ''}
            <span class="tech-node">${node}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `
  return section
}

function buildWork() {
  const section = document.createElement('section')
  section.id = 'experience'
  section.innerHTML = `
    <div class="container">
      <div class="section-label">04 &nbsp;/ SELECTED WORK</div>
      <h2 class="section-title">Selected Work</h2>
      <p class="section-desc">Experiments, simulations and analytical projects.</p>
      <div class="projects-grid">
        ${projects.map(p => `
          <div class="project-card reveal">
            <div class="project-badge"><i class="fas fa-certificate"></i> ${p.badge}</div>
            <h3 class="project-title">${p.title}</h3>
            <div class="project-meta">${p.meta}</div>
            <p class="project-desc">${p.desc}</p>
            <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
            <div class="project-action">${p.action} <i class="fas fa-arrow-right"></i></div>
          </div>
        `).join('')}
      </div>
    </div>
  `
  return section
}

function buildLeadership() {
  const section = document.createElement('section')
  section.id = 'credentials'
  section.innerHTML = `
    <div class="container">
      <div class="section-label">05 &nbsp;/ LEADERSHIP &amp; COMMUNITY</div>
      <h2 class="section-title">Leadership &amp; Community</h2>
      <div class="leadership-card reveal">
        <div class="leadership-period">${leadership.period}</div>
        <div class="leadership-role">${leadership.role}</div>
        <div class="leadership-org">${leadership.org}</div>
        <p class="leadership-desc">${leadership.desc}</p>
        <div class="leadership-pillars">
          ${leadership.pillars.map(p => `<div class="leadership-pillar"><span class="leadership-pillar-num">${p}</span><span class="leadership-pillar-label">${p}</span></div>`).join('')}
        </div>
      </div>
    </div>
  `
  return section
}

function buildCredentials() {
  const section = document.createElement('section')
  section.id = 'credentials'
  section.innerHTML = `
    <div class="container">
      <div class="section-label">06 &nbsp;/ CREDENTIALS</div>
      <h2 class="section-title">Credentials &amp; Recognition</h2>
      <div class="credentials-list">
        ${credentials.map(c => `
          <div class="credential-item reveal">
            <div class="credential-date">${c.date}</div>
            <div class="credential-info">
              <div class="credential-title">${c.title}</div>
              <div class="credential-org">${c.org}</div>
              <div class="credential-desc">${c.desc}</div>
            </div>
            <div class="credential-link">${c.link}</div>
          </div>
        `).join('')}
      </div>
      <div class="recognition-box reveal">
        <div class="recognition-title"><i class="fas fa-trophy"></i> ${recognition.title}</div>
        <div class="recognition-sub">${recognition.sub}</div>
        <div class="recognition-desc">${recognition.desc}</div>
      </div>
    </div>
  `
  return section
}

function buildContact() {
  const section = document.createElement('section')
  section.id = 'contact'
  section.innerHTML = `
    <div class="container">
      <div class="section-label">07 &nbsp;/ LET'S CONNECT</div>
      <h2 class="section-title">Get In Touch</h2>
      <p class="section-desc">Interested in data, finance, technology or building something analytical? Let's talk.</p>
      <div class="contact-grid">
        <div class="reveal">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-envelope"></i></div>
              <div><div class="contact-label">Email</div><div class="contact-value">${contact.email}</div></div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
              <div><div class="contact-label">Location</div><div class="contact-value">${contact.location}</div></div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fab fa-linkedin-in"></i></div>
              <div><div class="contact-label">LinkedIn</div><div class="contact-value">${contact.linkedin}</div></div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fab fa-github"></i></div>
              <div><div class="contact-label">GitHub</div><div class="contact-value">${contact.github}</div></div>
            </div>
            <div class="contact-item">
              <div class="contact-icon"><i class="fas fa-code"></i></div>
              <div><div class="contact-label">GeeksforGeeks</div><div class="contact-value">${contact.gfg}</div></div>
            </div>
          </div>
        </div>
        <form class="contact-form reveal" onsubmit="handleSubmit(event)">
          <div class="form-group">
            <label class="form-label">${contact.form.name}</label>
            <input class="form-input" type="text" required placeholder="Your name" />
          </div>
          <div class="form-group">
            <label class="form-label">${contact.form.email}</label>
            <input class="form-input" type="email" required placeholder="you@email.com" />
          </div>
          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea class="textarea" required placeholder="${contact.form.message}"></textarea>
          </div>
          <button type="submit" class="form-submit">Send Message <i class="fas fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  `
  return section
}

function buildFooter() {
  const footer = document.createElement('footer')
  footer.className = 'footer'
  footer.innerHTML = `
    <div class="container">
      <div class="footer-brand">&lt;${systemName}&gt;</div>
      <div class="footer-tagline">${footerTagline}</div>
      <div class="footer-copyright">${footerCopyright}</div>
      <div class="footer-sub">${footerSub}</div>
      <div class="footer-sys">${terminalLines[terminalLines.length-1].text}</div>
    </div>
  `
  return footer
}

function handleSubmit(e) {
  e.preventDefault()
  const btn = e.target.querySelector('.form-submit')
  btn.textContent = 'Message Sent ✓'
  btn.style.background = '#1e3a5f'
  setTimeout(() => { btn.textContent = 'Send Message \u27A1'; btn.style.background = '' }, 3000)
}

function animateTerminal() {
  const body = document.getElementById('terminalBody')
  if (!body) return
  terminalLines.forEach(line => {
    setTimeout(() => {
      const el = document.createElement('div')
      el.className = 'terminal-line'
      const isReady = line.text.includes('READY') || line.text.includes('ONLINE') || line.text.includes('100%')
      el.innerHTML = line.text.replace('(.)', '...') + (isReady ? ' <span class="ready">✓</span>' : '')
      body.appendChild(el)
      body.scrollTop = body.scrollHeight
    }, line.delay)
  })
}

function animateCharts() {
  document.querySelectorAll('.chart-fill').forEach(bar => {
    const w = bar.dataset.width
    setTimeout(() => { bar.style.width = w }, 500)
  })
}

function revealOnScroll() {
  const els = document.querySelectorAll('.reveal')
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  els.forEach(el => obs.observe(el))
}

function setupNav() {
  const links = document.querySelectorAll('.nav-link')
  const toggle = document.getElementById('menuToggle')
  const navLinks = document.getElementById('navLinks')
  if (toggle) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'))
  }
  links.forEach(l => {
    l.addEventListener('click', () => {
      navLinks.classList.remove('open')
      links.forEach(x => x.classList.remove('active'))
      l.classList.add('active')
    })
  })
  window.addEventListener('scroll', () => {
    let current = ''
    document.querySelectorAll('section').forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id
    })
    links.forEach(l => {
      l.classList.remove('active')
      if (l.getAttribute('href') === `#${current}`) l.classList.add('active')
    })
  })
}

function buildPage() {
  app.innerHTML = ''
  app.appendChild(buildNav())
  app.appendChild(buildHero())
  app.appendChild(buildProfile())
  app.appendChild(buildAbout())
  app.appendChild(buildToolkit())
  app.appendChild(buildWork())
  app.appendChild(buildLeadership())
  app.appendChild(buildCredentials())
  app.appendChild(buildContact())
  app.appendChild(buildFooter())
}

function drawChart() {
  const canvas = document.getElementById('academicChart')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = 200 * dpr
  canvas.style.width = rect.width + 'px'
  canvas.style.height = '200px'
  ctx.scale(dpr, dpr)
  const w = rect.width, h = 200
  const pad = 40
const bars = [
    { label: 'CGPA', value: 9.32 / 10, color: '#1e3a5f', fmtVal: '9.32' },
    { label: 'Sem 1 Math', value: 92 / 100, color: '#ff8c42', fmtVal: '92' },
    { label: 'Sem 2 Math', value: 89 / 100, color: '#ffaa2e', fmtVal: '89' }
  ]
  const bw = (w - pad * 2 - 20) / 3
  bars.forEach((b, i) => {
    const x = pad + i * (bw + 20)
    const bh = b.value * (h - pad * 2)
    const y = h - pad - bh
    ctx.fillStyle = 'rgba(30,58,95,0.05)'
    ctx.strokeStyle = '#222'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.roundRect(x, pad, bw, h - pad * 2, 6)
    ctx.fill()
    ctx.stroke()
    const grad = ctx.createLinearGradient(x, y, x, h - pad)
    grad.addColorStop(0, b.color)
    grad.addColorStop(1, b.color + '44')
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.roundRect(x, y, bw, bh, [6, 6, 0, 0])
    ctx.fill()
    ctx.fillStyle = '#e0e0e0'
    ctx.font = '600 13px Inter, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(b.label, x + bw / 2, h - pad + 20)
    ctx.fillStyle = b.color
    ctx.font = '700 13px JetBrains Mono, monospace'
    ctx.fillText(b.fmtVal, x + bw / 2, y - 10)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  buildPage()
  setTimeout(animateTerminal, 300)
  setTimeout(() => { animateCharts(); drawChart(); revealOnScroll(); setupNav(); }, 600)
  window.addEventListener('resize', () => { drawChart() })
})
