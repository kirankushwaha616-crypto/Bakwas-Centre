// Main Application Orchestrator for Bakwaas Center
// Includes Over-acting Translator, Blame Generator, Useless Degrees,
// and the University Parody Degree Generator.

import { normalizeInput } from './dramaEngine.js';
import { generateDramaticOutput, STYLE_NAMES } from './dramaStyles.js';
import { DEGREES_LIST, renderCertificateHTML } from './certificateTemplates.js';
import * as htmlToImage from 'html-to-image';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { initExcuseGenerator } from './tools/excuseGenerator.js';
import { initRoastGenerator } from './tools/roastGenerator.js';
import { initAdviceGenerator } from './tools/adviceGenerator.js';
import { initOverthinkingGenerator } from './tools/overthinkingGenerator.js';
import { initJobGenerator } from './tools/jobGenerator.js';


// Global State
window.AppState = {
  currentRoute: '/',
  activeTab: 'translator',
  currentDegree: DEGREES_LIST[0],
  translatorStyle: 'hinglish',
  blameLang: 'hinglish',
  lastBlameCat: null,
  lastBlameIdx: -1,
  isDropdownOpen: false,
  candidatePhoto: null
};

// -----------------------------------------------------------------------------
// CANONICAL ROUTES & PER-ROUTE SEO METADATA
// -----------------------------------------------------------------------------
export const ROUTES_CONFIG = {
  '/': {
    id: 'home',
    title: 'Bakwaas Center – Funny Online Tools & Time-Wasting Games',
    description: "Bakwaas Center features funny online tools and time-wasting fun for when you're bored. Try dramatic text translation, ridiculous blame excuses, and fake degrees.",
    canonical: 'https://bakwas-centre.vercel.app/',
    panelId: 'panel-home',
    tabId: null,
    breadcrumbName: null
  },
  '/translator': {
    id: 'translator',
    title: 'Over-Acting Translator – Turn Normal Text Dramatic | Bakwaas Center',
    description: 'Turn normal, boring text into over-dramatic Bollywood dialogues, soap opera gasps, and Shakespearean monologues with the Over-Acting Translator.',
    canonical: 'https://bakwas-centre.vercel.app/translator',
    panelId: 'panel-translator',
    tabId: 'translator',
    breadcrumbName: 'Over-Acting Translator'
  },
  '/blame-generator': {
    id: 'blame',
    title: 'Blame Generator – Generate Funny Blame Ideas | Bakwaas Center',
    description: 'Generate hilarious and unassailable excuses to deflect blame for being late, skipping gym, or procrastinating. Random funny excuses for any situation.',
    canonical: 'https://bakwas-centre.vercel.app/blame-generator',
    panelId: 'panel-blame',
    tabId: 'blame',
    breadcrumbName: 'Blame Generator'
  },
  '/useless-degree': {
    id: 'degree',
    title: 'Useless Degree Generator – Create a Funny Fake Degree | Bakwaas Center',
    description: 'Create and download completely unnecessary fake degrees in Overthinking, Meme Analysis, and Procrastination with authentic parody signatures and seals.',
    canonical: 'https://bakwas-centre.vercel.app/useless-degree',
    panelId: 'panel-degree',
    tabId: 'degree',
    breadcrumbName: 'Useless Degree Generator'
  },
  '/excuse-generator': {
    id: 'excuse',
    title: 'Excuse Generator – Generate Funny & Absurd Excuses | Bakwaas Center',
    description: 'Generate hilarious, unassailable, and creative excuses for being late, skipping homework, missed work deadlines, and social events.',
    canonical: 'https://bakwas-centre.vercel.app/excuse-generator',
    panelId: 'panel-excuse',
    tabId: 'excuse',
    breadcrumbName: 'Excuse Generator'
  },
  '/roast-generator': {
    id: 'roast',
    title: 'Roast Generator – Playful & Savage Comedy Roasts | Bakwaas Center',
    description: 'Generate hilarious, playful, and fictional roasts with Mild, Savage, and Absurd intensity modes. Harmless comedy for friends and fun.',
    canonical: 'https://bakwas-centre.vercel.app/roast-generator',
    panelId: 'panel-roast',
    tabId: 'roast',
    breadcrumbName: 'Roast Generator'
  },
  '/random-life-advice': {
    id: 'advice',
    title: 'Random Life Advice – Hilarious & Questionable Wisdom | Bakwaas Center',
    description: 'Get completely unsolicited, wildly questionable, and funny life advice across Productivity, Money, School, Social, and Everyday Life.',
    canonical: 'https://bakwas-centre.vercel.app/random-life-advice',
    panelId: 'panel-advice',
    tabId: 'advice',
    breadcrumbName: 'Random Life Advice'
  },
  '/overthinking-generator': {
    id: 'overthinking',
    title: 'Overthinking Generator – Turn Normal Events Into Catastrophes | Bakwaas Center',
    description: 'Enter any simple situation and watch it spiral into an escalating 5-step chain of overthinking, paranoia, and cosmic absurdity.',
    canonical: 'https://bakwas-centre.vercel.app/overthinking-generator',
    panelId: 'panel-overthinking',
    tabId: 'overthinking',
    breadcrumbName: 'Overthinking Generator'
  },
  '/fake-job-title': {
    id: 'job',
    title: 'Fake Job Title Generator – Ridiculous Parody Careers | Bakwaas Center',
    description: 'Generate hilarious corporate, tech, student, and internet job titles with absurd seniority levels, departments, and fictional duties.',
    canonical: 'https://bakwas-centre.vercel.app/fake-job-title',
    panelId: 'panel-job',
    tabId: 'job',
    breadcrumbName: 'Fake Job Title Generator'
  }
};

function normalizeRoute(rawPath) {
  if (!rawPath) return '/';
  let path = rawPath.toLowerCase().trim();
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  if (path === '' || path === '/index.html') {
    path = '/';
  }
  return ROUTES_CONFIG[path] ? path : '/';
}

function updateRouteSEO(routeKey) {
  const config = ROUTES_CONFIG[routeKey] || ROUTES_CONFIG['/'];

  // 1. Document Title
  document.title = config.title;

  // 2. Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', config.description);
  }

  // 3. Single Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', config.canonical);

  // 4. Open Graph Tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', config.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', config.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', config.canonical);

  // 5. Twitter Card Tags
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', config.title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', config.description);

  const twUrl = document.querySelector('meta[name="twitter:url"]');
  if (twUrl) twUrl.setAttribute('content', config.canonical);

  // 6. BreadcrumbList Structured Data (accords with visible navigation)
  let breadcrumbScript = document.getElementById('schema-breadcrumbs');
  if (config.breadcrumbName) {
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'schema-breadcrumbs';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bakwas-centre.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": config.breadcrumbName,
          "item": config.canonical
        }
      ]
    };
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
  } else if (breadcrumbScript) {
    breadcrumbScript.remove();
  }
}

// -----------------------------------------------------------------------------
// ROUTE NAVIGATION & TAB MANAGEMENT
// -----------------------------------------------------------------------------
window.applyRoute = function(routePath, shouldScroll = false) {
  const normalized = normalizeRoute(routePath);
  const config = ROUTES_CONFIG[normalized];

  window.AppState.currentRoute = normalized;
  window.AppState.activeTab = config.tabId;

  // 1. Update SEO tags
  updateRouteSEO(normalized);

  // 2. Toggle Panel Visibility
  const panels = [
    'panel-home',
    'panel-translator',
    'panel-blame',
    'panel-degree',
    'panel-excuse',
    'panel-roast',
    'panel-advice',
    'panel-overthinking',
    'panel-job'
  ];
  panels.forEach(pid => {
    const el = document.getElementById(pid);
    if (!el) return;
    if (pid === config.panelId) {
      el.classList.remove('hidden');
      el.classList.add('animate-fade-in');
    } else {
      el.classList.add('hidden');
      el.classList.remove('animate-fade-in');
    }
  });

  // 3. Update Navigation Tab Visual States
  const tabs = ['translator', 'blame', 'degree', 'excuse', 'roast', 'advice', 'overthinking', 'job'];
  const tabColorMap = {
    'translator': { border: 'border-purple-400', ring: 'ring-purple-200' },
    'blame': { border: 'border-amber-400', ring: 'ring-amber-200' },
    'degree': { border: 'border-emerald-400', ring: 'ring-emerald-200' },
    'excuse': { border: 'border-blue-400', ring: 'ring-blue-200' },
    'roast': { border: 'border-rose-400', ring: 'ring-rose-200' },
    'advice': { border: 'border-yellow-400', ring: 'ring-yellow-200' },
    'overthinking': { border: 'border-indigo-400', ring: 'ring-indigo-200' },
    'job': { border: 'border-teal-400', ring: 'ring-teal-200' }
  };

  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const indicator = btn ? btn.querySelector('.active-indicator') : null;

    if (t === config.tabId) {
      if (btn) {
        btn.setAttribute('aria-selected', 'true');
        btn.classList.remove('border-[#E5E7EB]');
        const color = tabColorMap[t] || { border: 'border-indigo-400', ring: 'ring-indigo-200' };
        btn.classList.add(color.border, 'ring-2', color.ring, 'shadow-xs');
      }
      if (indicator) indicator.classList.remove('hidden');
    } else {
      if (btn) {
        btn.setAttribute('aria-selected', 'false');
        btn.classList.remove(
          'border-purple-400', 'ring-purple-200',
          'border-amber-400', 'ring-amber-200',
          'border-emerald-400', 'ring-emerald-200',
          'border-blue-400', 'ring-blue-200',
          'border-rose-400', 'ring-rose-200',
          'border-yellow-400', 'ring-yellow-200',
          'border-indigo-400', 'ring-indigo-200',
          'border-teal-400', 'ring-teal-200',
          'ring-2', 'shadow-xs'
        );
        btn.classList.add('border-[#E5E7EB]');
      }
      if (indicator) indicator.classList.add('hidden');
    }
  });

  // 4. Smooth scrolling if navigating to a specific tool
  if (shouldScroll && normalized !== '/') {
    const targetEl = document.getElementById(config.panelId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

window.navigateToRoute = function(routePath, shouldScroll = true) {
  const normalized = normalizeRoute(routePath);
  if (window.location.pathname !== normalized) {
    window.history.pushState({ route: normalized }, '', normalized);
  }
  window.applyRoute(normalized, shouldScroll);
};

window.handleRouteLink = function(event, routePath) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) {
    return;
  }
  event.preventDefault();
  window.navigateToRoute(routePath, true);
};

// Backward-compatible switchTab method
window.switchTab = function(tabId) {
  const routeMap = {
    'translator': '/translator',
    'blame': '/blame-generator',
    'degree': '/useless-degree',
    'excuse': '/excuse-generator',
    'roast': '/roast-generator',
    'advice': '/random-life-advice',
    'overthinking': '/overthinking-generator',
    'job': '/fake-job-title'
  };
  const targetRoute = routeMap[tabId] || '/';
  window.navigateToRoute(targetRoute, false);
};

// Handle Browser Back and Forward buttons
window.addEventListener('popstate', () => {
  window.applyRoute(window.location.pathname, false);
});

window.openRandomBakwaas = function() {
  const toolRoutes = [
    '/translator',
    '/blame-generator',
    '/useless-degree',
    '/excuse-generator',
    '/roast-generator',
    '/random-life-advice',
    '/overthinking-generator',
    '/fake-job-title'
  ];
  const candidates = toolRoutes.filter(r => r !== window.AppState.currentRoute);
  const picked = candidates.length > 0
    ? candidates[Math.floor(Math.random() * candidates.length)]
    : toolRoutes[Math.floor(Math.random() * toolRoutes.length)];

  window.navigateToRoute(picked, true);

  if (picked === '/blame-generator' && window.generateBlame) {
    window.generateBlame();
  } else if (picked === '/translator' && window.setTranslatorSample) {
    const samples = ["I'm hungry", "I'm late", "My phone died", "I didn't study", "I need money"];
    const s = samples[Math.floor(Math.random() * samples.length)];
    window.setTranslatorSample(s);
  } else if (picked === '/excuse-generator' && window.generateExcuse) {
    window.generateExcuse();
  } else if (picked === '/roast-generator' && window.generateRoast) {
    window.generateRoast();
  } else if (picked === '/random-life-advice' && window.generateAdvice) {
    window.generateAdvice();
  } else if (picked === '/overthinking-generator' && window.generateOverthinking) {
    window.generateOverthinking();
  } else if (picked === '/fake-job-title' && window.generateJob) {
    window.generateJob();
  }

  const toolNames = {
    '/translator': 'Over-Acting Translator 🎭',
    '/blame-generator': 'The Blame Generator 🧠',
    '/useless-degree': 'Useless Degree Convocation 📜',
    '/excuse-generator': 'Excuse Generator 🛡️',
    '/roast-generator': 'Roast Generator 🔥',
    '/random-life-advice': 'Random Life Advice 💡',
    '/overthinking-generator': 'Overthinking Generator 🌀',
    '/fake-job-title': 'Fake Job Title Generator 💼'
  };
  showToast(`Random Bakwaas: Opened ${toolNames[picked]}! 🎲`);
};

window.handlePhotoUpload = function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      window.AppState.candidatePhoto = e.target.result;
      window.handleDegreeLiveUpdate();
    };
    reader.readAsDataURL(file);
  } else {
    window.AppState.candidatePhoto = null;
    window.handleDegreeLiveUpdate();
  }
};

window.fixMyBoredom = function() {
  const recommendations = [
    {
      tool: 'translator',
      badge: 'Drama Prescription 🎭',
      msg: 'Your normal human sentences are tragically unexciting. Turn a boring line into an Oscar-worthy Bollywood monologue right now!',
      btnText: 'Open Over-Acting Translator →'
    },
    {
      tool: 'blame',
      badge: 'Responsibility Deflector 🧠',
      msg: 'Facing a deadline or late arrival? Deflect full responsibility onto quantum physics or retrograde astrology immediately!',
      btnText: 'Generate Scientific Excuse →'
    },
    {
      tool: 'degree',
      badge: 'Academic Imposter 📜',
      msg: 'Academic life is exhausting. Award yourself a PhD in Reel Scrolling with an official custom authority signature!',
      btnText: 'Confer Your Useless Degree →'
    },
    {
      tool: 'excuse',
      badge: 'Master Alibi 🛡️',
      msg: 'Skipped homework or dodged a work meeting? Create an unassailable alibi that defies all earthly inspection!',
      btnText: 'Generate Master Excuse →'
    },
    {
      tool: 'roast',
      badge: 'Comic Roaster 🔥',
      msg: 'Friends feeling too relaxed? Deliver a completely harmless, razor-sharp parody roast across three intensity levels!',
      btnText: 'Ignite Playful Roast →'
    },
    {
      tool: 'advice',
      badge: 'Uncertified Wisdom 💡',
      msg: 'Life choices feeling too reasonable? Consult our questionably useful proverbs on procrastination and money!',
      btnText: 'Get Questionable Advice →'
    },
    {
      tool: 'overthinking',
      badge: 'Spiral Simulator 🌀',
      msg: 'Did someone text you "k."? Watch a completely harmless message spiral into an apocalyptic cosmic catastrophe!',
      btnText: 'Overthink Everything →'
    },
    {
      tool: 'job',
      badge: 'Corporate Parody 💼',
      msg: 'Need a new resume boost? Become the Senior Vice President of Hallway Hesitation with full fictional credentials!',
      btnText: 'Invent Fake Job Title →'
    }
  ];

  const picked = recommendations[Math.floor(Math.random() * recommendations.length)];
  const resultCard = document.getElementById('boredom-result');
  const badgeEl = document.getElementById('boredom-badge');
  const msgEl = document.getElementById('boredom-message');
  const actionBtn = document.getElementById('boredom-action-btn');

  if (resultCard && badgeEl && msgEl && actionBtn) {
    badgeEl.textContent = picked.badge;
    msgEl.textContent = picked.msg;
    actionBtn.innerHTML = `<span>${picked.btnText}</span>`;
    actionBtn.onclick = () => {
      window.switchTab(picked.tool);
      const panel = document.getElementById(`panel-${picked.tool}`);
      if (panel) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    resultCard.classList.remove('hidden');
    resultCard.classList.add('animate-scale-in');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

// -----------------------------------------------------------------------------
// 1. OVER-ACTING TRANSLATOR CONTROLLER
// -----------------------------------------------------------------------------
window.handleTranslatorInput = function(textarea) {
  const counter = document.getElementById('translator-counter');
  const tip = document.getElementById('translator-tip');
  const len = textarea.value.length;
  if (counter) counter.textContent = `${len} / 300`;

  if (tip) {
    if (len === 0) {
      tip.textContent = "Normal sentence detected. Preparing emotional trauma…";
    } else if (len < 20) {
      tip.textContent = "Short sentence detected. Increasing melodrama by 400%…";
    } else {
      tip.textContent = "High-potency sentence detected. Oscar-worthy performance ready!";
    }
  }
};

window.setTranslatorSample = function(sample) {
  const input = document.getElementById('translator-input');
  if (!input) return;
  input.value = sample;
  window.handleTranslatorInput(input);
  window.translateDramatically(false);
};

window.onTranslatorLangChange = function() {
  const select = document.getElementById('translator-lang');
  if (select) {
    window.AppState.translatorStyle = select.value;
    const outputBox = document.getElementById('translator-output-box');
    if (outputBox && !outputBox.classList.contains('hidden')) {
      window.translateDramatically(true);
    }
  }
};

window.translateDramatically = function(isVariation = false) {
  const input = document.getElementById('translator-input');
  const errorMsg = document.getElementById('translator-error');
  const btn = document.getElementById('btn-translate');
  const outputEmpty = document.getElementById('translator-output-empty');
  const outputBox = document.getElementById('translator-output-box');
  const resultText = document.getElementById('translator-result-text');
  const langBadge = document.getElementById('translator-lang-badge');

  const raw = input ? input.value.trim() : '';

  if (!raw) {
    if (errorMsg) errorMsg.classList.remove('hidden');
    if (input) input.focus();
    return;
  }
  if (errorMsg) errorMsg.classList.add('hidden');

  const styleSelect = document.getElementById('translator-lang');
  const currentStyle = styleSelect ? styleSelect.value : window.AppState.translatorStyle;

  if (btn) {
    const origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span>Consulting the drama gods… 🎬</span>`;

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = origHTML;

      const result = generateDramaticOutput(raw, currentStyle, isVariation);

      if (outputEmpty) outputEmpty.classList.add('hidden');
      if (outputBox) {
        outputBox.classList.remove('hidden');
        outputBox.classList.add('animate-scale-in');
      }
      if (resultText) resultText.textContent = result.output;
      if (langBadge) {
        langBadge.textContent = result.styleName;
      }

      const copyLabel = document.getElementById('copy-drama-label');
      if (copyLabel) copyLabel.textContent = "Copy Drama";
    }, 220);
  }
};

window.copyDramaticText = function() {
  const text = document.getElementById('translator-result-text')?.textContent;
  if (!text) return;
  copyTextHelper(text, () => {
    const copyLabel = document.getElementById('copy-drama-label');
    if (copyLabel) copyLabel.textContent = "Copied! ✓";
    showToast("Dramatic dialogue copied to clipboard! 🎬");
    setTimeout(() => {
      if (copyLabel) copyLabel.textContent = "Copy Drama";
    }, 2000);
  });
};

window.shareDramaticText = function() {
  const text = document.getElementById('translator-result-text')?.textContent;
  if (!text) return;
  const shareData = {
    title: 'Over-Acting Translator – Bakwaas Center',
    text: `"${text}"\n\nTranslated with 100% drama on Bakwaas Center:`,
    url: 'https://bakwas-centre.vercel.app/translator'
  };
  shareHelper(shareData, 'share-drama-label', 'Share Drama');
};

// -----------------------------------------------------------------------------
// 3. THE BLAME GENERATOR CONTROLLER
// -----------------------------------------------------------------------------
const BLAME_DATA = {
  english: {
    office: [
      "My mechanical keyboard initiated an unsanctioned labor strike demanding organic artisan switch oiling.",
      "A sudden localized quantum fluctuation caused my computer to calculate the meaning of life instead of loading Excel.",
      "Due to Jupiter's planetary alignment, my ergonomic chair developed hyper-inertia and refused to swivel toward the desk.",
      "The corporate VPN achieved temporary consciousness, panicked over its quarterly responsibilities, and erased itself."
    ],
    messages: [
      "Sorry, Earth's rotational speed slowed down by 0.002 seconds today, creating an acute space-time notification anomaly.",
      "A sudden solar flare ionized the microchips in my phone screen, mistaking all incoming taps for telepathic thoughts.",
      "I typed a 3-paragraph poetic reply in my head with impeccable punctuation, but physics failed to transmit it to your phone.",
      "Your message was routed through an undersea fiber-optic cable currently being inspected by curious deep-sea dolphins."
    ],
    homework: [
      "My homework notebook was borrowed by a stray quantum physicist who desperately needed rough paper for dark matter proofs.",
      "The printer ink cartridge experienced an identity crisis and decided it is an impressionist artist that only produces blank white canvases.",
      "I adhered strictly to Heisenberg's Uncertainty Principle: the exact moment I observed the homework, its location became entirely unknown.",
      "The dog didn't eat my homework, but he gave it a very scathing peer-review that deemed it academically unready for grading."
    ],
    late: [
      "The local planetary magnetic field shifted slightly northwest, causing my sneakers to experience unexpected electromagnetic drag.",
      "Every single traffic light on my route organized a synchronized red-light cultural festival in honor of urban delay.",
      "My reflection in the bathroom mirror took an extra 25 minutes to load due to severe morning visual latency.",
      "I was traveling at relativistic velocities, meaning from my personal frame of reference, I arrived four minutes early."
    ],
    forgot: [
      "My biological RAM experienced an unexpected cache invalidation error when I crossed the kitchen doorway.",
      "A cosmic neutrino collided with the exact synaptic junction that held that vital piece of information.",
      "I suffered from acute temporal displacement—I vividly remember having already finished it tomorrow.",
      "That thought was deleted during a routine scheduled cleanup performed by my inner sleep-deprived brain janitor."
    ]
  },
  hinglish: {
    office: [
      "Bhai office ka server achanak se sanyas le chuka hai, mere laptop me bas buffering ka nanga naach chal raha hai!",
      "Mera internet provider bolta hai ki aaj badalon ka mood kharab hai, isliye Excel sheet open nahi ho sakti!",
      "Arey yaar, mere keyboard ka 'Enter' button achanak strike pe chala gaya hai, lagta hai bonus na milne se naraz hai!",
      "Aaj boss ka mood dekh ke meri productivity apne aap incognito mode me chali gayi hai bhai!"
    ],
    messages: [
      "Bhai mera phone WhatsApp ke msgs dekhte hi panic attack me chala gaya tha, abhi ICU se bahar aaya hai!",
      "Sorry yaar, message dekha tha maine par mera dimaag 'reply' button ko load karne me system failure ho gaya!",
      "Meri ungliyo ne achanak aalas ka vrat rakh liya tha, isliye 2 ghante tak phone uthane ki himmat nahi hui!",
      "Network itna ghatiya tha ki tera message mujhe kabootar ke through bhijwana zyada tez lag raha tha!"
    ],
    homework: [
      "Bhai kal raat mera pen paper dekh ke khud suicide kar liya, bola itna dard main nahi seh sakta!",
      "Maine syllabus ki PDF open ki aur mere brain ne turant 'File Too Large, Cannot Process' ka error de diya!",
      "Mera kutta itna padha likha nikal gaya ki usne mera homework padh ke raddi samajh ke kha liya!",
      "Aaj subah copy kholi toh andaze se laga ki padhai mere kundli me hi nahi likhi hai, isliye band kar di!"
    ],
    late: [
      "Bhai raste me ek alien space ship aayi thi traffic clear karne, unko directions dete dete der ho gayi!",
      "Main toh time pe nikla tha, par Uber wale bhaiya ne 'meri marzi' ka route le liya aur hum goa ki taraf nikal gaye!",
      "Subah mere bed ne mujhe pyaar se pakad liya tha, bola 'mat jaa, duniya bohot zaalim hai', toh main emotional ho gaya!",
      "Signal itni der tak red tha ki maine wahin gaadi ke andar apna bachpan yaad karke aasu baha diye, isliye late hua!"
    ],
    forgot: [
      "Bhai mere dimaag ka RAM achanak se full ho gaya aur purani file apne aap delete ho gayi memory se!",
      "Jaise hi yaad karne ki koshish ki, mere brain cells ne strike kar di aur bole 'aaj sunday hai, hum kaam nahi karenge'!",
      "Main yaad toh kar hi raha tha, par achanak se ek meme yaad aa gaya aur saari focus energy udhar chali gayi!",
      "Wo baat mere dimaag ki gallery se trash folder me automatically shift ho gayi thi 30 din baad!"
    ]
  },
  hindi: {
    office: [
      "ऑफिस के सर्वर में अचानक राहु का प्रवेश हो गया था, जिससे मेरी एक्सेल शीट में केवल खाली कुंडलियां खुल रही थीं!",
      "मेरे लैपटॉप की दिशा वास्तुशास्त्र के अनुसार दक्षिण-पश्चिम नहीं थी, इसलिए मेरी पॉजिटिव प्रोडक्टिविटी तरंगें ब्लॉक हो गईं!",
      "कीबोर्ड के 'Enter' बटन ने सामूहिक मौन व्रत रख लिया था, और मैं किसी के धार्मिक संकल्प में बाधा नहीं डालना चाहता था!",
      "आज सुबह मेरे डेस्क पर मंगल ग्रह की भारी दृष्टि थी, जिसने प्रोजेक्ट की डेडलाइन को अगले युग में धकेल दिया!"
    ],
    messages: [
      "शनिदेव की साढ़ेसाती के कारण आपके मैसेज का नोटिफिकेशन मेरे फोन के 'कर्म-बॉक्स' में अटक गया था!",
      "मैंने ध्यान लगाकर आपको मानसिक रूप से जवाब भेज दिया था, पर लगता है आपका वाइब्रेशन लो-फ्रीक्वेंसी पर अटका था!",
      "जैसे ही मैंने रिप्लाई करने के लिए फोन उठाया, सामने बिल्ली ने रास्ता काट दिया... तो मैं शास्त्रों का सम्मान करते हुए रुक गया!",
      "आपके मैसेज को देखकर मेरी आत्मा मौन समाधि में चली गई थी, अभी-अभी चेतना वापस लौटी है!"
    ],
    homework: [
      "मेरी कॉपी पर गुरु ग्रह का ऐसा भारी प्रभाव पड़ा कि सारे लिखे हुए उत्तर अदृश्य ज्ञान में विलीन हो गए!",
      "मैं तो पूरा गृहकार्य कर रहा था, पर अचानक मेरी कलम की स्याही में नकारात्मक ऊर्जा का संचार हो गया और उसने लिखना बंद कर दिया!",
      "पड़ोस के पंडित जी ने कहा था कि आज कॉपी खोलने से विद्या का अनादर हो सकता है, इसलिए मैंने शास्त्र रक्षा की!",
      "मेरी नोटबुक को हमारे कुत्ते ने आध्यात्मिक दृष्टि से अपूर्ण घोषित करके उस पर बैठने से मना कर दिया!"
    ],
    late: [
      "घर से निकलते ही दिशाशूल लग गया था! पंडित जी के अनुसार उस दिशा में पैर रखने से जीवन संकट में आ सकता था!",
      "मेरे जूते के फीते में राहु-केतु का ऐसा जटिल बंधन बंध गया था जिसे खोलने में पूरे 35 मिनट का समय लगा!",
      "रास्ते के हर चौराहे पर यमराज के दूत ट्रैफिक हवलदार बनकर केवल मेरी ही गाड़ी की प्रतीक्षा कर रहे थे!",
      "मेरी घड़ी का सेल भारतीय मानक समय से 45 मिनट पीछे वाले आध्यात्मिक लोक में चला गया था!"
    ],
    forgot: [
      "मेरे मस्तिष्क के तीसरे नेत्र में अचानक एक धूल का कण चला गया था, जिससे सांसारिक याददाश्त 2 घंटे के लिए लुप्त हो गई!",
      "जैसे ही मैं वह बात याद करने लगा, शनिदेव ने मेरी स्मृति को वक्री चाल में डालकर पिछले जन्म की यादें दिखा दीं!",
      "वह विचार मेरे दिमाग से सीधे मोक्ष की प्राप्ति के लिए वैकुंठ धाम रवाना हो गया!",
      "मेरी याददाश्त का चंद्रमा आज नीच राशि में बैठा था, इसलिए आवश्यक सूचनाएं स्वतः विसर्जित हो गईं!"
    ]
  }
};

window.onBlameLangChange = function() {
  const langSelect = document.getElementById('blame-lang');
  if (langSelect) window.AppState.blameLang = langSelect.value;
  window.generateBlame();
};

window.generateBlame = function() {
  const catSelect = document.getElementById('blame-category');
  const langSelect = document.getElementById('blame-lang');
  const cat = catSelect ? catSelect.value : 'office';
  const lang = langSelect ? langSelect.value : (window.AppState.blameLang || 'english');

  const bank = BLAME_DATA[lang] || BLAME_DATA.english;
  const list = bank[cat] || bank.office || [];

  if (!list.length) return;

  let idx = Math.floor(Math.random() * list.length);
  if (window.AppState.lastBlameCat === cat && idx === window.AppState.lastBlameIdx && list.length > 1) {
    idx = (idx + 1) % list.length;
  }
  window.AppState.lastBlameCat = cat;
  window.AppState.lastBlameIdx = idx;

  const chosen = list[idx];

  const empty = document.getElementById('blame-output-empty');
  const box = document.getElementById('blame-output-box');
  const resultText = document.getElementById('blame-result-text');
  const badge = document.getElementById('blame-lang-badge');

  if (empty) empty.classList.add('hidden');
  if (box) {
    box.classList.remove('hidden');
    box.classList.add('animate-scale-in');
  }
  if (resultText) resultText.textContent = chosen;
  if (badge) {
    if (lang === 'hindi') {
      badge.textContent = "100% Desi Jyotish Science 🪐";
    } else if (lang === 'hinglish') {
      badge.textContent = "100% Raw Desi Drama 🎬";
    } else {
      badge.textContent = "Quantum Astrophysics Grade 🔬";
    }
  }

  const copyLabel = document.getElementById('copy-blame-label');
  if (copyLabel) copyLabel.textContent = "Copy Excuse";
};

window.copyBlameText = function() {
  const text = document.getElementById('blame-result-text')?.textContent;
  if (!text) return;
  copyTextHelper(text, () => {
    const copyLabel = document.getElementById('copy-blame-label');
    if (copyLabel) copyLabel.textContent = "Copied! ✓";
    showToast("Scientific excuse copied to clipboard! 🧠");
    setTimeout(() => {
      if (copyLabel) copyLabel.textContent = "Copy Excuse";
    }, 2000);
  });
};

window.shareBlameText = function() {
  const text = document.getElementById('blame-result-text')?.textContent;
  if (!text) return;
  const shareData = {
    title: 'The Blame Generator – Bakwaas Center',
    text: `"${text}"\n\nOfficial excuse provided by Bakwaas Center:`,
    url: 'https://bakwas-centre.vercel.app/blame-generator'
  };
  shareHelper(shareData, 'share-blame-label', 'Share Excuse');
};

// -----------------------------------------------------------------------------
// 4. USELESS DEGREE CONVOCATION & ACCESSIBLE DROPDOWN
// -----------------------------------------------------------------------------
window.initCustomDegreeDropdown = function() {
  const dropdownContainer = document.getElementById('custom-degree-dropdown');
  if (!dropdownContainer) return;

  renderDropdownButton();
  renderDropdownMenu();

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!dropdownContainer.contains(e.target)) {
      closeDegreeDropdown();
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDegreeDropdown();
    }
  });
};

function renderDropdownButton() {
  const current = window.AppState.currentDegree;
  const triggerBtn = document.getElementById('degree-dropdown-trigger');
  if (!triggerBtn) return;

  triggerBtn.innerHTML = `
    <div class="flex items-center gap-3 text-left overflow-hidden">
      <span class="text-2xl flex-shrink-0">${current.icon}</span>
      <div class="truncate">
        <p class="font-bold text-sm sm:text-base text-gray-900 truncate">${current.title}</p>
        <p class="text-xs text-gray-500 truncate hidden sm:block">${current.desc}</p>
      </div>
    </div>
    <div class="text-gray-400 pl-2">
      <svg class="w-5 h-5 transition-transform duration-200 ${window.AppState.isDropdownOpen ? 'rotate-180 text-emerald-600' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  `;
}

function renderDropdownMenu() {
  const menu = document.getElementById('degree-dropdown-menu');
  if (!menu) return;

  menu.innerHTML = DEGREES_LIST.map((deg, idx) => {
    const isSelected = deg.title === window.AppState.currentDegree.title;
    return `
      <div 
        role="option"
        aria-selected="${isSelected}"
        onclick="selectDegree(${idx})"
        class="flex items-start gap-3 p-3 rounded-xl cursor-pointer transition ${
          isSelected 
            ? 'bg-emerald-50 border border-emerald-200 text-emerald-950 font-semibold' 
            : 'hover:bg-gray-50 text-gray-800'
        }">
        <span class="text-2xl flex-shrink-0 mt-0.5">${deg.icon}</span>
        <div class="flex-1 min-w-0 text-left">
          <p class="text-sm font-bold truncate ${isSelected ? 'text-emerald-900' : 'text-gray-900'}">
            ${deg.title}
          </p>
          <p class="text-xs text-gray-500 line-clamp-1 mt-0.5">
            ${deg.desc}
          </p>
        </div>
        ${isSelected ? '<span class="text-emerald-600 font-bold text-base">✓</span>' : ''}
      </div>
    `;
  }).join('');
}

window.toggleDegreeDropdown = function(e) {
  if (e) e.stopPropagation();
  window.AppState.isDropdownOpen = !window.AppState.isDropdownOpen;
  const menu = document.getElementById('degree-dropdown-menu');
  if (menu) {
    if (window.AppState.isDropdownOpen) {
      menu.classList.remove('hidden');
      menu.classList.add('animate-scale-in');
    } else {
      menu.classList.add('hidden');
    }
  }
  renderDropdownButton();
};

function closeDegreeDropdown() {
  window.AppState.isDropdownOpen = false;
  const menu = document.getElementById('degree-dropdown-menu');
  if (menu) menu.classList.add('hidden');
  renderDropdownButton();
}

window.selectDegree = function(index) {
  window.AppState.currentDegree = DEGREES_LIST[index];
  closeDegreeDropdown();
  renderDropdownButton();
  renderDropdownMenu();

  // If certificate already shown, live update with new template
  const renderZone = document.getElementById('certificate-render-zone');
  if (renderZone && !renderZone.classList.contains('hidden')) {
    window.generateCertificate(false);
  }
};

window.handleSignatureInput = function() {
  const nameInput = document.getElementById('degree-name');
  if (nameInput && !nameInput.value.trim()) {
    nameInput.value = "Desi Legend";
  }
  window.generateCertificate(false);
};

window.handleDegreeLiveUpdate = function() {
  const renderZone = document.getElementById('certificate-render-zone');
  if (renderZone && !renderZone.classList.contains('hidden')) {
    window.generateCertificate(false);
  }
};

window.generateCertificate = function(shouldScroll = true) {
  const nameInput = document.getElementById('degree-name');
  const signInput = document.getElementById('degree-sign-by');
  const errorMsg = document.getElementById('degree-error');
  const emptyZone = document.getElementById('certificate-empty');
  const renderZone = document.getElementById('certificate-render-zone');
  const wrapper = document.getElementById('certificate-content-wrapper');

  let nameVal = nameInput ? nameInput.value.trim() : '';
  const signerVal = signInput ? signInput.value.trim() : '';

  if (!nameVal && signerVal) {
    nameVal = "The Certified Legend";
    if (nameInput) nameInput.value = nameVal;
  }

  if (!nameVal) {
    if (errorMsg) errorMsg.classList.remove('hidden');
    if (nameInput) nameInput.focus();
    return;
  }

  if (errorMsg) errorMsg.classList.add('hidden');

  const selectedDegree = window.AppState.currentDegree.title;
  const certId = `BCU-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const certDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // Generate distinct HTML format for this degree
  if (wrapper) {
    wrapper.innerHTML = renderCertificateHTML(selectedDegree, nameVal, signerVal, certId, certDate, window.AppState.candidatePhoto);
  }

  if (emptyZone) emptyZone.classList.add('hidden');
  if (renderZone) {
    renderZone.classList.remove('hidden');
    renderZone.classList.add('animate-scale-in');
  }

  if (shouldScroll && window.innerWidth < 640 && renderZone) {
    renderZone.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

// -----------------------------------------------------------------------------
// CERTIFICATE DOWNLOAD AND EXPORT SYSTEM
// -----------------------------------------------------------------------------
function getSafeFileName(extension) {
  const nameInput = document.getElementById('degree-name');
  const name = (nameInput?.value || 'Legend').trim().replace(/[^a-zA-Z0-9_-]/g, '_');
  const degree = (window.AppState.currentDegree?.title || 'Degree').replace(/[^a-zA-Z0-9_-]/g, '_');
  return `Bakwaas_Degree_${name}_${degree}.${extension}`;
}

async function getCertificateImageURL(target) {
  // Ensure custom web fonts are loaded for clean rendering
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch {
      // Ignore font readiness timeout
    }
  }

  // Primary: html2canvas natively renders rendered elements without cross-origin stylesheet errors
  try {
    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false
    });
    return canvas.toDataURL('image/png', 1.0);
  } catch (canvasErr) {
    console.warn('html2canvas failed, attempting htmlToImage fallback:', canvasErr);
    // Fallback: htmlToImage with skipFonts to prevent cross-origin cssRules security errors
    return await htmlToImage.toPng(target, {
      pixelRatio: 2,
      skipFonts: true,
      fontEmbedCSS: '',
      cacheBust: false,
      backgroundColor: null,
      filter: (node) => {
        if (node.classList && node.classList.contains('no-print')) return false;
        return true;
      }
    });
  }
}

window.downloadCertificatePNG = async function() {
  const renderZone = document.getElementById('certificate-render-zone');
  const wrapper = document.getElementById('certificate-content-wrapper');

  if (!renderZone || renderZone.classList.contains('hidden') || !wrapper || !wrapper.firstElementChild) {
    window.generateCertificate(false);
  }

  const target = wrapper?.firstElementChild;
  if (!target) {
    showToast("Please enter your name and generate the degree first!");
    return;
  }

  const btn = document.getElementById('btn-download-png');
  const originalHTML = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span class="inline-block animate-spin">⏳</span> <span>Generating PNG...</span>`;
  }

  try {
    showToast("Preparing your high-resolution degree...");
    const dataUrl = await getCertificateImageURL(target);
    const link = document.createElement('a');
    link.download = getSafeFileName('png');
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("🎉 Degree image downloaded successfully!");
  } catch (err) {
    console.error('Download PNG failed:', err);
    showToast("Direct download issue. Opening print view...");
    window.print();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
    }
  }
};

window.downloadCertificatePDF = async function() {
  const renderZone = document.getElementById('certificate-render-zone');
  const wrapper = document.getElementById('certificate-content-wrapper');

  if (!renderZone || renderZone.classList.contains('hidden') || !wrapper || !wrapper.firstElementChild) {
    window.generateCertificate(false);
  }

  const target = wrapper?.firstElementChild;
  if (!target) {
    showToast("Please enter your name and generate the degree first!");
    return;
  }

  const btn = document.getElementById('btn-download-pdf');
  const originalHTML = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span class="inline-block animate-spin">⏳</span> <span>Generating PDF...</span>`;
  }

  try {
    showToast("Generating official PDF document...");
    const dataUrl = await getCertificateImageURL(target);

    const img = new Image();
    img.src = dataUrl;
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const imgWidth = img.width;
    const imgHeight = img.height;
    const isLandscape = imgWidth >= imgHeight;

    // Use PDF with exact pixel scaling matching the high-res render
    const pdf = new jsPDF({
      orientation: isLandscape ? 'landscape' : 'portrait',
      unit: 'pt',
      format: [imgWidth, imgHeight]
    });

    pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(getSafeFileName('pdf'));
    showToast("🎉 PDF certificate downloaded successfully!");
  } catch (err) {
    console.error('Download PDF failed:', err);
    showToast("PDF generator issue. Opening print view...");
    window.print();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
    }
  }
};

window.printCertificate = function() {
  const renderZone = document.getElementById('certificate-render-zone');
  if (!renderZone || renderZone.classList.contains('hidden')) {
    window.generateCertificate(false);
  }
  window.print();
};

window.shareDegreeCertificate = function() {
  const name = document.getElementById('degree-name')?.value?.trim() || 'A Distinguished Scholar';
  const degree = window.AppState.currentDegree?.title || 'Useless Degree';
  const signBy = document.getElementById('degree-sign-by')?.value?.trim() || window.AppState.currentDegree?.authoritySignature?.name || 'Authority';

  const shareData = {
    title: 'Useless Degree – Bakwaas Center',
    text: `🎓 Official Parody Degree:\n${name} has graduated with a ${degree}, signed by ${signBy} on Bakwaas Center!`,
    url: 'https://bakwas-centre.vercel.app/useless-degree'
  };
  shareHelper(shareData, 'share-degree-label', 'Share Degree');
};

// -----------------------------------------------------------------------------
// UTILITIES & SHARING
// -----------------------------------------------------------------------------
function shareHelper(shareData, btnLabelId, defaultLabel) {
  if (navigator.share && window.isSecureContext) {
    navigator.share(shareData)
      .then(() => {
        showToast("Shared successfully! 🎉");
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          fallbackShareCopy(shareData, btnLabelId, defaultLabel);
        }
      });
  } else {
    fallbackShareCopy(shareData, btnLabelId, defaultLabel);
  }
}

function fallbackShareCopy(shareData, btnLabelId, defaultLabel) {
  const formatted = `${shareData.text}\n${shareData.url}`;
  copyTextHelper(formatted, () => {
    if (btnLabelId) {
      const el = document.getElementById(btnLabelId);
      if (el) el.textContent = "Link Copied! ✓";
      setTimeout(() => {
        if (el && defaultLabel) el.textContent = defaultLabel;
      }, 2000);
    }
    showToast("Share text & link copied to clipboard! 📋");
  });
}

function copyTextHelper(text, onSuccess) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => fallbackCopy(text, onSuccess));
  } else {
    fallbackCopy(text, onSuccess);
  }
}

function fallbackCopy(text, onSuccess) {
  try {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (onSuccess) onSuccess();
  } catch (err) {
    showToast("Please copy text manually!");
  }
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;

  toast.classList.remove('-translate-y-12', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('-translate-y-12', 'opacity-0', 'pointer-events-none');
  }, 2600);
}

window.copyTextHelper = copyTextHelper;
window.showToast = showToast;

// -----------------------------------------------------------------------------
// INITIALIZATION
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  window.initCustomDegreeDropdown();
  if (window.initExcuseGenerator) window.initExcuseGenerator();
  if (window.initRoastGenerator) window.initRoastGenerator();
  if (window.initAdviceGenerator) window.initAdviceGenerator();
  if (window.initOverthinkingGenerator) window.initOverthinkingGenerator();
  if (window.initJobGenerator) window.initJobGenerator();
  // Hydrate initial view and per-route SEO from the browser's current URL
  window.applyRoute(window.location.pathname, false);
});
