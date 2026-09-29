// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}


// ===============================
// SCROLL
// ===============================

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ===============================
// STATE DATA
// ===============================

const states = {

    "uttar-pradesh": {
        name: "Uttar Pradesh",
        capital: "Lucknow",
        description:
        "A state in northern India with a rich historical and cultural heritage."
    },

    "rajasthan": {
        name: "Rajasthan",
        capital: "Jaipur",
        description:
        "A state known for its historical heritage, forts, palaces and desert landscape."
    },

    "maharashtra": {
        name: "Maharashtra",
        capital: "Mumbai",
        description:
        "A state in western India with major cities, historical sites and diverse cultural traditions."
    },

    "gujarat": {
        name: "Gujarat",
        capital: "Gandhinagar",
        description:
        "A western Indian state known for its cultural heritage and diverse landscapes."
    },

    "kerala": {
        name: "Kerala",
        capital: "Thiruvananthapuram",
        description:
        "A state in southern India known for its natural landscapes and cultural traditions."
    },

    "west-bengal": {
        name: "West Bengal",
        capital: "Kolkata",
        description:
        "A state in eastern India with rich literary, artistic and cultural traditions."
    },

    "tamil-nadu": {
        name: "Tamil Nadu",
        capital: "Chennai",
        description:
        "A southern Indian state known for its temples, classical traditions and cultural heritage."
    },

    "delhi": {
        name: "Delhi",
        capital: "New Delhi",
        description:
        "A Union Territory and the national capital territory of India."
    },

    "jammu-kashmir": {
        name: "Jammu & Kashmir",
        capital: "Srinagar (summer) / Jammu (winter)",
        description:
        "A Union Territory in northern India with diverse geography and cultural heritage."
    }

};


// ===============================
// SHOW STATE
// ===============================

function showState() {

    const selected =
        document.getElementById("stateSelect").value;

    const stateInfo =
        document.getElementById("stateInfo");

    if (selected === "") {

        stateInfo.innerHTML = `
            <h3>🇮🇳 Select a State</h3>

            <p>
                Choose a state or Union Territory
                from the dropdown above.
            </p>
        `;

        return;
    }

    const state = states[selected];

    stateInfo.innerHTML = `
        <h3>🇮🇳 ${state.name}</h3>

        <p>
            <strong>Capital:</strong> ${state.capital}
        </p>

        <p>
            ${state.description}
        </p>

        <br>

        <p>
            💡 Explore more about this region through
            reliable official sources.
        </p>
    `;

}


// ===============================
// QUIZ DATA
// ===============================

const quizQuestions = [

    {
        question:
        "What is the capital of Uttar Pradesh?",

        options: [
            "Lucknow",
            "Jaipur",
            "Patna",
            "Bhopal"
        ],

        answer: 0
    },

    {
        question:
        "What is the capital of Rajasthan?",

        options: [
            "Mumbai",
            "Jaipur",
            "Chennai",
            "Kolkata"
        ],

        answer: 1
    },

    {
        question:
        "What is the capital of Maharashtra?",

        options: [
            "Mumbai",
            "Gandhinagar",
            "Lucknow",
            "Kochi"
        ],

        answer: 0
    },

    {
        question:
        "What is the capital of Tamil Nadu?",

        options: [
            "Hyderabad",
            "Bengaluru",
            "Chennai",
            "Kolkata"
        ],

        answer: 2
    }

];


let currentQuestion = 0;
let score = 0;


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

    const question =
        quizQuestions[currentQuestion];

    document.getElementById("question").innerText =
        question.question;

    const optionsDiv =
        document.getElementById("options");

    optionsDiv.innerHTML = "";

    document.getElementById("quizResult").innerText = "";

    document.getElementById("nextBtn").style.display =
        "none";


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.innerText = option;

        button.onclick = function () {
            checkQuizAnswer(index);
        };

        optionsDiv.appendChild(button);

    });

}


// ===============================
// CHECK ANSWER
// ===============================

function checkQuizAnswer(selectedAnswer) {

    const question =
        quizQuestions[currentQuestion];

    const result =
        document.getElementById("quizResult");

    const buttons =
        document.querySelectorAll(".options button");


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (selectedAnswer === question.answer) {

        score++;

        result.innerText =
            "✅ Correct Answer!";

        result.style.color = "green";

    } else {

        result.innerText =
            "❌ Incorrect Answer.";

        result.style.color = "red";
    }


    document.getElementById("nextBtn").style.display =
        "inline-block";
}


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        loadQuestion();

    } else {

        showFinalScore();

    }
}


// ===============================
// FINAL SCORE
// ===============================

function showFinalScore() {

    document.getElementById("question").innerText =
        "🎉 Quiz Completed!";

    document.getElementById("options").innerHTML = "";

    document.getElementById("nextBtn").style.display =
        "none";

    document.getElementById("quizResult").innerText =
        `Your Score: ${score} / ${quizQuestions.length}`;

}


// ===============================
// START QUIZ
// ===============================

loadQuestion();