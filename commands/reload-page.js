class CommandReloadPage extends BaseCommand {
    runAction() {
        console.log("reload"); // TODO remove
        window.location.reload();
    }

    getSpeechController() {
        return ReloadPageStt;
    }
}