// -----------------------------------------------------------------------------
// EXCUSE GENERATOR MODULE
// Route: /excuse-generator
// -----------------------------------------------------------------------------

const DEFAULT_SITUATIONS = {
  school: [
    "I didn't do my homework assignment",
    "I skipped the 8 AM lecture",
    "I haven't started studying for tomorrow's exam",
    "I forgot my textbook at home",
    "My group project slides are completely empty"
  ],
  work: [
    "I missed the quarterly status update meeting",
    "I haven't replied to my manager's urgent email",
    "The client presentation is 3 days overdue",
    "I was caught browsing social media during the demo",
    "I left work 2 hours early without informing anyone"
  ],
  late: [
    "I am 45 minutes late to the morning standup",
    "I showed up after lunch was already over",
    "I missed the departure of the group road trip",
    "I arrived at the dentist 30 minutes after closing",
    "I showed up to dinner when everyone was asking for the bill"
  ],
  social: [
    "I bailed on Friday night party plans at the last second",
    "I left the group chat on read for 4 consecutive days",
    "I forgot my close friend's birthday party",
    "I said I was '5 minutes away' while still in bed",
    "I canceled the weekend picnic because it looked slightly cloudy"
  ],
  general: [
    "I completely forgot to buy milk and groceries",
    "I haven't folded the laundry sitting on the chair for 3 weeks",
    "I postponed going to the gym for the 14th consecutive day",
    "I lost the house keys inside my own backpack",
    "I let the phone ring until voicemail because I feared small talk"
  ]
};

const EXCUSE_TEMPLATES = {
  school: [
    {
      intro: "Look, according to quantum pedagogic thermodynamics,",
      body: "my notebook attained a localized singularity where opening the assignment page risked collapsing our classroom's gravitational field.",
      twist: "A stray pigeon was perched on my window displaying intense academic disapproval, rendering all study attempts spiritually invalid.",
      plea: "I respectfully suggest awarding me full attendance on philosophical grounds."
    },
    {
      intro: "Under normal circumstances I would have completed this effortlessly, but",
      body: "my Wi-Fi router underwent an emergency spiritual sabbatical and refused to transmit homework packets across earthly frequencies.",
      twist: "My textbook also mysteriously converted its font into ancient Mayan hieroglyphics overnight.",
      plea: "Please accept this verbal essay as a testament to my boundless creative resilience."
    },
    {
      intro: "I must bring an unprecedented geopolitical event to your attention:",
      body: "an autonomous squirrel faction established a sovereign checkpoint over my backpack and declared all homework sheets contraband.",
      twist: "Negotiations broke down when they demanded three peanut butter cookies as a non-refundable customs toll.",
      plea: "I am awaiting UN intervention before I can retrieve my assignments."
    },
    {
      intro: "With the utmost respect to the curriculum,",
      body: "I attempted to review chapter 4, but reading page 1 triggered a severe existential paradox regarding the meaning of multiple-choice questions.",
      twist: "If I had answered question 3 correctly, it would have permanently altered my timeline.",
      plea: "I chose to protect the space-time continuum instead of scoring an A."
    }
  ],
  work: [
    {
      intro: "Technically speaking, the delay was orchestrated by corporate fate:",
      body: "my spreadsheet macro achieved brief sentience, audited my life choices, and held the presentation hostage behind an encrypted emoji password.",
      twist: "IT was notified, but they were busy rebooting the coffee machine's philosophical subroutines.",
      plea: "Let us classify this deliverable under 'strategic delayed gratification'."
    },
    {
      intro: "I had every intention of hitting the deadline at 100% capacity, however",
      body: "a rogue Outlook calendar reminder from 2019 initiated an infinite synchronization loop that depleted my cerebral bandwidth.",
      twist: "Three senior vice presidents were CC'd on an email chain discussing carpet tile colors, which commanded my full moral vigilance.",
      plea: "I am currently pivoting towards agile resilience."
    },
    {
      intro: "According to our internal synergy metrics,",
      body: "rushing this deliverable would have caused significant disruption to our department's baseline serenity quotient.",
      twist: "My laptop keyboard's Enter key entered a union dispute and refused to submit files until working conditions improved.",
      plea: "I propose we circle back offline during the next fiscal millennium."
    },
    {
      intro: "I was deeply immersed in deep-work protocol when",
      body: "a suspicious Slack notification pinged at a frequency scientifically proven to induce 45 minutes of involuntary cat videos.",
      twist: "The algorithm was simply too robust for mortal resistance.",
      plea: "I recommend we add this to the risk register under unforeseen digital turbulence."
    }
  ],
  late: [
    {
      intro: "I was actually on schedule until an astrophysical anomaly occurred:",
      body: "every single traffic signal within a 6-kilometer radius formed a mutual defense coalition to stay red exclusively while my vehicle approached.",
      twist: "Even a pedestrian crosswalk icon took a personal 12-minute sabbatical.",
      plea: "My arrival now should be celebrated as a triumph over celestial adversity."
    },
    {
      intro: "I left my residence with pristine punctuality in mind, but",
      body: "my GPS recalculated a 'scenic bypass' that routed me through three spiritual detours, an abandoned tollbooth, and a village goats' festival.",
      twist: "The GPS voice assistant then started reciting tragic Russian poetry instead of exit ramps.",
      plea: "I am physically here, and that alone defies all probabilistic models."
    },
    {
      intro: "The fundamental laws of relativity must be cited here:",
      body: "I was traveling at near light-speed in spirit, which inevitably caused severe time dilation for everyone waiting at this coordinate.",
      twist: "From my temporal perspective, I am actually 15 minutes early.",
      plea: "I kindly request that you adjust your clocks to my personal spacetime frame."
    },
    {
      intro: "To be completely transparent about the holdup:",
      body: "my front door lock sensed an imbalance in my aura and refused to grant egress until I listened to an entire 24-minute podcast episode on mindfulness.",
      twist: "You cannot rush enlightenment when the deadbolt is listening.",
      plea: "I arrive peaceful, centered, and completely devoid of punctuality."
    }
  ],
  social: [
    {
      intro: "I was genuinely looking forward to gathering in person, but",
      body: "my social battery underwent an emergency firmware patch that takes 48 business hours to download over cellular data.",
      twist: "My sweatpants staged an aggressive peaceful protest the moment I reached for real jeans.",
      plea: "I am sending warm psychic vibrations from the comfort of my couch."
    },
    {
      intro: "An astrological catastrophe of the highest order transpired:",
      body: "Mercury entered a hyper-chaotic retrograde cycle specifically targeting my desire to engage in small talk with groups larger than two.",
      twist: "My horoscope strictly warned that leaving the house would trigger awkward encounters with distant acquaintances.",
      plea: "I sacrificed our hangout to protect the universe from my awkward jokes."
    },
    {
      intro: "I had selected my outfit and even tied my left shoe, however",
      body: "my pet cat looked at me with deep ancestral disappointment, essentially forbidding all human contact for the evening.",
      twist: "One does not simply ignore the gaze of a domestic feline authority.",
      plea: "Let's reschedule for a date when the stars and my sofa are less seductive."
    },
    {
      intro: "I must invoke the Universal Introvert Charter Article 9:",
      body: "my daily allotment of extroverted charisma was depleted at 2:15 PM by an unexpectedly long conversation with the elevator mirror.",
      twist: "Recharging requires 8 hours of silence and reruns of low-stakes television.",
      plea: "Consider my absence as a protective measure for everyone's sanity."
    }
  ],
  general: [
    {
      intro: "In all honesty and scientific fairness,",
      body: "a localized micro-gravitational vortex developed directly over my bed, preventing upright mobility for several critical hours.",
      twist: "Any attempt to resist would have resulted in severe blanket displacement.",
      plea: "I am recovering nicely and will attempt basic human functioning shortly."
    },
    {
      intro: "The situation was entirely hijacked by unforeseen logistics:",
      body: "I spent three hours searching for my spectacles before realizing they were parked securely on top of my own forehead.",
      twist: "By the time the optical investigation concluded, all momentum was lost to history.",
      plea: "Let us agree to wipe the slate clean and never mention this again."
    },
    {
      intro: "According to the ancient unwritten laws of domestic inertia,",
      body: "taking action today would have created an unnatural spike in my productivity baseline that my future self could never sustain.",
      twist: "Consistency is key, and I remain consistently committed to tomorrow.",
      plea: "I thank you in advance for your boundless compassion and lack of scrutiny."
    },
    {
      intro: "I attempted to tackle the issue head-on, but",
      body: "my inner monologue scheduled an urgent committee meeting to debate whether penguins have knees, which deadlocked for hours.",
      twist: "The committee adjourned without resolving the penguin issue or the chore.",
      plea: "We must respect the democratic process of internal confusion."
    }
  ]
};

const PLAUSIBILITY_METRICS = [
  { rating: "0.2% Plausible", badge: "bg-red-100 text-red-800 border-red-200" },
  { rating: "Astrophysically Dubious", badge: "bg-purple-100 text-purple-800 border-purple-200" },
  { rating: "Legally Unenforceable", badge: "bg-amber-100 text-amber-800 border-amber-200" },
  { rating: "100% Unverifiable", badge: "bg-blue-100 text-blue-800 border-blue-200" },
  { rating: "Purely Theatrical", badge: "bg-emerald-100 text-emerald-800 border-emerald-200" }
];

let lastExcuseIdx = -1;

export function initExcuseGenerator() {
  const categoryBtns = document.querySelectorAll('.excuse-cat-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => {
        b.classList.remove('active', 'bg-blue-600', 'text-white', 'border-blue-600');
        b.classList.add('bg-white', 'text-[#4B5563]', 'border-gray-200');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active', 'bg-blue-600', 'text-white', 'border-blue-600');
      btn.classList.remove('bg-white', 'text-[#4B5563]', 'border-gray-200');
      btn.setAttribute('aria-pressed', 'true');
    });
  });

  const inputEl = document.getElementById('excuse-situation-input');
  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        window.generateExcuse();
      }
    });
  }
}

export function getSelectedExcuseCategory() {
  const activeBtn = document.querySelector('.excuse-cat-btn.active');
  return activeBtn ? activeBtn.getAttribute('data-category') : 'general';
}

export function generateExcuse() {
  const category = getSelectedExcuseCategory();
  const inputEl = document.getElementById('excuse-situation-input');
  let customSituation = inputEl ? inputEl.value.trim() : '';

  const templates = EXCUSE_TEMPLATES[category] || EXCUSE_TEMPLATES.general;
  const defaultList = DEFAULT_SITUATIONS[category] || DEFAULT_SITUATIONS.general;

  // Pick random template index different from last
  let templateIdx;
  if (templates.length <= 1) {
    templateIdx = 0;
  } else {
    do {
      templateIdx = Math.floor(Math.random() * templates.length);
    } while (templateIdx === lastExcuseIdx);
  }
  lastExcuseIdx = templateIdx;
  const tmpl = templates[templateIdx];

  // Pick a situation if empty
  const fallbackSituation = defaultList[Math.floor(Math.random() * defaultList.length)];
  const displaySituation = customSituation || fallbackSituation;

  // Generate varied excuse text
  const excuseText = `Regarding "${displaySituation}": ${tmpl.intro} ${tmpl.body} ${tmpl.twist} ${tmpl.plea}`;

  // Pick random plausibility
  const metric = PLAUSIBILITY_METRICS[Math.floor(Math.random() * PLAUSIBILITY_METRICS.length)];

  // Update UI
  const resultCard = document.getElementById('excuse-result-card');
  const situationEl = document.getElementById('excuse-result-situation');
  const textEl = document.getElementById('excuse-result-text');
  const metricEl = document.getElementById('excuse-result-metric');
  const catBadgeEl = document.getElementById('excuse-result-cat');

  if (resultCard && textEl) {
    if (situationEl) situationEl.textContent = `“${displaySituation}”`;
    textEl.textContent = excuseText;

    if (metricEl) {
      metricEl.textContent = metric.rating;
      metricEl.className = `text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${metric.badge}`;
    }

    if (catBadgeEl) {
      catBadgeEl.textContent = `${category.toUpperCase()} ALIBI`;
    }

    resultCard.classList.remove('hidden');
    resultCard.classList.add('animate-scale-in');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  return excuseText;
}

export function copyExcuse() {
  const textEl = document.getElementById('excuse-result-text');
  if (!textEl || !textEl.textContent) {
    if (window.showToast) window.showToast("Generate an excuse first! 🛡️");
    return;
  }
  if (window.copyTextHelper) {
    window.copyTextHelper(textEl.textContent, () => {
      if (window.showToast) window.showToast("Excuse copied to clipboard! Ready to deflect! 🛡️");
    });
  }
}

export function resetExcuse() {
  const inputEl = document.getElementById('excuse-situation-input');
  if (inputEl) inputEl.value = '';
  const resultCard = document.getElementById('excuse-result-card');
  if (resultCard) {
    resultCard.classList.add('hidden');
    resultCard.classList.remove('animate-scale-in');
  }
  // Reset category to General
  const generalBtn = document.querySelector('.excuse-cat-btn[data-category="general"]');
  if (generalBtn) generalBtn.click();
  if (window.showToast) window.showToast("Excuse generator reset. Clear conscience restored! ✨");
}

// Attach to window for inline HTML onclick handlers
window.initExcuseGenerator = initExcuseGenerator;
window.generateExcuse = generateExcuse;
window.copyExcuse = copyExcuse;
window.resetExcuse = resetExcuse;
