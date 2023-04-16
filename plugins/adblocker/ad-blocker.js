const { ElectronBlocker } = require("@cliqz/adblocker-electron");
const fetch = require("node-fetch");
const fs = require("fs");
const { promises } = require("fs");
const path = require("path");

module.exports = async function (session) {
    const filterUrls = fs.readFileSync(path.join(__dirname, "./filters/master-filter-urls.json"), "utf-8");
    const urls = JSON.parse(filterUrls).urls;
    console.log(urls);
    const blocker = await ElectronBlocker.fromLists(fetch, urls, {
        loadNetworkFilters: session !== undefined
    }, {
        path: path.resolve(__dirname, "ad-cache.cbin"), 
        read: promises.readFile, 
        write: promises.writeFile
    });

    blocker.enableBlockingInSession(session);
    blocker.on("request-blocked", (e) => {
        console.log("request blocked:: ", e);
    })
    return blocker;
}