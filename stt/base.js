class BaseStt {
    constructor(callback) {
        this.callback = callback;
        this.registerSelf();
    }

    processEvent(text) {
        for (let word of this.getWords()) {
            if (word.toLowerCase() === text.toLowerCase()) {
                this.runCallback();
            }
        }
    }

    getWords() {
        return [];
    }

    runCallback() {
        if (this.callback && typeof this.callback === "function") {
            this.callback();
        }
    }

    registerSelf() {
        registerRecognition(this.processEvent.bind(this));
    }
}