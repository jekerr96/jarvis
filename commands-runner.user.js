class CommandsRunner {
    isRunning = false;
    commands = [];

    run() {
        if (this.isRun()) {
            return;
        }

        if (!this.commands.length) {
            this.commands = this.getCommandsList().map(Command => new Command);
        } else {
            recognitionStart();
        }

        this.setIsRun(true);
    }

    stop() {
        recognitionStop();
        this.setIsRun(false);
    }

    toggle() {
        this.isRun() ? this.stop() : this.run();
    }

    getCommandsList() {
        return [CommandReloadPage, CommandAuth, CommandYoutubeOpenVideo, CommandYoutubeOpenSubscribe, CommandBack, CommandToMain, CommandScroll];
    }

    setIsRun(state) {
        this.isRunning = state;
    }

    isRun() {
        return this.isRunning;
    }
}