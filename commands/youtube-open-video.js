class CommandYoutubeOpenVideo extends BaseCommand {
    runAction(text) {
        text = convertNumbers(text);
        let regExp = new RegExp("[0-9]+");
        let regExpResult = regExp.exec(text);
        let videoNumber = false;

        if (regExpResult) {
            videoNumber = Number(regExpResult[0]);
        }

        if (!videoNumber) {
            return "Не понимаю номер видео";
        }

        let videos = document.querySelectorAll("a#thumbnail");
        let video = videos[videoNumber - 1];
        video?.click();

        if (!video) {
            return "Не могу найти видео";
        }
    }

    getSpeechController() {
        return YoutubeOpenVideoStt;
    }
}