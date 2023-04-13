const init_blocker = require("../plugins/adblocker/ad-blocker");

module.exports.loadPlugins = function (plugins, win) {
    plugins.forEach((plugin) => {
        if (plugin === "adblocker") {
            init_blocker(win).then(blocker => {
                console.log("ad blocker intiialized ✅");
            }).catch(err => {
                console.log("❌ error while initializing ad blocker...", err);
            })
        }
    });
}