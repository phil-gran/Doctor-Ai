function voiceBotButton() {
    var voiceBot = document.getElementById("voiceBotScript");
    var drBot = document.getElementById("drBotScript");

    if (voiceBot.style.display === "none") {
        // Show voiceBotScript and hide drBotScript
        voiceBot.style.display = "block";
        drBot.style.display = "none";
    } else {
        // Show drBotScript and hide voiceBotScript
        voiceBot.style.display = "none";
        drBot.style.display = "block";
    }
}