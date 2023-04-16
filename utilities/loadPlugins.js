const init_blocker = require("../plugins/adblocker/ad-blocker");

module.exports.loadPlugins = function (plugins, session) {
    plugins.forEach((plugin) => {
        if (plugin === "adblocker") {
            init_blocker(session).then(blocker => {
                console.log("adblocker plugin loaded... ✅");
            }).catch(err => {
                console.log("error on initializing adblocker... ❌", err);
            })
        }
    });
}