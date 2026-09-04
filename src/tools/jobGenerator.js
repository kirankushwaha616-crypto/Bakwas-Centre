// -----------------------------------------------------------------------------
// FAKE JOB TITLE GENERATOR MODULE
// Route: /fake-job-title
// -----------------------------------------------------------------------------

const JOB_COMPONENTS = {
  corporate: {
    seniority: [
      "Chief", "Senior Executive Vice President of", "Principal Director of",
      "Global Head of", "Lead Autonomous Strategist of", "Associate Vice"
    ],
    role: [
      "Synergy Optimization", "Passive-Aggressive Email Drafting", "Meeting That Could Have Been a Slack Message",
      "Spreadsheet Color Harmonization", "Unsolicited Corporate Buzzword Distribution", "Calendar Tetris Management"
    ],
    department: [
      "Hallway Diplomacy", "Executive Banter Logistics", "Watercooler Whispers & Morale",
      "Strategic Postponement Services", "Cross-Functional Hesitation"
    ],
    summaries: [
      "Responsible for scheduling 45-minute alignment calls to determine whether an alignment call is truly necessary.",
      "Dedicated to ensuring company jargon reaches maximum incomprehensibility across all regional business units.",
      "Championing the strategic art of nodding thoughtfully while internally composing grocery lists."
    ],
    responsibilities: [
      "Opening emails, saying 'let me look into this', and immediately archiving them",
      "Deploying the phrase 'Let's take this offline' at least 14 times per business day",
      "Muting microphone during all-hands calls with Olympic-level reflexes"
    ],
    qualifications: "5+ years of staring at PowerPoint loading bars without visibly losing the will to live.",
    compensation: "$140,000 / year paid in lukewarm company mugs and pizza party vouchers."
  },
  tech: {
    seniority: [
      "Principal AI Whisperer of", "Staff Cloud Evaporation Engineer of",
      "Distinguished Bug Reclassification Architect of", "Lead Full-Stack Procrastination Specialist of",
      "Head of Quantum Coffee Deployment &"
    ],
    role: [
      "Unreproducible Edge-Case Creation", "Dark Mode Theological Compliance", "Copy-Pasting from Stack Overflow",
      "Accidental Production Database Deletion", "Terminal Font Aesthetics Governance", "Pull Request Stalling"
    ],
    department: [
      "DevOops & Chaos Architecture", "Legacy Spaghetti Code Preservation",
      "Microservice Over-Engineering Labs", "Unfinished Side Projects Division"
    ],
    summaries: [
      "Specializes in taking a simple 3-line script and rewriting it into a 14-service Kubernetes cluster that fails daily.",
      "Pioneering innovative methodologies to explain why a feature works perfectly on their local laptop and nowhere else in the known universe.",
      "Ensuring all code reviews include at least 17 comments debating indentation versus tabs."
    ],
    responsibilities: [
      "Pushing commits titled 'minor fix' that break core authentication across three continents",
      "Staring intensely at green terminal text to look like a cinematic hacker",
      "Restarting the staging server and acting like it was a deliberate architectural victory"
    ],
    qualifications: "Mastery of pressing 'Cmd + Z' in sheer terror and pretending nothing happened.",
    compensation: "$180,000 in unvested startup equity options that will mathematically yield $4.12."
  },
  student: {
    seniority: [
      "Honorary Dean of", "Head Scholar of", "Lead Campus Research Fellow of",
      "Chief Undergraduate Survivor of", "Master Candidate in"
    ],
    role: [
      "Exam Cramming Adrenaline Logistics", "Library Nap Positioning", "8 AM Lecture Avoidance",
      "Instant Noodle Culinary Chemistry", "Deadline Denial & Syllabus Misinterpretation"
    ],
    department: [
      "Back-Row Inconspicuous Studies", "Group Project Carrying & Despair",
      "Textbook Expense Evasion", "Academic Caffeine Kinetics"
    ],
    summaries: [
      "Conducting rigorous research on how long a human being can survive on iced coffee and pure academic optimism.",
      "Specializing in submitting final term papers at 11:59:58 PM with 2 seconds of glorious runway remaining.",
      "Spearheading cross-campus operations to identify which vending machine dispenses free double bags of chips."
    ],
    responsibilities: [
      "Highlighting 90% of a textbook page until the entire chapter is radioactive yellow",
      "Asking the professor if 'this will be on the test' before the syllabus has been opened",
      "Maintaining an unbroken 4-year streak of avoiding the morning library quiet zone"
    ],
    qualifications: "Ability to write 1,500 words on a topic first discovered 20 minutes prior to submission.",
    compensation: "3 credit hours, half a granola bar, and existential dread."
  },
  internet: {
    seniority: [
      "Supreme Chancellor of", "Grand Curator of", "Global Ambassador of",
      "Chief Viral Anthropologist of", "Executive Director of"
    ],
    role: [
      "Meme Preservation & Archiving", "Comment Section Flame-War Arbitration",
      "Infinite Video Scrolling Logistics", "Unread Notification Hoarding", "Typo Spotting in Viral Tweets"
    ],
    department: [
      "Algorithmic Rabbit-Hole Explorations", "Midnight Wikipedia Spiral Labs",
      "Group Chat Lurking & Reaction Emojis", "Virtual Window Shopping"
    ],
    summaries: [
      "Charged with monitoring short-form video feeds for 6 uninterrupted hours to identify rising cat trends.",
      "Overseeing the preservation of rare 2012 reaction GIFs for future generational amusement.",
      "Managing high-stakes digital diplomacy across 42 unmuted WhatsApp family groups."
    ],
    responsibilities: [
      "Sending 34 reels to friends without watching any of the ones they sent in return",
      "Reading heated arguments between strangers on Reddit while eating cereal at 3 AM",
      "Typing 'underrated comment' under comments that have 95,000 likes"
    ],
    qualifications: "Thumb dexterity capable of scrolling through 4.2 kilometers of feed per calendar day.",
    compensation: "1,200 internet clout points and severe blue-light exposure."
  },
  useless: {
    seniority: [
      "High Commissioner of", "Permanent Undersecretary for", "Senior Grandmaster of",
      "Universal Overseer of", "Supreme Field Marshal of"
    ],
    role: [
      "Oxygen Re-allocation & Breathing Verification", "Dust Particle Trajectory Monitoring",
      "Pencil Tapping Rhythm Synchronization", "Ceiling Fan Velocity Auditing", "Doorbell Echo Analysis"
    ],
    department: [
      "Frivolous Affairs & Inactivity", "Department of Things That Do Not Matter",
      "Bureau of Unsolicited Whistling", "Involuntary Sigh Management"
    ],
    summaries: [
      "Ensuring that zero constructive progress is made between the hours of 9:00 AM and 5:00 PM.",
      "Leading global initiatives to verify that gravity continues to function on small office supplies.",
      "Holding emergency consultations when a desk chair squeaks in an unauthorized pitch."
    ],
    responsibilities: [
      "Walking up to windows, staring thoughtfully outside for 6 minutes, and sighing loudly",
      "Rearranging stationery in alphabetical order by primary ink color",
      "Testing the buoyancy of paper clips in cold water during critical team calls"
    ],
    qualifications: "Zero applicable certifications and an Olympic dedication to doing nothing.",
    compensation: "$0.00 / hour + unlimited moral support and participation ribbons."
  }
};

let currentJobCat = 'corporate';
let lastGeneratedJob = null;

export function initJobGenerator() {
  const catBtns = document.querySelectorAll('.job-cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => {
        b.classList.remove('active', 'bg-teal-600', 'text-white', 'border-teal-600');
        b.classList.add('bg-white', 'text-[#4B5563]', 'border-gray-200');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active', 'bg-teal-600', 'text-white', 'border-teal-600');
      btn.classList.remove('bg-white', 'text-[#4B5563]', 'border-gray-200');
      btn.setAttribute('aria-pressed', 'true');
      currentJobCat = btn.getAttribute('data-category') || 'corporate';
    });
  });

  const inputEl = document.getElementById('job-name-input');
  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        window.generateJob();
      }
    });
  }
}

export function generateJob() {
  const inputEl = document.getElementById('job-name-input');
  let candidateName = inputEl ? inputEl.value.trim() : '';

  const catData = JOB_COMPONENTS[currentJobCat] || JOB_COMPONENTS.corporate;

  const seniority = catData.seniority[Math.floor(Math.random() * catData.seniority.length)];
  const role = catData.role[Math.floor(Math.random() * catData.role.length)];
  const department = catData.department[Math.floor(Math.random() * catData.department.length)];
  const summary = catData.summaries[Math.floor(Math.random() * catData.summaries.length)];

  // Assemble Title
  const jobTitle = `${seniority} ${role} (${department})`;

  lastGeneratedJob = {
    name: candidateName,
    title: jobTitle,
    category: currentJobCat,
    summary: summary,
    responsibilities: catData.responsibilities,
    qualifications: catData.qualifications,
    compensation: catData.compensation
  };

  // Update UI
  const resultCard = document.getElementById('job-result-card');
  const candidateBadge = document.getElementById('job-result-candidate');
  const titleEl = document.getElementById('job-result-title');
  const catBadge = document.getElementById('job-result-cat');
  const summaryEl = document.getElementById('job-result-summary');
  const respList = document.getElementById('job-result-resp');
  const qualEl = document.getElementById('job-result-qual');
  const compEl = document.getElementById('job-result-comp');

  if (resultCard && titleEl) {
    if (candidateBadge) {
      if (candidateName) {
        candidateBadge.textContent = `Honoring: ${candidateName}`;
        candidateBadge.classList.remove('hidden');
      } else {
        candidateBadge.classList.add('hidden');
      }
    }

    titleEl.textContent = jobTitle;
    if (catBadge) catBadge.textContent = `${currentJobCat.toUpperCase()} SECTOR`;
    if (summaryEl) summaryEl.textContent = summary;

    if (respList) {
      respList.innerHTML = '';
      catData.responsibilities.forEach(r => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-2 text-xs sm:text-sm text-[#374151]';
        li.innerHTML = `<span class="text-teal-600 font-bold">▸</span> <span>${r}</span>`;
        respList.appendChild(li);
      });
    }

    if (qualEl) qualEl.textContent = catData.qualifications;
    if (compEl) compEl.textContent = catData.compensation;

    resultCard.classList.remove('hidden');
    resultCard.classList.add('animate-scale-in');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  return lastGeneratedJob;
}

export function copyJobTitle() {
  if (!lastGeneratedJob || !lastGeneratedJob.title) {
    if (window.showToast) window.showToast("Generate a fake job first! 💼");
    return;
  }
  if (window.copyTextHelper) {
    window.copyTextHelper(lastGeneratedJob.title, () => {
      if (window.showToast) window.showToast("Fake job title copied! Update your bio immediately! 💼");
    });
  }
}

export function copyFullJob() {
  if (!lastGeneratedJob || !lastGeneratedJob.title) {
    if (window.showToast) window.showToast("Generate a fake job first! 💼");
    return;
  }
  const j = lastGeneratedJob;
  const full = [
    j.name ? `Candidate: ${j.name}` : null,
    `Official Title: ${j.title}`,
    `Sector: ${j.category.toUpperCase()}`,
    `\nRole Summary:\n${j.summary}`,
    `\nKey Responsibilities:`,
    ...j.responsibilities.map(r => `• ${r}`),
    `\nRequired Qualifications:\n${j.qualifications}`,
    `\nEstimated Compensation:\n${j.compensation}`
  ].filter(Boolean).join('\n');

  if (window.copyTextHelper) {
    window.copyTextHelper(full, () => {
      if (window.showToast) window.showToast("Full job specification copied to clipboard! 📋");
    });
  }
}

export function resetJob() {
  const inputEl = document.getElementById('job-name-input');
  if (inputEl) inputEl.value = '';
  lastGeneratedJob = null;
  const resultCard = document.getElementById('job-result-card');
  if (resultCard) {
    resultCard.classList.add('hidden');
    resultCard.classList.remove('animate-scale-in');
  }
  const corpBtn = document.querySelector('.job-cat-btn[data-category="corporate"]');
  if (corpBtn) corpBtn.click();
  if (window.showToast) window.showToast("Job generator reset. Unemployment restored! 🏖️");
}

window.initJobGenerator = initJobGenerator;
window.generateJob = generateJob;
window.copyJobTitle = copyJobTitle;
window.copyFullJob = copyFullJob;
window.resetJob = resetJob;
