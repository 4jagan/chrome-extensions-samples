document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('btn');
    button.addEventListener('click', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "send-search-headings", function(response) {
                console.log('Response received in SidepanelJS from ContentJS:',response);
            });
        });
    });
});
