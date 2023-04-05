const { BrowserWindow, Tray } = require("electron");
const url = require("url");
const path = require("path");

module.exports.createWindow = function () {
    
    const window =  new BrowserWindow({
        title: "Yoututbe Music", 
        webPreferences: {
            preload: path.join(__dirname, "/preload.js"), 
            nodeIntegration: true, 
        }, 
        show: false, 
    });

    window.webContents.loadURL(url.format({
        protocol: "http",
        hostname: "music.youtube.com",
    }));

    window.on("ready-to-show", (e) => {
        window.show();
        window.maximize();
        window.webContents.openDevTools();
    });

    return window;
}