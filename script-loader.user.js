let baseDomain = "https://jarvis.local/";
let scriptsLoaded = false;
let scriptsLoadList = [
    "commands-runner.user.js",
    "stt/stt.js",

    "stt/base.js",
    "stt/auth.js",
    "stt/reload-page.js",

    "commands/base.js",
    "commands/auth.js",
    "commands/reload-page.js",
];

async function loadScripts() {
    if (scriptsLoaded || typeof BaseStt !== "undefined") {
        return true;
    }

    for (let script of scriptsLoadList) {
        try {
            await _loadScript(script);
        } catch (e) {
            return false;
        }
    }

    scriptsLoaded = true;
    return true;
}

function _loadScript(script) {
    return new Promise((resolve, reject) => {
        let scriptTag = document.createElement("script");
        scriptTag.setAttribute("async", "false");

        scriptTag.onload = () => {
            resolve();
        };

        scriptTag.onerror = () => {
            reject();
        };

        document.head.appendChild(scriptTag);
        scriptTag.setAttribute("src", baseDomain + script);
    });
}

async function run() {
    await loadScripts();

    let commandRunner = new CommandsRunner();

    window.addEventListener("keypress", (ev) => {
        if (ev.ctrlKey && ev.which === 29) {
            commandRunner.toggle();
            sessionStorage.setItem("active", commandRunner.isRun() ? "yes" : "no");
        }
    });

    if (sessionStorage.getItem("active") === "yes") {
        commandRunner.run();
    }
}

run();