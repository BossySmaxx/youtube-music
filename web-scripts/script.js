const videoBox =  document.querySelector("ytmusic-player.ytmusic-player-page");

const observer = new MutationObserver((e) => {
    e.forEach(ele => {
        const eleNode = ele.target;
        let playerUIState = eleNode.getAttribute("player-ui-state_");
        if (playerUIState === "MINIPLAYER") {
            console.log(ele.target.playerApi_);
            ele.target.parentElement.querySelector("ytmusic-player.ytmusic-player-page").style.display = "none";
        } else {
            ele.target.parentElement.querySelector("ytmusic-player.ytmusic-player-page").style.display = "inline-block";
        }
        // console.log("playerUIState: ", playerUIState);
    });
});

observer.observe(videoBox, {
    attributes: true, 
});


// ele.target.playerApi_.getPlayerResponse().streamingData.adaptiveFormats[26].url;