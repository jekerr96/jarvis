class BaseStt {
    constructor(callback) {
        this.callback = callback;
        this.registerSelf();
    }

    processEvent(text) {
        for (let word of this.getWords()) {
            if (word.toLowerCase() === text.toLowerCase()) {
                return this.runCallback(text);
            }
        }

        let regExp = this.getRegExp();

        if (regExp && regExp.test(text)) {
            return this.runCallback(text);
        }
    }

    getWords() {
        return [];
    }

    getRegExp() {

    }

    runCallback(text) {
        if (this.callback && typeof this.callback === "function") {
            return this.callback(text);
        }
    }

    registerSelf() {
        registerRecognition(this.processEvent.bind(this));
    }
}