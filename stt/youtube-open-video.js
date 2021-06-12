class YoutubeOpenVideoStt extends BaseStt {
    getWords() {
        return ["обнови страницу"];
    }

    getRegExp() {
        return new RegExp("Включи|Включить ([0-9]+ видео)|(видео [0-9]+)", "i");
    }
}