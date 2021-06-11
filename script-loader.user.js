let baseDomain = "https://jarvis.local/";
let scriptsLoadList = [
    "stt/stt.js",
    "stt/base.js",
    "stt/auth.js",
    "stt/scroll.js",
    "commands/base.js",
    "commands/auth.js",
    "commands/scroll.js",
];

async function loadScripts() {
    for (let script of scriptsLoadList) {
        try {
            await _loadScript(script);
        } catch (e) {
            return false;
        }
    }

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

window.loadScripts = loadScripts;