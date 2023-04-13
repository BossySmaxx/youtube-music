const fs = require("fs");
const path = require("path");

module.exports.cssInjector = function (web, filename) {
    // console.log("filmame: ", filename);
    const css = fs.readFileSync(filename, {encoding: "utf-8"});
    // console.log("css: ", css);
    web.insertCSS(css);
}
