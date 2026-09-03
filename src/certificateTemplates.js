// 10 Distinct Degree Certificate Template System
// Each degree has its own unique visual identity, typography, seal, layout, authority, and wording.

export const DEGREES_LIST = [
  {
    id: "phdReelScrolling",
    title: "PhD in Reel Scrolling",
    icon: "🎓",
    desc: "Doctorate in endless 15-second dopamine consumption & thumb endurance."
  },
  {
    id: "mastersBrainEating",
    title: "Masters in Eating Friends' Brains",
    icon: "🧠",
    desc: "Postgraduate mastery in repetitive questions & psychological exhaustion."
  },
  {
    id: "btechProcrastination",
    title: "B.Tech in Procrastination",
    icon: "⚙️",
    desc: "Four-year technical engineering in postponing life decisions until panic sets in."
  },
  {
    id: "diplomaResponsibilities",
    title: "Diploma in Avoiding Responsibilities",
    icon: "📋",
    desc: "Certified qualification in ghosting chores, bills, and adult obligations."
  },
  {
    id: "mbaExcuses",
    title: "MBA in Making Excuses",
    icon: "💼",
    desc: "Executive business degree in pivoting blame & fabricating corporate reasons."
  },
  {
    id: "doctorateOverthinking",
    title: "Doctorate in Overthinking",
    icon: "💭",
    desc: "Advanced fellowship in inventing catastrophic 3:00 AM scenarios from a single text."
  },
  {
    id: "bscGoogling",
    title: "B.Sc. in Random Googling",
    icon: "🔬",
    desc: "Scientific research in reading 47 Wikipedia articles on medieval warfare at midnight."
  },
  {
    id: "mtechSleeping",
    title: "M.Tech in Sleeping Through Alarms",
    icon: "⏰",
    desc: "Master of technology in biological acoustic immunity to 14 loud alarms."
  },
  {
    id: "baTimeWasting",
    title: "BA in Professional Time-Wasting",
    icon: "🎭",
    desc: "Liberal arts credential in staring at ceiling fans and productive daydreaming."
  },
  {
    id: "phdTomorrow",
    title: "PhD in “I'll Do It Tomorrow”",
    icon: "📅",
    desc: "Eternal doctorate in shifting all worldly productivity to an imaginary future day."
  }
];

export function renderCertificateHTML(degreeTitle, candidateName, customSigner, certId, certDate, photoUrl) {
  const photoHTML = photoUrl ? `\n    <div class="absolute top-4 right-4 sm:top-8 sm:right-8 w-20 h-24 sm:w-24 sm:h-28 rounded border-4 shadow-md bg-white z-10 overflow-hidden opacity-95" style="border-color: inherit">\n      <img src="${photoUrl}" alt="Candidate Photo" class="w-full h-full object-cover" />\n    </div>\n  ` : "";
  const safeName = candidateName || "The Unsung Legend";
  
  // 1. PhD in Reel Scrolling (Royal Academic Diploma)
  if (degreeTitle.includes("Reel Scrolling")) {
    const signer = customSigner || "Prof. Algorithmus Scroll";
    const title = customSigner ? `Authorized Signatory (${customSigner})` : "Dean of Endless Feeds & Dopamine Delivery";
    return `
      <div class="bg-gradient-to-br from-[#FAF7FD] via-[#F5EDFD] to-[#EFE2FA] border-8 border-double border-purple-900/60 rounded-2xl p-6 sm:p-10 shadow-xl text-center relative overflow-hidden text-purple-950">
        ${photoHTML}
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center select-none font-serif text-9xl">REEL</div>
        
        <div class="flex items-center justify-center mb-3">
          <div class="w-16 h-16 rounded-full bg-purple-900 text-purple-100 flex items-center justify-center text-3xl shadow-md border-2 border-purple-400">
            📱
          </div>
        </div>

        <p class="text-xs uppercase tracking-[0.3em] font-extrabold text-purple-800 mb-1 font-serif">
          The Imperial Institute of Short-Form Addiction
        </p>
        <p class="text-[11px] text-purple-600/90 font-medium italic mb-4">
          Faculty of Continuous Dopamine & Vertical Thumb Endurance
        </p>

        <h3 class="font-serif text-2xl sm:text-3xl font-black tracking-tight uppercase text-purple-950 mb-2">
          Doctor of Philosophy in Reel Scrolling
        </h3>

        <div class="inline-block px-4 py-1 rounded-full bg-purple-200/80 text-purple-900 border border-purple-400 text-xs font-bold uppercase tracking-widest my-2">
          ★ AD INFINITUM SCROLLARE ★
        </div>

        <p class="text-sm font-sans italic text-purple-800/80 my-2">
          By virtue of authority vested in the High Algorithm Council, this doctoral diploma is officially conferred upon
        </p>

        <div class="font-serif text-3xl sm:text-4xl font-extrabold tracking-wide text-purple-900 my-3 pb-2 border-b-2 border-purple-900/40 inline-block px-8">
          ${safeName}
        </div>

        <p class="text-xs sm:text-sm text-purple-900/90 max-w-xl mx-auto leading-relaxed my-4 px-2">
          Having defended the dissertation: <em>“I Said Just One More Reel 4 Hours Ago: A Psychological Study in Temporal Evaporation”</em> with a record-breaking thumb displacement of 14.8 kilometers of vertical scrolling.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end mt-8 pt-6 border-t border-purple-900/20 text-center">
          <div class="space-y-1 text-left sm:text-center">
            <span class="text-[10px] uppercase font-bold text-purple-700 tracking-wider">Conferral Date</span>
            <p class="text-xs sm:text-sm font-extrabold text-purple-950">${certDate}</p>
            <p class="text-[10px] font-mono text-purple-600">ID: ${certId}</p>
          </div>

          <div class="flex flex-col items-center justify-center my-2 sm:my-0">
            <div class="w-20 h-20 rounded-full border-4 border-dashed border-purple-900 bg-purple-100 flex flex-col items-center justify-center p-1 text-center shadow-inner">
              <span class="text-[9px] font-black uppercase text-purple-900">VERIFIED</span>
              <span class="text-[7px] font-bold text-purple-700 border-y border-purple-400 px-1 my-0.5">ALGORITHM</span>
              <span class="text-[7px] font-extrabold text-purple-900">100% USELESS</span>
            </div>
          </div>

          <div class="space-y-1 text-right sm:text-center">
            <div class="font-script text-2xl sm:text-3xl text-purple-950 h-10 flex items-center justify-center">
              ${signer}
            </div>
            <div class="w-36 h-px bg-purple-900/40 mx-auto"></div>
            <p class="text-[11px] font-bold text-purple-900">${title}</p>
            <p class="text-[9px] italic text-purple-600">Imperial Reel Council</p>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Masters in Eating Friends' Brains (Psychiatric Diagnostic Board)
  if (degreeTitle.includes("Friends' Brains")) {
    const signer = customSigner || "Dr. Hannibal Dimag-Khor";
    const title = customSigner ? `Authorized Signatory (${customSigner})` : "Director of Chronic Annoyance Research";
    return `
      <div class="bg-[#FFFDFB] border-4 border-rose-900/70 outline-4 outline-rose-200 outline-offset-2 rounded-xl p-6 sm:p-10 shadow-xl text-center relative text-gray-900">
        ${photoHTML}
        <div class="flex items-center justify-between border-b-2 border-rose-900/20 pb-4 mb-5 text-left">
          <div class="flex items-center gap-2.5">
            <span class="text-3xl">🧠</span>
            <div>
              <p class="font-serif text-xs font-black uppercase tracking-wider text-rose-950">Psychiatric Board of Social Exhaustion</p>
              <p class="text-[10px] text-rose-700 font-mono">FILE REF: PSY-BRAIN-CONSUMPTION-2026</p>
            </div>
          </div>
          <span class="px-2.5 py-1 bg-rose-100 text-rose-900 border border-rose-300 text-[10px] font-mono font-bold rounded">
            LEVEL 5 PEST
          </span>
        </div>

        <p class="text-[11px] uppercase tracking-widest font-bold text-rose-800 mb-1">
          Postgraduate Clinical Board Certification
        </p>
        <h3 class="font-serif text-2xl sm:text-3xl font-black text-rose-950 mb-3 uppercase">
          Masters in Eating Friends' Brains (M.E.F.B.)
        </h3>

        <p class="text-xs text-gray-600 font-sans italic mb-1">
          This certifies that the candidate has successfully caused severe cranial distress to all peer groups:
        </p>

        <div class="font-serif text-3xl sm:text-4xl font-extrabold text-rose-900 my-2 underline decoration-rose-300 underline-offset-8 inline-block px-4">
          ${safeName}
        </div>

        <div class="max-w-md mx-auto my-4 p-3 bg-rose-50 border border-rose-200 rounded-lg text-left text-xs font-mono space-y-1 text-rose-950">
          <div class="flex justify-between"><span>• Unnecessary Questions Asked:</span><strong>8,420 / day</strong></div>
          <div class="flex justify-between"><span>• "Tu Sun toh sahi" Usage:</span><strong>99.9% frequency</strong></div>
          <div class="flex justify-between"><span>• Victim Mental Stamina:</span><strong>0.00% remaining</strong></div>
        </div>

        <p class="text-xs text-gray-600 max-w-lg mx-auto italic mb-6">
          Conferred for the uncanny talent of turning a 10-second simple clarification into a 45-minute philosophical headache for innocent friends.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-5 border-t border-rose-200 text-center">
          <div>
            <span class="text-[10px] uppercase font-bold text-gray-500">Incident Date</span>
            <p class="text-xs font-bold text-gray-900">${certDate}</p>
            <p class="text-[10px] font-mono text-gray-500">${certId}</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-full border-2 border-rose-800 bg-rose-100 flex flex-col items-center justify-center p-1">
              <span class="text-[8px] font-extrabold text-rose-900">DIAGNOSTIC</span>
              <span class="text-[7px] text-rose-700">CERTIFIED</span>
              <span class="text-[7px] font-bold text-rose-900">PAKAU</span>
            </div>
          </div>
          <div>
            <div class="font-script text-2xl sm:text-3xl text-rose-950 h-10 flex items-center justify-center">
              ${signer}
            </div>
            <div class="w-32 h-px bg-rose-900/40 mx-auto"></div>
            <p class="text-[10px] font-bold text-rose-900">${title}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 3. B.Tech in Procrastination (Engineering Blueprint)
  if (degreeTitle.includes("Procrastination")) {
    const signer = customSigner || "Er. Kal Karenge";
    const title = customSigner ? `Authorized Signatory (${customSigner})` : "Chief Systems Engineer of Postponed Tasks";
    return `
      <div class="bg-[#0B1528] border-4 border-sky-500/80 rounded-xl p-6 sm:p-10 shadow-2xl text-center relative text-sky-100" style="background-image: linear-gradient(rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.07) 1px, transparent 1px); background-size: 20px 20px;">
        ${photoHTML}
        
        <div class="flex items-center justify-between border-b border-sky-400/30 pb-3 mb-4 text-xs font-mono text-sky-400">
          <span>SPEC-NO: PROC-2026-ENG</span>
          <span class="bg-sky-950 px-2 py-0.5 border border-sky-500 rounded">ISO-0000 UNQUALIFIED</span>
          <span>REV: 4.04-DELAYED</span>
        </div>

        <div class="w-14 h-14 mx-auto rounded-xl bg-sky-900/50 border border-sky-400 flex items-center justify-center text-3xl mb-2 text-sky-300 shadow-lg">
        ${photoHTML}
          ⚙️
        </div>

        <p class="font-mono text-xs uppercase tracking-widest text-sky-400 font-bold mb-1">
          National Institute of Delayed Execution & Panic Engineering
        </p>

        <h3 class="font-mono text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight my-2">
          Bachelor of Technology in Procrastination
        </h3>

        <div class="font-mono text-xs text-sky-300/80 mb-4">
          BRANCH: 4-Year Applied Delay & Last-Night Miracle Mechanics
        </div>

        <p class="text-xs text-sky-200/70 font-sans italic">
          This technical degree is provisionally awarded to the certified project postponer:
        </p>

        <div class="font-mono text-2xl sm:text-4xl font-black text-sky-300 tracking-wider my-3 p-2 bg-sky-950/60 border border-sky-500/40 rounded inline-block px-6">
          ${safeName}
        </div>

        <div class="max-w-md mx-auto my-3 border border-dashed border-sky-500/40 rounded p-2.5 text-xs font-mono text-sky-200 text-left grid grid-cols-2 gap-2 bg-sky-950/30">
          <div>Task Initiated: <strong>Tomorrow</strong></div>
          <div>Deadline Panic: <strong>99.4%</strong></div>
          <div>YouTube Tutorials Watched: <strong>72</strong></div>
          <div>Actual Work Done: <strong>0.000%</strong></div>
        </div>

        <p class="text-xs text-sky-200/80 max-w-lg mx-auto font-sans leading-relaxed mb-6">
          Certified capable of expanding a 15-minute simple task into a 3-week existential crisis followed by a frantic 2:00 AM miraculous submission.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-5 border-t border-sky-400/30 font-mono text-center">
          <div class="text-left sm:text-center text-xs">
            <span class="text-[10px] text-sky-400 uppercase">Timestamp</span>
            <p class="text-white font-bold">${certDate}</p>
            <p class="text-[10px] text-sky-500">${certId}</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-18 h-18 rounded-full border-2 border-dashed border-sky-400 bg-sky-900/60 flex flex-col items-center justify-center p-1 text-[8px] text-sky-300">
              <span class="font-bold">ENGINEERING</span>
              <span>SEAL</span>
              <span class="text-sky-400 font-mono font-black">DELAYED</span>
            </div>
          </div>
          <div class="text-right sm:text-center">
            <div class="font-script text-2xl sm:text-3xl text-sky-200 h-10 flex items-center justify-center">
              ${signer}
            </div>
            <div class="w-32 h-px bg-sky-400/50 mx-auto"></div>
            <p class="text-[10px] font-bold text-sky-300">${title}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 4. Diploma in Avoiding Responsibilities (Official Bureaucratic Gazette)
  if (degreeTitle.includes("Avoiding Responsibilities")) {
    const signer = customSigner || "Commissioner Not-My-Problem";
    const title = customSigner ? `Authorized Signatory (${customSigner})` : "High Registrar of Strategic Ignorance";
    return `
      <div class="bg-[#FCF9EE] border-4 border-[#786134] rounded-lg p-6 sm:p-10 shadow-lg text-center relative text-[#382F1D]">
        ${photoHTML}
        
        <!-- Bureaucratic Header -->
        <div class="border-b-2 border-[#786134] pb-3 mb-4">
          <p class="text-[11px] font-bold tracking-widest uppercase font-serif text-[#786134]">
            GOVERNMENT OF BHARATWAAS • MINISTRY OF EXCUSES & EVASION
          </p>
          <p class="text-[9px] font-mono text-[#8C7443]">DEPARTMENT OF IMMEDIATE STRATEGIC DISAPPEARANCE</p>
        </div>

        <div class="flex justify-between items-center mb-3 text-[10px] font-mono text-[#786134]">
          <span>GAZETTE NOTIFICATION NO. 8892/BC</span>
          <span class="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-bold border border-emerald-400 rounded">RESPONSIBILITY: ZERO</span>
        </div>

        <h3 class="font-serif text-2xl sm:text-3xl font-black uppercase text-[#2B2312] tracking-tight my-2">
          Diploma in Avoiding Responsibilities
        </h3>

        <div class="inline-block px-3 py-1 bg-amber-200/70 border border-[#786134] rounded text-[11px] font-serif font-bold uppercase tracking-wider my-2">
          OFFICIAL EXEMPTION CERTIFICATE
        </div>

        <p class="text-xs italic font-serif text-[#54462B] my-2">
          This legal instrument hereby grants full perpetual immunity from all domestic and professional chores to
        </p>

        <div class="font-serif text-3xl sm:text-4xl font-extrabold text-[#1F190D] my-2 border-b-2 border-[#786134] inline-block px-8 py-1">
          ${safeName}
        </div>

        <p class="text-xs font-serif leading-relaxed max-w-lg mx-auto my-3 text-[#4A3D25]">
          The bearer is legally certified to say <em>“Mujhe kya pata, Sharma ji se pucho”</em> and <em>“Mera net chala gaya tha”</em> whenever dishes, group projects, or serious commitments arise.
        </p>

        <!-- Red Rubber Stamp Graphic -->
        <div class="my-4 flex justify-center">
          <div class="border-4 border-red-700 text-red-700 font-black text-xs uppercase px-4 py-1.5 tracking-widest rotate-[-4deg] rounded">
            OFFICIALLY APPROVED FOR RUNNING AWAY
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-5 border-t border-[#786134]/40 font-serif text-center">
          <div>
            <span class="text-[10px] uppercase font-bold text-[#786134]">Notified On</span>
            <p class="text-xs font-bold">${certDate}</p>
            <p class="text-[10px] font-mono text-[#8C7443]">${certId}</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-full border-2 border-double border-[#786134] bg-amber-50 flex flex-col items-center justify-center text-[7px] font-bold text-[#786134]">
              <span>MINISTRY</span>
              <span class="text-[9px]">🏛️</span>
              <span>SEALED</span>
            </div>
          </div>
          <div>
            <div class="font-script text-2xl sm:text-3xl text-[#1F190D] h-10 flex items-center justify-center">
              ${signer}
            </div>
            <div class="w-32 h-px bg-[#786134] mx-auto"></div>
            <p class="text-[10px] font-bold">${title}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 5. MBA in Making Excuses (Elite Corporate Executive Diploma)
  if (degreeTitle.includes("Making Excuses")) {
    const signer = customSigner || "CEO Bluff Kumar";
    const title = customSigner ? `Authorized Signatory (${customSigner})` : "Managing Director of Strategic Fabrication";
    return `
      <div class="bg-gradient-to-b from-[#F8FAFC] to-[#EDF2F7] border-4 border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl text-center relative text-slate-900">
        ${photoHTML}
        
        <div class="flex items-center justify-center gap-2 mb-2">
          <span class="text-3xl">💼</span>
          <p class="font-serif tracking-[0.25em] text-xs font-extrabold uppercase text-slate-800">
            Harvard Business School of Excuses & Jargon
          </p>
        </div>

        <p class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-4">
          Faculty of High-Yield Corporate Blame Allocation
        </p>

        <h3 class="font-serif text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">
          Master of Business Administration
        </h3>
        <p class="text-sm font-bold text-amber-800 font-serif italic mb-3">
          Specialization in Advanced Excuse Architecture
        </p>

        <p class="text-xs text-slate-600 italic mb-2">
          The Board of Regents hereby certifies that
        </p>

        <div class="font-serif text-3xl sm:text-4xl font-black text-slate-900 my-2 pb-1 border-b-2 border-amber-600 inline-block px-8">
          ${safeName}
        </div>

        <p class="text-xs text-slate-700 max-w-lg mx-auto leading-relaxed my-3 font-sans">
          Has achieved 100% mastery in corporate buzzwords including <em>“Circling back,” “Dropping off for a hard stop,”</em> and blaming 14 overdue deliverables on unexpected macroeconomic bandwidth friction.
        </p>

        <div class="grid grid-cols-3 gap-2 max-w-md mx-auto my-4 text-center font-mono text-[10px] bg-slate-100 p-2.5 rounded-lg border border-slate-300">
          <div><p class="text-slate-500">Excuses / Day</p><strong class="text-slate-900 text-xs">48.2</strong></div>
          <div><p class="text-slate-500">Synergy Index</p><strong class="text-slate-900 text-xs">99.9%</strong></div>
          <div><p class="text-slate-500">Productivity</p><strong class="text-amber-800 text-xs">0.00%</strong></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-5 border-t border-slate-300 text-center">
          <div>
            <span class="text-[10px] font-bold text-slate-500 uppercase">Board Sign-Off</span>
            <p class="text-xs font-bold text-slate-900">${certDate}</p>
            <p class="text-[10px] font-mono text-slate-500">${certId}</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-600 flex flex-col items-center justify-center p-1 text-center shadow-xs">
              <span class="text-[8px] font-extrabold text-amber-900">EXECUTIVE</span>
              <span class="text-[6px] text-amber-700">SEAL</span>
              <span class="text-[7px] font-bold text-amber-900">APPROVED</span>
            </div>
          </div>
          <div>
            <div class="font-script text-2xl sm:text-3xl text-slate-950 h-10 flex items-center justify-center">
              ${signer}
            </div>
            <div class="w-32 h-px bg-slate-800 mx-auto"></div>
            <p class="text-[10px] font-bold text-slate-900">${title}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 6. Doctorate in Overthinking (Cognitive Psychology Fellowship)
  if (degreeTitle.includes("Overthinking")) {
    const signer = customSigner || "Dr. Scenario Generator";
    const title = customSigner ? `Authorized Signatory (${customSigner})` : "Chairperson of Imaginary Catastrophes";
    return `
      <div class="bg-[#1E1B4B] border-4 border-indigo-400/80 rounded-2xl p-6 sm:p-10 shadow-2xl text-center relative text-indigo-100">
        ${photoHTML}
        
        <div class="flex items-center justify-between border-b border-indigo-400/30 pb-3 mb-4 text-xs font-mono text-indigo-300">
          <span>COGNITIVE LOG: 03:00 AM SIMULATION</span>
          <span class="bg-indigo-900 px-2 py-0.5 rounded border border-indigo-400 text-indigo-200">200 SCENARIOS GENERATED</span>
        </div>

        <div class="w-14 h-14 mx-auto rounded-full bg-indigo-950 border-2 border-indigo-400 flex items-center justify-center text-3xl mb-2 text-indigo-200">
          💭
        </div>

        <p class="text-xs uppercase tracking-widest font-extrabold text-indigo-300 mb-1 font-serif">
          Global Fellowship of Chronic Neural Rumination
        </p>

        <h3 class="font-serif text-2xl sm:text-3xl font-black uppercase text-white tracking-tight my-2">
          Doctor of Philosophy in Overthinking
        </h3>

        <p class="text-xs text-indigo-200/80 italic font-sans mb-3">
          Highest honors conferred upon the certified master of inventing catastrophes:
        </p>

        <div class="font-serif text-3xl sm:text-4xl font-extrabold text-indigo-200 my-2 underline decoration-indigo-400 inline-block px-6">
          ${safeName}
        </div>

        <div class="max-w-md mx-auto my-3 p-3 bg-indigo-950/60 border border-indigo-500/40 rounded-lg text-xs font-mono text-left space-y-1 text-indigo-200">
          <div>• Input: <em>"K" (received at 11:42 PM)</em></div>
          <div>• Brain Analysis: <em>"They hate me, my career is over, shifting to a cave"</em></div>
          <div>• Sleep Lost: <strong>5.5 Hours</strong></div>
        </div>

        <p class="text-xs text-indigo-200/90 max-w-lg mx-auto font-sans leading-relaxed my-3">
          Honored for the phenomenal cognitive feat of generating 48 parallel nightmare universes based purely on the specific tone of someone’s punctuation mark.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-5 border-t border-indigo-400/30 font-sans text-center">
          <div>
            <span class="text-[10px] text-indigo-400 uppercase font-bold">Analysis Timestamp</span>
            <p class="text-xs font-bold text-white">${certDate}</p>
            <p class="text-[10px] font-mono text-indigo-400">${certId}</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-full border-2 border-dashed border-indigo-300 bg-indigo-900 flex flex-col items-center justify-center text-[8px] text-indigo-200">
              <span class="font-bold">OVERTHOUGHT</span>
              <span class="text-[6px]">100% NO SLEEP</span>
              <span class="font-bold">CERTIFIED</span>
            </div>
          </div>
          <div>
            <div class="font-script text-2xl sm:text-3xl text-indigo-200 h-10 flex items-center justify-center">
              ${signer}
            </div>
            <div class="w-32 h-px bg-indigo-400 mx-auto"></div>
            <p class="text-[10px] font-bold text-indigo-300">${title}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 7. B.Sc. in Random Googling (Scientific Search Patent)
  if (degreeTitle.includes("Random Googling")) {
    const signer = customSigner || "The Google Search Engine";
    const title = customSigner ? `Authorized Signatory (${customSigner})` : "Director of Rabbithole Exploration";
    return `
      <div class="bg-white border-4 border-blue-600 rounded-xl p-6 sm:p-10 shadow-lg text-center relative text-gray-900">
        ${photoHTML}
        
        <div class="flex items-center justify-between border-b border-gray-200 pb-3 mb-4 text-xs font-mono text-blue-600">
          <span>QUERY LOG: 02:47 AM</span>
          <span class="px-2 py-0.5 bg-blue-50 border border-blue-300 rounded font-bold">SEARCH ID: 404-FOUND</span>
        </div>

        <div class="w-14 h-14 mx-auto rounded-full bg-blue-50 border border-blue-300 flex items-center justify-center text-3xl mb-2 text-blue-600 shadow-xs">
          🔬
        </div>

        <p class="text-xs uppercase tracking-widest font-bold text-blue-700 mb-1 font-mono">
          Global Institute of Unprompted Curiosity & Rabbitholes
        </p>

        <h3 class="font-mono text-2xl sm:text-3xl font-black uppercase text-gray-900 tracking-tight my-2">
          Bachelor of Science in Random Googling
        </h3>

        <p class="text-xs text-gray-500 font-sans italic mb-3">
          This credential recognizes the relentless search bar explorer:
        </p>

        <div class="font-serif text-3xl sm:text-4xl font-extrabold text-blue-700 my-2 pb-1 border-b-2 border-blue-600 inline-block px-8">
          ${safeName}
        </div>

        <div class="max-w-md mx-auto my-3 p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono text-left space-y-1 text-gray-700">
          <div>• Query 1: <em>"Can penguins fly backwards?" (01:12 AM)</em></div>
          <div>• Query 2: <em>"Medieval French tax laws on cheese" (02:30 AM)</em></div>
          <div>• Tabs Kept Open: <strong>84 Tabs</strong></div>
        </div>

        <p class="text-xs text-gray-600 max-w-lg mx-auto font-sans leading-relaxed my-3">
          Honored for spending 4 uninterrupted hours reading Wikipedia articles on the geopolitical impact of nutmeg while preparing for tomorrow’s math test.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-5 border-t border-gray-200 text-center font-sans">
          <div>
            <span class="text-[10px] text-gray-500 uppercase font-bold">Logged On</span>
            <p class="text-xs font-bold text-gray-900">${certDate}</p>
            <p class="text-[10px] font-mono text-gray-500">${certId}</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-full border-2 border-blue-600 bg-blue-50 flex flex-col items-center justify-center text-[8px] text-blue-800">
              <span class="font-bold">84 TABS</span>
              <span class="text-[6px]">OPEN</span>
              <span class="font-bold">SCHOLAR</span>
            </div>
          </div>
          <div>
            <div class="font-script text-2xl sm:text-3xl text-gray-900 h-10 flex items-center justify-center">
              ${signer}
            </div>
            <div class="w-32 h-px bg-gray-400 mx-auto"></div>
            <p class="text-[10px] font-bold text-gray-800">${title}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 8. M.Tech in Sleeping Through Alarms (Circadian Sleep Laboratory)
  if (degreeTitle.includes("Sleeping Through Alarms")) {
    const signer = customSigner || "Master Kumbhakarna";
    const title = customSigner ? `Authorized Signatory (${customSigner})` : "Chancellor of REM Sleep & Heavy Blankets";
    return `
      <div class="bg-[#0F172A] border-4 border-violet-500 rounded-2xl p-6 sm:p-10 shadow-2xl text-center relative text-violet-100">
        ${photoHTML}
        
        <div class="flex items-center justify-between border-b border-violet-500/30 pb-3 mb-4 text-xs font-mono text-violet-400">
          <span>ACOUSTIC TEST: 120 DECIBELS</span>
          <span class="bg-violet-950 px-2 py-0.5 rounded border border-violet-400 font-bold">14 SNOOZES ACTIVE</span>
        </div>

        <div class="w-14 h-14 mx-auto rounded-full bg-violet-950 border border-violet-400 flex items-center justify-center text-3xl mb-2 text-violet-300">
          ⏰
        </div>

        <p class="text-xs uppercase tracking-widest font-bold text-violet-400 mb-1 font-mono">
          Circadian Acoustics & Heavy Blanket Laboratory
        </p>

        <h3 class="font-mono text-2xl sm:text-3xl font-black uppercase text-white tracking-tight my-2">
          Master of Technology in Sleeping Through Alarms
        </h3>

        <p class="text-xs text-violet-300/80 italic font-sans mb-3">
          Conferred for supreme biological immunity to loud morning noises:
        </p>

        <div class="font-serif text-3xl sm:text-4xl font-extrabold text-violet-300 my-2 underline decoration-violet-500 inline-block px-6">
          ${safeName}
        </div>

        <div class="max-w-md mx-auto my-3 p-3 bg-violet-950/70 border border-violet-500/40 rounded-lg text-xs font-mono text-left space-y-1 text-violet-200">
          <div>• 06:30 AM Alarm: <em>Snoozed in sleep</em></div>
          <div>• 07:00 AM Alarm (Military siren): <em>Turned into background music in dream</em></div>
          <div>• Parents Shouting: <em>Deflected by blanket shield</em></div>
        </div>

        <p class="text-xs text-violet-200/80 max-w-lg mx-auto font-sans leading-relaxed my-3">
          Presented for the biological miracle of sleeping through an earthquake, 14 phone alarms, and a neighbor drilling the wall without waking up once.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-5 border-t border-violet-500/30 font-sans text-center">
          <div>
            <span class="text-[10px] text-violet-400 uppercase font-bold">Wake Up Time</span>
            <p class="text-xs font-bold text-white">${certDate} (1:00 PM)</p>
            <p class="text-[10px] font-mono text-violet-400">${certId}</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-full border-2 border-violet-400 bg-violet-900 flex flex-col items-center justify-center text-[8px] text-violet-200">
              <span class="font-bold">HEAVY</span>
              <span class="text-[6px]">SLEEPER</span>
              <span class="font-bold">AWARD</span>
            </div>
          </div>
          <div>
            <div class="font-script text-2xl sm:text-3xl text-violet-200 h-10 flex items-center justify-center">
              ${signer}
            </div>
            <div class="w-32 h-px bg-violet-400 mx-auto"></div>
            <p class="text-[10px] font-bold text-violet-300">${title}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 9. BA in Professional Time-Wasting (Royal Renaissance Parchment)
  if (degreeTitle.includes("Time-Wasting")) {
    const signer = customSigner || "Lord Procrastinatus III";
    const title = customSigner ? `Authorized Signatory (${customSigner})` : "High Chancellor of Idle Arts & Leisure";
    return `
      <div class="bg-[#FAF5E8] border-8 border-[#B4882F] rounded-2xl p-6 sm:p-10 shadow-2xl text-center relative text-[#38270E]" style="background-image: radial-gradient(#E8DCB8 1px, transparent 1px); background-size: 16px 16px;">
        ${photoHTML}
        
        <div class="flex items-center justify-center gap-2 mb-2">
          <span class="text-3xl">⏳</span>
          <p class="font-serif tracking-[0.3em] text-xs font-black uppercase text-[#85611B]">
            Royal Academy of Sublime Idleness & Velagiri
          </p>
        </div>

        <p class="text-[10px] font-serif uppercase tracking-widest text-[#9C7528] mb-3">
          By Royal Decree of the Order of the Staring Ceiling Fan
        </p>

        <h3 class="font-serif text-2xl sm:text-4xl font-extrabold uppercase text-[#2D1E07] tracking-tight my-2">
          Bachelor of Arts in Professional Time-Wasting
        </h3>

        <div class="inline-block px-4 py-0.5 border-y-2 border-[#B4882F] text-[11px] font-serif italic text-[#6E4F12] my-2">
          Motto: "Nihil Facere Optimum Est" (Doing Nothing Is Supreme)
        </div>

        <p class="text-xs font-serif italic text-[#573F12] my-2">
          This royal scroll of honor is ceremoniously presented unto
        </p>

        <div class="font-serif text-3xl sm:text-4xl font-black text-[#2D1E07] my-2 pb-1 border-b-2 border-double border-[#B4882F] inline-block px-8">
          ${safeName}
        </div>

        <p class="text-xs font-serif leading-relaxed max-w-lg mx-auto my-3 text-[#4A350E]">
          Bestowed for exemplary devotion to the noble art of spending 6 prime daylight hours organizing desktop icons, staring at the wall, and pretending to be busy.
        </p>

        <div class="my-3 flex justify-center">
          <div class="w-16 h-16 rounded-full bg-red-800 text-amber-200 border-2 border-red-900 shadow-md flex flex-col items-center justify-center p-1 font-serif text-[8px] font-black tracking-wider">
            <span>ROYAL</span>
            <span class="text-[10px]">👑</span>
            <span>SEAL</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-5 border-t border-[#B4882F]/40 font-serif text-center">
          <div>
            <span class="text-[10px] uppercase font-bold text-[#85611B]">Given At Court</span>
            <p class="text-xs font-bold">${certDate}</p>
            <p class="text-[10px] font-mono text-[#9C7528]">${certId}</p>
          </div>
          <div></div>
          <div>
            <div class="font-script text-2xl sm:text-3xl text-[#2D1E07] h-10 flex items-center justify-center">
              ${signer}
            </div>
            <div class="w-32 h-px bg-[#B4882F] mx-auto"></div>
            <p class="text-[10px] font-bold">${title}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 10. PhD in “I'll Do It Tomorrow” (Absurd Deferred Achievement)
  const signer = customSigner || "Future Self (Tomorrow Edition)";
  const title = customSigner ? `Authorized Signatory (${customSigner})` : "President of The Next Day Committee";
  return `
    <div class="bg-[#FFFEEB] border-4 border-amber-500 rounded-xl p-6 sm:p-10 shadow-xl text-center relative text-amber-950">
        ${photoHTML}
      
      <div class="flex items-center justify-between border-b border-amber-300 pb-3 mb-4 text-xs font-mono text-amber-800">
        <span>STATUS: PENDING</span>
        <span class="bg-amber-200 px-2 py-0.5 rounded font-bold">VALIDITY: ALWAYS TOMORROW</span>
      </div>

      <div class="w-14 h-14 mx-auto rounded-xl bg-amber-100 border border-amber-400 flex items-center justify-center text-3xl mb-2 text-amber-800">
        📅
      </div>

      <p class="text-xs uppercase tracking-widest font-extrabold text-amber-800 mb-1 font-serif">
        The Tomorrowland Institute of Infinite Postponement
      </p>

      <h3 class="font-serif text-2xl sm:text-3xl font-black uppercase text-amber-950 tracking-tight my-2">
        PhD in “I'll Do It Tomorrow”
      </h3>

      <div class="my-3">
        <span class="inline-block px-4 py-1.5 bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded rotate-[-3deg] shadow-md">
          POSTPONED TO TOMORROW
        </span>
      </div>

      <p class="text-xs text-amber-800 italic font-sans mb-1">
        Conferred with total conviction that tomorrow you will magically finish everything in 2 hours:
      </p>

      <div class="font-serif text-3xl sm:text-4xl font-extrabold text-amber-950 my-2 pb-1 border-b-2 border-dashed border-amber-700 inline-block px-8">
        ${safeName}
      </div>

      <p class="text-xs text-amber-900 max-w-lg mx-auto font-sans leading-relaxed my-3">
        Awarded for the eternal optimism that “Tomorrow’s You” possesses superhuman discipline, infinite energy, and zero desire to scroll Instagram reels.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-5 border-t border-amber-300 font-sans text-center">
        <div>
          <span class="text-[10px] text-amber-700 uppercase font-bold">Conferral Date</span>
          <p class="text-xs font-bold text-amber-950">Tomorrow (${certDate})</p>
          <p class="text-[10px] font-mono text-amber-700">${certId}</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full border-2 border-dashed border-amber-700 bg-amber-100 flex flex-col items-center justify-center text-[8px] text-amber-900">
            <span class="font-bold">NEVER</span>
            <span class="text-[6px]">TODAY</span>
            <span class="font-bold">PROMISE</span>
          </div>
        </div>
        <div>
          <div class="font-script text-2xl sm:text-3xl text-amber-950 h-10 flex items-center justify-center">
            ${signer}
          </div>
          <div class="w-32 h-px bg-amber-700 mx-auto"></div>
          <p class="text-[10px] font-bold text-amber-900">${title}</p>
        </div>
      </div>
    </div>
  `;
}
