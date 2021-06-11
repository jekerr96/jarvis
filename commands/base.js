class BaseCommand {
    constructor() {
        this.speech = new (this.getSpeechController())(this.runAction.bind(this));
    }

    runAction() {
        console.log("ищем проверку"); // TODO remove
    }

    getSpeechController() {
        return AuthStt;
    }
}