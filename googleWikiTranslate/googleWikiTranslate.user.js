// ==UserScript==
// @name         googleWikiTranslate
// @namespace    zafarpe
// @version      0.1
// @description  translates wikipedia titles from the corresponding english page in a google results page (french wikipedia as it is)
// @author       Paul-Emile Zafar
// @match        www.google.com/search*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    var searches = document.getElementsByClassName("g");
    for (var res of searches){
        var link =res.querySelectorAll("a")[0].href;
        if ( link.startsWith("https://fr.wikipedia.org/wiki") ){

            console.log(res);
            retrieveWikiPage(processData, link, res);
        }
    }

})();



function retrieveWikiPage(callback, link_, res_) {
    GM_xmlhttpRequest({
        method: "GET",
        url: link_,
        synchronous: true,
        headers: {
            "User-Agent": "Mozilla/5.0",
            "Accept": "text/xml"
        },
        onload: function(response) {
            callback(response, res_);
        }
    });
}


//modifies the result block by adding the translation
function processData(data, res_) {
    var page = data.responseXML;
    var langPanel = page.getElementById("p-lang");

    if(langPanel != null){
        var titleEn = langPanel.getElementsByClassName("interlanguage-link interwiki-en")[0].querySelectorAll("a")[0].getAttribute('title');
        if (titleEn != null){
            console.log(titleEn);

            var titleElement = res_.getElementsByClassName("r")[0];
            var strToAdd = ' <p style="font-weight : bold;color :green; margin : 0;">   ' +  titleEn + '</p>';
            titleElement.innerHTML += strToAdd;

        }
    }
};