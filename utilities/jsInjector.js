const fs = require("fs");

module.exports.jsInjector = function (web, filename) {
    const script = fs.readFileSync(filename, "utf-8");
    console.log("------SCRIPT---------");
    console.log(script);
    web.executeJavaScript(script);
}