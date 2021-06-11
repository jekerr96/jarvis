class CommandsRunnerUser {
    run () {
        this.getCommandsList().map(Command => new Command);
    }

    getCommandsList() {
        return [BaseCommand, CommandAuth, CommandScroll];
    }
}