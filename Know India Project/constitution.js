/* =========================================
   KNOW INDIA - CONSTITUTION JAVASCRIPT
   ========================================= */


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav =
        document.querySelector(".navbar nav");

    nav.classList.toggle("show");

}


/* ================= SCROLL TO SECTION ================= */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ================= BASIC INFORMATION ================= */

function showInfo(type) {

    const infoBox =
        document.getElementById("infoBox");


    const information = {

        constitution: {

            title:
                "📖 What is a Constitution?",

            text:
                "A Constitution provides the basic framework for the governance of a country and describes the functioning of important institutions and the relationship between citizens and the State."

        },


        dates: {

            title:
                "📅 Important Constitutional Dates",

            text:
                "The Constitution was adopted by the Constituent Assembly on 26 November 1949 and came into effect on 26 January 1950."

        },


        assembly: {

            title:
                "👥 Constituent Assembly",

            text:
                "The Constituent Assembly was the body that worked on framing the Constitution of India."

        },


        importance: {

            title:
                "🏛️ Why is the Constitution Important?",

            text:
                "The Constitution provides the framework for governance, defines important institutions and establishes constitutional principles and rights."

        }

    };


    const selected =
        information[type];


    if (!selected) {
        return;
    }


    infoBox.innerHTML = `

        <div class="info-detail">

            <h3>
                ${selected.title}
            </h3>

            <p>
                ${selected.text}
            </p>

        </div>

    `;


    infoBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    updateProgress(1);

}


/* ================= FUNDAMENTAL RIGHTS ================= */

function showRight(right) {

    const rightInfo =
        document.getElementById("rightInfo");


    const rights = {

        equality: {

            title:
                "⚖️ Right to Equality",

            meaning:
                "This category of Fundamental Rights deals with equality before law and equal treatment under the constitutional framework.",

            example:
                "Example: The principle of equality means that people should be treated equally before the law."

        },


        freedom: {

            title:
                "🕊️ Right to Freedom",

            meaning:
                "This category includes important constitutional freedoms subject to the limitations provided by law and the Constitution.",

            example:
                "Example: Citizens can exercise constitutionally protected freedoms subject to applicable legal restrictions."

        },


        exploitation: {

            title:
                "🛡️ Right against Exploitation",

            meaning:
                "This category provides constitutional protection against certain forms of exploitation.",

            example:
                "Example: The Constitution provides protection against practices such as trafficking and forced labour."

        },


        religion: {

            title:
                "🛕 Right to Freedom of Religion",

            meaning:
                "This category deals with freedom of conscience and matters relating to religion within the constitutional framework.",

            example:
                "Example: People can follow their faith subject to the constitutional provisions."

        },


        cultural: {

            title:
                "📚 Cultural & Educational Rights",

            meaning:
                "These rights provide constitutional protection relating to cultural and educational interests, including those of minorities.",

            example:
                "Example: Constitutional provisions protect certain cultural and educational interests of minorities."

        },


        remedies: {

            title:
                "⚖️ Right to Constitutional Remedies",

            meaning:
                "This right provides a constitutional mechanism for seeking enforcement of Fundamental Rights.",

            example:
                "Example: A person can approach the appropriate constitutional court for enforcement of Fundamental Rights."

        }

    };


    const selected =
        rights[right];


    if (!selected) {
        return;
    }


    rightInfo.innerHTML = `

        <div class="right-detail">

            <h3>
                ${selected.title}
            </h3>

            <p>
                <strong>
                    Simple Explanation:
                </strong>
                ${selected.meaning}
            </p>

            <p>
                <strong>
                    💡 Daily-life Example:
                </strong>
                ${selected.example}
            </p>

        </div>

    `;


    rightInfo.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    updateProgress(1);

}


/* ================= MARK AS LEARNED ================= */

function markCompleted(section) {

    if (section === "preamble") {

        const button =
            document.querySelector(".learn-btn");

        button.textContent =
            "✓ Learned";

        button.disabled = true;

        button.style.opacity = "0.7";

        updateProgress(1);

    }

}


/* ================= PROGRESS ================= */

let progress = 0;


function updateProgress(points) {

    progress += points;


    /*
        Demo progress.

        Later this will be connected
        with actual completed topics.
    */

    if (progress > 10) {
        progress = 10;
    }


    const percentage =
        progress * 10;


    const progressFill =
        document.getElementById("progressFill");

    const progressText =
        document.getElementById("progressText");


    if (progressFill) {

        progressFill.style.width =
            percentage + "%";

    }


    if (progressText) {

        progressText.textContent =
            percentage + "%";

    }

}


/* ================= QUICK QUIZ ================= */

const questions = [

    {

        question:
            "Fundamental Duties are included in:",

        options: [

            "A. Part III",
            "B. Part IVA",
            "C. Part V",
            "D. Part VI"

        ],

        answer: "B"

    },


    {

        question:
            "The Constitution of India came into effect on:",

        options: [

            "A. 15 August 1947",
            "B. 26 November 1949",
            "C. 26 January 1950",
            "D. 2 October 1950"

        ],

        answer: "C"

    },


    {

        question:
            "Which is a category of Fundamental Rights?",

        options: [

            "A. Right to Equality",
            "B. Right to Property as a Fundamental Right",
            "C. Right to Tax",
            "D. Right to Government Job"

        ],

        answer: "A"

    }

];


let currentQuestion = 0;

let quizScore = 0;

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

        quizScore += 10;


        result.innerHTML =
            "✅ Correct! +10 points";

        result.className =
            "quiz-result correct";


        updateProgress(1);

    } else {

        result.innerHTML =
            "❌ Incorrect. Correct answer: "
            + question.answer;

        result.className =
            "quiz-result wrong";

    }

}


/* ================= NEXT QUESTION ================= */

function nextQuestion() {

    currentQuestion++;


    if (currentQuestion >= questions.length) {

        showFinalScore();

        return;

    }


    answered = false;


    const question =
        questions[currentQuestion];


    document.getElementById("question")
        .textContent =
        question.question;


    const buttons =
        document.querySelectorAll(
            ".options button"
        );


    buttons.forEach(
        (button, index) => {

            button.textContent =
                question.options[index];

        }
    );


    document.getElementById("quizResult")
        .innerHTML = "";

}


/* ================= FINAL SCORE ================= */

function showFinalScore() {

    const quizCard =
        document.querySelector(".quiz-card");


    quizCard.innerHTML = `

        <div style="text-align:center;">

            <div style="font-size:60px;">
                🏆
            </div>

            <h2>
                Quiz Completed!
            </h2>

            <p style="margin-top:10px;">
                Your Score
            </p>

            <h1 style="color:#ea580c;">
                ${quizScore} / 30
            </h1>

            <p style="margin-top:15px;">
                Keep learning and improve your
                Constitution awareness.
            </p>

            <button
                class="next-btn"
                onclick="location.reload()">

                Try Again

            </button>

        </div>

    `;

}