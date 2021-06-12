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
        let speechResults = [];

        registeredRecognition.forEach(callback => {
            let result = callback(event.results.item(0).item(0).transcript);

            if (result) {
                speechResults.push(result);
            }
        });

        speechArray(speechResults);
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

async function speechArray(speechArray) {
    for (let text of speechArray) {
        let speechObject = new SpeechSynthesisUtterance();
        speechObject.text = text;
        speechObject.lang = "ru";
        // speechObject.voice = window.speechSynthesis.getVoices()[0];
        await speech(speechObject);
    }
}

async function speech(speechObject) {
    return new Promise(resolve => {
        speechObject.onend = () => {
            resolve();
        };

        window.speechSynthesis.speak(speechObject);
    });
}