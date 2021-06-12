class CommandBack extends BaseCommand {
    runAction() {
        history.back();
    }

    getSpeechController() {
        return BackStt;
    }
}