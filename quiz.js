/* =========================================
   CLASS 8 LEARNING HUB
   DAILY QUIZ ENGINE
========================================= */


/* =========================================
   SAMPLE QUESTION BANK
   FINAL 700 QUESTIONS WILL BE ADDED LATER
========================================= */

const questionBanks = {

  english: [
    {
      question: "Choose the correct question tag: She is a student, _____?",
      options: [
        "isn't she?",
        "is she?",
        "doesn't she?",
        "wasn't she?"
      ],
      answer: 0
    },

    {
      question: "Choose the correct form: He _____ to school every day.",
      options: [
        "go",
        "goes",
        "going",
        "gone"
      ],
      answer: 1
    },

    {
      question: "What is the past tense of 'write'?",
      options: [
        "writed",
        "written",
        "wrote",
        "writing"
      ],
      answer: 2
    },

    {
      question: "Choose the correct article: Kathmandu is _____ capital city of Nepal.",
      options: [
        "a",
        "an",
        "the",
        "no article"
      ],
      answer: 2
    },

    {
      question: "Choose the correct preposition: Nepal is located _____ South Asia.",
      options: [
        "at",
        "in",
        "on",
        "by"
      ],
      answer: 1
    },

    {
      question: "What is the opposite of 'ancient'?",
      options: [
        "old",
        "modern",
        "early",
        "past"
      ],
      answer: 1
    },

    {
      question: "Choose the correct plural form of 'child'.",
      options: [
        "childs",
        "childes",
        "children",
        "childrens"
      ],
      answer: 2
    },

    {
      question: "Which word is an adjective?",
      options: [
        "beautiful",
        "beauty",
        "beautifully",
        "beautify"
      ],
      answer: 0
    },

    {
      question: "Choose the correct sentence.",
      options: [
        "He don't like tea.",
        "He doesn't likes tea.",
        "He doesn't like tea.",
        "He not like tea."
      ],
      answer: 2
    },

    {
      question: "What is the synonym of 'happy'?",
      options: [
        "sad",
        "glad",
        "angry",
        "weak"
      ],
      answer: 1
    },

    {
      question: "Which one is a pronoun?",
      options: [
        "school",
        "beautiful",
        "they",
        "quickly"
      ],
      answer: 2
    },

    {
      question: "Choose the correct comparative form of 'good'.",
      options: [
        "gooder",
        "more good",
        "better",
        "best"
      ],
      answer: 2
    }
  ],


  science: [
    {
      question: "What is the basic structural and functional unit of life?",
      options: [
        "Tissue",
        "Cell",
        "Organ",
        "Organ system"
      ],
      answer: 1
    },

    {
      question: "Which organelle is known as the powerhouse of the cell?",
      options: [
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Vacuole"
      ],
      answer: 2
    },

    {
      question: "Which gas is essential for human respiration?",
      options: [
        "Carbon dioxide",
        "Oxygen",
        "Hydrogen",
        "Nitrogen"
      ],
      answer: 1
    },

    {
      question: "What is the chemical symbol of oxygen?",
      options: [
        "Ox",
        "O",
        "Og",
        "C"
      ],
      answer: 1
    },

    {
      question: "Which planet is known as the Red Planet?",
      options: [
        "Venus",
        "Mars",
        "Jupiter",
        "Mercury"
      ],
      answer: 1
    },

    {
      question: "What is the process by which green plants make their food?",
      options: [
        "Respiration",
        "Digestion",
        "Photosynthesis",
        "Transpiration"
      ],
      answer: 2
    }
  ],


  maths: [
    {
      question: "What is 12 × 8?",
      options: [
        "86",
        "96",
        "108",
        "112"
      ],
      answer: 1
    },

    {
      question: "What is the square of 15?",
      options: [
        "125",
        "200",
        "225",
        "250"
      ],
      answer: 2
    },

    {
      question: "What is the value of 3² + 4²?",
      options: [
        "7",
        "12",
        "25",
        "49"
      ],
      answer: 2
    },

    {
      question: "What is 100 ÷ 4?",
      options: [
        "20",
        "25",
        "30",
        "40"
      ],
      answer: 1
    },

    {
      question: "Which number is a prime number?",
      options: [
        "21",
        "27",
        "29",
        "33"
      ],
      answer: 2
    }
  ],


  social: [
    {
      question: "What is the capital city of Nepal?",
      options: [
        "Pokhara",
        "Kathmandu",
        "Biratnagar",
        "Dharan"
      ],
      answer: 1
    },

    {
      question: "How many provinces are there in Nepal?",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      answer: 2
    },

    {
      question: "What is the highest mountain in Nepal?",
      options: [
        "Kanchenjunga",
        "Mount Everest",
        "Annapurna I",
        "Dhaulagiri"
      ],
      answer: 1
    },

    {
      question: "In which province is Mahottari District located?",
      options: [
        "Madhesh Province",
        "Koshi Province",
        "Bagmati Province",
        "Lumbini Province"
      ],
      answer: 0
    },

    {
      question: "What is the national flower of Nepal?",
      options: [
        "Rose",
        "Lotus",
        "Rhododendron",
        "Sunflower"
      ],
      answer: 2
    }
  ],


  nepali: [
    {
      question: "नेपालको राजधानी कुन हो?",
      options: [
        "पोखरा",
        "काठमाडौं",
        "विराटनगर",
        "धरान"
      ],
      answer: 1
    },

    {
      question: "नेपालमा कति प्रदेश छन्?",
      options: [
        "५",
        "६",
        "७",
        "८"
      ],
      answer: 2
    },

    {
      question: "नेपालको राष्ट्रिय फूल कुन हो?",
      options: [
        "गुलाब",
        "कमल",
        "लालीगुराँस",
        "सुनाखरी"
      ],
      answer: 2
    },

    {
      question: "‘विद्यालय’ शब्द कुन प्रकारको शब्द हो?",
      options: [
        "नाम",
        "सर्वनाम",
        "क्रिया",
        "विशेषण"
      ],
      answer: 0
    },

    {
      question: "‘राम विद्यालय जान्छ।’ वाक्यमा ‘जान्छ’ कुन शब्द हो?",
      options: [
        "नाम",
        "क्रिया",
        "सर्वनाम",
        "विशेषण"
      ],
      answer: 1
    }
  ],


  computer: [
    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Computer Processing Utility"
      ],
      answer: 0
    },

    {
      question: "Which device is mainly used to type text into a computer?",
      options: [
        "Monitor",
        "Keyboard",
        "Speaker",
        "Printer"
      ],
      answer: 1
    },

    {
      question: "Which one is an output device?",
      options: [
        "Keyboard",
        "Mouse",
        "Monitor",
        "Scanner"
      ],
      answer: 2
    },

    {
      question: "What is the full form of RAM?",
      options: [
        "Random Access Memory",
        "Read Access Memory",
        "Rapid Access Machine",
        "Random Application Memory"
      ],
      answer: 0
    },

    {
      question: "Which of the following is an operating system?",
      options: [
        "Windows",
        "Google",
        "YouTube",
        "HTML"
      ],
      answer: 0
    }
  ],


  health: [
    {
      question: "Which nutrient is mainly needed for body growth and repair?",
      options: [
        "Protein",
        "Water",
        "Mineral",
        "Carbohydrate"
      ],
      answer: 0
    },

    {
      question: "Which organ pumps blood throughout the human body?",
      options: [
        "Lungs",
        "Brain",
        "Heart",
        "Kidney"
      ],
      answer: 2
    },

    {
      question: "Which vitamin is mainly obtained from sunlight?",
      options: [
        "Vitamin A",
        "Vitamin B",
        "Vitamin C",
        "Vitamin D"
      ],
      answer: 3
    },

    {
      question: "Which habit helps prevent the spread of many diseases?",
      options: [
        "Not washing hands",
        "Washing hands properly",
        "Sharing personal towels",
        "Drinking unsafe water"
      ],
      answer: 1
    },

    {
      question: "Which activity is useful for maintaining physical fitness?",
      options: [
        "Regular exercise",
        "Skipping sleep",
        "Eating only junk food",
        "Avoiding movement"
      ],
      answer: 0
    }
  ]

};


/* =========================================
   SETTINGS
========================================= */

const DAILY_TARGET = 10;

let selectedSubject = "english";

let currentQuestions = [];

let currentPosition = 0;

let score = 0;

let attemptsToday = 0;


/* =========================================
   NEPAL DATE
========================================= */

function getNepalDate() {

  return new Date(
    new Date().toLocaleString(
      "en-US",
      {
        timeZone: "Asia/Kathmandu"
      }
    )
  );

}


/* =========================================
   GET DAY NUMBER
========================================= */

function getDayNumber() {

  const today = getNepalDate();

  const start =
    new Date(
      today.getFullYear(),
      0,
      0
    );

  const difference =
    today - start;

  return Math.floor(
    difference /
    (1000 * 60 * 60 * 24)
  );

}


/* =========================================
   GET QUESTIONS FOR TODAY
========================================= */

function getDailyQuestions(subject) {

  const bank =
    questionBanks[subject] || [];

  if (bank.length === 0) {
    return [];
  }

  const startIndex =
    ((getDayNumber() - 1) * DAILY_TARGET)
    % bank.length;

  const selected = [];

  for (
    let i = 0;
    i < Math.min(DAILY_TARGET, bank.length);
    i++
  ) {

    selected.push(
      bank[
        (startIndex + i) %
        bank.length
      ]
    );

  }

  return selected;

}


/* =========================================
   DISPLAY DATE
========================================= */

function displayDate() {

  const date =
    getNepalDate();

  document.getElementById(
    "quizDate"
  ).textContent =
    "Date: " +
    date.toLocaleDateString(
      "en-GB"
    );

}


/* =========================================
   LOAD QUIZ
========================================= */

function loadQuiz() {

  currentQuestions =
    getDailyQuestions(
      selectedSubject
    );

  currentPosition = 0;

  score = 0;

  attemptsToday = 0;

  document.getElementById(
    "quiz"
  ).innerHTML = "";

  document.getElementById(
    "result"
  ).innerHTML = "";

  document.getElementById(
    "targetComplete"
  ).style.display = "none";

  document.getElementById(
    "extraPractice"
  ).style.display = "none";

  document.getElementById(
    "submitBtn"
  ).style.display = "inline-block";

  displayDate();

  showQuestion();

}


/* =========================================
   SHOW CURRENT QUESTION
========================================= */

function showQuestion() {

  const quiz =
    document.getElementById(
      "quiz"
    );

  quiz.innerHTML = "";

  if (
    currentPosition >=
    currentQuestions.length
  ) {

    finishQuestionSet();

    return;

  }


  const item =
    currentQuestions[
      currentPosition
    ];


  const box =
    document.createElement(
      "div"
    );

  box.className =
    "quiz-question";


  box.innerHTML = `

    <h3>
      ${currentPosition + 1}.
      ${item.question}
    </h3>

    ${item.options
      .map(
        (option, index) => `

          <label>

            <input
              type="radio"
              name="currentQuestion"
              value="${index}"
            >

            ${option}

          </label>

        `
      )
      .join("")}

  `;


  quiz.appendChild(box);


  document.getElementById(
    "currentCount"
  ).textContent =
    attemptsToday;

}


/* =========================================
   SUBMIT CURRENT QUESTION
========================================= */

document
  .getElementById(
    "submitBtn"
  )
  .addEventListener(
    "click",
    () => {

      const selected =
        document.querySelector(
          'input[name="currentQuestion"]:checked'
        );


      if (!selected) {

        alert(
          "Please select an answer."
        );

        return;

      }


      const answer =
        Number(
          selected.value
        );


      const correct =
        currentQuestions[
          currentPosition
        ].answer;


      if (
        answer === correct
      ) {

        score++;

      }


      attemptsToday++;


      currentPosition++;


      document.getElementById(
        "currentCount"
      ).textContent =
        attemptsToday;


      if (
        attemptsToday >=
        DAILY_TARGET
      ) {

        finishQuestionSet();

      } else {

        showQuestion();

      }

    }
  );


/* =========================================
   TARGET COMPLETE
========================================= */

function finishQuestionSet() {

  document.getElementById(
    "quiz"
  ).innerHTML = "";


  document.getElementById(
    "submitBtn"
  ).style.display =
    "none";


  document.getElementById(
    "result"
  ).innerHTML = `

    <h2>
      Score: ${score}/${attemptsToday}
    </h2>

  `;


  if (
    attemptsToday >=
    DAILY_TARGET
  ) {

    document.getElementById(
      "targetComplete"
    ).style.display =
      "block";

  }

}


/* =========================================
   CONTINUE
========================================= */

document
  .getElementById(
    "continueBtn"
  )
  .addEventListener(
    "click",
    () => {

      document.getElementById(
        "targetComplete"
      ).style.display =
        "none";

      document.getElementById(
        "extraPractice"
      ).style.display =
        "block";

      document.getElementById(
        "moreQuestionsBtn"
      ).click();

    }
  );


/* =========================================
   COMPLETE FOR TODAY
========================================= */

document
  .getElementById(
    "completeBtn"
  )
  .addEventListener(
    "click",
    () => {

      document.getElementById(
        "targetComplete"
      ).innerHTML = `

        <h2>
          🎉 Today's Target Completed!
        </h2>

        <p>
          You can come back tomorrow
          for a new target.
        </p>

      `;

    }
  );


/* =========================================
   EXTRA QUESTIONS
========================================= */

document
  .getElementById(
    "moreQuestionsBtn"
  )
  .addEventListener(
    "click",
    () => {

      const bank =
        questionBanks[
          selectedSubject
        ] || [];


      if (
        bank.length === 0
      ) {

        return;

      }


      currentQuestions =
        bank;

      currentPosition =
        Math.min(
          attemptsToday,
          bank.length - 1
        );


      document.getElementById(
        "extraPractice"
      ).style.display =
        "none";


      document.getElementById(
        "submitBtn"
      ).style.display =
        "inline-block";


      showQuestion();

    }
  );


/* =========================================
   SUBJECT CHANGE
========================================= */

document
  .getElementById(
    "subjectSelect"
  )
  .addEventListener(
    "change",
    event => {

      selectedSubject =
        event.target.value;

      loadQuiz();

    }
  );


/* =========================================
   START
========================================= */

loadQuiz();
