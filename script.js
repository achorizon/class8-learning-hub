const copy = {
  en: {
    brand: 'Class 8',
    tagline: 'Learn · Grow · Shine',
    navHome: 'Home',
    navSubjects: 'Subjects',
    navSchedule: 'Timetable',
    navNotices: 'Notices',

    eyebrow: 'WELCOME TO OUR DIGITAL CLASSROOM',
    heroTitle: 'A brighter way to learn, every day.',
    heroText: 'Your home for lessons, important updates, weekly plans, and a little extra motivation.',

    explore: 'Explore subjects',
    updates: 'Latest updates',
    quote: 'Small steps make big progress.',

    statSubjects: 'Core subjects',
    statDays: 'Learning days',
    statPossibilities: 'Possibilities',

    learnBy: 'LEARN BY SUBJECT',
    subjectsTitle: 'What are we learning?',
    subjectsText: 'Choose a subject to focus your study time.',

    english: 'English',
    englishDesc: 'Read, write and express yourself.',

    science: 'Science',
    scienceDesc: 'Explore how the world works.',

    viewResources: 'View resources →',

    weeklyPlan: 'WEEKLY PLAN',
    scheduleTitle: "This week's timetable",
    day: 'Day',
    timetableNote: 'Sample timetable — update it with your school schedule.',

    stayCurrent: 'CLASS 8 INFORMATION',
    noticeTitle: 'Class 8 Information',

    footer: 'Class 8 Learning Hub',
    footerMessage: 'Made for curious minds.'
  },

  np: {
    brand: 'कक्षा ८',
    tagline: 'सिकौँ · बढौँ · चम्कौँ',
    navHome: 'गृहपृष्ठ',
    navSubjects: 'विषयहरू',
    navSchedule: 'समय तालिका',
    navNotices: 'सूचनाहरू',

    eyebrow: 'हाम्रो डिजिटल कक्षाकोठामा स्वागत छ',
    heroTitle: 'हरेक दिन सिक्ने अझ उज्यालो तरिका।',
    heroText: 'पाठ, महत्त्वपूर्ण जानकारी, साप्ताहिक योजना र प्रेरणाका लागि तपाईंको आफ्नै ठाउँ।',

    explore: 'विषयहरू हेर्नुहोस्',
    updates: 'नयाँ जानकारी',
    quote: 'साना पाइला, ठूलो प्रगति।',

    statSubjects: 'मुख्य विषयहरू',
    statDays: 'सिकाइका दिनहरू',
    statPossibilities: 'सम्भावनाहरू',

    learnBy: 'विषयअनुसार सिक्नुहोस्',
    subjectsTitle: 'हामी के सिकिरहेका छौँ?',
    subjectsText: 'आफ्नो पढाइको समयलाई केन्द्रित गर्न विषय छान्नुहोस्।',

    english: 'अंग्रेजी',
    englishDesc: 'पढ्नुहोस्, लेख्नुहोस् र आफैलाई व्यक्त गर्नुहोस्।',

    science: 'विज्ञान',
    scienceDesc: 'संसार कसरी चल्छ पत्ता लगाउनुहोस्।',

    viewResources: 'स्रोतहरू हेर्नुहोस् →',

    weeklyPlan: 'साप्ताहिक योजना',
    scheduleTitle: 'यस हप्ताको समय तालिका',
    day: 'दिन',
    timetableNote: 'नमूना समय तालिका — यसलाई आफ्नो विद्यालयको तालिकाअनुसार बदल्नुहोस्।',

    stayCurrent: 'कक्षा ८ जानकारी',
    noticeTitle: 'कक्षा ८ जानकारी',

    footer: 'कक्षा ८ लर्निङ हब',
    footerMessage: 'जिज्ञासु मनका लागि बनाइएको।'
  }
};


/* ==============================
   CLASS 8 INFORMATION
================================ */

const notices = {

  en: [
    [
      'CLASS',
      'Class Teacher - Nirajan Sir',
      `
      <strong>Principal:</strong> Pratibha Mam<br><br>

      <strong>Period-wise Teachers:</strong><br>
      1st Period — Nirajan Sir - Computer<br>
      2nd Period — Santosh Sir - Nepali<br>
      3rd Period — Samid Sir - Science<br>
      4th Period — Pratibha Mam - Social<br>
      5th Period — Nirajan Sir - Health<br>
      6th Period — Nagendra Sir - English<br>
      7th Period — Bijay Sir - Maths<br><br>

      <strong>Total Students of Class 8:</strong> 27
      `
    ],

    [
      'LIST',
      'Watch the Students List',
      `
      <a
        href="document/class8/student-list.pdf"
        target="_blank"
        rel="noopener"
        class="student-list-link"
      >
        📄 Click here to watch the Class 8 Students List →
      </a>
      `
    ]
  ],

  np: [
    [
      'कक्षा',
      'कक्षा शिक्षक - Nirajan Sir',
      `
      <strong>प्रधानाध्यापक:</strong> Pratibha Mam<br><br>

      <strong>पिरियड अनुसार शिक्षक:</strong><br>
      १औँ पिरियड — Nirajan Sir - Computer<br>
      २औँ पिरियड — Santosh Sir - Nepali<br>
      ३औँ पिरियड — Samid Sir - Science<br>
      ४औँ पिरियड — Pratibha Mam - Social<br>
      ५औँ पिरियड — Nirajan Sir - Health<br>
      ६औँ पिरियड — Nagendra Sir - English<br>
      ७औँ पिरियड — Bijay Sir - Maths<br><br>

      <strong>कक्षा ८ का जम्मा विद्यार्थी:</strong> 27
      `
    ],

    [
      'LIST',
      'विद्यार्थीहरूको सूची हेर्नुहोस्',
      `
      <a
        href="document/class8/student-list.pdf"
        target="_blank"
        rel="noopener"
        class="student-list-link"
      >
        📄 कक्षा ८ का विद्यार्थीहरूको सूची हेर्न यहाँ क्लिक गर्नुहोस् →
      </a>
      `
    ]
  ]

};


let lang = 'en';


/* ==============================
   RENDER
================================ */

function render() {

  const t = copy[lang];

  document.documentElement.lang =
    lang === 'en' ? 'en' : 'ne';


  document
    .querySelectorAll('[data-i18n]')
    .forEach(el => {

      el.textContent =
        t[el.dataset.i18n];

    });


  document.getElementById(
    'languageToggle'
  ).textContent =
    lang === 'en'
      ? 'नेपाली'
      : 'English';


  document.getElementById(
    'noticeList'
  ).innerHTML =

    notices[lang]

      .map(n => `

        <article class="notice-item">

          <span class="notice-date">
            ${n[0]}
          </span>

          <div>

            <h3>
              ${n[1]}
            </h3>

            <p>
              ${n[2]}
            </p>

          </div>

        </article>

      `)

      .join('');


  /* Footer */

  document.querySelector(
    '[data-i18n="footer"]'
  ).textContent =
    'AC HORIZON LEARNING HUB';


  document.querySelector(
    '[data-i18n="footerMessage"]'
  ).textContent =
    'Created by Aniket Chaudhary';

}


/* ==============================
   LANGUAGE BUTTON
================================ */

document
  .getElementById('languageToggle')
  .addEventListener(
    'click',
    () => {

      lang =
        lang === 'en'
          ? 'np'
          : 'en';

      render();

    }
  );


/* ==============================
   SUBJECT CARDS
================================ */

document
  .querySelectorAll(
    '.subject-card[data-page]'
  )
  .forEach(card => {

    card.addEventListener(
      'click',
      event => {

        if (
          event.target.closest('a')
        ) {
          return;
        }

        location.href =
          card.dataset.page;

      }
    );


    card.addEventListener(
      'keydown',
      event => {

        if (
          event.key === 'Enter' ||
          event.key === ' '
        ) {

          event.preventDefault();

          location.href =
            card.dataset.page;

        }

      }
    );

  });


/* ==============================
   YEAR
================================ */

document.getElementById(
  'year'
).textContent =
  new Date().getFullYear();


/* ==============================
   START
================================ */

render();
