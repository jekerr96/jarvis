class CommandsRunner {
    run () {
        this.getCommandsList().map(Command => new Command);
    }

    getCommandsList() {
        return [CommandAuth, CommandScroll];
    }
}

window.CommandsRunner = CommandsRunner;