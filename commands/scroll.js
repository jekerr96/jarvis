class CommandScroll extends BaseCommand {
    runAction() {
        console.log("ищем скрол"); // TODO remove
    }

    getSpeechController() {
        return ScrollStt;
    }
}