const { app, BrowserWindow, Tray, Menu } = require("electron");
const path = require("path");
const { createWindow } = require("./window");
const url = require("url");
const { cssInjector } = require("./utilities/css.injector");
const fs = require("fs");
const trayMenu = require("./tray-menu");

let window;
app.on("ready", () => {
    const tray =  new Tray(path.join(__dirname, "icon.ico"));
    tray.setToolTip("youtube-mussc");
    
    window = createWindow();
    window.on("enter-full-screen", () => {
        window.setAutoHideMenuBar(true);
    });
    window.on("leave-full-screen", () => {
        window.setAutoHideMenuBar(false);
    })

    tray.setContextMenu(trayMenu(window, app));
    // tray.popUpContextMenu();
    window.webContents.on("did-finish-load", () => cssInjector(window.webContents, path.join(__dirname, "./override.css")));
});

app.on("window-all-closed", (e) => {
    app.quit();
    app.exit();
});

app.on("will-quit", (e) => {
    console.log("extitng application...");
});