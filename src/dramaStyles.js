// 10 Distinct Language Drama Styles & Generators
// Core Rule: NEVER repeat user's input. Always output fresh, highly stylized situational comedy.

import { normalizeInput, INTENT_DEFINITIONS } from './dramaEngine.js';

export const STYLE_NAMES = {
  hinglish: "Pure Desi Hinglish 💬",
  bollywood: "Bollywood Melodrama 🎬",
  hindi: "Overdramatic Sahityik Hindi 📜",
  genz: "Gen-Z Pure Chaos 💀",
  fakenews: "🚨 Breaking News Flash",
  royal: "Royal Darbari Farmaan 👑",
  corporate: "Corporate Escalation 📊",
  villain: "Villain Monologue 🦹",
  newsanchor: "Prime-Time Screaming Anchor 🎙️",
  philosophical: "Cosmic Existential Crisis 🌌"
};

// Intent-specific semantic core generators per style
export const INTENT_STYLE_MAP = {
  FEVER_SICK: {
    hinglish: [
      "Bhai meri body 104 degree pe microwave ban chuki hai! Paracetamol bhi haath jod ke bol rahi hai mujhse na ho payega!",
      "Aisa lag raha hai yamraj ne personally mere thermometer me setting kar di hai! Agar agle do ghante me soup nahi mila toh dosti alvida samjho!",
      "Mere andar ka CPU 100% thermal throttling pe hai bhai! Dimag ki cooling fan jal chuki hai aur meri mummy abhi bhi bol rahi hai phone chalane se hua hai!",
      "Arey meri aakhri vasiyat likh lo yaar! Thand lag rahi hai, kambal ke andar se bhi lag raha hai Antarctica me shift ho gaya hu!"
    ],
    bollywood: [
      "हे विधाता! यह कैसी अग्नि-परीक्षा है?! मेरा रोम-रोम ज्वर की लपटों में धू-धू कर जल रहा है! क्या कोई इस तड़पते हुए मासूम को एक घूंट काढ़ा तक नहीं पिलाएगा?!",
      "माँ... मेरी आँखों के आगे अंधेरा छा रहा है माँ! मेरे माथे का यह ताप केवल बुखार नहीं, ज़माने के दिए हुए ज़ख्मों का हिसाब है!",
      "बाबूमोशाय... जिंदगी बड़ी होनी चाहिए लंबी नहीं! लेकिन इस 103 डिग्री के बुखार में मेरी सांसें अब क्लाइमैक्स का संगीत बजा रही हैं!",
      "अरे ओ निर्दयी ज़माने! जब मैं स्वस्थ था तो तुमने मुझे काम सौंपा, और आज जब मेरी नाड़ी यमलोक का टेलीफोन बजा रही है, तो सब मौन हैं?!"
    ],
    hindi: [
      "अरे विधाता! मेरे शरीर की धमनियों में रक्त नहीं, साक्षात प्रलयंकारी अग्नि का प्रवाह हो रहा है! मेरे नश्वर अस्तित्व की समाधि निकट प्रतीत होती है!",
      "शरीर का ताप सूर्यदेव के प्रकोप को चुनौती दे रहा है! इस व्याधि ने मेरे संपूर्ण भौतिक ढाँचे को रुग्णता के गहन सागर में डुबो दिया है!",
      "यह साधारण ज्वर नहीं, यह प्रकृति का मेरे विरुद्ध घोषित महासंग्राम है! एक-एक श्वास अब महाविनाश की चेतावनी बन चुकी है!",
      "मेरी चेतना अंधकार की गहराइयों में विलीन हो रही है! औषधि भी अब इस दुर्बल काया के सम्मुख नतमस्तक होकर पराजय स्वीकार कर चुकी है!"
    ],
    genz: [
      "bro I am literally radiating enough thermal heat to warm the entire Arctic 💀 my cells are literally throwing in the towel, I'm fully cooked fr!",
      "chat is this real?? my body temp is giving supernova vibes rn. no cap if I don't survive this cold press blanket era tell my mutuals I loved them 😭",
      "actual biological downfall happening in 4k. immune system left the group chat, fever went parabolic, it's so over for me bro frfr.",
      "my internal temperature is out here running cyberpunk on ultra settings without a cooling pad 💀 send thoughts and prayers or a boba immediately."
    ],
    fakenews: [
      "🚨 ब्रेकिंग न्यूज़: मानव शरीर में दर्ज हुआ रहस्यमयी परमाणु विस्फोट! वैज्ञानिक हैरान, थर्मामीटर का पारा शीशा तोड़कर आसमान में उड़ा! स्वास्थ्य मंत्रालय ने आपातकाल घोषित किया!",
      "🚨 EXCLUSIVE HEADLINE: LOCAL CITIZEN'S BODY DECLARED A HAZARDOUS THERMAL ZONE! Experts warn remaining within 5 meters could melt ordinary plastic!",
      "🚨 ताज़ा खबर: देश के जाने-माने व्यक्ति के शरीर में अचानक उत्पन्न हुआ ग्लोबल वार्मिंग का केंद्र! NASA ने उपग्रह से थर्मल हीट सिग्नेचर डिटेक्ट कर लिया है!",
      "🚨 RED ALERT: Biological crisis unfolding as patient claims their forehead has officially surpassed the surface temperature of planet Venus!"
    ],
    royal: [
      "शहंशाह-ए-आज़म के तख्त पर शोक की लहर! आज हमारे शाही मिज़ाज में ऐसी तपिश है मानो अंगारों पर सल्तनत का मुस्तकबिल झुलस रहा हो! शाही हकीमों को फौरन तलब किया जाए!",
      "फरियादियों पीछे हटो! आज हमारी पेशानी पर अंगारे दहक रहे हैं! शाही तख्त आज काढ़े और जड़ी-बूटियों के हवाले किया जाता है!",
      "दरबारियों कान खोलकर सुन लो! यह साधारण ताप नहीं, सल्तनत के दुश्मनों की बद्दुआओं का असर है! पूरे मुल्क में खामोशी का शाही हुक्म जारी किया जाए!",
      "शाही हकीम ने नब्ज़ छूते ही पसीने से भीग कर सजदा किया! हुज़ूर का बदन आग उगल रहा है, आज न्याय की नहीं, केवल रज़ाई की आवश्यकता है!"
    ],
    corporate: [
      "URGENT ESCALATION: Critical biological infrastructure is operating at 200% thermal capacity! Core services have entered an unrecoverable thermal crash!",
      "Status Update: My biological human server is currently overheating at 104°F. All sprint deliverables, sync calls, and Q3 synergies are permanently blocked until Q4.",
      "Please consider this an out-of-office automated alert from a failing meatbag hardware. Synapses are dropping packets and CPU temperature is critical.",
      "Per our last alignment, my internal immune stakeholders have unanimously voted to reject all physical meetings due to acute systemic failure."
    ],
    villain: [
      "Mwahahaha! Let this burning heat consume me! From the ashes of this 103-degree inferno, my ultimate wrath shall incinerate everything you hold dear!",
      "You think a mere biological pathogen can subdue the dark emperor?! This fever is not a weakness, it is the fire of vengeance awakening in my bloodstream!",
      "Cough... fools! While you celebrate my temporary physical collapse, the countdown to my total convalescence and your ultimate doom has already begun!",
      "The universe conspires against my dark genius by raising my core temperature! But when this thermometer shatters, so too shall your pathetic hopes!"
    ],
    newsanchor: [
      "THE NATION WANTS TO KNOW: 103 डिग्री के बुखार में कौन दे रहा है साजिश को अंजाम?! क्या यह केवल एक वायरल इन्फेक्शन है या अंतरराष्ट्रीय षड्यंत्र?! पैनलिस्ट चिल्लाइए मत!",
      "सवालों का महामंच! क्या थर्मामीटर झूठ बोल रहा है?! क्या मरीज की तपती पेशानी पर सरकार को तुरंत श्वेत पत्र जारी नहीं करना चाहिए?! बहस जारी है!",
      "LIVE DEBATE: THERMOMETER TRUTH EXPOSED! 10 panelist screens are on fire! Why did the paracetamol fail to arrive in the 30-minute delivery guarantee?! Answer the nation!",
      "सीधा सवाल: क्या बीमारी इंसान को कमजोर करती है या सिस्टम के खोखलेपन को बेनकाब करती है?! देखिए सबसे बड़ा खुलासा केवल आज रात 9 बजे!"
    ],
    philosophical: [
      "Is not fever merely the physical manifestation of the burning absurdity of mortal existence? We are but bags of stardust vibrating violently at elevated degrees.",
      "What is temperature but an arbitrary measurement of kinetic collisions within a transient vessel doomed to return to cosmic dust? I lay here, burning and enlightened.",
      "The fever rages, yet who is it that suffers? The ego dissolves into the warm delirium of reality, leaving only the profound echo of a dry throat.",
      "In this fiery crucible of biological malfunction, one realizes that all worldly ambitions are mere vapor before the cold, indifferent silence of the universe."
    ]
  },

  HUNGER: {
    hinglish: [
      "Bhai pet ke andar ke chuhe ab cricket tournament khel rahe hai aur audience mere liver ko kha rahi hai! Khana mangwao warna raste se pathar utha ke kha jaunga!",
      "Arey Zomato wale ko bolo helicopter se delivery kare! Meri aatma bhook ke maare Swiggy ke cart me behosh padi hai!",
      "Agar agle 5 minute me mere samne biryani ya momos nahi aaye, toh dosti, rishtedari aur insaniyat sab cancel!",
      "Mere pet me black hole ban chuka hai jo aaju-baaju ki sari energy nigal raha hai! Mujhe khana do bhai, mai collapse hone wala hu!"
    ],
    bollywood: [
      "अन्नपूर्णा माँ! क्या इस अभागे के नसीब में केवल सूखी हवाएं लिखी हैं?! पेट की यह ज्वाला अब मेरी धड़कनों को राख कर देगी! मुझे दो निवाले दो वरना मेरी समाधि तय है!",
      "रोटी का एक टुकड़ा... बस एक टुकड़ा! इस दुनिया के पास महलों के लिए दौलत है, मगर इस भूखे बदनसीब के लिए दो रोटियां नहीं?! हे भगवान!",
      "आज मेरे पेट में लगी यह भूख केवल पेट की नहीं, इस बेरहम ज़माने के जुल्मों की भूख है! अन्न दो, नहीं तो यह भूख क्रांति की आग बन जाएगी!",
      "बाबूजी ने कहा था भूखे मत रहना... माँ ने कहा था समय पर खाना... लेकिन इस निर्दयी शहर ने मेरी थाली ही छीन ली!"
    ],
    hindi: [
      "हे विधाता! उदर में जल रही यह जठराग्नि अब मेरे अस्तित्व को भस्म करने पर उतारू हो गई है! क्या इस संपूर्ण ब्रह्मांड में कोई मुझे अन्न का एक दाना अर्पित करेगा?!",
      "मेरी आत्मा भूख के गहन अंधकार में विलाप कर रही है! प्राण पखेरू अन्न की एक गंध के लिए तरस रहे हैं!",
      "यह भूख नहीं, यह यमराज का आमंत्रण है! यदि शीघ्र ही भोजन की व्यवस्था न हुई तो मेरा भौतिक शरीर इतिहास के पन्नों में दर्ज हो जाएगा!",
      "क्षुधा की यह प्रचंड ज्वाला मेरे संयम की सीमाओं को ध्वस्त कर चुकी है! अन्न देव, प्रकट होइए और इस पापी संसार से मेरी रक्षा कीजिए!"
    ],
    genz: [
      "my stomach acid is literally conducting a civil war rn 💀 I am about to start eating air molecules no cap, please doordash something!",
      "starvation speedrun any% happening in real time. my tummy is making noises in 7 different dialects fr fr, somebody feed me before I evaporate!",
      "bro my glucose levels are at negative fifty. I am seeing food hallucinations in 8K resolution 😭 I need carbs directly injected into my bloodstream!",
      "I'm so starved my personality has been reduced to an angry vibrating gremlin. Food delivery ETA says 20 mins, I have 90 seconds left on this mortal coil."
    ],
    fakenews: [
      "🚨 ब्रेकिंग न्यूज़: देश के सबसे बड़े खाली पेट में रिकॉर्ड स्तर का दबाव दर्ज! मौसम विभाग ने चेतावनी दी—भोजन न मिलने पर भयानक गड़गड़ाहट संभव!",
      "🚨 EMERGENCY ALERT: Local individual's stomach enters a state of absolute culinary famine! UN Security Council called for immediate snack drop!",
      "🚨 एक्सक्लूसिव खुलासा: भूखे नागरिक ने नाश्ते की थाली न मिलने पर रसोई घर में तख्तापलट करने की धमकी दी! पुलिस बल मौके पर तैनात!",
      "🚨 FLASH REPORT: Scientists discover new gravitational sinkhole inside starving citizen's belly! Nearby snacks being sucked in at the speed of light!"
    ],
    royal: [
      "शाही बावर्चीखाने पर वज्रपात हो! क्या सुल्तान-ए-आली मकाम भूखे पेट सल्तनत की हिफाज़त करेंगे?! शाही दस्तरखान पर छप्पन भोग तुरंत सजाए जाएं!",
      "फरियाद बंद करो! जब तक सुल्तान के हलक से शाही बिरयानी का एक निवाला नहीं उतरता, दीवान-ए-आम की सारी कार्यवाही स्थगित की जाती है!",
      "शाही नगाड़े बजाओ! हमारे पेट में भूख की ऐसी हुंकार उठी है मानो पूरी सल्तनत पर अकाल छा गया हो! बावर्ची को हाजिर किया जाए!",
      "ऐ दरबारियों, हमारे हुक्म की तामील हो! मलाई के समोसे और केसरिया खीर का काफिला तुरंत राजमहल की ओर रवाना किया जाए!"
    ],
    corporate: [
      "Action Item Blocked: Caloric intake level has reached 0.00%. Cognitive processing pipeline has completely timed out pending nutritional capital injection.",
      "High Priority Ticket: Blood sugar is at an unserviceable low. All project management workflows are stalled until lunch deliverable is successfully deployed.",
      "Strategic announcement: Bandwidth for any tasks is zero until sustainable caloric supply chain is established. Please sync directly with the nearest cafeteria.",
      "Risk Assessment: If sustenance is not provided within the current billing cycle, employee productivity metrics will crash below the baseline threshold."
    ],
    villain: [
      "Fools! You thought you could defeat my master plan by depriving my vessel of sustenance?! Once I feast upon this banquet, your downfall will be swift and merciless!",
      "Let the hunger twist my soul into a dark tempest! With every second my stomach grumbles, the revenge I plot against humanity grows ten times more sinister!",
      "Bring forth the feast, minions! For a hungry mastermind is a catastrophic hazard to every city within a thousand-mile radius!",
      "They withheld the appetizers... a mistake that shall cost this wretched city its very freedom! Prepare the banquet or taste my ultimate wrath!"
    ],
    newsanchor: [
      "देश का सबसे बड़ा सवाल: आखिर कब आएगा खाना?! क्या जोमैटो डिलीवरी बॉय रास्ते में देश की संप्रभुता से खेल रहा है?! जवाब दीजिए!",
      "थाली खाली क्यों है?! करोड़ों दर्शक आज स्क्रीन से चिपके हैं! क्या भूखे पेट से देश आगे बढ़ सकता है?! पैनलिस्ट नंबर 3, आप समोसा क्यों खा रहे हैं?!",
      "BREAKING: The hunger crisis reaches the studio floor! Can a modern democracy survive on an empty stomach?! We demand immediate answers from the chef!",
      "घमासान! भूख पर सबसे बड़ा दंगल! जब पेट में चूहे कूद रहे हों तो क्या जीडीपी की बात करना उचित है?! देखिए तीखी बहस!"
    ],
    philosophical: [
      "Is hunger merely the biological reminder that we are ceaselessly consuming the universe, only to be ultimately consumed by time itself?",
      "We pursue wealth, glory, and legacy, yet our entire empire crumbles into weeping insignificance the moment our belly lacks a few grains of cooked rice.",
      "The emptiness in my stomach mirrors the vast, echoing vacuum of the cosmos. To crave bread is to confess one's fragile dependence on the physical plane.",
      "What is a banquet but a momentary truce with mortality? I sit here, a hollow vessel yearning for the fleeting alchemy of digestion."
    ]
  },

  LATE: {
    hinglish: [
      "Bhai traffic itna khatarnak hai ki maine raste ke red light pe do nayi bhashayein seekh li aur daadhi bhi badh gayi! Main raste me hu bas 5 saal lagenge!",
      "Arey main nikla toh time pe tha, lekin raste me kismat ne U-turn le liya! Agar Google Maps pe vishwas kiya toh main seedha agle janam me pohchunga!",
      "Bhai car ki speed 2 km/hr hai, bagal se ek kachhua helmet pehen ke mujhe overtake karke nikal gaya! Mera intezar mat karo, aage badho!",
      "Meri ghadi ka cell time se aage chal raha tha aur meri kismat 40 minute peeche! Bas do signal dur hu (dono signal pe 99 second ka countdown hai)!"
    ],
    bollywood: [
      "देर हो गई... हाँ मुझे देर हो गई! लेकिन क्या यह ज़माना जानता है कि इस देरी के पीछे कितने तूफानों से लड़कर तुम्हारा यह साथी यहाँ तक आया है?!",
      "समय के पहिए ने हमेशा मेरे अरमानों को कुचला है! आज भी जब मैं मंजिल की ओर दौड़ा, तो तकदीर ने हर चौराहे पर लाल बत्ती का पहरा लगा दिया!",
      "मुद्दतें गुज़र गईं इस सफर में... राह की हर धूल ने मेरे कदम रोके! तुम क्या जानो किस कयामत को चीर कर मैं यहाँ पहुँचने की जद्दोजहद कर रहा हूँ!",
      "अगर देर से आना गुनाह है, तो सज़ा दो मुझे! लेकिन याद रखना, देर से आने वाले ही अक्सर इतिहास के पन्नों में हमेशा के लिए अमर होते हैं!"
    ],
    hindi: [
      "समय का क्रूर चक्रव्यूह मेरे मार्ग का सबसे बड़ा शत्रु बन चुका है! काल की गति तीव्र थी और मेरे चरण सांसारिक बाधाओं में उलझ कर रह गए!",
      "मार्ग में उपस्थित विघ्नों ने साक्षात महाभारत के रणक्षेत्र का रूप धारण कर लिया था! प्रत्येक पग पर यमदूत ट्रैफिक जाम बनकर मेरी गति को चुनौती दे रहे थे!",
      "मेरी इस विलंबता पर क्रोध न करें! ब्रह्मांड की महाशक्तियों ने षड्यंत्र रचकर मेरे आवागमन के समस्त मार्गों को अवरुद्ध कर दिया था!",
      "कालचक्र की इस भयानक पराजय के पश्चात भी मेरा यहाँ पहुँचना किसी दैवीय चमत्कार से कम नहीं है!"
    ],
    genz: [
      "bro I am currently caught in a traffic deadlock so insane my GPS literally gave up and started playing ambient sad piano music 💀",
      "I'm on my way but the simulation glitched and spawned 400 identical red hatchbacks in front of me. I am delayed indefinitely no cap.",
      "moving at approximately 0.0001 miles per business century rn. please proceed without me, my soul is trapped between two public transit buses 😭",
      "literally fighting for my life against geographical distance rn. arrival time is an abstract social construct at this point frfr."
    ],
    fakenews: [
      "🚨 ब्रेकिंग न्यूज़: शहर की मुख्य सड़क पर लगा ब्रह्मांड का सबसे बड़ा महाजाम! अंतरिक्ष यात्रियों ने चंद्रमा से देखा ट्रैफिक का भयानक दृश्य!",
      "🚨 LIVE REPORT: Local citizen sets world record for being permanently 15 minutes away from destination for 4 consecutive hours!",
      "🚨 सनसनीखेज रिपोर्ट: ट्रैफिक सिग्नल ने लाल बत्ती बदलने से किया साफ़ इनकार! गृह मंत्रालय ने मामले की जांच के लिए उच्चस्तरीय समिति गठित की!",
      "🚨 RED ALERT: Time-space continuum bends over local highway! Commuter trapped in a chronological loop between exit 4 and exit 5!"
    ],
    royal: [
      "शाही बग्गी के घोड़ों ने आज राह में बगावत कर दी! शाही काफिला नगर के सबसे तंग बाज़ार में रुका रहा, जहां आवाम का सैलाब हमारी राह में सजदा कर रहा था!",
      "गुस्ताखी मुआफ हो! वक़्त का पहिया सुल्तान के कदमों की रफ्तार से मेल नहीं खा सका! इस देरी को हमारी शाही शान का हिस्सा समझा जाए!",
      "शाही फरमान: जो घड़ियां हमें देर से आने का ताना देती हैं, उन्हें फौरन राजकोष में ज़ब्त करके उनकी सुइयां तोड़ दी जाएं!",
      "हम देरी से नहीं आए, बल्कि महफ़िल का मुकद्दर था कि वह हमारे दीदार के लिए इतनी देर तक तड़पे!"
    ],
    corporate: [
      "Logistical Impediment Notification: Physical transit throughput has dropped to zero due to catastrophic urban gridlock. ETA is indefinitely postponed.",
      "Kindly note that my physical arrival pipeline is experiencing severe latency. I am proactively pivoting my presence to an asynchronous spiritual mindset.",
      "Due to unforeseen macroeconomic congestion across the metropolitan transit corridor, my physical presence SLA has breached acceptable tolerance levels.",
      "Escalating transit anomaly: The commute pipeline is stalled at 98% buffer. Please proceed with the steering committee meeting without my live broadcast."
    ],
    villain: [
      "A mastermind is never late! The city simply rearranged its pitiful road grid in a desperate, futile attempt to delay my inevitable arrival!",
      "Let them wait! Every minute they spend checking their watches is another minute of sweet psychological torture I bestow upon them! Mwahaha!",
      "The traffic of this miserable metropolis tried to halt my dark chariot... but destiny cannot be detained by mere traffic signals!",
      "They dare tap their feet in impatience?! When I finally step into that room, they will beg the clock to run backward!"
    ],
    newsanchor: [
      "देश पूछ रहा है: आखिर गाड़ी कब पहुंचेगी?! क्या शहर का नगर निगम ट्रैफिक की इस काली करतूत पर पर्दा डाल रहा है?! जवाब दीजिए कमिश्नर साहब!",
      "सड़क पर सन्नाटा नहीं, महा-जाम का तांडव! क्या लाल बत्ती पर खड़े आम आदमी का समय कोई मूल्य नहीं रखता?! देखिए हमारी ग्राउंड रिपोर्ट!",
      "THE TRAFFIC CONSPIRACY UNMASKED! 45 minutes on one intersection! Why is the nation still waiting for this arrival?! Anchor takes off his jacket in fury!",
      "सीधा प्रहार: क्या देरी केवल एक बहाना है या सिस्टम की नाकामी का सबसे बड़ा प्रमाण?! आज रात दूध का दूध और पानी का पानी होकर रहेगा!"
    ],
    philosophical: [
      "What is punctuality but an arrogant human illusion designed to enforce linear order upon a chaotic, expanding universe?",
      "I am neither late nor early; I simply manifest at the precise coordinate of spacetime where the cosmic thread decrees I must appear.",
      "In the grand expanse of thirteen billion years of cosmic evolution, does a discrepancy of twenty-two minutes truly warrant moral condemnation?",
      "To wait is to confront the void. In delaying my arrival, I have gifted you the rarest of modern treasures: an encounter with your own solitude."
    ]
  },

  BROKE: {
    hinglish: [
      "Bhai bank balance dekh ke ATM machine ne bhi screen pe do aansoo gira diye aur bola 'bhai tu nikal yahan se, mujhe sharam aa rahi hai'!",
      "Account me itne kam paise bache hai ki agar koi chillar bhi chura le toh mera CIBIL score ICU me chala jayega! Ek cup chai pila de bhai!",
      "Mera wallet kholne par sirf dust udti hai aur ek expired metro card hashta hai! Financially main itna down hu ki Google Pay bhi reject ho raha hai!",
      "Bhai party me mat bulao, main sirf menu card ki photo dekh ke pet bharne ki aukat me hu abhi! 100 rupaye GPay karde yaar!"
    ],
    bollywood: [
      "दौलत... शोहरत... सब हाथ का मैल है! लेकिन आज मेरी जेब का मैल भी खत्म हो चुका है! एक फूटी कौड़ी के लिए यह दर-दर भटकने वाला मुसाफिर आज अनाथ हो गया!",
      "माँ, मेरे कंगन बिक गए, मेरी घड़ी बिक गई... आज मेरे बैंक खाते में केवल शून्य का सन्नाटा बचा है! क्या इसी दिन के लिए तुमने मुझे पाल-पोसकर बड़ा किया था?!",
      "अमीरों की इस बस्ती में हर सांस का मोल है, और मेरी जेब में आज मौत का कफ़न खरीदने जितनी भी नकदी नहीं बची! हे भगवान, उठा ले मुझे!",
      "पैसे नहीं हैं तो क्या हुआ, दिल तो अमीर है! मगर काश कि यह होटल वाला बिल के बदले मेरे अमीर दिल के टुकड़े स्वीकार कर लेता!"
    ],
    hindi: [
      "हे कुबेर देव! आपने मेरे जीवन की तिजोरी में दरिद्रता का ऐसा अखंड वास करा दिया है कि अब वायु भी मूल्य चुकाए बिना ग्रहण नहीं हो पा रही!",
      "मेरे कोष में स्वर्ण तो दूर, तांबे के एक सिक्के का भी अवशेष नहीं बचा! निर्धनता की इस आंधी ने मेरी समस्त आर्थिक प्रतिष्ठा को भस्म कर दिया है!",
      "यह कंगाली नहीं, यह मेरे पूर्व जन्मों के वित्तीय पापों का महाप्रायश्चित है! बैंक खाता अब एक अंतहीन शून्य के अतिरिक्त कुछ भी प्रदर्शित नहीं करता!",
      "धिक्कार है इस अर्थप्रधान युग पर! जब तक जेब में सिक्कों की झंकार थी, संसार नतमस्तक था; आज जब तिजोरी रिक्त है, तो परछाई भी साथ छोड़ गई!"
    ],
    genz: [
      "bro my bank account is currently screaming in lowercase font 😭 my balance is literally lower than my current phone battery percentage no cap!",
      "financial status: currently manifesting a rich long-lost royal relative to send me an inheritance before my credit card auto-declines 💀",
      "I am literally so broke that breathing in public feels like a luxury tax I cannot afford. Somebody please send 50 rupees for surviving!",
      "my liquid net worth is currently negative vibes and two lint balls in my left pocket. Cooked doesn't even begin to describe my fiscal situation fr."
    ],
    fakenews: [
      "🚨 ब्रेकिंग न्यूज़: देश के सबसे बड़े वित्तीय संकट का केंद्र बना एक स्थानीय बैंक खाता! रिज़र्व बैंक के गवर्नर ने आपातकालीन बैठक बुलाई!",
      "🚨 FINANCIAL DISASTER: Individual's bank balance touches absolute zero! Economists declare local wallet an official economic disaster zone!",
      "🚨 सनसनीखेज खुलासा: एटीएम मशीन ने ग्राहक का कार्ड वापस फेंकते हुए कहा—'मालिक अपनी स्थिति देखिए, हमें शर्मिंदा मत कीजिए'!",
      "🚨 RED ALERT: World Bank declines emergency loan request from local citizen citing 'catastrophic lack of any conceivable collateral'!"
    ],
    royal: [
      "शाही खजाने के संदूक खाली पड़े हैं! वजीर-ए-आज़म को तलब किया जाए! क्या सल्तनत का खजाना हवाओं ने लूट लिया या प्रजा के शाही ऐशो-इशरत ने?!",
      "शाही हुक्म जारी हो! आज से शाही चाय में दूध की जगह उबलता पानी इस्तेमाल होगा, क्योंकि शाही तिजोरी में तांबे के सिक्के भी नदारद हैं!",
      "हमारी सल्तनत का ताज गिरवी रखने की नौबत आ चुकी है! ऐ दरबारियों, अपनी शाही पगड़ियों से सोने के धागे निकालकर खजाने में जमा करो!",
      "शाही फकीरी का यह मंजर देखकर दुश्मन सल्तनतें भी रहम की भीख मांगने आ रही हैं! शाही शान बाकी है मगर शाही सिक्का गायब!"
    ],
    corporate: [
      "Fiscal Quarter Liquidity Crisis: Capital reserves have depleted to sub-zero levels. Emergency cashflow injection required immediately to prevent liquidation.",
      "Operational budget exhausted. All personal discretionary spending has been placed on indefinite corporate austerity hold per board resolution.",
      "Audit Findings: Financial runway stands at approximately negative three days. Immediate fiscal stimulus required to service daily coffee liabilities.",
      "Critical Warning: The treasury balance sheet is showing an unreconciled black hole. All procurement of non-essential nourishment is permanently suspended."
    ],
    villain: [
      "Curse these capitalist banks! They dare freeze my transactions while I am in the middle of funding my ultimate doomsday machine?!",
      "They think they can starve my sinister ambitions by draining my bank account?! I shall build my empire of terror on borrowed credit and spite!",
      "Zero balance?! Insolent fools! When my global reign begins, your paper currency will be burned as fuel for my imperial furnaces!",
      "A temporary cashflow drought... but once my evil scheme bears fruit, the entire world's central banks will grovel at my polished boots!"
    ],
    newsanchor: [
      "खाली खाता, खाली जेब, खाली पेट! क्या देश का आम नागरिक अब केवल हवा पीकर गुजारा करेगा?! वित्त मंत्रालय चुप क्यों है?!",
      "बैंक बैलेंस का सबसे बड़ा पर्दाफाश! जब खाते में 3 रुपये 40 पैसे बचे हों तो आम आदमी क्या करे?! हमारे साथ जुड़िए इस ज्वलंत बहस में!",
      "THE FINANCIAL MELTDOWN IN YOUR POCKET! Why did the ATM beep three times in pity?! We question the entire banking architecture tonight!",
      "सीधा सवाल: क्या गरीबी एक अभिशाप है या बैंकिंग सिस्टम का सबसे क्रूर मज़ाक?! देखिए हमारे खास इन्वेस्टिगेटिव बुलेटिन में!"
    ],
    philosophical: [
      "What is currency but a collective mass hallucination of green paper and digital pixels meant to quantify human desperation?",
      "I possess no gold, yet in this absolute penury, am I not liberated from the gilded chains of material attachment that poison the mortal soul?",
      "To be entirely broke is to touch the raw, unadorned surface of reality where worth is measured not in bank balances, but in endurance.",
      "The vault is empty, yet the mind wanders across empires of infinity. Wealth is an ephemeral cloud; poverty, a profound teacher of truth."
    ]
  },

  DID_NOT_STUDY: {
    hinglish: [
      "Bhai kal paper hai aur maine syllabus ka sirf front page dekha hai jisme author ka naam likha hai! Pass hona toh door, invigilator mujhe dekh ke hashega!",
      "Padhai ka scene aisa hai ki book kholte hi neend aati hai aur phone uthate hi 4 ghante gayab ho jate hai! Jai Mata Di bolke saare option B tick karunga!",
      "Bhai mere brain ka hard drive format ho chuka hai! Exam hall me bas answer sheet pe apna roll number sajake 3 ghante baithunga!",
      "Dost bol rahe hai unka revision 3 baar ho gaya, aur main yahan soch raha hu ki exam center tak kaunsi bus jati hai!"
    ],
    bollywood: [
      "हे सरस्वती माँ! क्या इस कलम के नसीब में केवल कोरे पन्ने ही लिखे थे?! कल परीक्षा का वो अग्नि-मंडप सजेगा जहाँ मेरी अज्ञानता की चिता जलेगी!",
      "किताबें खुली रहीं... रातें ढलती रहीं... मगर मेरी आँखों के आगे सिर्फ शून्य का नाच चलता रहा! कल जब प्रोफेसर मुझे शून्य देगा, तो मेरी रूह चीख उठेगी!",
      "मैंने विद्या की देवी का अपमान नहीं किया, मगर किताबों के उन सूखे अक्षरों ने कभी मेरे दिल की तड़प को नहीं समझा! कल का परिणाम मेरी समाधि होगा!",
      "बाबूजी, आपका बेटा डॉक्टर-इंजीनियर बनने की रेस में आज सबसे पहले मैदान छोड़कर भागने के कगार पर खड़ा है! मुझे माफ़ कर देना बाबूजी!"
    ],
    hindi: [
      "हे ज्ञान की अधिष्ठात्री देवी! परीक्षा का महासमर कल प्रातःकाल से प्रारंभ है और मेरे ज्ञान का तरकश पूर्णतः बाणविहीन और खोखला है!",
      "मैंने पुस्तकों का स्पर्श तक नहीं किया, और काल का चक्र मुझे परीक्षा भवन के उस कालकोठरी में घसीट कर ले जाने के लिए तत्पर खड़ा है!",
      "यह परीक्षा नहीं, यह मेरे बौद्धिक दिवालियापन का सार्वजनिक उत्सव होगा! उत्तर पुस्तिका पर अश्रुओं के अतिरिक्त कुछ भी अंकित न हो सकेगा!",
      "विद्या का एक भी अक्षर मेरे मस्तिष्क में शरण लेने को तैयार नहीं है! कल का सूर्योदय मेरी शैक्षिक मृत्यु का साक्षात साक्षी बनेगा!"
    ],
    genz: [
      "bro the exam is in 6 hours and my preparation level is literally at room temperature 💀 I haven't even downloaded the syllabus PDF fr!",
      "currently relying 100% on vibes, spiritual prayers, and option C for tomorrow's paper. the academic downfall is streaming live in 4k no cap 😭",
      "I opened page 1 of the textbook and my brain hit me with a 404 error file not found. It's so genuinely over for me academically bro.",
      "professors really expect me to answer 5 essay questions when my attention span expired during a 7-second subway surfers reel 💀"
    ],
    fakenews: [
      "🚨 ब्रेकिंग न्यूज़: कल होने वाली महा-परीक्षा से पहले छात्र के दिमाग से संपूर्ण सामान्य ज्ञान गायब! वैज्ञानिकों ने इसे 'सिंड्रोम ऑफ जीरो स्टडी' करार दिया!",
      "🚨 ACADEMIC EMERGENCY: Student enters exam week without opening a single textbook! University board considers creating negative grading system!",
      "🚨 सनसनीखेज खुलासा: उत्तर पुस्तिका में छात्र ने लिखे केवल तीन शब्द—'भगवान आपका भला करे'! जांच कमेटी बैठाई गई!",
      "🚨 FLASH ALERT: Massive cognitive drought recorded in local bedroom as 600-page textbook remains in factory-sealed plastic wrap on exam eve!"
    ],
    royal: [
      "शाही इम्तिहान की घड़ी आ पहुंची है और शहज़ादे के ज़ेहन में इल्म का एक भी कतरा बाकी नहीं! शाही उस्ताद को फौरन फांसी पर चढ़ाया जाए!",
      "कल शाही तख्त के सामने हमारी लियाकत की परख होगी! और हमारी तैयारी का यह आलम है कि हमें किताब का उनवान तक याद नहीं!",
      "दरबारियों कान खोलकर सुनो! कल की परीक्षा में जो भी सवाल पूछा जाए, जवाब में हमारी शाही मुहर लगाकर पर्चा जमा कर दिया जाए!",
      "इल्म की दौलत से महरूम यह शहज़ादा कल इम्तिहान के मैदान में अपनी बेबसी की दास्तान खुद अपने आंसुओं से लिखेगा!"
    ],
    corporate: [
      "Audit Failure Imminent: Knowledge acquisition sprint delivered 0 story points. Tomorrow's formal assessment pipeline has zero test coverage.",
      "Critical Gap Analysis: Required domain expertise is 100%, actual retained information is 0.04%. Immediate risk mitigation strategy: prayer and guessing.",
      "Per tomorrow's evaluation deliverable: candidate is proceeding without any theoretical framework or documentation review. Failure SLA expected.",
      "Executive Summary: All preparation windows were cannibalized by unscheduled procrastination cycles. Academic performance review downgraded to critical."
    ],
    villain: [
      "Fools! Let them test me with their trivial multiple-choice examinations! My dark intellect transcends their pathetic, mundane academic grading curves!",
      "They expect me to memorize their formulas?! When I conquer this world, their textbooks will be rewritten to praise my supreme genius!",
      "A failing grade?! Mwahaha! That red ink on my paper will only serve as a reminder of the blood my vengeance shall draw from this faculty!",
      "The academic council thought they could cage my destructive potential within an examination hall... tomorrow, my empty paper shall herald their doom!"
    ],
    newsanchor: [
      "कल परीक्षा, आज किताब गायब! आखिर कौन है इस महा-लापरवाही का जिम्मेदार?! क्या छात्र के फोन को तुरंत जब्त नहीं किया जाना चाहिए था?!",
      "पेंसिल छिली नहीं, किताब खुली नहीं, और सपना देख रहे हैं 99% का?! इस पाखंड पर आज हम करेंगे देश का सबसे बड़ा और तीखा विश्लेषण!",
      "THE EXAM CRISIS EXPLODES! 12 hours left, zero chapters completed! Why did the student watch cat videos until 3 AM?! Answer the nation!",
      "सीधा सवाल: क्या परीक्षा प्रणाली छात्रों के भविष्य से खेल रही है या छात्र खुद अपने करियर की चिता सजा रहे हैं?! देखिए सबसे बड़ा खुलासा!"
    ],
    philosophical: [
      "What is an examination but an arbitrary ritual of standardized conformity imposed by society to crush the untamed wildness of the soul?",
      "To have not studied is to stand in glorious, naked authenticity before the tribunal of artificial intellect. I know nothing, and thus am free.",
      "Tomorrow the examiner will grade my memory; they can never grade the vast, unmeasured cosmos that resides within my contemplative silence.",
      "In the infinite library of universal wisdom, does it truly matter whether one remembers the third law of thermodynamics on a Tuesday morning?"
    ]
  }
};

// Generic Fallbacks for ANY other intent or unknown inputs (WITHOUT repeating the user's sentence)
export const GENERIC_STYLE_FALLBACKS = {
  hinglish: [
    "Bhai jo baat tune abhi boli hai na, usko sunke meri soul ne 360-degree backflip mar liya! Aisa kalyug maine sapne me bhi expect nahi kiya tha!",
    "Arey ye kya emotional earthquake la diya tune! Aisi baaton ke baad toh seedha Himalayan retreat pe jaake sanyas lene ka mann karta hai!",
    "Bhai is statement pe toh Netflix ko 6 season ki suspense thriller series banani chahiye! Meri aakhein bhar aayi aur dimaag fuse ho gaya!",
    "Yaar aisi baatein sunke lagta hai kismat ne humari dosti ka script kisi C-grade daily soap writer se likhwaya hai!",
    "Bhai tune jo bomb phoda hai na, uski radiation se mere aaju baaju ke 4 Wi-Fi routers ne signals chhod diye!",
    "Arey bas kar pagle, rulayega kya?! Itna emotional melodrama toh Shah Rukh Khan ne Devdas me bhi nahi kiya tha!",
    "Bhai is baat pe do minute ka rashtriya maun banta hai! Meri zubaan ladkhada gayi aur sans lene me dikkat ho rahi hai!",
    "Ye sunne ke baad mera dimaag screen freeze ho chuka hai! Please restart karne ke liye 2 plate momos khilao!"
  ],
  bollywood: [
    "हे भगवान! इस मासूम के लफ़्ज़ों में छुपे इस दर्द को देखकर तो आज आसमान भी रो पड़ा! क्या इसी दिन के लिए इस दुनिया में इंसानियत जन्मी थी?!",
    "नहीं... नहीं! यह मैं क्या सुन रहा हूँ?! तकदीर के थपेड़ों ने आज इस अभागे के दिल पर ऐसा खंजर घोंपा है कि ज़माने की हर अदालत बेबस हो गई!",
    "यह महज़ बात नहीं, यह एक ज़ख्मी दिल की वो चीख है जो हिमालय की चोटियों से टकराकर वापस लौट आई है! उठा ले रे बाबा, मुझे उठा ले!",
    "ज़माने वालों, पत्थर मारो मुझे! मगर इस बेबस दास्तान को सुनकर कोई पत्थर दिल भी पिघल कर समंदर बन जाएगा!",
    "खुदा के लिए खामोश हो जाओ! तुम्हारे इन अल्फाज़ों ने मेरे सीने में छुपा हुआ वो तूफ़ान जगा दिया है जो पूरी कयामत को निगल जाएगा!",
    "काश कि मेरी आँखें फूट गई होतीं और मेरे कान बहरे हो गए होते, इससे पहले कि मुझे इस दर्दनाक दास्तान का गवाह बनना पड़ता!",
    "बाबूमशाय... यह कोई आम घटना नहीं है! यह वो मोड़ है जहाँ ज़िंदगी अपने सारे कर्ज़ एक साथ वसूलने आ खड़ी होती है!",
    "माँ... मेरी ममता की कसम, आज इस ज़ुल्म के खिलाफ पूरी कायनात में विद्रोह का बिगुल बजेगा!"
  ],
  hindi: [
    "अरे विधाता! इस घोर कलिकाल में ऐसे हृदयविदारक समाचार का श्रवण करने से पूर्व मेरे कान पत्थर क्यों न हो गए?! यह संपूर्ण सृष्टि का विनाशकारी मोड़ है!",
    "इस कथन ने मेरे अंतर्मन की समस्त नैतिक सीमाओं को झकझोर कर रख दिया है! यह ब्रह्मांडीय आपदा के आगमन की प्रत्यक्ष पूर्व-सूचना है!",
    "हे सर्वशक्तिमान! क्या इस नश्वर संसार में कोई ऐसा महापुरुष शेष है जो इस महा-संकट का निवारण कर सके?! मेरी चेतना स्तंभित हो चुकी है!",
    "यह साधारण मानवीय उद्गार नहीं, अपितु प्रलयंकारी काल की वो हुंकार है जो पर्वतों को धूल में मिला देने का सामर्थ्य रखती है!",
    "मेरी वाणी में अब शब्द नहीं बचे हैं, केवल शून्य का सन्नाटा और अंतहीन पीड़ा का सागर हिलोरें ले रहा है!",
    "इस महाविपत्ति के सम्मुख समस्त सांसारिक उपलब्धियां और राजसी वैभव तिनके के समान उड़कर विलीन हो चुके हैं!",
    "हे विधाता, आपने इस दुर्बल काया पर परीक्षा का यह कैसा वज्रपात किया है?! न्याय की देवी भी आज नेत्रों पर काली पट्टी बांधे मौन खड़ी है!",
    "समस्त नक्षत्रों की दशा आज विपरीत हो चुकी है! इस महा-संकट का समाधान किसी भी प्राचीन शास्त्र में उल्लिखित नहीं है!"
  ],
  genz: [
    "bro what did I actually just process with my two biological ear canals 💀 my jaw literally detached and fell into the center of the earth fr!",
    "chat is this for real or am I caught in an unpatched existential simulation bug?! I'm literally shaking crying throwing up rn frfr 😭",
    "nah this is actually the most unhinged statement of the 21st century no cap. bro is operating on negative three layers of irony 💀",
    "I'm so mentally flabbergasted by this news that my remaining two braincells just filed for mutual divorce. It's so over.",
    "someone please clip this and send it to the archives of human downfall because I cannot fathom the lore behind this 😭",
    "my honest to god reaction: absolute radio silence, pure skull emoji vibes, and an intense urge to stare into a blank wall for 48 hours.",
    "bro just dropped the biggest plot twist of the season without a spoiler warning 💀 my entire nervous system is buffering at 144p.",
    "actual historical event happening right in front of my salad. the vibes are permanently cooked beyond recognition frfr."
  ],
  fakenews: [
    "🚨 सनसनीखेज खुलासा: शहर में अचानक फटा भावनात्मक ज्वालामुखी! भूकंपीय पैमाने पर 9.8 तीव्रता की घबराहट दर्ज! सेना को स्टैंडबाय पर रखा गया!",
    "🚨 BREAKING NEWS BULLET: Scientists confirm this unprecedented turn of events has completely altered the rotational axis of planet Earth!",
    "🚨 एक्सक्लूसिव रिपोर्ट: आपातकालीन कैबिनेट की गुप्त बैठक जारी! राष्ट्रपति ने देशवासियों से शांति बनाए रखने और घरों में बंद रहने की अपील की!",
    "🚨 FLASH HEADLINE: Global stock markets plunge by 4000 points following the sudden disclosure of this staggering human catastrophe!",
    "🚨 ताज़ा खबर: संयुक्त राष्ट्र सुरक्षा परिषद ने बुलाई आपात बैठक! इस बयान के बाद 12 देशों के राजदूतों ने तुरंत अपनी टोपियां उतार दीं!",
    "🚨 RED ALERT FROM THE STUDIO: Eyewitnesses report clouds gathering in strange ominous formations directly above this incident!",
    "🚨 SPECIAL DISASTER BULLETIN: All commercial flights grounded indefinitely as air traffic controllers struggle to comprehend this revelation!",
    "🚨 MEGA SCOOP: Forensic teams arrive at the spot! The situation has officially crossed all boundaries of normal daily reality!"
  ],
  royal: [
    "शाही दरबार में सन्नाटा छा जाए! इस फरियाद को सुनकर सुल्तान के हाथ से सोने का प्याला गिरकर चकनाचूर हो गया! मुल्क पर आपातकाल लागू किया जाए!",
    "ऐ दरबारियों, अपने सिर झुका लो! आज सल्तनत की तारीख का वो काला दिन है जब तख्त-ओ-ताज की चमक भी फीकी पड़ चुकी है!",
    "शाही नगाड़ा बजाने वाले को रोक दो! आज जश्न नहीं, शाही शोक का मातम मनाया जाएगा! हर शहर की रोशनी को बुझा दिया जाए!",
    "सुल्तान-ए-आली मकाम ने अपने शाही फरमान में दर्ज कराया: इस भयानक वाक्य को इतिहास की किताबों में सुनहरे नहीं, स्याह पन्नों पर लिखा जाए!",
    "तोपों की सलामी रोक दी जाए! सल्तनत के चारों कोनों से शाही घुड़सवारों को हुक्म दिया गया है कि इस विपत्ति का हल तुरंत तलाश करें!",
    "शाही हकीमों और नजूमियों की टोली को तलब करो! सितारों की चाल बिगड़ चुकी है और राजमहल की दीवारों से आंसू टपक रहे हैं!",
    "हमारा शाही धीरज आज इम्तिहान की आखिरी हद पर पहुंच चुका है! इस माजरे को सुनकर हमारी तलवार म्यान से बाहर आने को मचल रही है!",
    "दरबार-ए-खास की कार्यवाही अनिश्चित काल के लिए स्थगित की जाती है! जब तक इस संकट का निवारण न हो, शाही दस्तरखान बंद रहेगा!"
  ],
  corporate: [
    "CRITICAL INCIDENT: Severity-1 emergency escalated to the Board of Directors! All operational synergies and sprint velocity metrics have collapsed!",
    "Cross-functional alignment has permanently failed. We are initiating a complete post-mortem on this unprecedented stakeholder catastrophe.",
    "Action Item: Please revert to baseline immediately. This situation has completely exceeded the risk tolerance matrix outlined in our Q4 charter.",
    "Executive escalation: The burn-rate on human sanity has exceeded available bandwidth. Requesting immediate budgetary allocation for spiritual triage.",
    "Per our last synchronization: this development has completely invalidated all projected ROI models and quarterly roadmap milestones.",
    "System Alert: Pipeline crashed with unhandled emotional exception. Rollback impossible. Direct escalation to CEO office underway.",
    "Please consider this communication as an urgent notice of contractual breach with reality. All KPIs are temporarily suspended.",
    "The deliverables for this quarter are officially doomed. Immediate pivoting towards damage control and corporate therapy sessions recommended."
  ],
  villain: [
    "Mwahahaha! At last, the fragile tapestry of their pathetic reality begins to unravel! Everything is proceeding exactly as I foresaw in my dark sanctum!",
    "Fools! Weep and lament your tragic circumstance! For your sorrow is the very fuel that powers my eternal apparatus of world domination!",
    "You thought the universe was kind and just?! Behold the bitter taste of reality crashing down upon your trembling mortal shoulders!",
    "Let darkness reign! This catastrophe shall be the glorious overture to the grand symphony of my impending global conquest!",
    "Cry out to your heroes, mortals! They cannot save you from the delicious chaos that is currently unfolding before my gleaming eyes!",
    "A tragic turn of fate for you... but a masterstroke of cosmic destiny for me! Prepare to bow before the architect of your ruin!",
    "Their spirits are crushed, their hopes extinguished! The stage is set, and the spotlight of doom now shines entirely upon them!",
    "They believed they were safe within their mundane routines... how utterly delicious to watch their illusions shatter into dust!"
  ],
  newsanchor: [
    "THE NATION WANTS TO KNOW: इस भयानक खुलासे के बाद क्या जिम्मेदार लोगों को अपने पदों से इस्तीफा नहीं दे देना चाहिए?! जवाब दीजिए पैनलिस्ट!",
    "सवालों का महा-दंगल! क्या यह आम बात है या देश के करोड़ों नागरिकों की भावनाओं के साथ खेला गया सबसे घिनौना खिलवाड़?! चिल्लाइए मत!",
    "सीधा प्रहार: स्टूडियो में तापमान 50 डिग्री पार हो चुका है! स्क्रीन पर मौजूद चारों विशेषज्ञ पसीना पोंछ रहे हैं! आखिर सच क्या है?!",
    "THE BIGGEST PRIME-TIME INVESTIGATION: Why did nobody see this coming?! Why were the sirens silent until the tragedy struck the nation?!",
    "महा-बहस: क्या जनता को गुमराह किया गया?! आज रात 9 बजे हम उस सीक्रेट दस्तावेज़ को देश के सामने लाइव डिकोड करने जा रहे हैं!",
    "माइक बंद कीजिए उनका! उनका ऑडियो काटो! देश ऐसे गैर-जिम्मेदाराना जवाब सुनने के लिए तैयार नहीं है! सच सामने आकर रहेगा!",
    "ब्रेकिंग का महा-विस्फोट: दर्शक अपनी कुर्सियों की पेटियां बांध लें! जो खबर अब हम दिखाने जा रहे हैं, उसने पूरे तंत्र की चूलें हिला दी हैं!",
    "सच्चाई का कड़वा घूंट: क्या यह तंत्र की विफलता है या मानवीय इतिहास का सबसे बड़ा रहस्य?! देखिए सिर्फ और सिर्फ इस मंच पर!"
  ],
  philosophical: [
    "Consider the sheer cosmic insignificance of this fleeting catastrophe against the silent backdrop of a trillion spinning galaxies.",
    "In the grand tapestry of being, what we perceive as crisis is merely the universe breathing in, rearranging its atoms, and exhaling apathy.",
    "To lament this moment is to misunderstand the very essence of human tragedy. We are actors upon an empty stage, inventing sorrow from thin air.",
    "The void does not answer, nor does it comfort. It merely reflects back the absurd comedy of our fragile attachments and shattered plans.",
    "Is this not the purest expression of the human condition? Stumbling through the dark, seeking profound meaning in random cosmic turbulence.",
    "Time will wash away this crisis just as the tide dissolves a castle of wet sand. Nothing is permanent; nothing is truly broken.",
    "We grasp for certainty in a universe made of smoke. What has occurred was inevitable; what comes next is equally indifferent.",
    "In this bitter realization lies the seed of stoic peace: once all illusions of control are abandoned, the soul is finally unburdened."
  ]
};

// State tracker for non-repeating variations
const recentOutputs = [];

export function generateDramaticOutput(rawInput, style = 'hinglish', isVariation = false) {
  const norm = normalizeInput(rawInput);
  
  // Find intent
  let intentId = null;
  if (norm) {
    // 1. Exact or keyword match from intent definitions
    for (const def of INTENT_DEFINITIONS) {
      for (const kw of def.keywords) {
        const cleanKw = normalizeInput(kw);
        if (norm === cleanKw || norm.includes(cleanKw)) {
          intentId = def.id;
          break;
        }
      }
      if (intentId) break;
    }
  }

  const selectedStyle = STYLE_NAMES[style] ? style : 'hinglish';
  let candidatePool = [];

  // If intent found and has templates for this style
  if (intentId && INTENT_STYLE_MAP[intentId] && INTENT_STYLE_MAP[intentId][selectedStyle]) {
    candidatePool = [...INTENT_STYLE_MAP[intentId][selectedStyle]];
  }

  // If candidate pool is still empty or small, mix with stylistic generic fallbacks
  const fallbacks = GENERIC_STYLE_FALLBACKS[selectedStyle] || GENERIC_STYLE_FALLBACKS.hinglish;
  if (candidatePool.length === 0) {
    candidatePool = [...fallbacks];
  } else {
    // Add 2 unique style touches
    candidatePool.push(fallbacks[0], fallbacks[1]);
  }

  // Filter out recently shown outputs (anti-repetition for "Try Another Variation")
  let available = candidatePool.filter(item => !recentOutputs.includes(item));
  if (available.length === 0) {
    available = candidatePool;
    recentOutputs.length = 0; // reset
  }

  const chosen = available[Math.floor(Math.random() * available.length)];

  // Track recent (max 4)
  recentOutputs.push(chosen);
  if (recentOutputs.length > 4) {
    recentOutputs.shift();
  }

  return {
    output: chosen,
    styleKey: selectedStyle,
    styleName: STYLE_NAMES[selectedStyle],
    intentDetected: intentId || 'CREATIVE_CHAOS'
  };
}
