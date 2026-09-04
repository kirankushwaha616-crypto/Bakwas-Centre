// -----------------------------------------------------------------------------
// ROAST GENERATOR MODULE
// Route: /roast-generator
// -----------------------------------------------------------------------------

const ROAST_TEMPLATES = {
  mild: [
    {
      setup: "{target} has the exact energy of",
      burn: "a smartphone battery that has been stuck on 1% for three consecutive days and stubbornly refuses to die.",
      kicker: "Not totally useless, but keeping everyone on edge."
    },
    {
      setup: "If procrastination were recognized as an Olympic event,",
      burn: "{target} wouldn't even participate—they would wait until next year to register.",
      kicker: "Even the sofa has started charging them rent."
    },
    {
      setup: "Observing {target} make a simple decision",
      burn: "is like watching a spinning loading wheel on dial-up internet in 2003.",
      kicker: "Take your time, the decade is still young."
    },
    {
      setup: "{target} is the kind of person who",
      burn: "sets seven consecutive alarms in the morning just to wake up and snooze every single one of them with athletic precision.",
      kicker: "A true maestro of horizontal slumber."
    },
    {
      setup: "Whenever {target} says 'I'll be there in 5 minutes',",
      burn: "they haven't even found their second sock yet.",
      kicker: "Their GPS is running on hope and fiction."
    },
    {
      setup: "{target}'s attention span is currently sponsored by",
      burn: "a microwave timer that was stopped with 1 second remaining.",
      kicker: "Capable of greatness, easily distracted by refrigerator hums."
    }
  ],
  savage: [
    {
      setup: "{target} brings two indispensable assets to every group project:",
      burn: "unwavering overconfidence and a broken Google Docs link with view-only permissions.",
      kicker: "The team morale has never been more spiritually tested."
    },
    {
      setup: "Analyzing {target}'s weekly screen time report",
      burn: "doesn't measure phone usage; it measures a desperate, unfiltered cry for natural sunlight.",
      kicker: "Even the device's OLED pixels are begging for a nap."
    },
    {
      setup: "Talking to {target} about time management and productivity",
      burn: "is like consulting a penguin for transatlantic flight navigation coordinates.",
      kicker: "All confidence, zero takeoff capability."
    },
    {
      setup: "{target} has masterfully perfected",
      burn: "the art of looking deeply overwhelmed while completing absolutely zero tangible tasks.",
      kicker: "A masterclass in strategic panting."
    },
    {
      setup: "If you looked up the definition of 'Let's circle back on this offline',",
      burn: "you would find a high-definition photograph of {target} avoiding accountability.",
      kicker: "Diplomatic immunity on full display."
    },
    {
      setup: "{target}'s search history looks like",
      burn: "an accidental philosophical debate between a confused badger and a broken calculator.",
      kicker: "Not even search engines know how to respond."
    }
  ],
  absurd: [
    {
      setup: "{target} is the biological human equivalent of",
      burn: "a software patch that took 4 hours to download and only added two new emojis that nobody ever asked for.",
      kicker: "System reboot completed without any observable enhancements."
    },
    {
      setup: "Every time {target} enters a room,",
      burn: "the local Wi-Fi signal drops by two full bars purely out of existential awkwardness.",
      kicker: "Even the router needs a moment to process the aura."
    },
    {
      setup: "{target} once engaged in a 15-minute argument with",
      burn: "an automatic supermarket sliding door, and somehow the sliding door made more coherent points.",
      kicker: "Glass surfaces remain victorious."
    },
    {
      setup: "Astronomers recently confirmed that {target}",
      burn: "possesses a localized gravitational field that attracts unmatched socks and unread group chat pings.",
      kicker: "NASA is reviewing the findings."
    },
    {
      setup: "{target} walks like",
      burn: "a character in a video game whose physics engine is operating on 12% GPU memory.",
      kicker: "Clipping through the environment with maximum swagger."
    },
    {
      setup: "If {target} were an ice cream flavor,",
      burn: "they would be lukewarm tap water sprinkled with lukewarm tap water.",
      kicker: "Refreshing only in theory."
    }
  ]
};

const BURN_DEGREES = {
  mild: [
    "🔥 1st Degree: Wholesome Sizzle",
    "☕ Warm Chai Burn",
    "🌤️ Gentle Solar Flare"
  ],
  savage: [
    "🔥🔥 2nd Degree: Emotional Combustion",
    "🌋 Volcanic Reality Check",
    "💀 Critical Hit Roast"
  ],
  absurd: [
    "🪐 Cosmic Singularity Roast",
    "⚡ Surreal Brain Melt",
    "🛸 Deep Space Parody Burn"
  ]
};

let currentIntensity = 'savage';
let lastRoastIdx = -1;

export function initRoastGenerator() {
  const intensityBtns = document.querySelectorAll('.roast-intensity-btn');
  intensityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      intensityBtns.forEach(b => {
        b.classList.remove('active', 'bg-rose-600', 'text-white', 'border-rose-600');
        b.classList.add('bg-white', 'text-[#4B5563]', 'border-gray-200');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active', 'bg-rose-600', 'text-white', 'border-rose-600');
      btn.classList.remove('bg-white', 'text-[#4B5563]', 'border-gray-200');
      btn.setAttribute('aria-pressed', 'true');
      currentIntensity = btn.getAttribute('data-intensity') || 'savage';
    });
  });

  const inputEl = document.getElementById('roast-target-input');
  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        window.generateRoast();
      }
    });
  }
}

export function generateRoast() {
  const inputEl = document.getElementById('roast-target-input');
  let target = inputEl ? inputEl.value.trim() : '';
  if (!target) {
    target = 'You';
  }

  const list = ROAST_TEMPLATES[currentIntensity] || ROAST_TEMPLATES.savage;

  // Pick non-repeating index
  let idx;
  if (list.length <= 1) {
    idx = 0;
  } else {
    do {
      idx = Math.floor(Math.random() * list.length);
    } while (idx === lastRoastIdx);
  }
  lastRoastIdx = idx;
  const tmpl = list[idx];

  const setupText = tmpl.setup.replace('{target}', target);
  const burnText = tmpl.burn.replace('{target}', target);
  const fullRoast = `${setupText} ${burnText} (${tmpl.kicker})`;

  // Degree badge
  const degrees = BURN_DEGREES[currentIntensity] || BURN_DEGREES.savage;
  const degreeText = degrees[Math.floor(Math.random() * degrees.length)];

  // Update UI
  const resultCard = document.getElementById('roast-result-card');
  const targetBadge = document.getElementById('roast-target-badge');
  const degreeBadge = document.getElementById('roast-degree-badge');
  const textEl = document.getElementById('roast-result-text');
  const kickerEl = document.getElementById('roast-result-kicker');

  if (resultCard && textEl) {
    if (targetBadge) targetBadge.textContent = `🎯 Target: ${target}`;
    if (degreeBadge) degreeBadge.textContent = degreeText;
    textEl.textContent = `${setupText} ${burnText}`;
    if (kickerEl) kickerEl.textContent = `“${tmpl.kicker}”`;

    resultCard.classList.remove('hidden');
    resultCard.classList.add('animate-scale-in');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  return fullRoast;
}

export function copyRoast() {
  const textEl = document.getElementById('roast-result-text');
  const kickerEl = document.getElementById('roast-result-kicker');
  if (!textEl || !textEl.textContent) {
    if (window.showToast) window.showToast("Generate a roast first! 🔥");
    return;
  }
  const textToCopy = `${textEl.textContent} ${kickerEl ? kickerEl.textContent : ''}`.trim();
  if (window.copyTextHelper) {
    window.copyTextHelper(textToCopy, () => {
      if (window.showToast) window.showToast("Roast copied to clipboard! Deploy responsibly! 🔥");
    });
  }
}

export function resetRoast() {
  const inputEl = document.getElementById('roast-target-input');
  if (inputEl) inputEl.value = '';
  const resultCard = document.getElementById('roast-result-card');
  if (resultCard) {
    resultCard.classList.add('hidden');
    resultCard.classList.remove('animate-scale-in');
  }
  // Reset intensity to Savage
  const savageBtn = document.querySelector('.roast-intensity-btn[data-intensity="savage"]');
  if (savageBtn) savageBtn.click();
  if (window.showToast) window.showToast("Roast generator reset. Peace restored to the timeline! 🕊️");
}

window.initRoastGenerator = initRoastGenerator;
window.generateRoast = generateRoast;
window.copyRoast = copyRoast;
window.resetRoast = resetRoast;
