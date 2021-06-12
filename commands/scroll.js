class CommandScroll extends BaseCommand {
    runAction(text) {
        let offset = 1;

        if (/вверх/i.test(text)) {
            offset = -1;
        }

        let top = window.scrollY + window.screen.height * offset;

        if (/наверх/i.test(text)) {
            top = 0;
        }

        window.scrollTo({
            top: top,
            behavior: "smooth",
        });
    }

    getSpeechController() {
        return ScrollStt;
    }
}