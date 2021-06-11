class CommandsRunner {
    run () {
        this.getCommandsList().map(Command => new Command);
    }

    getCommandsList() {
        return [BaseCommand, CommandAuth, CommandScroll];
    }
}

window.CommandsRunner = CommandsRunner;