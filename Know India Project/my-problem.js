// ======================================
// MY PROBLEM - SMART GUIDANCE
// ======================================


// Problem Data

const problemData = {

    rights: {

        "right_violation": {

            title: "I want to understand my basic rights",

            guidance:
                "You can first learn about Fundamental Rights and their basic meaning through the Rights & Duties module.",

            points: [
                "Learn the different Fundamental Rights.",
                "Understand their basic purpose.",
                "Check reliable and official information for specific situations.",
                "For a specific legal matter, consult an appropriate qualified professional or official authority."
            ],

            module:
                "rights.html",

            moduleName:
                "Learn Rights & Duties",

            source:
                "Verify specific legal information through official government or legal sources."
        },


        "duties": {

            title: "I want to understand my Fundamental Duties",

            guidance:
                "Fundamental Duties describe important responsibilities expected from citizens.",

            points: [
                "Learn the Fundamental Duties.",
                "Understand how they relate to responsible citizenship.",
                "Connect them with everyday civic behaviour."
            ],

            module:
                "rights.html",

            moduleName:
                "Learn Rights & Duties",

            source:
                "Use the Constitution and official government sources for authoritative information."
        }

    },


    government: {

        "government_levels": {

            title: "I do not understand the levels of government",

            guidance:
                "India has different levels of government that perform different functions.",

            points: [
                "Learn about the Union Government.",
                "Learn about State Governments.",
                "Understand Local Government.",
                "Explore the Government module for a simple overview."
            ],

            module:
                "government.html",

            moduleName:
                "Explore Government",

            source:
                "For current government services and procedures, check the relevant official government department."
        },


        "government_service": {

            title: "I need information about a government service",

            guidance:
                "Government services can have different procedures and requirements depending on the service.",

            points: [
                "Identify the exact service you need.",
                "Check the responsible government department.",
                "Read the current eligibility and procedure.",
                "Use the official government channel rather than an unverified source."
            ],

            module:
                "government.html",

            moduleName:
                "Explore Government",

            source:
                "Check the relevant official government website or department for current procedures."
        }

    },


    schemes: {

        "education_scheme": {

            title: "I want to know about education schemes",

            guidance:
                "Know India provides awareness about selected government schemes. Scheme eligibility and benefits can vary.",

            points: [
                "Explore the Government Schemes module.",
                "Check the eligibility conditions.",
                "Check required documents.",
                "Verify the latest information from the official source before applying."
            ],

            module:
                "schemes.html",

            moduleName:
                "Explore Government Schemes",

            source:
                "Always verify scheme details through the relevant official government source."
        },


        "farmer_scheme": {

            title: "I want information about farmer-related schemes",

            guidance:
                "Different government schemes may support farmers for different purposes.",

            points: [
                "Identify the type of support you are looking for.",
                "Check the relevant scheme.",
                "Read current eligibility requirements.",
                "Verify the information through the official scheme source."
            ],

            module:
                "schemes.html",

            moduleName:
                "Explore Government Schemes",

            source:
                "Use the relevant official government department or scheme portal for current information."
        },


        "health_scheme": {

            title: "I want information about health-related schemes",

            guidance:
                "Health-related government initiatives can have specific eligibility and implementation rules.",

            points: [
                "Identify the relevant health programme or scheme.",
                "Check current eligibility.",
                "Check the official procedure.",
                "Verify information before applying."
            ],

            module:
                "schemes.html",

            moduleName:
                "Explore Government Schemes",

            source:
                "Check the relevant official government health source for current details."
        }

    },


    education: {

        "study_resources": {

            title: "I need reliable education information",

            guidance:
                "Use reliable educational resources and verify information before depending on it.",

            points: [
                "Prefer official educational institutions and recognised resources.",
                "Check the source and date of information.",
                "Avoid forwarding unverified educational information.",
                "Compare information when necessary."
            ],

            module:
                "social-issues.html",

            moduleName:
                "Explore Social Issues",

            source:
                "Use official education department or recognised educational institution sources."
        }

    },


    women: {

        "women_awareness": {

            title: "I want to learn about women empowerment",

            guidance:
                "Women empowerment includes access to education, skills, opportunities, dignity and participation.",

            points: [
                "Learn about equality and opportunities.",
                "Explore awareness resources.",
                "Use trusted and official information.",
                "For a specific issue, contact the appropriate official authority or qualified professional."
            ],

            module:
                "social-issues.html",

            moduleName:
                "Explore Social Issues",

            source:
                "For specific assistance, verify information through the relevant official government authority."
        }

    },


    cyber: {

        "online_safety": {

            title: "I want to stay safe online",

            guidance:
                "Digital awareness helps users identify suspicious information, links and online behaviour.",

            points: [
                "Verify suspicious information before sharing.",
                "Use strong and unique passwords.",
                "Avoid opening unknown links or attachments.",
                "Use trusted and official websites.",
                "For an actual cyber incident, use the appropriate official cybercrime reporting channel."
            ],

            module:
                "social-issues.html",

            moduleName:
                "Explore Digital Awareness",

            source:
                "For current cybercrime reporting procedures, verify the information through the official government cybercrime portal."
        }

    },


    environment: {

        "environment": {

            title: "I want to contribute to environmental awareness",

            guidance:
                "Responsible use of resources and reducing waste can support environmental awareness.",

            points: [
                "Reduce unnecessary waste.",
                "Use resources responsibly.",
                "Keep surroundings clean.",
                "Learn about sustainable practices.",
                "Verify environmental information from reliable sources."
            ],

            module:
                "social-issues.html",

            moduleName:
                "Explore Social Issues",

            source:
                "Use official environmental agencies and government sources for current information."
        }

    }

};


// ======================================
// LOAD PROBLEMS
// ======================================

function loadProblems() {

    const category =
        document.getElementById("categorySelect").value;

    const problemSelect =
        document.getElementById("problemSelect");


    // Reset

    problemSelect.innerHTML = `
        <option value="">
            -- Select Problem --
        </option>
    `;

    problemSelect.disabled = true;


    // Clear guidance

    document.getElementById("guidanceBox").innerHTML = `

        <div class="guidance-placeholder">

            <div class="big-icon">
                💡
            </div>

            <h3>
                Guidance will appear here
            </h3>

            <p>
                Select a problem to get information.
            </p>

        </div>

    `;


    if (!category) {
        return;
    }


    const problems =
        problemData[category];


    for (let key in problems) {

        const option =
            document.createElement("option");

        option.value = key;

        option.textContent =
            problems[key].title;

        problemSelect.appendChild(option);

    }


    problemSelect.disabled = false;
}


// ======================================
// SHOW GUIDANCE
// ======================================

function showGuidance() {

    const category =
        document.getElementById("categorySelect").value;

    const problem =
        document.getElementById("problemSelect").value;


    if (!category || !problem) {

        return;

    }


    const data =
        problemData[category][problem];


    const guidanceBox =
        document.getElementById("guidanceBox");


    let pointsHTML = "";


    data.points.forEach(function(point) {

        pointsHTML += `
            <li>${point}</li>
        `;

    });


    guidanceBox.innerHTML = `

        <div class="guidance-result">

            <span class="category-badge">
                ${getCategoryName(category)}
            </span>


            <h2>
                💡 ${data.title}
            </h2>


            <h3>
                Simple Guidance
            </h3>

            <p>
                ${data.guidance}
            </p>


            <h3>
                What You Can Do
            </h3>

            <ul>
                ${pointsHTML}
            </ul>


            <a
                href="${data.module}"
                class="module-btn">

                📚 ${data.moduleName}

            </a>


            <div class="source-box">

                <strong>
                    🔎 Source Guidance
                </strong>

                <p>
                    ${data.source}
                </p>

            </div>

        </div>

    `;


    // Scroll slightly to result

    setTimeout(function() {

        guidanceBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

}


// ======================================
// CATEGORY NAME
// ======================================

function getCategoryName(category) {

    const names = {

        rights:
            "Rights & Duties",

        government:
            "Government Services",

        schemes:
            "Government Schemes",

        education:
            "Education",

        women:
            "Women Awareness",

        cyber:
            "Digital / Cyber Awareness",

        environment:
            "Environment"

    };


    return names[category] || category;
}