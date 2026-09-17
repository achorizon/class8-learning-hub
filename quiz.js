const questions = [
  {
    question: "Choose the correct question tag: She is a student, _____?",
    options: ["isn't she?", "is she?", "doesn't she?", "wasn't she?"],
    answer: 0
  },
  {
    question: "Choose the correct form: He _____ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: 1
  },
  {
    question: "What is the past tense of 'write'?",
    options: ["writed", "written", "wrote", "writing"],
    answer: 2
  },
  {
    question: "Choose the correct article: Kathmandu is _____ capital city of Nepal.",
    options: ["a", "an", "the", "no article"],
    answer: 2
  },
  {
    question: "Choose the correct preposition: Nepal is located _____ South Asia.",
    options: ["at", "in", "on", "by"],
    answer: 1
  },
  {
    question: "What is the opposite of 'ancient'?",
    options: ["old", "modern", "early", "past"],
    answer: 1
  },
  {
    question: "Choose the correct plural form of 'child'.",
    options: ["childs", "childes", "children", "childrens"],
    answer: 2
  },
  {
    question: "Which word is an adjective?",
    options: ["beautiful", "beauty", "beautifully", "beautify"],
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
    options: ["sad", "glad", "angry", "weak"],
    answer: 1
  },
  {
    question: "Choose the correct reported speech: Ram said, \"I am tired.\"",
    options: [
      "Ram said that I am tired.",
      "Ram said that he was tired.",
      "Ram said that he is tired.",
      "Ram says that he was tired."
    ],
    answer: 1
  },
  {
    question: "Which one is a pronoun?",
    options: ["school", "beautiful", "they", "quickly"],
    answer: 2
  },
  {
    question: "Choose the correct comparative form of 'good'.",
    options: ["gooder", "more good", "better", "best"],
    answer: 2
  },
  {
    question: "Choose the correct passive voice: 'Ram writes a letter.'",
    options: [
      "A letter is written by Ram.",
      "A letter was written by Ram.",
      "A letter is wrote by Ram.",
      "A letter has written by Ram."
    ],
    answer: 0
  },
  {
    question: "Which punctuation mark is used at the end of a question?",
    options: [".", ",", "!", "?"],
    answer: 3
  },
  {
    question: "Choose the correct conjunction: I stayed at home _____ it was raining.",
    options: ["because", "but", "or", "and"],
    answer: 0
  },
  {
    question: "What is the noun form of 'honest'?",
    options: ["honestly", "honesty", "honestness", "honour"],
    answer: 1
  },
  {
    question: "Choose the correct spelling.",
    options: ["neccessary", "necessary", "necesary", "necessery"],
    answer: 1
  },
  {
    question: "Which sentence is in the future tense?",
    options: [
      "She went to school.",
      "She goes to school.",
      "She is going to school.",
      "She will go to school."
    ],
    answer: 3
  },
  {
    question: "Choose the correct question tag: They are Nepali students, _____?",
    options: ["aren't they?", "are they?", "don't they?", "isn't it?"],
    answer: 0
  }
];


/* ===============================
   NEPAL DATE
================================ */

function getToday() {
  const now = new Date();

  return new Date(
    now.toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu"
    })
  );
}


/* ===============================
   DAILY 10 QUESTIONS
================================ */

function getDailyQuestions() {

  const today = getToday();

  const start =
    new Date(today.getFullYear(), 0, 0);

  const difference =
    today - start;

  const oneDay =
    1000 * 60 * 60 * 24;

  const dayOfYear =
    Math.floor(difference / oneDay);

  const startIndex =
    ((dayOfYear - 1) * 10) % questions.length;

  const dailyQuestions = [];

  for (let i = 0; i < 10; i++) {

    dailyQuestions.push(
      questions[
        (startIndex + i) % questions.length
      ]
    );

  }

  return dailyQuestions;
}


/* ===============================
   SHOW TODAY'S DATE
================================ */

const today = getToday();

document.getElementById("quizDate").textContent =
  "Date: " +
  today.toLocaleDateString("en-GB");


/* ===============================
   LOAD QUIZ
================================ */

const dailyQuestions =
  getDailyQuestions();

const quizBox =
  document.getElementById("quiz");


dailyQuestions.forEach(
  (item, index) => {

    const questionBox =
      document.createElement("div");

    questionBox.className =
      "quiz-question";

    questionBox.innerHTML = `
      <h3>
        ${index + 1}. ${item.question}
      </h3>

      ${item.options
        .map(
          (option, optionIndex) => `
            <label>
              <input
                type="radio"
                name="question${index}"
                value="${optionIndex}"
              >
              ${option}
            </label>
          `
        )
        .join("")}
    `;

    quizBox.appendChild(questionBox);

  }
);
