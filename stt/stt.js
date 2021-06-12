let registeredRecognition = [];
let recognitionIsStart = false;
let recognition;

function registerRecognition(callback) {
    if (callback && typeof callback === "function") {
        registeredRecognition.push(callback);
    }

    recognitionStart();
}

function recognitionStart() {
    if (recognitionIsStart) {
        return;
    }

    recognitionIsStart = true;

    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = "ru-RU";

    recognition.onresult = (event) => {
        console.info("Result: " + event.results.item(0).item(0).transcript);
        registeredRecognition.forEach(callback => {
            callback(event.results.item(0).item(0).transcript);
        })
    };

    recognition.onend = () => {
        if (recognitionIsStart) {
            recognition.start();
        }
    };

    recognition.start();
}

function recognitionStop() {
    if (recognition) {
        recognitionIsStart = false;
        recognition.stop();
    }
}