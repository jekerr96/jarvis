class CommandAuth extends BaseCommand {
    runAction() {
        document.querySelector("[class*=auth]")?.click();
    }
}