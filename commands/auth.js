class CommandAuth extends BaseCommand {
    runAction() {
        let auth = document.querySelector("[class*=auth]");
        auth?.click();

        if (auth) {
            return "Авторизовываюсь";
        } else {
            return "Мне не удалось найти авторизацию";
        }
    }
}