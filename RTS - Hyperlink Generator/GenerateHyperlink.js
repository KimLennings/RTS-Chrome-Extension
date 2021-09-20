function generateHyperlink(info,tab) {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var str = window.prompt("Tryck OK för att kopiera direktlänk. (Klistra sedan in i worknotes)", '[code]<a href="' + tabs[0].url + '">Direktlänk till order.</a>[/code]');
            var el = document.createElement('textarea');
            el.value = str;
            el.setAttribute('readonly', '');
            el.style = {position: 'absolute', left: '-9999px'};
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
    });
};

chrome.contextMenus.create({
    title: "Generate Hyperlink", 
    contexts:["all"], 
    onclick: generateHyperlink
});