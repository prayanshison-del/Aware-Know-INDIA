/* =========================================
   KNOW INDIA - HOME PAGE JAVASCRIPT
   ========================================= */


/* ---------- START LEARNING ---------- */

function startLearning() {

    const modules = document.getElementById("modules");

    if (modules) {
        modules.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* ---------- MY PROBLEM BUTTON ---------- */

function showProblem() {

    const problemSection =
        document.getElementById("problem");

    if (problemSection) {

        problemSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ---------- MOBILE MENU ---------- */

function toggleMenu() {

    const nav =
        document.querySelector(".navbar nav");

    nav.classList.toggle("show");

}


/* ---------- OPEN MODULE ---------- */

function openModule(moduleName) {

    const pages = {

        constitution:
            "pages/constitution.html",

        government:
            "pages/government.html",

        rights:
            "pages/rights.html",

        india:
            "pages/india.html",

        "social-issues":
            "pages/social-issues.html",

        schemes:
            "pages/schemes.html",

        quiz:
            "pages/quiz.html",

        "my-problem":
            "pages/my-problem.html"

    };


    if (pages[moduleName]) {

        window.location.href =
            pages[moduleName];

    } else {

        alert(
            "This module will be available soon."
        );

    }

}


/* ---------- SEARCH ---------- */

function searchTopic() {

    const input =
        document.getElementById("searchInput");

    const result =
        document.getElementById("searchResult");


    if (!input || !result) {
        return;
    }


    const query =
        input.value.trim().toLowerCase();


    if (query === "") {

        result.innerHTML = "";

        return;

    }


    /*
        Temporary search data.

        Later we will replace this
        with JSON-based search.
    */

    const searchData = [

        {
            keywords: [
                "constitution",
                "preamble"
            ],

            title:
                "📜 Indian Constitution",

            description:
                "Explore Constitution basics, Preamble, Fundamental Rights and Fundamental Duties.",

            page:
                "pages/constitution.html"
        },


        {
            keywords: [
                "fundamental rights",
                "rights"
            ],

            title:
                "⚖️ Rights & Duties",

            description:
                "Learn about Fundamental Rights and Fundamental Duties in simple language.",

            page:
                "pages/rights.html"
        },


        {
            keywords: [
                "uttar pradesh",
                "up"
            ],

            title:
                "🌍 Uttar Pradesh",

            description:
                "Explore basic information about Uttar Pradesh in Know Your India.",

            page:
                "pages/india.html"
        },


        {
            keywords: [
                "women empowerment",
                "women"
            ],

            title:
                "👩‍👧 Women Empowerment",

            description:
                "Explore the social issue section and learn about women empowerment.",

            page:
                "pages/social-issues.html"
        },


        {
            keywords: [
                "scheme",
                "government scheme",
                "schemes"
            ],

            title:
                "🏛️ Government Schemes",

            description:
                "Explore selected government schemes and their basic information.",

            page:
                "pages/schemes.html"
        },


        {
            keywords: [
                "quiz",
                "test"
            ],

            title:
                "🧠 Smart Quiz",

            description:
                "Test your knowledge with interactive awareness questions.",

            page:
                "pages/quiz.html"
        }

    ];


    const matches =
        searchData.filter(item =>

            item.keywords.some(keyword =>
                keyword.includes(query) ||
                query.includes(keyword)
            )

        );


    if (matches.length === 0) {

        result.innerHTML = `

            <div class="result-card">

                <h3>
                    No result found
                </h3>

                <p>
                    Try another keyword such as
                    Constitution, Rights, Uttar Pradesh,
                    Schemes or Quiz.
                </p>

            </div>

        `;

        return;

    }


    result.innerHTML =
        matches.map(item => `

            <div
                class="result-card"
                onclick="window.location.href='${item.page}'"
                style="cursor:pointer;"
            >

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.description}
                </p>

                <strong>
                    Explore →
                </strong>

            </div>

        `).join("");

}


/* ---------- MY PROBLEM GUIDANCE ---------- */

function selectProblem(category) {

    const result =
        document.getElementById("problemResult");


    const guidance = {

        "Education": {

            title:
                "📚 Education Awareness",

            text:
                "Explore education-related awareness information, opportunities and relevant official sources."

        },


        "Government Service": {

            title:
                "🏛️ Government Service Awareness",

            text:
                "Explore information related to government services and identify the relevant official source."

        },


        "Consumer": {

            title:
                "🛒 Consumer Awareness",

            text:
                "Learn about consumer awareness and explore relevant information and official channels."

        },


        "Digital Safety": {

            title:
                "🔐 Digital Safety Awareness",

            text:
                "Learn about common digital safety issues and find relevant awareness information and official resources."

        },


        "Women & Child": {

            title:
                "👩‍👧 Women & Child Awareness",

            text:
                "Explore awareness information related to women and child-related social issues and relevant official resources."

        },


        "Environment": {

            title:
                "🌱 Environment Awareness",

            text:
                "Explore environmental issues such as pollution, water conservation and sanitation."

        }

    };


    const selected =
        guidance[category];


    if (!selected) {
        return;
    }


    result.innerHTML = `

        <div class="guidance-card">

            <h3>
                ${selected.title}
            </h3>

            <p>
                ${selected.text}
            </p>

            <p>
                <strong>
                    Selected Category:
                </strong>
                ${category}
            </p>

            <p>
                More detailed problem-based
                guidance will be connected here.
            </p>

        </div>

    `;

}