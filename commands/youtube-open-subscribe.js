class CommandYoutubeOpenSubscribe extends BaseCommand {
    runAction(text) {
        let link = document.querySelector("[title*='Подписки']");

        if (link) {
            location.href = link.href;
        } else {
            return "Не моуг найти ссылку на подписки";
        }
    }

    getSpeechController() {
        return YoutubeOpenSubscribeStt;
    }
}