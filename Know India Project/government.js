// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}


// ===============================
// SCROLL TO SECTION
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
// GOVERNMENT INFORMATION
// ===============================

const governmentData = {

    president: {
        title: "🇮🇳 President of India",
        text:
        "The President is the constitutional head of the Union. " +
        "The Constitution provides the President with constitutional " +
        "powers and responsibilities."
    },

    pm: {
        title: "🏛️ Prime Minister",
        text:
        "The Prime Minister heads the Council of Ministers " +
        "and plays a central role in the functioning of the Union Government."
    },

    parliament: {
        title: "🏛️ Parliament",
        text:
        "Parliament is the Union legislature of India. " +
        "It consists of the President and two Houses: Lok Sabha and Rajya Sabha."
    },

    supreme: {
        title: "⚖️ Supreme Court",
        text:
        "The Supreme Court is the highest court in India. " +
        "It is the apex judicial institution of the country."
    },

    state: {
        title: "🏢 State Government",
        text:
        "State Governments function at the state level. " +
        "They deal with matters assigned to states under the Constitution."
    },

    local: {
        title: "🏘️ Local Government",
        text:
        "Local government works closer to citizens. " +
        "Examples include Panchayats in rural areas and Municipalities " +
        "in urban areas."
    }

};


// ===============================
// SHOW INFORMATION
// ===============================

function showInfo(type) {

    const box = document.getElementById("informationBox");

    const data = governmentData[type];

    if (!data) {
        return;
    }

    box.innerHTML = `
        <h2>${data.title}</h2>

        <p>${data.text}</p>

        <br>

        <strong>💡 Remember:</strong>
        <p>
            This page provides basic awareness information.
            For detailed information, users should refer to
            official government sources.
        </p>
    `;

    box.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// ===============================
// QUICK CHECK
// ===============================

function checkAnswer(button, answer) {

    const result = document.getElementById("quizResult");

    if (answer === "correct") {

        result.innerHTML =
            "✅ Correct! Parliament is the Union legislature of India.";

        result.style.color = "green";

    } else {

        result.innerHTML =
            "❌ Not correct. Try again!";

        result.style.color = "red";
    }
}


// ===============================
// SOURCE MESSAGE
// ===============================

function showSourceMessage() {

    const message = document.getElementById("sourceMessage");

    message.innerHTML =
        "📌 In the final version, this section can link " +
        "users to relevant official government websites " +
        "for verified information.";
}