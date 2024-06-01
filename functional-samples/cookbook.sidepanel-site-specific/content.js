console.log('Inside Content.js');
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
// chrome.runtime.onMessage.addListener(msgObj => {
    // do something with msgObj
    var list = [];
    // console.log("🚀 ~ document.querySelectorAll('#search h3'):", document.querySelectorAll('#search h3'))
    console.log('Received in ContentJS from SidepanelJS:',sender, request);
    document.querySelectorAll('#search h3').forEach(l => {
        if(l) {
            // console.log("🚀 ~ document.querySelectorAll ~ l:", l)
            list.push(l.textContent);
        }
    })
    console.log("🚀 ~ sending message from ContentJS to SidepanelJS:", list);
    sendResponse({data: list, success: true});
});
