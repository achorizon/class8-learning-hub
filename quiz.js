const DAILY_TARGET = 10;

const questionBanks = {

  english: [
    {
      question: "Choose the correct question tag: She is a teacher, ____?",
      options: ["isn't she", "is she", "doesn't she", "wasn't she"],
      answer: 0
    },
    {
      question: "Choose the correct article: He is ____ honest man.",
      options: ["a", "an", "the", "no article"],
      answer: 1
    },
    {
      question: "What is the past tense of 'go'?",
      options: ["goed", "gone", "went", "going"],
      answer: 2
    },
    {
      question: "Choose the correct preposition: The book is ____ the table.",
      options: ["in", "on", "at", "by"],
      answer: 1
    },
    {
      question: "Which word is a noun?",
      options: ["beautiful", "quickly", "school", "run"],
      answer: 2
    }
  ],

  science: [
    {
      question: "Which organelle is known as the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Cell wall"],
      answer: 1
    },
    {
      question: "What is the chemical symbol of oxygen?",
      options: ["Ox", "O", "Og", "C"],
      answer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: 2
    },
    {
      question: "Which process do green plants use to make food?",
      options: ["Respiration", "Photosynthesis", "Digestion", "Excretion"],
      answer: 1
    },
    {
      question: "What is the basic structural unit of life?",
      options: ["Tissue", "Organ", "Cell", "System"],
      answer: 2
    }
  ],

  maths: [
    {
      question: "What is 12 × 8?",
      options: ["86", "96", "108", "112"],
      answer: 1
    },
    {
      question: "What is the square of 15?",
      options: ["125", "200", "225", "250"],
      answer: 2
    },
    {
      question: "What is 2⁵?",
      options: ["10", "16", "25", "32"],
      answer: 3
    },
    {
      question: "Which of the following is a prime number?",
      options: ["21", "27", "29", "33"],
      answer: 2
    },
    {
      question: "What is 144 ÷ 12?",
      options: ["10", "11", "12", "14"],
      answer: 2
    }
  ],

  social: [
    {
      question: "What is the capital city of Nepal?",
      options: ["Pokhara", "Kathmandu", "Biratnagar", "Janakpur"],
      answer: 1
    },
    {
      question: "How many provinces are there in Nepal?",
      options: ["5", "6", "7", "8"],
      answer: 2
    },
    {
      question: "Which is the highest mountain in the world?",
      options: ["K2", "Mount Everest", "Kanchenjunga", "Dhaulagiri"],
      answer: 1
    },
    {
      question: "In which province is Mahottari District located?",
      options: [
        "Madhesh Province",
        "Koshi Province",
        "Bagmati Province",
        "Gandaki Province"
      ],
      answer: 0
    },
    {
      question: "What is the national flower of Nepal?",
      options: ["Rose", "Lotus", "Rhododendron", "Sunflower"],
      answer: 2
    }
  ],

  nepali: [
    {
      question: "नेपालको राजधानी कुन हो?",
      options: ["पोखरा", "काठमाडौं", "जनकपुर", "विराटनगर"],
      answer: 1
    },
    {
      question: "नेपालमा कति वटा प्रदेश छन्?",
      options: ["५", "६", "७", "८"],
      answer: 2
    },
    {
      question: "नेपालको राष्ट्रिय फूल कुन हो?",
      options: ["गुलाब", "कमल", "लालीगुराँस", "सूर्यमुखी"],
      answer: 2
    },
    {
      question: "‘राम विद्यालय जान्छ।’ वाक्यमा ‘राम’ कुन पद हो?",
      options: ["क्रिया", "सर्वनाम", "नाम", "विशेषण"],
      answer: 2
    },
    {
      question: "‘खेल्नु’ कुन पद हो?",
      options: ["नाम", "क्रिया", "विशेषण", "सर्वनाम"],
      answer: 1
    }
  ],

  computer: [
    {
      question: "What is the full form of CPU?",
      options: [
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Program Unit",
        "Computer Program Utility"
      ],
      answer: 0
    },
    {
      question: "Which device is mainly used to type text?",
      options: ["Monitor", "Keyboard", "Speaker", "Printer"],
      answer: 1
    },
    {
      question: "Which device displays information on a screen?",
      options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
      answer: 2
    },
    {
      question: "What type of memory is RAM?",
      options: ["Permanent", "Temporary", "Optical", "External"],
      answer: 1
    },
    {
      question: "Which is an operating system?",
      options: ["Windows", "Keyboard", "Google", "Printer"],
      answer: 0
    }
  ],

  health: [
    {
      question: "Which nutrient is mainly needed for body growth and repair?",
      options: ["Protein", "Water", "Mineral", "Carbohydrate"],
      answer: 0
    },
    {
      question: "Which organ pumps blood throughout the body?",
      options: ["Lungs", "Brain", "Heart", "Kidney"],
      answer: 2
    },
    {
      question: "Which vitamin is commonly produced in the skin in sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: 3
    },
    {
      question: "Which practice helps prevent the spread of many diseases?",
      options: [
        "Skipping meals",
        "Handwashing",
        "Sleeping less",
        "Eating only sweets"
      ],
      answer: 1
    },
    {
      question: "Which activity is useful for maintaining physical fitness?",
      options: [
        "Regular exercise",
        "Skipping sleep",
        "Smoking",
        "Avoiding movement"
      ],
      answer: 0
    }
  ]
};


/* =========================
   QUIZ VARIABLES
========================= */

let currentSubject = "english";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let submitting = false;


/* =========================
   NEPAL DATE
========================= */

function getNepalDate() {

  return new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Kathmandu"
  });

}


/* =========================
   STORAGE KEY
========================= */

function getStorageKey(subject) {

  return "quizProgress_" + getNepalDate() + "_" + subject;

}


/* =========================
   GET TODAY'S PROGRESS
========================= */

function getProgress(subject) {

  const key = getStorageKey(subject);

  const saved = localStorage.getItem(key);

  if (!saved) {
    return {
      count: 0,
      score: 0
    };
  }

  try {

    return JSON.parse(saved);

  } catch {

    return {
      count: 0,
      score: 0
    };

  }

}


/* =========================
   SAVE PROGRESS
========================= */

function saveProgress(subject, count, scoreValue) {

  const key = getStorageKey(subject);

  localStorage.setItem(
    key,
    JSON.stringify({
      count: count,
      score: scoreValue
    })
  );

}


/* =========================
   DAILY QUESTION START
========================= */

function getDailyStart(subject) {

  const date = getNepalDate();

  const text = date + "-" + subject;

  let hash = 0;

  for (let i = 0; i < text.length; i++) {

    hash =
      (hash * 31 + text.charCodeAt(i)) >>> 0;

  }

  return hash % questionBanks[subject].length;

}


/* =========================
   CREATE TODAY'S 10 QUESTIONS
========================= */

function createDailyQuestions() {

  const bank = questionBanks[currentSubject];

  if (!bank || bank.length === 0) {
    return [];
  }

  const start = getDailyStart(currentSubject);

  const questions = [];

  for (let i = 0; i < DAILY_TARGET; i++) {

    questions.push(
      bank[(start + i) % bank.length]
    );

  }

  return questions;

}


/* =========================
   LOAD QUIZ
========================= */

function loadQuiz() {

  currentQuestions = createDailyQuestions();

  const progress = getProgress(currentSubject);

  currentIndex = progress.count;
  score = progress.score;

  document.getElementById("quizDate").textContent =
    "Date: " + getNepalDate();

  document.getElementById("quizSubject").textContent =
    "Today's Subject: " +
    currentSubject.charAt(0).toUpperCase() +
    currentSubject.slice(1);

  document.getElementById("currentCount").textContent =
    Math.min(progress.count, DAILY_TARGET);

  document.getElementById("result").innerHTML = "";

  document.getElementById("targetComplete").style.display =
    "none";

  document.getElementById("retryBtn").style.display =
    "none";

  document.getElementById("submitBtn").style.display =
    "block";

  submitting = false;

  if (progress.count >= DAILY_TARGET) {

    showCompleted();

    return;

  }

  showQuestion();

}


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

  const quiz = document.getElementById("quiz");

  if (currentIndex >= DAILY_TARGET) {

    finishQuiz();

    return;

  }

  const q = currentQuestions[currentIndex];

  if (!q) {

    quiz.innerHTML =
      "<p>No question available.</p>";

    return;

  }

  let html = "";

  html += `
    <div class="question-card">

      <h3>
        Question ${currentIndex + 1} of ${DAILY_TARGET}
      </h3>

      <p>
        ${q.question}
      </p>
  `;

  q.options.forEach((option, index) => {

    html += `
      <label
        style="
          display:block;
          margin:10px 0;
          cursor:pointer;
        "
      >

        <input
          type="radio"
          name="answer"
          value="${index}"
        >

        ${option}

      </label>
    `;

  });

  html += `</div>`;

  quiz.innerHTML = html;

}


/* =========================
   SUBMIT ANSWER
========================= */

function submitAnswer() {

  if (submitting) {
    return;
  }

  submitting = true;

  const selected =
    document.querySelector(
      'input[name="answer"]:checked'
    );

  if (!selected) {

    alert("Please select an answer.");

    submitting = false;

    return;

  }

  const answer =
    Number(selected.value);

  const question =
    currentQuestions[currentIndex];

  if (answer === question.answer) {
    score++;
  }

  currentIndex++;

  saveProgress(
    currentSubject,
    currentIndex,
    score
  );

  document.getElementById("currentCount").textContent =
    Math.min(currentIndex, DAILY_TARGET);

  document.getElementById("submitBtn").disabled = true;

  setTimeout(() => {

    document.getElementById("submitBtn").disabled = false;

    submitting = false;

    showQuestion();

  }, 150);

}


/* =========================
   FINISH QUIZ
========================= */

function finishQuiz() {

  saveProgress(
    currentSubject,
    DAILY_TARGET,
    score
  );

  document.getElementById("quiz").innerHTML = "";

  document.getElementById("submitBtn").style.display =
    "none";

  document.getElementById("currentCount").textContent =
    DAILY_TARGET;

  document.getElementById("result").innerHTML =
    `
      <h3>
        Your Score: ${score}/${DAILY_TARGET}
      </h3>
    `;

  document.getElementById("targetComplete").style.display =
    "block";

}


/* =========================
   SUBJECT COMPLETE
========================= */

function showCompleted() {

  const progress = getProgress(currentSubject);

  document.getElementById("quiz").innerHTML = "";

  document.getElementById("submitBtn").style.display =
    "none";

  document.getElementById("currentCount").textContent =
    DAILY_TARGET;

  document.getElementById("result").innerHTML =
    `
      <h3>
        Your Score: ${progress.score}/${DAILY_TARGET}
      </h3>
    `;

  document.getElementById("targetComplete").style.display =
    "block";

}


/* =========================
   RETRY
========================= */

function retryQuiz() {

  const progress = getProgress(currentSubject);

  if (progress.count >= DAILY_TARGET) {

    showCompleted();

    return;

  }

  loadQuiz();

}


/* =========================
   SUBJECT SELECT
========================= */

function changeSubject() {

  const select =
    document.getElementById("subjectSelect");

  if (!select) {
    return;
  }

  currentSubject = select.value;

  loadQuiz();

}


/* =========================
   BUTTON EVENTS
========================= */

const submitBtn =
  document.getElementById("submitBtn");

if (submitBtn) {

  submitBtn.addEventListener(
    "click",
    submitAnswer
  );

}


const retryBtn =
  document.getElementById("retryBtn");

if (retryBtn) {

  retryBtn.addEventListener(
    "click",
    retryQuiz
  );

}


const subjectSelect =
  document.getElementById("subjectSelect");

if (subjectSelect) {

  subjectSelect.addEventListener(
    "change",
    changeSubject
  );

}


/* =========================
   START
========================= */

loadQuiz();
