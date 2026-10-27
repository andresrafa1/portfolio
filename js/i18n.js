// Bilingual copy (EN / ES). Elements opt in with data-i18n="key"
// (innerHTML) or data-i18n-alt="key" (alt attribute).
(() => {
  const STRINGS = {
    en: {
      title: 'Andrés Rafael — Growth Manager',
      description: 'Portfolio of Andrés Rafael: Growth Manager focused on fintech, automation, and AI.',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.cta': 'Talk →',
      'lang.switch': 'Cambiar a español',
      'hero.alt': "Presenting Wallbit's product on stage at a conference",
      'hero.sub': 'As Growth Manager at Wallbit (YC W23), I contribute to analyzing support metrics, resolving customer issues, and enhancing product features.',
      'hero.cta': 'Projects →',
      'about.heading': 'Growth Hacking\nAs a Way',
      'about.body': 'I contribute to analyzing support metrics, resolving customer issues, enhancing product features, collaborating with influencers, and improving user onboarding. I leverage my skills in growth marketing and product ownership to optimize customer experiences.',
      'stat.role': 'Role',
      'stat.stack': 'Stack',
      'stat.location': 'Location',
      'stat.locationValue': 'Bolivia · Remote',
      'stat.availability': 'Availability',
      'stat.availabilityValue': 'Full-time',
      'stat.sector': 'Sector',
      'stat.sectorValue': 'Fintech · AI',
      'stat.from': 'From',
      'projects.heading': 'Projects',
      'card1.tag': 'FINTECH · PRODUCTION',
      'card1.desc': 'Within one year we achieve:<br>218,000 installs<br>97,000 KYC success<br>19,000 first deposits',
      'card1.l1': 'Influencers Marketing',
      'card1.l2': 'CRM Management',
      'card1.l3': 'Media Content',
      'card2.tag': 'BANKING · AUTOMATION',
      'card2.desc': 'Automated processes with Excel (-14% time), data with Python (+7.5% decisions), PowerBI dashboards (25 ops), and 5 institutional offers.',
      'card2.l1': 'Excel Automation',
      'card2.l2': 'Tracking trades in Python',
      'card2.l3': 'PowerBI dashboards',
      'card3.tag': 'BANKING · DATA SCIENCE',
      'card3.desc': 'Coordinated Scrum for data science teams, redesigned PowerBI (-5% inquiries), and analyzed Python models (+21% client segmentation).',
      'card3.l1': 'CRISP-DM methodology',
      'card3.l2': 'PowerBI Dashboards',
      'card3.l3': 'Credit scoring model automation',
      'contact.heading': "Let's talk?",
      'contact.body': 'For proposals, projects, or questions — reach out.',
      'contact.cta': 'Send an email →',
    },
    es: {
      title: 'Andrés Rafael — Growth Manager',
      description: 'Portafolio de Andrés Rafael: Growth Manager enfocado en fintech, automatización e IA.',
      'nav.about': 'Sobre mí',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      'nav.cta': 'Hablemos →',
      'lang.switch': 'Switch to English',
      'hero.alt': 'Presentando el producto de Wallbit en el escenario de una conferencia',
      'hero.sub': 'Como Growth Manager en Wallbit (YC W23), analizo métricas de soporte, resuelvo problemas de clientes y mejoro funcionalidades del producto.',
      'hero.cta': 'Proyectos →',
      'about.heading': 'Growth Hacking\nComo método',
      'about.body': 'Analizo métricas de soporte, resuelvo problemas de clientes, mejoro funcionalidades del producto, colaboro con influencers y optimizo el onboarding de usuarios. Combino growth marketing y product ownership para mejorar la experiencia del cliente.',
      'stat.role': 'Rol',
      'stat.stack': 'Stack',
      'stat.location': 'Ubicación',
      'stat.locationValue': 'Bolivia · Remoto',
      'stat.availability': 'Disponibilidad',
      'stat.availabilityValue': 'Tiempo completo',
      'stat.sector': 'Sector',
      'stat.sectorValue': 'Fintech · IA',
      'stat.from': 'Desde',
      'projects.heading': 'Proyectos',
      'card1.tag': 'FINTECH · PRODUCCIÓN',
      'card1.desc': 'En un año logramos:<br>218.000 instalaciones<br>97.000 KYC exitosos<br>19.000 primeros depósitos',
      'card1.l1': 'Marketing con influencers',
      'card1.l2': 'Gestión de CRM',
      'card1.l3': 'Contenido multimedia',
      'card2.tag': 'BANCA · AUTOMATIZACIÓN',
      'card2.desc': 'Automaticé procesos con Excel (-14% de tiempo), análisis de datos con Python (+7,5% en decisiones), dashboards en PowerBI (25 operaciones) y 5 ofertas institucionales.',
      'card2.l1': 'Automatización en Excel',
      'card2.l2': 'Seguimiento de operaciones con Python',
      'card2.l3': 'Dashboards en PowerBI',
      'card3.tag': 'BANCA · CIENCIA DE DATOS',
      'card3.desc': 'Coordiné Scrum para equipos de ciencia de datos, rediseñé dashboards en PowerBI (-5% de consultas) y analicé modelos en Python (+21% en segmentación de clientes).',
      'card3.l1': 'Metodología CRISP-DM',
      'card3.l2': 'Dashboards en PowerBI',
      'card3.l3': 'Automatización del modelo de credit scoring',
      'contact.heading': '¿Hablamos?',
      'contact.body': 'Para propuestas, proyectos o consultas, escríbeme.',
      'contact.cta': 'Enviar un email →',
    },
  };

  const KEY = 'lang';
  const read = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const save = (v) => { try { localStorage.setItem(KEY, v); } catch (e) { /* private mode */ } };

  const initial = read() || ((navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en');

  function apply(lang) {
    const t = STRINGS[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.description);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = t[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const v = t[el.dataset.i18nAlt];
      if (v != null) el.setAttribute('alt', v);
    });
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.setAttribute('aria-label', t['lang.switch']);
      btn.setAttribute('title', t['lang.switch']);
      btn.querySelectorAll('[data-lang]').forEach((s) => s.classList.toggle('is-active', s.dataset.lang === lang));
    }
  }

  apply(initial);

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const next = document.documentElement.lang === 'es' ? 'en' : 'es';
      save(next);
      apply(next);
    });
  }
})();
