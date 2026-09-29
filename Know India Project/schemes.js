// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const menu =
        document.getElementById("menu");

    menu.classList.toggle("active");
}


// ===============================
// SCROLL
// ===============================

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}


// ===============================
// SCHEME DATA
// ===============================

const schemes = [

    {
        name: "PM POSHAN",
        category: "education",
        icon: "🎓",

        description:
        "A school education-related programme focused on improving nutrition among eligible school children.",

        purpose:
        "To support nutritional outcomes and encourage regular attendance in eligible schools.",

        source:
        "Verify current details through the official PM POSHAN / Government of India source."
    },


    {
        name: "Beti Bachao Beti Padhao",
        category: "women",
        icon: "👩",

        description:
        "An initiative focused on improving awareness and outcomes related to the value, education and empowerment of the girl child.",

        purpose:
        "To address social attitudes and encourage the education and empowerment of girls.",

        source:
        "Verify current information through the relevant official Government of India source."
    },


    {
        name: "Pradhan Mantri Fasal Bima Yojana",
        category: "farmer",
        icon: "🌾",

        description:
        "A crop insurance scheme for eligible farmers.",

        purpose:
        "To provide crop insurance coverage against specified crop-related risks, subject to scheme rules.",

        source:
        "Verify current eligibility and application information through the official agriculture/government source."
    },


    {
        name: "Ayushman Bharat",
        category: "health",
        icon: "🏥",

        description:
        "A Government of India health initiative with components including health coverage and health-care infrastructure.",

        purpose:
        "To support access to healthcare through its relevant components and programmes.",

        source:
        "Verify current eligibility and benefits through the official health-government source."
    },


    {
        name: "Skill India",
        category: "skill",
        icon: "💼",

        description:
        "A national initiative associated with skill development and training opportunities.",

        purpose:
        "To support skill development and improve access to training opportunities.",

        source:
        "Verify current programmes and eligibility through the official Skill India source."
    },


    {
        name: "PM Vishwakarma",
        category: "skill",
        icon: "🛠️",

        description:
        "A government scheme focused on supporting eligible traditional artisans and craftspeople.",

        purpose:
        "To provide support such as training and other scheme benefits to eligible beneficiaries, subject to applicable rules.",

        source:
        "Verify current eligibility, benefits and application procedure through the official PM Vishwakarma source."
    }

];


// ===============================
// DISPLAY SCHEMES
// ===============================

function displaySchemes(data) {

    const grid =
        document.getElementById("schemeGrid");

    const noResult =
        document.getElementById("noResult");


    grid.innerHTML = "";


    if (data.length === 0) {

        noResult.innerText =
            "No scheme found. Try another search.";

        return;

    }


    noResult.innerText = "";


    data.forEach((scheme, index) => {

        const card =
            document.createElement("div");

        card.className = "scheme-card";


        card.innerHTML = `

            <div class="scheme-icon">
                ${scheme.icon}
            </div>

            <span class="category">
                ${getCategoryName(scheme.category)}
            </span>

            <h3>
                ${scheme.name}
            </h3>

            <p>
                ${scheme.description}
            </p>

            <button
                onclick="showSchemeDetails(${index})">

                View Details

            </button>

        `;


        grid.appendChild(card);

    });

}


// ===============================
// CATEGORY NAME
// ===============================

function getCategoryName(category) {

    const names = {

        education: "Education",

        women: "Women",

        farmer: "Farmer",

        health: "Health",

        skill: "Skill"

    };


    return names[category] || category;

}


// ===============================
// FILTER
// ===============================

function filterSchemes(category) {

    if (category === "all") {

        displaySchemes(schemes);

        return;

    }


    const filtered =
        schemes.filter(
            scheme =>
            scheme.category === category
        );


    displaySchemes(filtered);

}


// ===============================
// SEARCH
// ===============================

function searchSchemes() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();


    if (input === "") {

        displaySchemes(schemes);

        return;

    }


    const filtered =
        schemes.filter(scheme =>

            scheme.name
                .toLowerCase()
                .includes(input)

            ||

            scheme.description
                .toLowerCase()
                .includes(input)

            ||

            scheme.category
                .toLowerCase()
                .includes(input)

        );


    displaySchemes(filtered);

}


// ===============================
// SHOW DETAILS
// ===============================

function showSchemeDetails(index) {

    const scheme =
        schemes[index];


    const box =
        document.getElementById("detailsBox");


    box.innerHTML = `

        <h2>
            ${scheme.icon} ${scheme.name}
        </h2>

        <p>
            ${scheme.description}
        </p>

        <h3>
            🎯 Purpose
        </h3>

        <p>
            ${scheme.purpose}
        </p>

        <h3>
            🔎 Source Guidance
        </h3>

        <p>
            ${scheme.source}
        </p>

        <br>

        <p>
            <strong>⚠️ Important:</strong>
            Always verify the latest eligibility,
            benefits, documents and application process
            from the official source.
        </p>

    `;


    box.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


// ===============================
// QUIZ DATA
// ===============================

const questions = [

    {
        question:
        "What should a user do before applying for a government scheme?",

        options: [

            "Trust any message on social media",

            "Verify the latest information through an official source",

            "Share personal information with anyone",

            "Ignore eligibility requirements"

        ],

        answer: 1
    },


    {
        question:
        "Government schemes can be designed to address:",

        options: [

            "Only entertainment",

            "Specific public needs",

            "Only sports",

            "Nothing"

        ],

        answer: 1
    },


    {
        question:
        "Which category is associated with agriculture?",

        options: [

            "Farmer",

            "Entertainment",

            "Gaming",

            "Tourism only"

        ],

        answer: 0
    },


    {
        question:
        "Why should scheme information be verified before applying?",

        options: [

            "Details can change",

            "Verification is unnecessary",

            "Any website is always official",

            "Eligibility never matters"

        ],

        answer: 0
    }

];


let currentQuestion = 0;

let score = 0;


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

    const question =
        questions[currentQuestion];


    document.getElementById("question").innerText =
        question.question;


    const options =
        document.getElementById("options");


    options.innerHTML = "";


    document.getElementById("quizResult").innerText =
        "";


    document.getElementById("nextBtn").style.display =
        "none";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.innerText =
                option;


            button.onclick =
                function () {

                    checkAnswer(index);

                };


            options.appendChild(button);

        }
    );

}


// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(selected) {

    const question =
        questions[currentQuestion];


    const result =
        document.getElementById("quizResult");


    const buttons =
        document.querySelectorAll(
            ".options button"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (selected === question.answer) {

        score++;

        result.innerText =
            "✅ Correct Answer!";

        result.style.color =
            "green";

    } else {

        result.innerText =
            "❌ Incorrect Answer.";

        result.style.color =
            "red";

    }


    document.getElementById("nextBtn")
        .style.display = "inline-block";

}


// ===============================
// NEXT QUESTION
// ===============================

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        loadQuestion();

    } else {

        showFinalScore();

    }

}


// ===============================
// FINAL SCORE
// ===============================

function showFinalScore() {

    document.getElementById("question")
        .innerText =
        "🎉 Awareness Check Completed!";


    document.getElementById("options")
        .innerHTML = "";


    document.getElementById("nextBtn")
        .style.display = "none";


    document.getElementById("quizResult")
        .innerText =
        `Your Score: ${score} / ${questions.length}`;

}


// ===============================
// START
// ===============================

displaySchemes(schemes);

loadQuestion();