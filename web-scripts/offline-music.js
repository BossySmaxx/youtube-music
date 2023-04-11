let foundContextMenu = false;

const contextMenuObserver = new MutationObserver((e) => {
    const contextMenuContainer =  document.querySelector("ytmusic-menu-popup-renderer tp-yt-paper-listbox");
    if (contextMenuContainer && !foundContextMenu) {
        // foundContextMenu = true;
        console.log("found contextContainer", contextMenuContainer);
        const ele = appendMenuItem("Download", contextMenuContainer, "kisu", "isu");
        contextMenuContainer.appendChild(ele);
        console.log("after append: ", contextMenuContainer);
        if (contextMenuContainer.contains(ele)) {
            console.log("diconnecting observer");
            contextMenuObserver.disconnect();
        }
        return;
    }
});

contextMenuObserver.observe(document.querySelector("ytmusic-popup-container"), {
    attributes: false, 
    childList: true, 
    subtree: true
});

function appendMenuItem(menuItemName, menu, clickHandler, icon) {
    const itemEle = document.createElement("div");
    itemEle.classList.add("style-scope");
    itemEle.classList.add("ytmusic-menu-popup-renderer");
    itemEle.classList.add("iron-selected");

    const anchorEle = document.createElement("a");
    anchorEle.classList.add("yt-simple-endpoint");
    anchorEle.classList.add("style-scope");
    anchorEle.classList.add("ytmusic-menu-navigation-item-renderer");
    
    anchorEle.innerHTML = `<yt-formatted-string class="text style-scope ytmusic-menu-navigation-item-renderer">${menuItemName}</yt-formatted-string>`;
    itemEle.appendChild(anchorEle);
    menu.appendChild(itemEle);
    return itemEle;
}