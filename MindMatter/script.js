// script.js
document.getElementById("moodForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const score = document.getElementById("moodScore").value;
    const note = document.getElementById("moodNote").value;

    const logResult = document.getElementById("logResult");
    logResult.innerHTML = `<p>Thanks for logging your mood! Score: ${score}, Note: ${note}</p>`;

    document.getElementById("moodForm").reset();
});