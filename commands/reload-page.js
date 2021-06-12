class CommandReloadPage extends BaseCommand {
    runAction() {
        window.location.reload();
        return "Обновляю страницу";
    }

    getSpeechController() {
        return ReloadPageStt;
    }
}