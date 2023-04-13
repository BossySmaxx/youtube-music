const { ElectronBlocker } = require("@cliqz/adblocker-electron");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

module.exports = async function (win) {
    const filterUrls = fs.readFileSync(path.join(__dirname, "./filters/master-filter-urls.json"), "utf-8");
    const urls = JSON.parse(filterUrls).urls;
    console.log(urls);
    const blocker = await ElectronBlocker.fromLists(fetch, urls);

    blocker.enableBlockingInSession(win.webContents.session);
    return blocker;
}