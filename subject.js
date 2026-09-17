const subjectKey = document.body.dataset.subject;

const subjects = {
  english: {
    icon: "Aa",

    en: {
      name: "English",
      intro: "English notes, grammar rules and study materials for Class 8.",
      resources: [
        ["01", "Question Tags Rules", "Rules and examples of Question Tags.", "document/english/question-tags-rules.pdf"],
        ["02", "Reporting Verbs – Interrogative Sentences", "Reporting verbs used with all types of interrogative sentences.", "document/english/reporting-verbs-interrogative.pdf"],
        ["03", "Reporting Verbs – Assertive Sentences", "Reporting verbs used with assertive sentences.", "document/english/reporting-verbs-assertive.pdf"],
        ["04", "Reporting Verbs – Exclamatory Sentences", "Reporting verbs used with all forms of exclamatory sentences.", "document/english/reporting-verbs-exclamatory.pdf"],
        ["05", "Reporting Verbs – Optative Sentences", "Reporting verbs used with all forms of optative sentences.", "document/english/reporting-verbs-optative.pdf"],
        ["06", "Reporting Verbs – Imperative Sentences", "Reporting verbs used with imperative sentences.", "document/english/reporting-verbs-imperative.pdf"]
      ]
    },

    np: {
      name: "अंग्रेजी",
      intro: "कक्षा ८ का अंग्रेजी नोट्स, व्याकरण नियम र अध्ययन सामग्री।",
      resources: [
        ["०१", "Question Tags Rules", "Question Tags का नियम र उदाहरणहरू।", "document/english/question-tags-rules.pdf"],
        ["०२", "Reporting Verbs – Interrogative Sentences", "Interrogative sentences का Reporting Verbs।", "document/english/reporting-verbs-interrogative.pdf"],
        ["०३", "Reporting Verbs – Assertive Sentences", "Assertive sentences का Reporting Verbs।", "document/english/reporting-verbs-assertive.pdf"],
        ["०४", "Reporting Verbs – Exclamatory Sentences", "Exclamatory sentences का Reporting Verbs।", "document/english/reporting-verbs-exclamatory.pdf"],
        ["०५", "Reporting Verbs – Optative Sentences", "Optative sentences का Reporting Verbs।", "document/english/reporting-verbs-optative.pdf"],
        ["०६", "Reporting Verbs – Imperative Sentences", "Imperative sentences का Reporting Verbs।", "document/english/reporting-verbs-imperative.pdf"]
      ]
    }
  }
};

var lang = "en";

function render() {

  var subject = subjects[subjectKey];

  if (!subject) {
    console.error("Subject not found:", subjectKey);
    return;
  }

  var data = subject[lang];

  var subjectName = document.getElementById("subjectName");
  var subjectIntro = document.getElementById("subjectIntro");
  var subjectIcon = document.getElementById("subjectIcon");
  var resourcesHeading = document.getElementById("resourcesHeading");
  var backText = document.getElementById("backText");
  var languageToggle = document.getElementById("languageToggle");
  var resourceList = document.getElementById("resourceList");
  var year = document.getElementById("year");

  if (subjectName) {
    subjectName.textContent = data.name;
  }

  if (subjectIntro) {
    subjectIntro.textContent = data.intro;
  }

  if (subjectIcon) {
    subjectIcon.textContent = subject.icon;
  }

  if (resourcesHeading) {
    if (lang === "en") {
      resourcesHeading.textContent = "English Documents";
    } else {
      resourcesHeading.textContent = "अंग्रेजी कागजातहरू";
    }
  }

  if (backText) {
    if (lang === "en") {
      backText.textContent = "Back to all subjects";
    } else {
      backText.textContent = "सबै विषयमा फर्कनुहोस्";
    }
  }

  if (languageToggle) {
    if (lang === "en") {
      languageToggle.textContent = "नेपाली";
    } else {
      languageToggle.textContent = "English";
    }
  }

  if (resourceList) {

    resourceList.innerHTML = "";

    for (var i = 0; i < data.resources.length; i++) {

      var item = data.resources[i];

      var link = document.createElement("a");
      link.href = item[3];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "resource-item";

      var number = document.createElement("span");
      number.textContent = item[0];

      var content = document.createElement("div");

      var title = document.createElement("h3");
      title.textContent = item[1];

      var description = document.createElement("p");
      description.textContent = item[2];

      content.appendChild(title);
      content.appendChild(description);

      link.appendChild(number);
      link.appendChild(content);

      resourceList.appendChild(link);
    }
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

var languageButton = document.getElementById("languageToggle");

if (languageButton) {
  languageButton.addEventListener("click", function () {

    if (lang === "en") {
      lang = "np";
    } else {
      lang = "en";
    }

    render();
  });
}

render();
