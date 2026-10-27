(() => {
  const boot = document.getElementById('boot');
  const out = document.getElementById('boot-text');
  if (!boot || !out) return;

  if (sessionStorage.getItem('booted')) {
    boot.remove();
    return;
  }

  const es = document.documentElement.lang === 'es';
  const lines = es
    ? ['ANDRES_RAFAEL SYSTEM', 'CARGANDO PORTAFOLIO...', 'LISTO.']
    : ['ANDRES_RAFAEL SYSTEM', 'LOADING PORTFOLIO...', 'READY.'];

  let li = 0, ci = 0;
  const TYPE_MS = 28;
  const LINE_PAUSE_MS = 260;
  const HOLD_MS = 700;
  const FADE_MS = 550;

  function typeNext() {
    if (li >= lines.length) {
      setTimeout(() => {
        boot.classList.add('hidden');
        sessionStorage.setItem('booted', '1');
        setTimeout(() => boot.remove(), FADE_MS);
      }, HOLD_MS);
      return;
    }
    const line = lines[li];
    if (ci <= line.length) {
      out.textContent = lines.slice(0, li).join('\n') +
        (li > 0 ? '\n' : '') + line.slice(0, ci);
      ci++;
      setTimeout(typeNext, TYPE_MS);
    } else {
      li++; ci = 0;
      setTimeout(typeNext, LINE_PAUSE_MS);
    }
  }

  typeNext();
})();
