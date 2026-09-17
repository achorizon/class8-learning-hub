const subjectKey = document.body.dataset.subject;

const subjects = {
  english: {
    icon: "Aa",

    en: {
      name: "English",
      intro: "English notes, grammar rules and study materials for Class 8.",
      resources: [
        ["01", "Question Tags Rules", "Rules and examples of Question Tags.", "document/english/question-tags-rules.pdf"],
        ["02", "Reporting Verbs – Interrogative Sentences", "Reporting verbs used with all types of interrogative sentences.", "document/english/reporting-verbs-for-all-types-of-interrogative-sentences.pdf"],
        ["03", "Reporting Verbs – Assertive Sentences", "Reporting verbs used with assertive sentences.", "document/english/reporting-verbs-for-assertive-sentences.pdf"],
        ["04", "Reporting Verbs – Exclamatory Sentences", "Reporting verbs used with all forms of exclamatory sentences.", "document/english/reporting-verbs-used-with-all-forms-of-exclamatory-sentences.pdf"],
        ["05", "Reporting Verbs – Optative Sentences", "Reporting verbs used with all forms of optative sentences.", "document/english/reporting-verbs-used-with-all-forms-of-optative-sentences.pdf"],
        ["06", "Reporting Verbs – Imperative Sentences", "Reporting verbs used with imperative sentences.", "document/english/reporting-verbs-used-with-all-forms-of-imperative-sentences.pdf"]
      ]
    },

    np: {
      name: "अंग्रेजी",
      intro: "कक्षा ८ का अंग्रेजी नोट्स, व्याकरण नियम र अध्ययन सामग्री।",
      resources: [
        ["०१", "Question Tags Rules", "Question Tags का नियम र उदाहरणहरू।", "document/english/question-tags-rules.pdf"],
        ["०२", "Reporting Verbs – Interrogative Sentences", "Interrogative sentences का Reporting Verbs।", "document/english/reporting-verbs-for-all-types-of-interrogative-sentences.pdf"],
        ["०३", "Reporting Verbs – Assertive Sentences", "Assertive sentences का Reporting Verbs।", "document/english/reporting-verbs-for-assertive-sentences.pdf"],
        ["०४", "Reporting Verbs – Exclamatory Sentences", "Exclamatory sentences का Reporting Verbs।", "document/english/reporting-verbs-used-with-all-forms-of-exclamatory-sentences.pdf"],
        ["०५", "Reporting Verbs – Optative Sentences", "Optative sentences का Reporting Verbs।", "document/english/reporting-verbs-used-with-all-forms-of-optative-sentences.pdf"],
        ["०६", "Reporting Verbs – Imperative Sentences", "Imperative sentences का Reporting Verbs।", "document/english/reporting-verbs-used-with-all-forms-of-imperative-sentences.pdf"]
      ]
    }
  },

  science: {
    icon: "⚗️",

    en: {
      name: "Science",
      intro: "Science notes, study materials and learning resources for Class 8.",
      resources: [
        ["01", "Lesson 1 - Scientific Learning", "Study material for Scientific Learning.", "document/science/Lesson%201%20-%20Scientific%20Learning.pdf"],
        ["02", "Lesson 3A - The Cell", "Study material about the cell and its structure.", "document/science/Lesson%203A%20-%20The%20Cell.pdf"],
        ["03", "Lesson 3B - Classification of Living Beings", "Study material about the classification of living beings.", "document/science/Lesson%203B%20-%20Classification%20of%20living%20beings.pdf"],
        ["04", "Lesson 4A - Biodiversity", "Study material about biodiversity.", "document/science/Lesson%204A%20-%20Biodiversity.pdf"],
        ["05", "Lesson 9A - Atomic Structure", "Study material about atomic structure.", "document/science/Lesson%209A%20-%20Atomic%20Structure.pdf"]
      ]
    },

    np: {
      name: "विज्ञान",
      intro: "कक्षा ८ का विज्ञान नोट्स, अध्ययन सामग्री र सिकाइ स्रोतहरू।",
      resources: [
        ["०१", "Lesson 1 - Scientific Learning", "Scientific Learning सम्बन्धी अध्ययन सामग्री।", "document/science/Lesson%201%20-%20Scientific%20Learning.pdf"],
        ["०२", "Lesson 3A - The Cell", "Cell र यसको संरचना सम्बन्धी अध्ययन सामग्री।", "document/science/Lesson%203A%20-%20The%20Cell.pdf"],
        ["०३", "Lesson 3B - Classification of Living Beings", "Living beings को classification सम्बन्धी अध्ययन सामग्री।", "document/science/Lesson%203B%20-%20Classification%20of%20living%20beings.pdf"],
        ["०४", "Lesson 4A - Biodiversity", "Biodiversity सम्बन्धी अध्ययन सामग्री।", "document/science/Lesson%204A%20-%20Biodiversity.pdf"],
        ["०५", "Lesson 9A - Atomic Structure", "Atomic Structure सम्बन्धी अध्ययन सामग्री।", "document/science/Lesson%209A%20-%20Atomic%20Structure.pdf"]
      ]
    }
  }
};

var lang = "en";

function render() {
  var subject = subjects[subjectKey];

  if (!subject) {
    return;
  }

  var data = subject[lang];

  var nameElement = document.getElementById("subjectName");
  var introElement = document.getElementById("subjectIntro");
  var iconElement = document.getElementById("subjectIcon");
  var headingElement = document.getElementById("resourcesHeading");
  var backElement = document.getElementById("backText");
  var buttonElement = document.getElementById("languageToggle");
  var listElement = document.getElementById("resourceList");
  var yearElement = document.getElementById("year");

  if (nameElement) {
    nameElement.textContent = data.name;
  }

  if (introElement) {
    introElement.textContent = data.intro;
  }

  if (iconElement) {
    iconElement.textContent = subject.icon;
  }

  if (headingElement) {
    headingElement.textContent =
      subjectKey === "science"
        ? (lang === "en" ? "Science Documents" : "विज्ञान कागजातहरू")
        : (lang === "en" ? "English Documents" : "अंग्रेजी कागजातहरू");
  }

  if (backElement) {
    backElement.textContent =
      lang === "en"
        ? "Back to all subjects"
        : "सबै विषयमा फर्कनुहोस्";
  }

  if (buttonElement) {
    buttonElement.textContent =
      lang === "en" ? "नेपाली" : "English";
  }

  if (listElement) {
    listElement.innerHTML = "";

    for (var i = 0; i < data.resources.length; i++) {
      var item = data.resources[i];

      var link = document.createElement("a");

      link.href = item[3];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "resource-item";

      var number = document.createElement("span");
      number.textContent = item[0];

      var box = document.createElement("div");

      var title = document.createElement("h3");
      title.textContent = item[1];

      var description = document.createElement("p");
      description.textContent = item[2];

      box.appendChild(title);
      box.appendChild(description);

      link.appendChild(number);
      link.appendChild(box);

      listElement.appendChild(link);
    }
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  document.documentElement.lang =
    lang === "en" ? "en" : "ne";

  document.title =
    data.name + " | Class 8 Learning Hub";
}

var languageButton =
  document.getElementById("languageToggle");

if (languageButton) {
  languageButton.addEventListener("click", function() {

    if (lang === "en") {
      lang = "np";
    } else {
      lang = "en";
    }

    render();
  });
}

render();
