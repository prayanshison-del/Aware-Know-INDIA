// ==========================================
// KNOW INDIA - PROGRESS TRACKING
// ==========================================


// ==========================================
// DEFAULT PROGRESS DATA
// ==========================================

const defaultProgress = {

    quizAttempts: 0,

    scores: [],

    bestScore: 0,

    latestScore: 0,

    weakTopic: "",

    lastAttempt: "",

    completedModules: []

};


// ==========================================
// MODULE DATA
// ==========================================

const modules = [

    {
        id: "constitution",
        name: "Constitution",
        page: "constitution.html"
    },

    {
        id: "rights",
        name: "Rights & Duties",
        page: "rights.html"
    },

    {
        id: "government",
        name: "Government",
        page: "government.html"
    },

    {
        id: "india",
        name: "Know Your India",
        page: "india.html"
    },

    {
        id: "social",
        name: "Social Issues",
        page: "social-issues.html"
    },

    {
        id: "schemes",
        name: "Government Schemes",
        page: "schemes.html"
    }

];


// ==========================================
// GET PROGRESS
// ==========================================

function getProgress() {

    const saved =
        localStorage.getItem("knowIndiaProgress");


    if (!saved) {

        return {
            ...defaultProgress
        };

    }


    try {

        const data =
            JSON.parse(saved);


        return {
            ...defaultProgress,
            ...data
        };

    }

    catch (error) {

        console.log(
            "Progress data could not be loaded."
        );


        return {
            ...defaultProgress
        };

    }

}


// ==========================================
// SAVE PROGRESS
// ==========================================

function saveProgress(data) {

    localStorage.setItem(
        "knowIndiaProgress",
        JSON.stringify(data)
    );

}


// ==========================================
// DISPLAY OVERVIEW
// ==========================================

function displayOverview() {

    const progress =
        getProgress();


    // Attempts

    document.getElementById(
        "attempts"
    ).innerText =
        progress.quizAttempts;


    // Best score

    document.getElementById(
        "bestScore"
    ).innerText =
        progress.bestScore + "%";


    // Average score

    let average = 0;


    if (progress.scores.length > 0) {

        const total =
            progress.scores.reduce(
                (sum, score) => sum + score,
                0
            );


        average =
            Math.round(
                total / progress.scores.length
            );

    }


    document.getElementById(
        "averageScore"
    ).innerText =
        average + "%";


    // Modules

    document.getElementById(
        "modulesCompleted"
    ).innerText =
        `${progress.completedModules.length}/${modules.length}`;


    // Latest score

    document.getElementById(
        "latestScore"
    ).innerText =
        progress.latestScore + "%";


    // Weak topic

    document.getElementById(
        "weakTopic"
    ).innerText =
        progress.weakTopic || "Not available";


    // Last attempt

    document.getElementById(
        "lastAttempt"
    ).innerText =
        progress.lastAttempt || "No attempt yet";

}


// ==========================================
// CALCULATE OVERALL PROGRESS
// ==========================================

function calculateProgress() {

    const progress =
        getProgress();


    /*
        Module completion = 70%
        Quiz performance = 30%

        This is a simple prototype formula.
    */


    const moduleProgress =
        (
            progress.completedModules.length /
            modules.length
        ) * 70;


    let quizProgress = 0;


    if (progress.quizAttempts > 0) {

        quizProgress =
            (progress.bestScore / 100) * 30;

    }


    let totalProgress =
        Math.round(
            moduleProgress + quizProgress
        );


    if (totalProgress > 100) {

        totalProgress = 100;

    }


    return totalProgress;

}


// ==========================================
// DISPLAY OVERALL PROGRESS
// ==========================================

function displayOverallProgress() {

    const percentage =
        calculateProgress();


    document.getElementById(
        "progressPercentage"
    ).innerText =
        percentage + "%";


    const circle =
        document.querySelector(
            ".progress-circle"
        );


    const degree =
        percentage * 3.6;


    circle.style.background =
        `conic-gradient(
            #e87500 ${degree}deg,
            #ddd ${degree}deg
        )`;


    const message =
        document.getElementById(
            "progressMessage"
        );


    if (percentage === 0) {

        message.innerText =
            "Start exploring Know India modules to build your progress.";

    }

    else if (percentage < 40) {

        message.innerText =
            "Good start! Explore more modules and take the Smart Quiz.";

    }

    else if (percentage < 70) {

        message.innerText =
            "You are making progress! Keep learning and testing yourself.";

    }

    else if (percentage < 100) {

        message.innerText =
            "Great progress! Complete the remaining modules to reach 100%.";

    }

    else {

        message.innerText =
            "Excellent! You have completed your current learning journey.";

    }

}


// ==========================================
// DISPLAY MODULES
// ==========================================

function displayModules() {

    const container =
        document.getElementById(
            "moduleProgress"
        );


    container.innerHTML = "";


    const progress =
        getProgress();


    modules.forEach(function(module) {

        const completed =
            progress.completedModules.includes(
                module.id
            );


        const card =
            document.createElement("div");


        card.className =
            "module-card";


        const statusClass =
            completed
                ? "completed"
                : "not-completed";


        const statusText =
            completed
                ? "Completed"
                : "Not Completed";


        const percentage =
            completed ? 100 : 0;


        card.innerHTML = `

            <div class="module-top">

                <span class="module-name">
                    ${module.name}
                </span>

                <span class="status ${statusClass}">
                    ${statusText}
                </span>

            </div>


            <div class="module-bar">

                <div
                    class="module-fill"
                    style="width:${percentage}%">

                </div>

            </div>


            <div class="module-bottom">

                <span>
                    ${percentage}% Complete
                </span>

            </div>


            <a
                href="${module.page}"
                class="module-btn">

                ${
                    completed
                    ? "Review Module"
                    : "Open Module"
                }

            </a>

        `;


        container.appendChild(card);

    });

}


// ==========================================
// RECOMMENDATION
// ==========================================

function displayRecommendation() {

    const progress =
        getProgress();


    const title =
        document.getElementById(
            "recommendationTitle"
        );


    const text =
        document.getElementById(
            "recommendationText"
        );


    const button =
        document.getElementById(
            "recommendationButton"
        );


    // No quiz yet

    if (progress.quizAttempts === 0) {

        title.innerText =
            "Take the Smart Quiz";


        text.innerText =
            "Complete the Smart Quiz to identify your weak topic and receive a learning recommendation.";


        button.innerText =
            "🧠 Take Smart Quiz";


        button.href =
            "quiz.html";


        return;

    }


    // Weak topic exists

    if (progress.weakTopic) {

        title.innerText =
            "Revise: " + progress.weakTopic;


        text.innerText =
            "Your quiz performance shows that this topic can be revised for better understanding.";


        button.innerText =
            "📚 Revise Topic";


        button.href =
            getTopicPage(
                progress.weakTopic
            );


        return;

    }


    title.innerText =
        "Continue Learning";


    text.innerText =
        "Explore more modules and take another quiz.";


    button.innerText =
        "🧠 Take Smart Quiz";


    button.href =
        "quiz.html";

}


// ==========================================
// TOPIC PAGE
// ==========================================

function getTopicPage(topic) {

    const pages = {

        "Constitution":
            "constitution.html",

        "Rights & Duties":
            "rights.html",

        "Government":
            "government.html",

        "Know India":
            "india.html",

        "Social Issues":
            "social-issues.html",

        "Government Schemes":
            "schemes.html"

    };


    return pages[topic] || "quiz.html";

}


// ==========================================
// MARK MODULE COMPLETE
// ==========================================

function markModuleComplete(moduleId) {

    const progress =
        getProgress();


    if (
        !progress.completedModules.includes(
            moduleId
        )
    ) {

        progress.completedModules.push(
            moduleId
        );

    }


    saveProgress(progress);

}


// ==========================================
// RESET PROGRESS
// ==========================================

function resetProgress() {

    const confirmReset =
        confirm(
            "Are you sure you want to reset your Know India progress?"
        );


    if (!confirmReset) {

        return;

    }


    localStorage.removeItem(
        "knowIndiaProgress"
    );


    alert(
        "Your progress has been reset."
    );


    location.reload();

}


// ==========================================
// BUTTONS
// ==========================================

function goToQuiz() {

    window.location.href =
        "quiz.html";

}


function goHome() {

    window.location.href =
        "../index.html";

}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayOverview();

        displayOverallProgress();

        displayModules();

        displayRecommendation();

    }
);