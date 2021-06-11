let registeredRecognition = [];
let recognitionIsStart = false;

function registerRecognition(callback) {
    if (callback && typeof callback === "function") {
        registeredRecognition.push(callback);
    }

    if (!recognitionIsStart) {
        recognitionStart();
    }

    recognitionIsStart = true;
}

function recognitionStart() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

    recognition.lang = "ru-RU";

    recognition.onresult = (event) => {
        registeredRecognition.forEach(callback => {
            console.log("Result: " + event.results.item(0).item(0).transcript); // TODO remove
            callback(event.results.item(0).item(0).transcript);
        })
    };

    recognition.onend = () => {
        recognition.start();
    };

    recognition.start();
}