const { Menu, MenuItem } = require("electron");

module.exports = (win, app) => {
    const menu = new Menu();
    menu.append(new MenuItem({
        label: "hide", 
        click: (e) => {
            win.hide();
        }
    }));
    menu.append(new MenuItem({
        label: "show", 
        click: (e) => {
            win.show();
        }
    }));
    menu.append(new MenuItem({
        label: "exit", 
        click: (e) => {
            app.quit();
        }
    }));

    return menu;
}