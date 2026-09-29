// ===============================
// SMART QUIZ DATA
// ===============================

const questions = [

    // CONSTITUTION

    {
        category: "Constitution",

        question:
            "When did the Constitution of India come into effect?",

        options: [
            "15 August 1947",
            "26 November 1949",
            "26 January 1950",
            "2 October 1950"
        ],

        answer: 2
    },

    {
        category: "Constitution",

        question:
            "Which body prepared the Constitution of India?",

        options: [
            "Parliament",
            "Constituent Assembly",
            "Supreme Court",
            "Election Commission"
        ],

        answer: 1
    },


    // RIGHTS & DUTIES

    {
        category: "Rights & Duties",

        question:
            "Which Fundamental Right deals with equality?",

        options: [
            "Right to Equality",
            "Right to Religion",
            "Right to Education",
            "Right to Property"
        ],

        answer: 0
    },

    {
        category: "Rights & Duties",

        question:
            "Fundamental Duties are included in which Part of the Constitution?",

        options: [
            "Part II",
            "Part III",
            "Part IV",
            "Part IVA"
        ],

        answer: 3
    },


    // GOVERNMENT

    {
        category: "Government",

        question:
            "The Parliament of India consists of which two Houses?",

        options: [
            "Lok Sabha and Vidhan Sabha",
            "Lok Sabha and Rajya Sabha",
            "Rajya Sabha and Supreme Court",
            "Lok Sabha and High Court"
        ],

        answer: 1
    },

    {
        category: "Government",

        question:
            "Which institution is the highest court of India?",

        options: [
            "High Court",
            "District Court",
            "Supreme Court",
            "Lok Sabha"
        ],

        answer: 2
    },


    // KNOW INDIA

    {
        category: "Know India",

        question:
            "What is the capital of Uttar Pradesh?",

        options: [
            "Agra",
            "Kanpur",
            "Lucknow",
            "Varanasi"
        ],

        answer: 2
    },

    {
        category: "Know India",

        question:
            "What is the capital of Rajasthan?",

        options: [
            "Jodhpur",
            "Jaipur",
            "Udaipur",
            "Kota"
        ],

        answer: 1
    },


    // SOCIAL ISSUES

    {
        category: "Social Issues",

        question:
            "Which action supports digital awareness?",

        options: [
            "Sharing every message immediately",
            "Ignoring the source",
            "Verifying information before sharing",
            "Using unknown websites"
        ],

        answer: 2
    },


    // SCHEMES

    {
        category: "Government Schemes",

        question:
            "Before applying for a government scheme, what should a user do?",

        options: [
            "Trust any social media post",
            "Verify information from an official source",
            "Share personal information everywhere",
            "Ignore eligibility requirements"
        ],

        answer: 1
    }

];


// ===============================
// VARIABLES
// ===============================

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let topicScores = {};

let quizStarted = false;


// ===============================
// INITIALIZE TOPIC SCORES
// ===============================

function initializeTopicScores() {

    topicScores = {};

    questions.forEach(function(question) {

        if (!topicScores[question.category]) {

            topicScores[question.category] = {
                correct: 0,
                total: 0
            };

        }

        topicScores[question.category].total++;

    });

}


// ===============================
// START QUIZ
// ===============================

function startQuiz() {

    quizStarted = true;

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    initializeTopicScores();

    document.getElementById("quizIntro").style.display = "none";

    document.getElementById("quizSection").style.display = "block";

    document.getElementById("resultSection").style.display = "none";

    loadQuestion();

    window.scrollTo({
        top: document.getElementById("quizSection").offsetTop,
        behavior: "smooth"
    });
}


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

    const question = questions[currentQuestion];

    selectedAnswer = null;

    document.getElementById("questionNumber").innerText =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("category").innerText =
        question.category;

    document.getElementById("question").innerText =
        question.question;

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    question.options.forEach(function(option, index) {

        const button =
            document.createElement("button");

        button.className = "option";

        button.innerText = option;

        button.onclick = function() {

            selectOption(index, button);

        };

        optionsContainer.appendChild(button);

    });

    document.getElementById("nextBtn").disabled = true;

}


// ===============================
// SELECT OPTION
// ===============================

function selectOption(index, button) {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    const question = questions[currentQuestion];

    const allOptions =
        document.querySelectorAll(".option");

    allOptions.forEach(function(option) {

        option.disabled = true;

    });


    // CORRECT

    if (index === question.answer) {

        button.classList.add("correct");

        score++;

        topicScores[question.category].correct++;

    }

    // WRONG

    else {

        button.classList.add("wrong");

        allOptions[question.answer]
            .classList.add("correct");

    }


    document.getElementById("nextBtn").disabled = false;

}


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    }

    else {

        showResult();

    }

}


// ===============================
// SHOW RESULT
// ===============================

function showResult() {

    document.getElementById("quizSection").style.display = "none";

    document.getElementById("resultSection").style.display = "block";

    document.getElementById("score").innerText =
        `${score}/${questions.length}`;


    let percentage =
        (score / questions.length) * 100;


    let message = "";

    if (percentage >= 80) {

        message =
            "Excellent! You have a strong understanding of the topics.";

    }

    else if (percentage >= 60) {

        message =
            "Good job! A little more revision can improve your score.";

    }

    else {

        message =
            "Keep learning! Revising the weak topics can help you improve.";

    }


    document.getElementById("resultMessage").innerText =
        message;


    showTopicAnalysis();

    findWeakTopic();

    window.scrollTo({
        top: document.getElementById("resultSection").offsetTop,
        behavior: "smooth"
    });

}


// ===============================
// TOPIC ANALYSIS
// ===============================

function showTopicAnalysis() {

    const container =
        document.getElementById("topicAnalysis");

    container.innerHTML = "";


    for (let topic in topicScores) {

        const data = topicScores[topic];

        const percentage =
            (data.correct / data.total) * 100;


        const card =
            document.createElement("div");

        card.className = "analysis-card";

        card.innerHTML = `

            <h3>${topic}</h3>

            <p>
                ${data.correct}/${data.total} correct
            </p>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${percentage}%">
                </div>

            </div>

            <p>
                ${percentage}%
            </p>

        `;

        container.appendChild(card);

    }

}


// ===============================
// FIND WEAK TOPIC
// ===============================

function findWeakTopic() {

    let weakTopic = null;

    let lowestPercentage = 101;


    for (let topic in topicScores) {

        const data = topicScores[topic];

        const percentage =
            (data.correct / data.total) * 100;


        if (percentage < lowestPercentage) {

            lowestPercentage = percentage;

            weakTopic = topic;

        }

    }


    document.getElementById("weakTopic").innerText =
        weakTopic;


    let recommendation = "";


    if (weakTopic === "Constitution") {

        recommendation =
            "Revise the Constitution module, especially its basic features and Fundamental Rights.";

    }

    else if (weakTopic === "Rights & Duties") {

        recommendation =
            "Revise Fundamental Rights and Fundamental Duties with their daily-life examples.";

    }

    else if (weakTopic === "Government") {

        recommendation =
            "Revise the three levels of government and important institutions.";

    }

    else if (weakTopic === "Know India") {

        recommendation =
            "Explore the Know Your India module and revise states, capitals and important facts.";

    }

    else if (weakTopic === "Social Issues") {

        recommendation =
            "Explore Social Issues and focus on awareness, verification and responsible behaviour.";

    }

    else if (weakTopic === "Government Schemes") {

        recommendation =
            "Explore Government Schemes and remember to verify scheme information through official sources.";

    }


    document.getElementById("recommendation").innerText =
        recommendation;

}


// ===============================
// GO TO LEARNING
// ===============================

function goToLearning() {

    const weakTopic =
        document.getElementById("weakTopic").innerText;


    if (weakTopic === "Constitution") {

        window.location.href =
            "constitution.html";

    }

    else if (weakTopic === "Rights & Duties") {

        window.location.href =
            "rights.html";

    }

    else if (weakTopic === "Government") {

        window.location.href =
            "government.html";

    }

    else if (weakTopic === "Know India") {

        window.location.href =
            "india.html";

    }

    else if (weakTopic === "Social Issues") {

        window.location.href =
            "social-issues.html";

    }

    else if (weakTopic === "Government Schemes") {

        window.location.href =
            "schemes.html";

    }

}


// ===============================
// RESTART QUIZ
// ===============================

function restartQuiz() {

    startQuiz();

}


// ===============================
// HOME
// ===============================

function goHome() {

    window.location.href =
        "../index.html";

}