// -----------------------------------------------------------------------------
// OVERTHINKING GENERATOR MODULE
// Route: /overthinking-generator
// -----------------------------------------------------------------------------

const DEFAULT_SITUATIONS = [
  "They replied with just 'k.' with a period",
  "My friend walked past and didn't wave back",
  "My manager sent a Slack message saying 'Quick question...'",
  "Someone chuckled right as I walked past their table",
  "I was left on 'Delivered' for 47 minutes",
  "The waiter said 'enjoy your meal' and I replied 'you too'",
  "They liked my message instead of replying to the actual question",
  "My coworker didn't invite me to the coffee run"
];

const ESCALATION_TEMPLATES = [
  {
    theme: "Digital Rejection Spiral",
    step1: "Innocent event: They simply sent a short message or missed a momentary greeting.",
    step2: "Slight suspicion: Notice the absence of emojis. No exclamation point. That period was placed with deliberate, tactical malice.",
    step3: "Overthinking kicks in: They probably reread their draft three times to ensure maximum coldness. Are they re-evaluating our entire friendship since 2018?",
    step4: "Conspiracy theory: There is definitely a secondary secret group chat without me where this exact interaction was previewed and approved by committee.",
    step5: "Apocalyptic conclusion: I must permanently delete all social media accounts, sell my belongings, fake my identity, and relocate to a goat sanctuary in the Scottish Highlands."
  },
  {
    theme: "Social Doom Acceleration",
    step1: "Innocent event: The interaction was brief, probably because they were busy chewing an almond.",
    step2: "Slight suspicion: But wait... their eye contact lingered for 0.4 seconds less than average. That wasn't a glance; that was an eviction notice.",
    step3: "Overthinking kicks in: Remember that mild joke I made four months ago about their shoes? This is the slow-burn revenge. They've been planning this.",
    step4: "Conspiracy theory: The entire building knows. Look at that barista. Even the espresso machine is steaming with passive aggression toward me.",
    step5: "Apocalyptic conclusion: The only honorable path is to wear dark sunglasses indoors, speak only in riddles, and never make eye contact with a human being again."
  },
  {
    theme: "Corporate Paranoia Vortex",
    step1: "Innocent event: A brief note or meeting title that seemed slightly ambiguous.",
    step2: "Slight suspicion: Why did they schedule this for 4:30 PM on a Thursday? That is mathematically the hour of doom.",
    step3: "Overthinking kicks in: Did an algorithm detect that I spent 8 minutes staring at a spreadsheet column header without clicking anything?",
    step4: "Conspiracy theory: Human Resources, IT security, and the building landlord have formed an alliance to audit my browser search history from March.",
    step5: "Apocalyptic conclusion: I need to update my LinkedIn headline immediately to 'Visionary Nomad exploring offline pasture management'."
  },
  {
    theme: "Cosmic Catastrophe Spiral",
    step1: "Innocent event: A normal everyday occurrence that 99.9% of people forget within 6 seconds.",
    step2: "Slight suspicion: But what if this is the tiny butterfly wing flap that initiates my total societal undoing?",
    step3: "Overthinking kicks in: I bet everyone is talking about this right now. Not just friends—local news stations are preparing a crawl at the bottom of the screen.",
    step4: "Conspiracy theory: The universe specifically orchestrated this sequence of quantum particles to humble me before lunchtime.",
    step5: "Apocalyptic conclusion: I will simply crawl under this duvet, build a fortress out of pillows, and declare independence as an autonomous blanket republic."
  }
];

const EXTRA_WORSE_STEPS = [
  "Level 6 Critical Panic: Even my houseplant is leaning away from me in silent judgment. It knows what happened.",
  "Level 6 Cosmic Doom: NASA astronomers just detected an asteroid named after my awkwardness heading towards Earth.",
  "Level 6 Final Defense: I am hiring a lawyer to draft a non-disclosure agreement regarding my existence.",
  "Level 6 Quantum Shock: A parallel universe version of me just felt this cringe and threw their phone into the sea."
];

let lastSpiralIdx = -1;
let currentChain = [];

export function initOverthinkingGenerator() {
  const inputEl = document.getElementById('overthinking-input');
  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        window.generateOverthinking();
      }
    });
  }
}

export function generateOverthinking() {
  const inputEl = document.getElementById('overthinking-input');
  let situation = inputEl ? inputEl.value.trim() : '';

  if (!situation) {
    situation = DEFAULT_SITUATIONS[Math.floor(Math.random() * DEFAULT_SITUATIONS.length)];
  }

  // Pick non-repeating escalation template
  let idx;
  if (ESCALATION_TEMPLATES.length <= 1) {
    idx = 0;
  } else {
    do {
      idx = Math.floor(Math.random() * ESCALATION_TEMPLATES.length);
    } while (idx === lastSpiralIdx);
  }
  lastSpiralIdx = idx;
  const tmpl = ESCALATION_TEMPLATES[idx];

  // Construct 5 steps
  currentChain = [
    { level: 1, name: "Harmless Event", badge: "bg-emerald-100 text-emerald-800 border-emerald-200", icon: "🌱", text: `“${situation}” — Seems totally ordinary on paper, right?` },
    { level: 2, name: "Slight Suspicion", badge: "bg-blue-100 text-blue-800 border-blue-200", icon: "🧐", text: tmpl.step2 },
    { level: 3, name: "Acute Overthinking", badge: "bg-amber-100 text-amber-800 border-amber-200", icon: "🌀", text: tmpl.step3 },
    { level: 4, name: "Full Conspiracy", badge: "bg-purple-100 text-purple-800 border-purple-200", icon: "🕵️", text: tmpl.step4 },
    { level: 5, name: "Apocalyptic Conclusion", badge: "bg-rose-100 text-rose-800 border-rose-200", icon: "🚨", text: tmpl.step5 }
  ];

  renderOverthinkingUI(situation);
  return currentChain;
}

export function makeItWorse() {
  if (currentChain.length === 0) {
    generateOverthinking();
    return;
  }

  // Check if we already have level 6
  if (currentChain.length >= 6) {
    // Replace level 6 with a fresh one
    const worseText = EXTRA_WORSE_STEPS[Math.floor(Math.random() * EXTRA_WORSE_STEPS.length)];
    currentChain[5] = {
      level: 6,
      name: "Defcon 1 Meltdown",
      badge: "bg-red-200 text-red-950 border-red-300 font-extrabold",
      icon: "💀",
      text: worseText
    };
  } else {
    const worseText = EXTRA_WORSE_STEPS[Math.floor(Math.random() * EXTRA_WORSE_STEPS.length)];
    currentChain.push({
      level: 6,
      name: "Defcon 1 Meltdown",
      badge: "bg-red-200 text-red-950 border-red-300 font-extrabold",
      icon: "💀",
      text: worseText
    });
  }

  const inputEl = document.getElementById('overthinking-input');
  const situation = inputEl && inputEl.value.trim() ? inputEl.value.trim() : "Current Crisis";
  renderOverthinkingUI(situation);

  if (window.showToast) {
    window.showToast("Paranoia amplified by 800%! Crisis level increased! 🚨");
  }
}

function renderOverthinkingUI(situation) {
  const resultCard = document.getElementById('overthinking-result-card');
  const timelineEl = document.getElementById('overthinking-timeline');
  const triggerEl = document.getElementById('overthinking-trigger-text');

  if (resultCard && timelineEl) {
    if (triggerEl) triggerEl.textContent = `Scenario: “${situation}”`;

    timelineEl.innerHTML = '';
    currentChain.forEach((step, i) => {
      const stepEl = document.createElement('div');
      stepEl.className = 'flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-100 shadow-2xs animate-fade-in';
      stepEl.innerHTML = `
        <div class="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-lg sm:text-xl">
          ${step.icon}
        </div>
        <div class="flex-grow space-y-1">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <span class="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${step.badge}">
              Level ${step.level}: ${step.name}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-[#1F2937] leading-relaxed font-medium">
            ${step.text}
          </p>
        </div>
      `;
      timelineEl.appendChild(stepEl);
    });

    resultCard.classList.remove('hidden');
    resultCard.classList.add('animate-scale-in');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

export function copyOverthinking() {
  if (currentChain.length === 0) {
    if (window.showToast) window.showToast("Enter a situation to overthink first! 🌀");
    return;
  }
  const fullText = currentChain.map(s => `[Level ${s.level}: ${s.name}]\n${s.text}`).join('\n\n');
  if (window.copyTextHelper) {
    window.copyTextHelper(fullText, () => {
      if (window.showToast) window.showToast("Overthinking spiral copied to clipboard! 🌀");
    });
  }
}

export function resetOverthinking() {
  const inputEl = document.getElementById('overthinking-input');
  if (inputEl) inputEl.value = '';
  currentChain = [];
  const resultCard = document.getElementById('overthinking-result-card');
  if (resultCard) {
    resultCard.classList.add('hidden');
    resultCard.classList.remove('animate-scale-in');
  }
  if (window.showToast) window.showToast("Brain cleared! All unnecessary conspiracies cancelled! 🧘");
}

window.initOverthinkingGenerator = initOverthinkingGenerator;
window.generateOverthinking = generateOverthinking;
window.makeItWorse = makeItWorse;
window.copyOverthinking = copyOverthinking;
window.resetOverthinking = resetOverthinking;
