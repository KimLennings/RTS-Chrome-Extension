function openInRTS(info,tab) {
    chrome.tabs.create({  
        url: "https://webshop.infrontitpartner.se/order_history?showAll=true&freetext=" + info.selectionText
    });
    };
    chrome.contextMenus.create({
    title: "Open in RTS", 
    contexts:["selection"], 
    onclick: openInRTS
});