// ==========================================
// KNOW INDIA - SMART SEARCH
// ==========================================


const searchData = [

    {
        title: "Indian Constitution",
        category: "Constitution",

        description:
            "Learn about the Constitution of India, its basic framework, importance and key features.",

        keywords:
            "constitution india preamble fundamental constitution",

        page:
            "constitution.html",

        button:
            "Learn Constitution"
    },


    {
        title: "Fundamental Rights",
        category: "Rights & Duties",

        description:
            "Learn about the Fundamental Rights and understand their basic role in the Constitution.",

        keywords:
            "rights fundamental rights equality freedom religion remedies",

        page:
            "rights.html",

        button:
            "Explore Rights"
    },


    {
        title: "Fundamental Duties",
        category: "Rights & Duties",

        description:
            "Learn about Fundamental Duties and responsible citizenship.",

        keywords:
            "duties fundamental duties citizen responsibility",

        page:
            "rights.html",

        button:
            "Learn Duties"
    },


    {
        title: "Indian Government",
        category: "Government",

        description:
            "Understand the Union, State and Local levels of government.",

        keywords:
            "government union state local parliament president prime minister",

        page:
            "government.html",

        button:
            "Explore Government"
    },


    {
        title: "Parliament of India",
        category: "Government",

        description:
            "Learn the basic structure of Parliament and its two Houses.",

        keywords:
            "parliament lok sabha rajya sabha government",

        page:
            "government.html",

        button:
            "Learn Government"
    },


    {
        title: "Uttar Pradesh",
        category: "Know India",

        description:
            "Explore basic information about Uttar Pradesh, including its capital and related facts.",

        keywords:
            "uttar pradesh up lucknow state india",

        page:
            "india.html",

        button:
            "Explore India"
    },


    {
        title: "Rajasthan",
        category: "Know India",

        description:
            "Explore basic information about Rajasthan and other India-related facts.",

        keywords:
            "rajasthan jaipur state india",

        page:
            "india.html",

        button:
            "Explore India"
    },


    {
        title: "Women Empowerment",
        category: "Social Issues",

        description:
            "Learn about awareness related to equal opportunities, education, skills and dignity.",

        keywords:
            "women empowerment education equality social issue",

        page:
            "social-issues.html",

        button:
            "Explore Social Issues"
    },


    {
        title: "Digital Awareness",
        category: "Social Issues",

        description:
            "Learn about verifying online information, suspicious links and responsible digital behaviour.",

        keywords:
            "digital cyber awareness online safety verify information",

        page:
            "social-issues.html",

        button:
            "Learn Digital Awareness"
    },


    {
        title: "Government Schemes",
        category: "Government Schemes",

        description:
            "Explore selected government schemes and learn why official-source verification is important.",

        keywords:
            "government schemes education women farmer health skill",

        page:
            "schemes.html",

        button:
            "Explore Schemes"
    },


    {
        title: "Smart Quiz",
        category: "Smart Learning",

        description:
            "Take the Smart Quiz, check your score and identify your weak topic.",

        keywords:
            "quiz smart quiz test score weak topic learning",

        page:
            "quiz.html",

        button:
            "Start Quiz"
    },


    {
        title: "My Problem",
        category: "Smart Guidance",

        description:
            "Select a problem category and get simple awareness-based guidance.",

        keywords:
            "problem guidance help rights government schemes cyber",

        page:
            "my-problem.html",

        button:
            "Get Guidance"
    }

];


// ==========================================
// SEARCH FUNCTION
// ==========================================

function searchContent() {

    const input =
        document.getElementById("searchInput");

    const query =
        input.value.trim().toLowerCase();


    if (query === "") {

        document.getElementById("resultCount").innerText =
            "Search something to see results.";

        document.getElementById("resultsContainer").innerHTML =
            "";

        return;
    }


    const results =
        searchData.filter(function(item) {

            const searchableText =
                (
                    item.title +
                    " " +
                    item.category +
                    " " +
                    item.description +
                    " " +
                    item.keywords
                ).toLowerCase();

            return searchableText.includes(query);

        });


    displayResults(results, query);
}


// ==========================================
// DISPLAY RESULTS
// ==========================================

function displayResults(results, query) {

    const container =
        document.getElementById("resultsContainer");


    container.innerHTML = "";


    document.getElementById("resultCount").innerText =
        `${results.length} result(s) found for "${query}"`;


    if (results.length === 0) {

        container.innerHTML = `

            <div class="no-result">

                <div class="icon">
                    🔍
                </div>

                <h3>
                    No results found
                </h3>

                <p>
                    Try another keyword such as
                    "Rights", "Government",
                    "Schemes" or "India".
                </p>

            </div>

        `;

        return;
    }


    results.forEach(function(item) {

        const card =
            document.createElement("div");

        card.className = "result-card";


        card.innerHTML = `

            <span class="result-category">
                ${item.category}
            </span>

            <h3>
                ${item.title}
            </h3>

            <p>
                ${item.description}
            </p>

            <a
                href="${item.page}"
                class="result-btn">

                ${item.button}

            </a>

        `;


        container.appendChild(card);

    });

}


// ==========================================
// QUICK SEARCH
// ==========================================

function quickSearch(keyword) {

    const input =
        document.getElementById("searchInput");

    input.value = keyword;

    searchContent();

    window.scrollTo({
        top:
            document.querySelector(".results-section").offsetTop,
        behavior: "smooth"
    });

}