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

const subjects = Object.keys(questionBanks);

let currentSubject = "english";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let submitting = false;
let answerSubmitted = false;

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
GET PROGRESS
========================= */

function getProgress(subject) {

const saved = localStorage.getItem(
getStorageKey(subject)
);

if (!saved) {
return {
count: 0,
score: 0
};
}

try {

```
return JSON.parse(saved);
```

} catch {

```
return {
  count: 0,
  score: 0
};
```

}

}

/* =========================
SAVE PROGRESS
========================= */

function saveProgress(subject, count, scoreValue) {

localStorage.setItem(
getStorageKey(subject),
JSON.stringify({
count: count,
score: scoreValue
})
);

}

/* =========================
AUTOMATIC SUBJECT
========================= */

function getAutomaticSubject() {

const date = getNepalDate();

let hash = 0;

for (let i = 0; i < date.length; i++) {

```
hash =
  (hash * 31 + date.charCodeAt(i)) >>> 0;
```

}

return subjects[hash % subjects.length];

}

/* =========================
DAILY QUESTIONS
========================= */

function getDailyStart(subject) {

const date = getNepalDate();

const text = date + "-" + subject;

let hash = 0;

for (let i = 0; i < text.length; i++) {

```
hash =
  (hash * 31 + text.charCodeAt(i)) >>> 0;
```

}

return hash % questionBanks[subject].length;

}

function createDailyQuestions() {

const bank = questionBanks[currentSubject];

if (!bank || bank.length === 0) {
return [];
}

const start = getDailyStart(currentSubject);

const questions = [];

for (let i = 0; i < DAILY_TARGET; i++) {

```
questions.push(
  bank[(start + i) % bank.length]
);
```

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

answerSubmitted = false;
submitting = false;

const quizDate =
document.getElementById("quizDate");

const quizSubject =
document.getElementById("quizSubject");

const currentCount =
document.getElementById("currentCount");

const result =
document.getElementById("result");

const targetComplete =
document.getElementById("targetComplete");

const submitBtn =
document.getElementById("submitBtn");

const retryBtn =
document.getElementById("retryBtn");

if (quizDate) {

```
quizDate.textContent =
  "Date: " + getNepalDate();
```

}

if (quizSubject) {

```
quizSubject.textContent =
  "Today's Subject: " +
  currentSubject.charAt(0).toUpperCase() +
  currentSubject.slice(1);
```

}

if (currentCount) {

```
currentCount.textContent =
  Math.min(progress.count, DAILY_TARGET);
```

}

if (result) {
result.innerHTML = "";
}

if (targetComplete) {

```
targetComplete.style.display = "none";
```

}

if (retryBtn) {

```
retryBtn.style.display = "none";
```

}

if (submitBtn) {

```
submitBtn.style.display = "block";
submitBtn.disabled = false;
```

}

if (progress.count >= DAILY_TARGET) {

```
showCompleted();

return;
```

}

showQuestion();

}

/* =========================
SHOW QUESTION
========================= */

function showQuestion() {

const quiz =
document.getElementById("quiz");

if (!quiz) {
return;
}

if (currentIndex >= DAILY_TARGET) {

```
finishQuiz();

return;
```

}

const q =
currentQuestions[currentIndex];

if (!q) {

```
quiz.innerHTML =
  "<p>No question available.</p>";

return;
```

}

answerSubmitted = false;

let html = "";

html += ` <div class="question-card">

```
  <h3>
    Question ${currentIndex + 1} of ${DAILY_TARGET}
  </h3>

  <p>
    ${q.question}
  </p>
```

`;

q.options.forEach((option, index) => {

```
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
```

});

html += `</div>`;

quiz.innerHTML = html;

const submitBtn =
document.getElementById("submitBtn");

if (submitBtn) {

```
submitBtn.textContent =
  "Submit Answer";

submitBtn.style.display =
  "block";

submitBtn.disabled =
  false;
```

}

}

/* =========================
SUBMIT ANSWER
========================= */

function submitAnswer() {

if (submitting || answerSubmitted) {
return;
}

const selected =
document.querySelector(
'input[name="answer"]:checked'
);

if (!selected) {

```
alert("Please select an answer.");

return;
```

}

submitting = true;
answerSubmitted = true;

const answer =
Number(selected.value);

const question =
currentQuestions[currentIndex];

const isCorrect =
answer === question.answer;

if (isCorrect) {

```
score++;
```

}

/* SAVE PROGRESS */

currentIndex++;

saveProgress(
currentSubject,
currentIndex,
score
);

/* DISABLE ANSWERS */

const options =
document.querySelectorAll(
'input[name="answer"]'
);

options.forEach(input => {

```
input.disabled = true;
```

});

/* SHOW RESULT */

const result =
document.getElementById("result");

if (result) {

```
if (isCorrect) {

  result.innerHTML = `
    <div
      style="
        margin-top:15px;
        padding:15px;
        border-radius:10px;
        border:2px solid #2e8b57;
      "
    >

      <h3>✅ Correct!</h3>

      <p>
        Your answer:
        <strong>${question.options[answer]}</strong>
      </p>

    </div>
  `;

} else {

  result.innerHTML = `
    <div
      style="
        margin-top:15px;
        padding:15px;
        border-radius:10px;
        border:2px solid #d9534f;
      "
    >

      <h3>❌ Wrong!</h3>

      <p>
        Your answer:
        <strong>${question.options[answer]}</strong>
      </p>

      <p>
        Correct answer:
        <strong>${question.options[question.answer]}</strong>
      </p>

    </div>
  `;

}
```

}

/* HIDE SUBMIT */

const submitBtn =
document.getElementById("submitBtn");

if (submitBtn) {

```
submitBtn.style.display =
  "none";
```

}

/* SHOW NEXT BUTTON */

const quiz =
document.getElementById("quiz");

if (quiz) {

```
quiz.insertAdjacentHTML(
  "beforeend",
  `
    <button
      id="nextQuestionBtn"
      type="button"
      style="
        margin-top:15px;
        padding:10px 18px;
        cursor:pointer;
      "
    >
      ${
        currentIndex >= DAILY_TARGET
          ? "Finish Quiz"
          : "Next Question"
      }
    </button>
  `
);


const nextBtn =
  document.getElementById(
    "nextQuestionBtn"
  );


if (nextBtn) {

  nextBtn.addEventListener(
    "click",
    nextQuestion
  );

}
```

}

const currentCount =
document.getElementById("currentCount");

if (currentCount) {

```
currentCount.textContent =
  Math.min(currentIndex, DAILY_TARGET);
```

}

}

/* =========================
NEXT QUESTION
========================= */

function nextQuestion() {

const result =
document.getElementById("result");

if (result) {
result.innerHTML = "";
}

if (currentIndex >= DAILY_TARGET) {

```
finishQuiz();

return;
```

}

submitting = false;

answerSubmitted = false;

showQuestion();

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

const quiz =
document.getElementById("quiz");

if (quiz) {
quiz.innerHTML = "";
}

const submitBtn =
document.getElementById("submitBtn");

if (submitBtn) {

```
submitBtn.style.display =
  "none";
```

}

const currentCount =
document.getElementById("currentCount");

if (currentCount) {

```
currentCount.textContent =
  DAILY_TARGET;
```

}

const result =
document.getElementById("result");

if (result) {

```
result.innerHTML = `
  <div
    style="
      margin-top:15px;
      padding:15px;
      border-radius:10px;
    "
  >

    <h3>
      Quiz Complete!
    </h3>

    <p>
      Your Score:
      <strong>${score}/${DAILY_TARGET}</strong>
    </p>

  </div>
`;
```

}

const targetComplete =
document.getElementById("targetComplete");

if (targetComplete) {

```
targetComplete.style.display =
  "block";
```

}

}

/* =========================
SUBJECT COMPLETE
========================= */

function showCompleted() {

const progress =
getProgress(currentSubject);

const quiz =
document.getElementById("quiz");

if (quiz) {

```
quiz.innerHTML = "";
```

}

const submitBtn =
document.getElementById("submitBtn");

if (submitBtn) {

```
submitBtn.style.display =
  "none";
```

}

const currentCount =
document.getElementById("currentCount");

if (currentCount) {

```
currentCount.textContent =
  DAILY_TARGET;
```

}

const result =
document.getElementById("result");

if (result) {

```
result.innerHTML = `
  <h3>
    Your Score:
    ${progress.score}/${DAILY_TARGET}
  </h3>
`;
```

}

const targetComplete =
document.getElementById("targetComplete");

if (targetComplete) {

```
targetComplete.style.display =
  "block";
```

}

}

/* =========================
RETRY
========================= */

function retryQuiz() {

loadQuiz();

}

/* =========================
BUTTON EVENTS
========================= */

document.addEventListener(
"DOMContentLoaded",
function () {

```
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


/*
  Subject selection is disabled.
  The subject is selected automatically.
*/

currentSubject =
  getAutomaticSubject();


loadQuiz();
```

}
);

````

### ⚠️ `quiz.html` में एक छोटा बदलाव भी करो

क्योंकि अब subject **automatically select** होगा, इसलिए यह पूरा हिस्सा:

```html
<label for="subjectSelect">
  <strong>Select Subject:</strong>
</label>

<select id="subjectSelect">
  ...
</select>
````

**हटा दो।**

और उसकी जगह सिर्फ:

```html
<p id="quizSubject"></p>
```

रहने दो।

इसके बाद `quiz.js` को **पूरी तरह ऊपर वाला code से replace** करके save करो और page refresh करो.

**एक और जरूरी बात:** तुम्हारे question banks में अभी हर subject में सिर्फ **5 अलग questions** हैं। इसलिए 10-question daily quiz में कुछ questions दोबारा आएँगे। अगर तुम चाहो कि **हर दिन 10 बिल्कुल अलग questions** आएँ, तो हर subject में कम-से-कम 10 questions डालने होंगे।
