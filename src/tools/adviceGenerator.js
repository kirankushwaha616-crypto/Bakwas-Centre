// -----------------------------------------------------------------------------
// RANDOM LIFE ADVICE MODULE
// Route: /random-life-advice
// -----------------------------------------------------------------------------

const ADVICE_DATABASE = {
  school: [
    {
      rule: "Academic Survival Principle #12",
      advice: "If you do not know the answer to a multiple-choice question, select 'C' with absolute moral conviction.",
      rationale: "Confidence doesn't increase your grade, but it deeply confuses whoever is grading it.",
      proTip: "Pro-tip: Nod intensely while looking at the exam booklet so you appear locked in deep intellectual warfare."
    },
    {
      rule: "The Lecture Stealth Theorem",
      advice: "Sit in the second row from the back, keep a notebook open, and write down random food recipes whenever the professor looks your way.",
      rationale: "To the untrained eye, rapid cursive pasta recipes resemble groundbreaking theoretical physics.",
      proTip: "Pro-tip: Underline 'garlic butter' twice to signify high importance."
    },
    {
      rule: "Cramming Relativity Axiom",
      advice: "Studying 10 minutes before an exam is 1000% more memorable than studying 10 days earlier because adrenaline is nature's highlighter.",
      rationale: "Memory retention peaks when your heart rate resembles a speed metal drum solo.",
      proTip: "Pro-tip: Read the chapter summary and convince yourself you wrote it in a past life."
    },
    {
      rule: "Group Project Diplomacy Protocol",
      advice: "Volunteer immediately for the title slide design. It takes 4 minutes, looks artistic, and exempts you from the 40-page bibliography.",
      rationale: "Fonts are 90% of presentation charisma.",
      proTip: "Pro-tip: Use subtle drop shadows so your teammates assume it required advanced engineering."
    }
  ],
  productivity: [
    {
      rule: "The Clipboard Shield Maneuver",
      advice: "Walk swiftly through any office or hallway while holding a clipboard and frowning slightly at a single sheet of paper.",
      rationale: "Nobody in human history has ever interrupted a person holding a clipboard with a furrowed brow.",
      proTip: "Pro-tip: If someone tries to speak to you, point to the clipboard, whisper 'almost finalized', and accelerate."
    },
    {
      rule: "Strategic Screen Multiplication",
      advice: "Open at least four different software windows on your monitor, with at least one displaying a fluctuating colored graph.",
      rationale: "Any graph with a trendline makes you look 400% more vital to the enterprise.",
      proTip: "Pro-tip: Press 'Alt + Tab' with rhythmic urgency every 90 seconds."
    },
    {
      rule: "The 'Let Me Think About That' Buffer",
      advice: "Whenever asked to take on a new task, pause for seven seconds, exhale slowly, and say: 'I need to check our bandwidth runway first.'",
      rationale: "Corporate jargon creates a 48-hour protective forcefield around your calendar.",
      proTip: "Pro-tip: Bandwidth runway means literally nothing, which makes it impossible to challenge."
    },
    {
      rule: "The To-Do List Reverse Engineering Hack",
      advice: "Write down things you have already finished on your to-do list just so you can experience the dopamine hit of crossing them out.",
      rationale: "Momentum is a state of mind, and crossing out 'Ate a sandwich' feels magnificent.",
      proTip: "Pro-tip: Include 'Breathed oxygen' for guaranteed 100% daily task completion."
    }
  ],
  social: [
    {
      rule: "The Irish Exit Mastery Guide",
      advice: "Never announce you are leaving a party. Simply step towards the appetizer table, look at your phone, and vanish into the midnight mist.",
      rationale: "Saying goodbye to 14 people takes 45 minutes and involves 3 unwanted hug commitments.",
      proTip: "Pro-tip: Send a text 20 minutes later saying 'Got swept away by destiny! Such fun!'"
    },
    {
      rule: "Small Talk Deflection Routine",
      advice: "If an awkward silence falls over a conversation, simply look up at the ceiling, squint, and say: 'Did you hear that bird?'",
      rationale: "People will spend the next three minutes listening for avian life while you plan your escape.",
      proTip: "Pro-tip: Works even better in fully soundproof basements."
    },
    {
      rule: "The 'I Wish I Could Make It' Formulation",
      advice: "Always decline social invitations with boundless enthusiasm for the event, coupled with an unverifiable personal emergency.",
      rationale: "People appreciate your apparent sorrow more than your actual attendance.",
      proTip: "Pro-tip: 'My sourdough starter is having an emotional crisis' is 100% unarguable."
    },
    {
      rule: "The Mirror Wave Recovery",
      advice: "If you wave at someone who was actually waving at the person behind you, smoothly transition that wave into scratching the back of your head while staring at the clouds.",
      rationale: "Salvaging your dignity requires pretending you are deeply fascinated by meteorology.",
      proTip: "Pro-tip: Murmur 'cirrus clouds today...' to seal the performance."
    }
  ],
  money: [
    {
      rule: "Cart Abandonment Financial Therapy",
      advice: "Add $4,000 worth of luxury gadgets to your online shopping cart, proceed all the way to checkout, and then close the browser tab.",
      rationale: "You receive the entire psychological thrill of shopping while keeping your bank balance intact.",
      proTip: "Pro-tip: You basically just saved $4,000, which means you technically made a profit."
    },
    {
      rule: "The 'It's An Investment' Loophole",
      advice: "Any unnecessary purchase under $50 is an 'investment in mental peace', and anything over $50 is 'future asset diversification'.",
      rationale: "With correct linguistic framing, every impulse buy is a masterstroke in wealth management.",
      proTip: "Pro-tip: A third pair of novelty slippers is definitely an emotional blue-chip asset."
    },
    {
      rule: "The Stealth Dining Philosophy",
      advice: "When dining in a large group, calculate the tip mentally, nod sagely, and hand someone else the bill so they can manage the calculator math.",
      rationale: "Delegation is the cornerstone of high-net-worth leadership.",
      proTip: "Pro-tip: Always round up by 12 cents to demonstrate boundless generosity."
    },
    {
      rule: "Financial Horizon Defense",
      advice: "Never check your bank account balance on a Friday afternoon. What you don't know cannot harm your weekend serenity.",
      rationale: "Schrödinger's bank account: until observed, you are simultaneously both rich and broke.",
      proTip: "Pro-tip: Open the banking app with one eye squinted to minimize emotional exposure."
    }
  ],
  everyday: [
    {
      rule: "The Chair of Laundry Equilibrium",
      advice: "That designated bedroom chair covered in semi-clean clothes is not a mess; it is an organized, breathable, fabric repository.",
      rationale: "Hangers are an unnecessary middleman in the garment lifecycle.",
      proTip: "Pro-tip: Clothes on the chair are seasoned with atmospheric comfort."
    },
    {
      rule: "Midnight Snack Stealth Physics",
      advice: "When opening the refrigerator at 2 AM, pull the door handle with the speed of a sloth so the rubber seal does not make the vacuum suction pop.",
      rationale: "The sound of a fridge door opening carries through suburban walls better than Wi-Fi.",
      proTip: "Pro-tip: Eat the cheese directly over the open drawer to eliminate plate evidence."
    },
    {
      rule: "The Microwave 1-Second Rule",
      advice: "Always stop the microwave with 0:01 on the clock. Prevent the final beep and feel like an elite bomb-defusal specialist.",
      rationale: "That extra beep adds nothing to the burrito's culinary integrity.",
      proTip: "Pro-tip: Whisper 'wire cleared' as you take your hot pocket."
    },
    {
      rule: "The Grocery Cart Drift Technique",
      advice: "Always give your supermarket shopping cart a light running shove on empty cereal aisles and ride the back wheel struts for 4 gloriously free seconds.",
      rationale: "Growing old is mandatory; walking normally down the cereal aisle is optional.",
      proTip: "Pro-tip: Maintain eye contact with the granola boxes to assert dominance."
    }
  ]
};

const RATING_REACTIONS = {
  useful: [
    "💡 Bold choice! Please do not attempt this in an official court of law.",
    "🏆 Your standards for usefulness are wonderfully concerning!",
    "🧠 A visionary recognizes great wisdom when they see it."
  ],
  questionable: [
    "🤨 Exactly where it belongs: in the gray zone between genius and madness.",
    "⚖️ The scientific community is currently 50/50 on this as well.",
    "🧐 Questioning authority is the first step; taking bad advice is the second."
  ],
  useless: [
    "🗑️ Mission accomplished! Zero value delivered with 100% precision.",
    "📉 Your feedback has been discarded into our certified useless bin.",
    "🎯 That's the trademark Bakwaas quality guarantee!"
  ]
};

let currentAdviceCat = 'random';
let lastAdviceIdx = -1;
let voteCounts = { useful: 42, questionable: 89, useless: 137 };

export function initAdviceGenerator() {
  const catBtns = document.querySelectorAll('.advice-cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => {
        b.classList.remove('active', 'bg-yellow-500', 'text-white', 'border-yellow-500');
        b.classList.add('bg-white', 'text-[#4B5563]', 'border-gray-200');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active', 'bg-yellow-500', 'text-white', 'border-yellow-500');
      btn.classList.remove('bg-white', 'text-[#4B5563]', 'border-gray-200');
      btn.setAttribute('aria-pressed', 'true');
      currentAdviceCat = btn.getAttribute('data-category') || 'random';
    });
  });
}

export function generateAdvice() {
  const allCats = ['school', 'productivity', 'social', 'money', 'everyday'];
  let cat = currentAdviceCat;
  if (cat === 'random' || !ADVICE_DATABASE[cat]) {
    cat = allCats[Math.floor(Math.random() * allCats.length)];
  }

  const list = ADVICE_DATABASE[cat];
  let idx;
  if (list.length <= 1) {
    idx = 0;
  } else {
    do {
      idx = Math.floor(Math.random() * list.length);
    } while (idx === lastAdviceIdx);
  }
  lastAdviceIdx = idx;
  const item = list[idx];

  // Update UI
  const resultCard = document.getElementById('advice-result-card');
  const ruleEl = document.getElementById('advice-result-rule');
  const adviceEl = document.getElementById('advice-result-text');
  const rationaleEl = document.getElementById('advice-result-rationale');
  const proTipEl = document.getElementById('advice-result-protip');
  const catBadgeEl = document.getElementById('advice-cat-badge');
  const feedbackMsg = document.getElementById('advice-feedback-msg');

  if (resultCard && adviceEl) {
    if (ruleEl) ruleEl.textContent = item.rule;
    adviceEl.textContent = `“${item.advice}”`;
    if (rationaleEl) rationaleEl.textContent = item.rationale;
    if (proTipEl) proTipEl.textContent = item.proTip;
    if (catBadgeEl) catBadgeEl.textContent = `${cat.toUpperCase()} WISDOM`;
    if (feedbackMsg) feedbackMsg.classList.add('hidden');

    resultCard.classList.remove('hidden');
    resultCard.classList.add('animate-scale-in');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  return `${item.rule}: ${item.advice} (${item.rationale}) ${item.proTip}`;
}

export function rateAdvice(type) {
  if (!voteCounts[type]) voteCounts[type] = 0;
  voteCounts[type]++;

  const countEl = document.getElementById(`vote-count-${type}`);
  if (countEl) countEl.textContent = voteCounts[type];

  const feedbackMsg = document.getElementById('advice-feedback-msg');
  if (feedbackMsg) {
    const list = RATING_REACTIONS[type] || RATING_REACTIONS.questionable;
    const msg = list[Math.floor(Math.random() * list.length)];
    feedbackMsg.textContent = msg;
    feedbackMsg.classList.remove('hidden');
    feedbackMsg.classList.add('animate-fade-in');
  }

  if (window.showToast) {
    window.showToast("Rating recorded in the Hall of Questionable Wisdom! 💡");
  }
}

export function copyAdvice() {
  const ruleEl = document.getElementById('advice-result-rule');
  const adviceEl = document.getElementById('advice-result-text');
  const proTipEl = document.getElementById('advice-result-protip');
  if (!adviceEl || !adviceEl.textContent) {
    if (window.showToast) window.showToast("Generate some advice first! 💡");
    return;
  }
  const text = `${ruleEl ? ruleEl.textContent + '\n' : ''}${adviceEl.textContent}\n${proTipEl ? proTipEl.textContent : ''}`;
  if (window.copyTextHelper) {
    window.copyTextHelper(text.trim(), () => {
      if (window.showToast) window.showToast("Life advice copied! Share this questionable wisdom! 💡");
    });
  }
}

export function resetAdvice() {
  const resultCard = document.getElementById('advice-result-card');
  if (resultCard) {
    resultCard.classList.add('hidden');
    resultCard.classList.remove('animate-scale-in');
  }
  const randomBtn = document.querySelector('.advice-cat-btn[data-category="random"]');
  if (randomBtn) randomBtn.click();
  if (window.showToast) window.showToast("Advice reset. Your life remains blissfully unguided! 🧘");
}

window.initAdviceGenerator = initAdviceGenerator;
window.generateAdvice = generateAdvice;
window.rateAdvice = rateAdvice;
window.copyAdvice = copyAdvice;
window.resetAdvice = resetAdvice;
