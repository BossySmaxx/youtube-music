const { ipcRenderer, contextBridge } = require("electron");

const world = {
    ipcRenderer, 
    listen: (event, callback) => ipcRenderer.on(event, callback), 
}

contextBridge.exposeInMainWorld("native", world);