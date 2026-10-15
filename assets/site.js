// menu mobile + langue mémorisée
;(function () {
  var toggle = document.querySelector('.nav-toggle')
  var nav = document.getElementById('nav')

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open')
      toggle.setAttribute('aria-expanded', String(open))
    })
    nav.addEventListener('click', function (e) {
      if (e.target.closest('ul a')) {
        nav.classList.remove('is-open')
        toggle.setAttribute('aria-expanded', 'false')
      }
    })
  }

  document.querySelectorAll('.lang a[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () {
      try {
        localStorage.setItem('sq_lang', a.getAttribute('data-lang'))
      } catch (e) {}
    })
  })
})()
