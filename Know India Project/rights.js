/* ================= MENU ================= */

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    nav.classList.toggle("show");

}


/* ================= SCROLL ================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ================= RIGHTS DATA ================= */

const rights = {

    equality: {

        title: "⚖️ Right to Equality",

        explanation:
            "This category of Fundamental Rights deals with equality before law and equal treatment under the constitutional framework.",

        example:
            "People should be treated equally before the law."

    },


    freedom: {

        title: "🕊️ Right to Freedom",

        explanation:
            "This category includes important constitutional freedoms, subject to the limitations provided by the Constitution and law.",

        example:
            "Citizens can exercise constitutionally protected freedoms subject to applicable legal restrictions."

    },


    exploitation: {

        title: "🛡️ Right against Exploitation",

        explanation:
            "This category provides constitutional protection against certain forms of exploitation.",

        example:
            "The Constitution provides protection against trafficking and forced labour."

    },


    religion: {

        title: "🛕 Freedom of Religion",

        explanation:
            "This category deals with freedom of conscience and matters relating to religion within the constitutional framework.",

        example:
            "People can follow their faith subject to constitutional provisions."

    },


    cultural: {

        title: "📚 Cultural & Educational Rights",

        explanation:
            "These rights provide constitutional protection relating to cultural and educational interests, including those of minorities.",

        example:
            "Certain cultural and educational interests of minorities receive constitutional protection."

    },


    remedies: {

        title: "⚖️ Constitutional Remedies",

        explanation:
            "This provides a constitutional mechanism for seeking enforcement of Fundamental Rights.",

        example:
            "A person can approach the appropriate constitutional court for enforcement of Fundamental Rights."

    }

};


/* ================= SHOW RIGHT ================= */

function showRight(type) {

    const data = rights[type];

    const box = document.getElementById("rightInfo");

    if (!data) {
        return;
    }

    box.innerHTML = `

        <div class="right-detail">

            <h3>
                ${data.title}
            </h3>

            <p>
                <strong>
                    Simple Explanation:
                </strong>
                ${data.explanation}
            </p>

            <p>
                <strong>
                    💡 Daily-life Example:
                </strong>
                ${data.example}
            </p>

        </div>

    `;

    box.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* ================= QUIZ ================= */

const questions = [

    {
        question:
            "Which of the following is a Fundamental Right?",

        options: [
            "A. Right to Equality",
            "B. Right to Tax",
            "C. Right to Government Job",
            "D. Right to Free Travel"
        ],

        answer: "A"
    },


    {
        question:
            "Which category deals with equality before law?",

        options: [
            "A. Right to Equality",
            "B. Right against Exploitation",
            "C. Cultural Rights",
            "D. Constitutional Remedies"
        ],

        answer: "A"
    },


    {
        question:
            "Which Fundamental Right relates to freedom of conscience and religion?",

        options: [
            "A. Right to Equality",
            "B. Freedom of Religion",
            "C. Right against Exploitation",
            "D. Cultural Rights"
        ],

        answer: "B"
    },


    {
        question:
            "Which is related to enforcement of Fundamental Rights?",

        options: [
            "A. Constitutional Remedies",
            "B. Right to Tax",
            "C. Right to Travel",
            "D. Right to Government Job"
        ],

        answer: "A"
    }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


/* ================= CHECK ANSWER ================= */

function checkAnswer(selected) {

    if (answered) {
        return;
    }

    answered = true;

    const question =
        questions[currentQuestion];

    const result =
        document.getElementById("quizResult");


    if (selected === question.answer) {

        score++;

        result.textContent =
            "✅ Correct Answer!";

        result.className =
            "correct";

    } else {

        result.textContent =
            "❌ Incorrect. Correct answer: "
            + question.answer;

        result.className =
            "wrong";

    }

}


/* ================= NEXT QUESTION ================= */

function nextQuestion() {

    currentQuestion++;

    answered = false;


    if (currentQuestion >= questions.length) {

        showFinalScore();

        return;

    }


    const question =
        questions[currentQuestion];


    document.getElementById("questionNumber")
        .textContent =
        "Question " + (currentQuestion + 1);


    document.getElementById("question")
        .textContent =
        question.question;


    const buttons =
        document.querySelectorAll(".options button");


    buttons.forEach(
        (button, index) => {

            button.textContent =
                question.options[index];

        }
    );


    const result =
        document.getElementById("quizResult");

    result.textContent = "";

    result.className = "";

}


/* ================= FINAL SCORE ================= */

function showFinalScore() {

    const quiz =
        document.querySelector(".quiz-card");


    quiz.innerHTML = `

        <div style="text-align:center;">

            <div style="font-size:60px;">
                🏆
            </div>

            <h2>
                Quiz Completed!
            </h2>

            <p>
                Your Score
            </p>

            <h1 style="color:#ea580c;">
                ${score} / ${questions.length}
            </h1>

            <p>
                Keep learning and improve
                your civic awareness.
            </p>

            <button
                class="next-btn"
                onclick="location.reload()">

                Try Again

            </button>

        </div>

    `;

}