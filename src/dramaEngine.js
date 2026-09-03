// Semantic Drama Engine for Bakwaas Center
// Rule-based intent detection across 50+ intents with 10 distinct dramatic styles
// RULE: NEVER repeat the user's input sentence (No "PREFIX + USER SENTENCE + SUFFIX")

export function normalizeInput(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[?!.,;:'"’“”()\[\]{}_+\-=*/\\|<>~`@#$%^&]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// 50+ Intent Categories with rich Hinglish, Hindi, and English keyword synonyms
export const INTENT_DEFINITIONS = [
  {
    id: 'FEVER_SICK',
    keywords: ['bukhar', 'bukhaar', 'bukhar hai', 'tabiyat', 'tabiat', 'fever', 'sick', 'ill', 'bimari', 'bimar', 'unwell', 'temperature', 'body hot', 'chills', 'weakness', 'bedridden']
  },
  {
    id: 'HUNGER',
    keywords: ['bhook', 'bhookh', 'bhukh', 'hungry', 'starving', 'starve', 'khana chahiye', 'pet me chuhe', 'food', 'need food', 'khana khana', 'empty stomach', 'dinner', 'lunch', 'breakfast']
  },
  {
    id: 'THIRST',
    keywords: ['pyas', 'pyaas', 'thirsty', 'paani', 'pani', 'water', 'dehydrated', 'gala sukh', 'need water', 'drink water', 'throat dry']
  },
  {
    id: 'SLEEPY',
    keywords: ['neend', 'nind', 'sleepy', 'drowsy', 'so jaunga', 'sona hai', 'sone ja raha', 'exhausted sleep', 'eyes closing', 'soya', 'bed']
  },
  {
    id: 'TIRED',
    keywords: ['thak gaya', 'thaki hui', 'tired', 'exhausted', 'drained', 'dead tired', 'no energy', 'chur chur', 'body pain', 'fatigue', 'weary']
  },
  {
    id: 'HEADACHE',
    keywords: ['sar dard', 'sir dard', 'headache', 'migraine', 'matha phat', 'sar phat', 'head hurting', 'head pain', 'dimag dard']
  },
  {
    id: 'COLD_SICK',
    keywords: ['sardi', 'zukaam', 'zukam', 'cough', 'cold', 'sneeze', 'chheenk', 'chink', 'runny nose', 'khansi', 'throat infection']
  },
  {
    id: 'BORED',
    keywords: ['bore', 'boring', 'bored', 'kuch nahi karne', 'timepass', 'bekar din', 'nothing to do', 'lifeless', 'pak gaya', 'pak gaye']
  },
  {
    id: 'LATE',
    keywords: ['late', 'der ho gayi', 'der ho gaya', 'traffic', 'delay', 'running late', 'time ho gaya', 'late ho gaya', 'late hu', 'late pohcha']
  },
  {
    id: 'MISSED_ALARM',
    keywords: ['alarm nahi baja', 'alarm', 'snooze', 'soya reh gaya', 'missed alarm', 'alarm missed', 'uth nahi paya', 'did not wake up']
  },
  {
    id: 'FORGOT_HOMEWORK',
    keywords: ['homework bhool', 'assignment bhool', 'forgot homework', 'task bhool', 'bhul gaya homework', 'forgot assignment', 'project bhool']
  },
  {
    id: 'DID_NOT_STUDY',
    keywords: ['kuch nahi padha', 'padhai nahi', 'padha nahi', 'did not study', 'didn t study', 'book nahi kholi', 'syllabus', 'zero preparation', 'fail honga']
  },
  {
    id: 'EXAM',
    keywords: ['exam', 'paper', 'pariksha', 'test', 'viva', 'final exam', 'board exam', 'midsem', 'unit test', 'exam tension']
  },
  {
    id: 'FAILED',
    keywords: ['fail', 'failed', 'back lag gayi', 'compartment', 'marks kam', 'zero marks', 'fail ho gaya', 'flunked', 'disqualified']
  },
  {
    id: 'PASSED',
    keywords: ['pass ho gaya', 'passed', 'topped', 'topper', 'good marks', 'clear ho gaya', 'first rank', 'full marks']
  },
  {
    id: 'BROKE',
    keywords: ['paise khatam', 'paise nahi hai', 'broke', 'no money', 'kangal', 'bank balance zero', 'account khali', 'pocket money', 'udhar', 'paisa']
  },
  {
    id: 'LOST_PHONE',
    keywords: ['phone kho gaya', 'phone mil nahi raha', 'mobile gayab', 'lost my phone', 'phone missing', 'phone chori', 'lost phone']
  },
  {
    id: 'PHONE_DEAD',
    keywords: ['phone dead', 'battery dead', 'switch off', 'phone band', 'zero battery', 'phone off', 'phone switched off']
  },
  {
    id: 'NO_INTERNET',
    keywords: ['wifi nahi chal', 'net nahi chal', 'no internet', 'wifi down', 'data khatam', 'no network', 'slow internet', 'server down', 'internet']
  },
  {
    id: 'RAINING',
    keywords: ['barish', 'baarish', 'rain', 'raining', 'tufan', 'storm', 'keechad', 'monsoon', 'pani bhar gaya', 'downpour']
  },
  {
    id: 'HOT_WEATHER',
    keywords: ['garmi', 'bahut garmi', 'hot weather', 'sweating', 'heatwave', 'pasina', 'sooraj', 'dhoop', 'scorching']
  },
  {
    id: 'COLD_WEATHER',
    keywords: ['thand', 'sardi ka mausam', 'cold weather', 'freezing', 'shivering', 'kanp raha', 'winter', 'fog', 'kohra']
  },
  {
    id: 'GOING_HOME',
    keywords: ['ghar ja raha', 'ghar nikal', 'going home', 'heading home', 'ghar jaungi', 'ghar jaunga', 'leaving for home']
  },
  {
    id: 'COMING_LATE',
    keywords: ['late aaunga', 'thodi der me', 'raste me hu', 'coming late', 'on my way late', 'der se aana', 'time lagega']
  },
  {
    id: 'WAIT',
    keywords: ['ruko', 'wait', 'wait karo', 'do minute', 'two minutes', 'hold on', 'ek second', 'sabar karo']
  },
  {
    id: 'WHERE_ARE_YOU',
    keywords: ['kaha ho', 'kidhar ho', 'where are you', 'kaha hai', 'kidhar hai', 'location', 'pohche nahi', 'where u at']
  },
  {
    id: 'CALL_ME',
    keywords: ['call karo', 'call me', 'phone karo', 'baat karo', 'ring karo', 'urgent call', 'call back']
  },
  {
    id: 'BUSY',
    keywords: ['busy hu', 'kaam me hu', 'busy', 'occupied', 'no time', 'fursat nahi', 'kaam bahut hai']
  },
  {
    id: 'CONFUSED',
    keywords: ['confused', 'samajh nahi aa raha', 'kya karu', 'lost', 'dilemma', 'no idea', 'puzzled', 'baffled']
  },
  {
    id: 'NEED_HELP',
    keywords: ['help chahiye', 'help me', 'madad karo', 'bachao', 'emergency', 'support', 'sahayata', 'save me']
  },
  {
    id: 'ANGRY',
    keywords: ['gussa', 'dimag kharab', 'angry', 'furious', 'irritated', 'mood off', 'rage', 'khoon khaul']
  },
  {
    id: 'SCARED',
    keywords: ['dar lag raha', 'darr', 'scared', 'afraid', 'terrified', 'ghost', 'bhoot', 'horror', 'frightened']
  },
  {
    id: 'EMBARRASSED',
    keywords: ['beizzati', 'embarrassed', 'sharam', 'awkward', 'cringe', 'muh dikhane layak nahi', 'insult']
  },
  {
    id: 'CAN_NOT_SLEEP',
    keywords: ['neend nahi aa rahi', 'insomnia', 'cant sleep', 'cannot sleep', 'awake', 'raat bhar jaag', 'overthinking at night']
  },
  {
    id: 'OVERSLEPT',
    keywords: ['zyada so gaya', 'late utha', 'overslept', 'slept in', '12 baje utha', 'dopahar ho gayi']
  },
  {
    id: 'MISSED_CALL',
    keywords: ['missed call', 'phone silent', 'dekh nahi paya', 'call miss ho gaya', 'silent par tha']
  },
  {
    id: 'DID_NOT_REPLY',
    keywords: ['reply nahi kiya', 'seen pe chhod diya', 'ghosted', 'no reply', 'ignored', 'left on read', 'unseen']
  },
  {
    id: 'HOMEWORK_PENDING',
    keywords: ['homework bacha hai', 'assignment pending', 'task incomplete', 'project pending', 'submission']
  },
  {
    id: 'WORK_PENDING',
    keywords: ['office ka kaam', 'work pending', 'jira ticket', 'deliverable', 'client call', 'deadline']
  },
  {
    id: 'BREAKUP_HEARTBROKEN',
    keywords: ['breakup', 'kat gaya', 'dil toot', 'heartbroken', 'ex', 'pyaar me dhokha', 'single', 'dumped']
  },
  {
    id: 'LAZY_PROCRASTINATION',
    keywords: ['kal karunga', 'aaj nahi', 'procrastination', 'lazy', 'alas', 'mann nahi kar raha', 'later']
  },
  {
    id: 'WEIGHT_GAIN_DIET',
    keywords: ['mota ho gaya', 'diet toot gayi', 'weight gain', 'fat', 'gym nahi gaya', 'belly fat']
  },
  {
    id: 'FOOD_BAD',
    keywords: ['khana bekar', 'swad nahi', 'bad food', 'hostel ka khana', 'spicy', 'tasteless', 'canteen food']
  },
  {
    id: 'BATTERY_LOW',
    keywords: ['battery low', 'charger nahi hai', 'two percent', 'phone dying', 'charging chahiye']
  },
  {
    id: 'MEETING_BOREDOM',
    keywords: ['meeting chal rahi', 'boring meeting', 'zoom call', 'standup call', 'meeting me hu', 'pakau meeting']
  },
  {
    id: 'TRAFFIC_JAM',
    keywords: ['traffic jam', 'jam me fasa', 'red light', 'signals', 'gaadi hil nahi rahi', 'stuck in traffic']
  },
  {
    id: 'GYM_WORKOUT',
    keywords: ['gym jana hai', 'leg day', 'body sore', 'workout', 'pushups', 'gym nahi jana']
  },
  {
    id: 'CRUSH_LOVE',
    keywords: ['crush', 'usne dekha', 'pyar ho gaya', 'butterflies', 'love', 'blushing', 'propose']
  },
  {
    id: 'COLLEGE_BUNK',
    keywords: ['college bunk', 'class bunk', 'proxy laga de', 'attendance', 'lecture bore', 'bunking']
  }
];

// Detect intent from normalized string
export function detectIntent(normalized) {
  for (const item of INTENT_DEFINITIONS) {
    for (const kw of item.keywords) {
      const cleanKw = normalizeInput(kw);
      if (normalized === cleanKw || normalized.includes(cleanKw)) {
        return item.id;
      }
    }
  }
  return null;
}
