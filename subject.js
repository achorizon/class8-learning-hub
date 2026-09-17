const subjectKey = document.body.dataset.subject;

const subjects = {
  english: {
    icon: 'Aa',

    en: {
      name: 'English',
      intro: 'English notes, grammar rules and study materials for Class 8.',

      resources: [
        ['01', 'Question Tags Rules', 'Rules and examples of Question Tags.', 'document/english/question-tags-rules.pdf'],
        ['02', 'Reporting Verbs – Interrogative Sentences', 'Reporting verbs used with all types of interrogative sentences.', 'document/english/reporting-verbs-interrogative.pdf'],
        ['03', 'Reporting Verbs – Assertive Sentences', 'Reporting verbs used with assertive sentences.', 'document/english/reporting-verbs-assertive.pdf'],
        ['04', 'Reporting Verbs – Exclamatory Sentences', 'Reporting verbs used with all forms of exclamatory sentences.', 'document/english/reporting-verbs-exclamatory.pdf'],
        ['05', 'Reporting Verbs – Optative Sentences', 'Reporting verbs used with all forms of optative sentences.', 'document/english/reporting-verbs-optative.pdf'],
        ['06', 'Reporting Verbs – Imperative Sentences', 'Reporting verbs used with imperative sentences.', 'document/english/reporting-verbs-imperative.pdf']
      ]
    },

    np: {
      name: 'अंग्रेजी',
      intro: 'कक्षा ८ का अंग्रेजी नोट्स, व्याकरण नियम र अध्ययन सामग्री।',

      resources: [
        ['०१', 'Question Tags Rules', 'Question Tags का नियम र उदाहरणहरू।', 'document/english/question-tags-rules.pdf'],
        ['०२', 'Reporting Verbs – Interrogative Sentences', 'Interrogative sentences का Reporting Verbs।', 'document/english/reporting-verbs-interrogative.pdf'],
        ['०३', 'Reporting Verbs – Assertive Sentences', 'Assertive sentences का Reporting Verbs।', 'document/english/reporting-verbs-assertive.pdf'],
        ['०४', 'Reporting Verbs – Exclamatory Sentences', 'Exclamatory sentences का Reporting Verbs।', 'document/english/reporting-verbs-exclamatory.pdf'],
        ['०५', 'Reporting Verbs – Optative Sentences', 'Optative sentences का Reporting Verbs।', 'document/english/reporting-verbs-optative.pdf'],
        ['०६', 'Reporting Verbs – Imperative Sentences', 'Imperative sentences का Reporting Verbs।', 'document/english/reporting-verbs-imperative.pdf']
      ]
    }
  }
};

let lang = 'en';

function render() {

  if (!subjects[subjectKey]) {
    console.error('Subject not found:', subjectKey);
    return;
  }

  const s = subjects[subjectKey][lang];

  document.documentElement.lang = lang === 'en' ? 'en' : 'ne';

  document.title = `${s.name} | Class 8 Learning Hub`;

  const subjectName = document.getElementById('subjectName');
  const subjectIntro = document.getElementById('subjectIntro');
  const subjectIcon = document.getElementById('subjectIcon');
  const resourcesHeading = document.getElementById('resourcesHeading');
  const backText = document.getElementById('backText');
  const languageToggle = document.getElementById('languageToggle');
  const resourceList = document.getElementById('resourceList');

  if (subjectName) {
    subjectName.textContent = s.name;
  }

  if (subjectIntro) {
    subjectIntro.textContent = s.intro;
  }

  if (subjectIcon) {
    subjectIcon.textContent = subjects[subjectKey].icon;
  }

  if (resourcesHeading) {
    resourcesHeading.textContent =
      lang === 'en'
        ? 'English Documents'
        : 'अंग्रेजी कागजातहरू';
  }

  if (backText) {
    backText.textContent =
      lang === 'en'
        ? 'Back to all subjects'
        : 'सबै विषयमा फर्कनुहोस्';
  }

  if (languageToggle) {
    languageToggle.textContent =
      lang === 'en'
        ? 'नेपाली'
        : 'English';
  }

  if (resourceList) {

    resourceList.innerHTML = s.resources.map(r => `
      <a
        href="${r[3]}"
        target="_blank"
        rel="noopener noreferrer"
        class="resource-item"
      >
        <span>${r[0]}</span>

        <div>
          <h3>${r[1]}</h3>
          <p>${r[2]}</p>
        </div>
      </a>
    `).join('');

  } else {
    console.error('resourceList element not found.');
  }
}


/* Language button */

const languageToggle = document.getElementById('languageToggle');

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    lang = lang === 'en' ? 'np' : 'en';
    render();
  });
}


/* Footer year */

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}


/* Footer text */

const footer = document.querySelector('footer');

if (footer) {

  if (footer.children[0]) {
    footer.children[0].lastChild.textContent =
      ' AC HORIZON LEARNING HUB';
  }

  if (footer.children[1]) {
    footer.children[1].textContent =
      'Created by Aniket Chaudhary';
  }
}


/* Start */

render();
