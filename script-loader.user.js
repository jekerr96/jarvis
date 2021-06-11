let baseDomain = "https://jarvis.local/";
let scriptsLoadList = [
    "stt/stt.js",
    "stt/base.js",
    "stt/auth.js",
    "stt/scroll.js",
    "commands/base.js",
    "commands/auth.js",
    "commands/scroll.js",
    "commands-runner.js",
];

console.log("test"); // TODO remove

function loadScripts() {
    return new Promise((resolve) => {
        let loaded = 0;

        for (let script of scriptsLoadList) {
            console.log(script); // TODO remove
            let scriptTag = document.createElement("script");

            scriptTag.onload = () => {
                loaded++;

                if (loaded === scriptsLoadList.length) {
                    resolve();
                }
            };

            document.head.appendChild(scriptTag);
            scriptTag.setAttribute("src", baseDomain + script);
        }
    });
}