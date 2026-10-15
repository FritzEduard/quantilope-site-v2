// Génère fr/ et en/ à partir de content.mjs. Lancer : node build.mjs
import { mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { posix } from 'node:path'
import { ui, projects, EMAIL, SEGMENT } from './content.mjs'

const LANGS = ['fr', 'en']
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const hasPage = (p) => p.page !== false
const pages = projects.filter(hasPage)
const bySlug = (slug) => projects.find((p) => p.slug === slug)

const homePath = (lang) => `${lang}/index.html`
const casePath = (lang, slug) => `${lang}/${SEGMENT[lang]}/${slug}/index.html`
const rel = (from, to) => posix.relative(posix.dirname(from), to) || posix.basename(to)

const mailto = (lang) => {
  const m = ui[lang].mail
  return `mailto:${EMAIL}?subject=${encodeURIComponent(m.subject)}&amp;body=${encodeURIComponent(m.body)}`
}

const FONTS =
  'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&family=Sora:wght@600;700&display=swap'

function picture(cur, image, alt, { sizes, eager = false, cls = '' }) {
  const n = image.name
  const a = (p) => rel(cur, `assets/img/${p}`)
  const loading = eager ? 'fetchpriority="high"' : 'loading="lazy"'
  return `<picture>
    <source type="image/webp" srcset="${a(`${n}-800.webp`)} 800w, ${a(`${n}-1600.webp`)} 1600w" sizes="${sizes}">
    <img class="${cls}" src="${a(`${n}-1600.jpg`)}" srcset="${a(`${n}-800.jpg`)} 800w, ${a(`${n}-1600.jpg`)} 1600w" sizes="${sizes}" alt="${esc(alt)}" width="${image.w}" height="${image.h}" ${loading} decoding="async">
  </picture>`
}

function shell({ lang, cur, alt, title, description, main }) {
  const t = ui[lang]
  const other = lang === 'fr' ? 'en' : 'fr'
  const home = rel(cur, homePath(lang))
  const anchor = (id) => `${home}#${id}`
  const asset = (p) => rel(cur, `assets/${p}`)
  const langLink = (l) =>
    `<a href="${rel(cur, alt[l])}" lang="${l}" hreflang="${l}" data-lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${l.toUpperCase()}</a>`
  const ids = ['services', 'work', 'method', 'about']
  const navItems = ids.map((id) => `<li><a href="${anchor(id)}">${esc(t.nav[id])}</a></li>`).join('')

  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="#160d24">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Solutions Quantilope">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:locale" content="${t.locale}">
  <meta property="og:locale:alternate" content="${ui[other].locale}">
  <link rel="icon" type="image/png" href="${rel(cur, 'assets/img/favicon.png')}">
  <link rel="apple-touch-icon" href="${rel(cur, 'assets/img/apple-touch-icon.png')}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="${FONTS}">
  <link rel="stylesheet" href="${asset('site.css')}">
  <script>document.documentElement.classList.add('js')</script>
</head>
<body>
  <a class="skip" href="#main">${esc(t.skip)}</a>
  <header class="head">
    <div class="wrap head__inner">
      <a class="brand" href="${home}">
        <img class="brand__logo" src="${rel(cur, 'assets/img/logo.png')}" alt="" width="53" height="56">
        <span class="brand__name">${esc(t.brand)}</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav">${esc(t.menu)}</button>
      <nav class="nav" id="nav" aria-label="${lang === 'fr' ? 'Navigation principale' : 'Main navigation'}">
        <ul>${navItems}</ul>
        <div class="lang" role="group" aria-label="${esc(t.langLabel)}">${langLink('fr')}${langLink('en')}</div>
        <a class="btn btn--sm" href="${mailto(lang)}">${esc(t.cta)}</a>
      </nav>
    </div>
  </header>
  <main id="main">
${main}
  </main>
  <footer class="foot">
    <div class="wrap foot__grid">
      <div class="foot__brand">
        <img src="${rel(cur, 'assets/img/logo.png')}" alt="Solutions Quantilope" width="113" height="120">
        <p>${esc(t.footer.tagline)}</p>
      </div>
      <nav aria-label="${lang === 'fr' ? 'Pied de page' : 'Footer'}">
        <ul class="foot__nav">${navItems}</ul>
      </nav>
      <div class="foot__contact">
        <a class="btn btn--sm" href="${mailto(lang)}">${esc(t.cta)}</a>
        <p><a href="mailto:${EMAIL}">${EMAIL}</a></p>
      </div>
    </div>
    <div class="wrap foot__legal"><p>${esc(t.footer.copy)}</p></div>
  </footer>
  <script src="${asset('site.js')}" defer></script>
</body>
</html>
`
}

const altPaths = (kind, slug) =>
  Object.fromEntries(LANGS.map((l) => [l, kind === 'home' ? homePath(l) : casePath(l, slug)]))

function homeMain(lang) {
  const cur = homePath(lang)
  const t = ui[lang]
  const h = t.home
  const panther = bySlug('panther')

  const heroH1 = `${esc(h.hero.h1[0])}<em>${esc(h.hero.h1[1])}</em>${esc(h.hero.h1[2])}`

  const why = h.why.items
    .map((i) => `<li><h3>${esc(i.t)}</h3><p>${esc(i.d)}</p></li>`)
    .join('\n          ')

  const services = h.services.items
    .map((s) => {
      const ex = s.ex ? bySlug(s.ex) : null
      const exHtml = ex
        ? `<a class="svc__ex" href="${rel(cur, casePath(lang, ex.slug))}"><span class="kicker">${esc(h.services.example)}</span> ${esc(ex[lang].title)} <span aria-hidden="true">→</span></a>`
        : '<span></span>'
      return `
          <li class="svc">
            <h3>${esc(s.t)}</h3>
            <p>${esc(s.d)}</p>
            ${exHtml}
          </li>`
    })
    .join('')

  const featured = projects
    .filter((p) => p.featured)
    .map((p) => {
      const c = p[lang]
      return `
          <li>
            <a class="feat" href="${rel(cur, casePath(lang, p.slug))}">
              <div class="feat__img">${picture(cur, p.image, c.imageAlt, { sizes: '(min-width: 960px) 580px, 100vw' })}</div>
              <div class="feat__meta">
                <span class="chip chip--${p.status}">${esc(t.status[p.status])}</span>
                <span class="feat__owner">${esc(c.owner)}</span>
              </div>
              <h3>${esc(c.title)}</h3>
              <p>${esc(c.summary)}</p>
              <span class="feat__open">${esc(h.work.open)} <span aria-hidden="true">→</span></span>
            </a>
          </li>`
    })
    .join('')

  const rows = projects
    .filter((p) => !p.featured)
    .map((p) => {
      const c = p[lang]
      const inner = `
              <div class="row__main"><h3>${esc(c.title)}</h3><p>${esc(c.tagline)}</p></div>
              <p class="row__owner">${esc(c.owner)}</p>
              <p class="row__status"><span class="chip chip--${p.status}">${esc(t.status[p.status])}</span></p>`
      return hasPage(p)
        ? `
          <li><a class="row" href="${rel(cur, casePath(lang, p.slug))}">${inner}
            <span class="row__arrow" aria-label="${esc(h.work.open)}">→</span></a></li>`
        : `
          <li><div class="row row--static">${inner}
            <span class="row__arrow" aria-hidden="true"></span></div></li>`
    })
    .join('')

  const steps = h.method.steps
    .map(
      (s, i) => `
          <li>
            <span class="steps__n" aria-hidden="true">0${i + 1}</span>
            <h3>${esc(s.t)}</h3>
            <p>${esc(s.d)}</p>
          </li>`
    )
    .join('')

  const groups = h.expertise.groups
    .map(
      (g) => `
          <div class="spec__row">
            <dt>${esc(g.k)}</dt>
            <dd><ul>${g.v.map((v) => `<li>${esc(v)}</li>`).join('')}</ul></dd>
          </div>`
    )
    .join('')

  const head = (id, eyebrow, h2, sub) => `
        <header class="sec-head">
          <p class="kicker">${esc(eyebrow)}</p>
          <h2>${h2}</h2>${sub ? `\n          <p class="sub">${esc(sub)}</p>` : ''}
        </header>`

  const main = `
    <section class="hero">
      <div class="hero__media">
        ${picture(cur, panther.image, panther[lang].imageAlt, { sizes: '(min-width: 960px) 50vw, 100vw', eager: true, cls: 'hero__img' })}
        <a class="hero__cap" href="${rel(cur, casePath(lang, 'panther'))}">
          <span class="kicker">${esc(h.hero.captionTag)}</span>
          <strong>${esc(h.hero.captionTitle)}</strong>
          <span>${esc(h.hero.captionOwner)} <span aria-hidden="true">→</span></span>
        </a>
      </div>
      <div class="hero__copy">
        <p class="kicker kicker--hero">${esc(h.hero.kicker)}</p>
        <h1>${heroH1}</h1>
        <p class="lede">${esc(h.hero.lede)}</p>
        <div class="hero__cta">
          <a class="btn" href="${mailto(lang)}">${esc(t.cta)} <span aria-hidden="true">→</span></a>
          <a class="btn btn--ghost" href="#work">${esc(h.hero.cta2)}</a>
        </div>
        <ul class="hero__sectors">${h.hero.sectors.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      </div>
    </section>

    <section class="proof" aria-label="${esc(h.proof.label)}">
      <div class="wrap proof__inner">
        <p class="kicker">${esc(h.proof.label)}</p>
        <ul>${h.proof.names.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>
      </div>
    </section>

    <section class="sec sec--soft" id="why">
      <div class="wrap">${head('why', h.why.eyebrow, esc(h.why.h2))}
        <ul class="why">
          ${why}
        </ul>
      </div>
    </section>

    <section class="sec" id="services">
      <div class="wrap">${head('services', h.services.eyebrow, esc(h.services.h2), h.services.sub)}
        <ul class="svcs">${services}
        </ul>
      </div>
    </section>

    <section class="sec sec--soft" id="work">
      <div class="wrap">${head('work', h.work.eyebrow, esc(h.work.h2), h.work.sub)}
        <ul class="featured">${featured}
        </ul>
        <h3 class="more kicker">${esc(h.work.more)}</h3>
        <div class="ledger__head kicker" aria-hidden="true">
          <span>${esc(h.work.cols.project)}</span><span>${esc(h.work.cols.client)}</span><span>${esc(h.work.cols.status)}</span>
        </div>
        <ul class="ledger">${rows}
        </ul>
      </div>
    </section>

    <section class="sec sec--night" id="method">
      <div class="wrap">${head('method', h.method.eyebrow, esc(h.method.h2), h.method.sub)}
        <ol class="steps">${steps}
        </ol>
      </div>
    </section>

    <section class="sec" id="expertise">
      <div class="wrap">${head('expertise', h.expertise.eyebrow, esc(h.expertise.h2), h.expertise.sub)}
        <dl class="spec">${groups}
        </dl>
      </div>
    </section>

    <section class="sec sec--soft" id="about">
      <div class="wrap about">
        <div>
          <p class="kicker">${esc(h.about.eyebrow)}</p>
          <h2>${esc(h.about.h2)}</h2>
        </div>
        <div class="about__text">
          ${h.about.p.map((p) => `<p>${esc(p)}</p>`).join('\n          ')}
        </div>
        <dl class="about__specs">
          ${h.about.specs.map((s) => `<div><dt>${esc(s.k)}</dt><dd>${esc(s.v)}</dd></div>`).join('\n          ')}
        </dl>
      </div>
    </section>

    <section class="final" id="contact">
      <div class="wrap final__inner">
        <h2>${esc(h.final.h2)}</h2>
        <p>${esc(h.final.body)}</p>
        <div class="final__cta">
          <a class="btn btn--lg" href="${mailto(lang)}">${esc(t.cta)} <span aria-hidden="true">→</span></a>
          <p>${esc(h.final.or)} <a href="mailto:${EMAIL}">${EMAIL}</a></p>
        </div>
      </div>
    </section>`

  return shell({ lang, cur, alt: altPaths('home'), title: h.title, description: h.description, main })
}

function caseMain(lang, p) {
  const cur = casePath(lang, p.slug)
  const t = ui[lang]
  const c = p[lang]
  const home = rel(cur, homePath(lang))
  const index = pages.indexOf(p)
  const prev = pages[(index + pages.length - 1) % pages.length]
  const next = pages[(index + 1) % pages.length]

  const media = p.image
    ? `<figure class="wrap case-media">${picture(cur, p.image, c.imageAlt, {
        sizes: '(min-width: 1240px) 1240px, 100vw',
        eager: true,
      })}</figure>`
    : ''

  const sections = c.sections
    .map(
      (s) => `
        <section class="case-sec">
          <h2 class="kicker">${esc(s.k)}</h2>
          <p>${esc(s.t)}</p>
        </section>`
    )
    .join('')

  const stack = c.stack.length
    ? `
        <section class="case-sec">
          <h2 class="kicker">${esc(t.case.tech)}</h2>
          <ul class="stack">${c.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
        </section>`
    : ''

  const visit = p.link
    ? `
        <section class="case-sec">
          <h2 class="kicker">Web</h2>
          <p><a class="btn btn--dark" href="${p.link}" target="_blank" rel="noopener noreferrer">${esc(t.case.visit)} <span aria-hidden="true">↗</span></a></p>
        </section>`
    : ''

  const main = `
    <section class="case-head">
      <div class="wrap">
        <p class="crumb"><a href="${home}#work">${esc(t.case.crumb)}</a><span aria-hidden="true"> / </span><span>${esc(c.title)}</span></p>
        <p class="case-head__status"><span class="chip chip--${p.status}">${esc(t.status[p.status])}</span></p>
        <h1>${esc(c.title)}</h1>
        <p class="lede">${esc(c.tagline)}</p>
        <dl class="case-meta">
          ${c.specs.map((s) => `<div><dt>${esc(s.k)}</dt><dd>${esc(s.v)}</dd></div>`).join('\n          ')}
        </dl>
      </div>
    </section>
    ${media}
    <div class="wrap case-body">${sections}${stack}${visit}
    </div>
    <section class="final final--case">
      <div class="wrap final__inner">
        <h2>${esc(t.case.ctaH)}</h2>
        <p>${esc(t.case.ctaP)}</p>
        <div class="final__cta">
          <a class="btn btn--lg" href="${mailto(lang)}">${esc(t.cta)} <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
    <nav class="wrap case-nav" aria-label="${lang === 'fr' ? 'Autres projets' : 'Other projects'}">
      <a href="${rel(cur, casePath(lang, prev.slug))}" rel="prev">
        <span class="kicker">← ${esc(t.case.prev)}</span>
        <strong>${esc(prev[lang].title)}</strong>
      </a>
      <a href="${rel(cur, casePath(lang, next.slug))}" rel="next">
        <span class="kicker">${esc(t.case.next)} →</span>
        <strong>${esc(next[lang].title)}</strong>
      </a>
    </nav>`

  return shell({
    lang,
    cur,
    alt: altPaths('case', p.slug),
    title: `${c.title} | Solutions Quantilope`,
    description: c.tagline,
    main,
  })
}

const rootIndex = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Solutions Quantilope</title>
  <meta name="color-scheme" content="light">
  <link rel="icon" type="image/png" href="assets/img/favicon.png">
  <noscript><meta http-equiv="refresh" content="0;url=fr/index.html"></noscript>
  <script>
    (function () {
      var lang = null
      try { lang = localStorage.getItem('sq_lang') } catch (e) {}
      if (lang !== 'fr' && lang !== 'en') lang = /^en/i.test(navigator.language || '') ? 'en' : 'fr'
      location.replace(lang + '/index.html')
    })()
  </script>
</head>
<body style="font-family:system-ui,sans-serif;background:#fff;color:#120d1a;padding:2rem">
  <p><a href="fr/index.html">Français</a> · <a href="en/index.html">English</a></p>
</body>
</html>
`

for (const l of LANGS) rmSync(l, { recursive: true, force: true })

const write = (path, html) => {
  mkdirSync(posix.dirname(path), { recursive: true })
  writeFileSync(path, html)
}

write('index.html', rootIndex)
let count = 1
for (const lang of LANGS) {
  write(homePath(lang), homeMain(lang))
  count++
  for (const p of pages) {
    write(casePath(lang, p.slug), caseMain(lang, p))
    count++
  }
}
console.log(`${count} pages générées.`)
