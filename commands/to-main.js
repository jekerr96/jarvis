class CommandToMain extends BaseCommand {
    runAction() {
        location.href = location.origin;

        return "Открываю";
    }

    getSpeechController() {
        return ToMainStt;
    }
}