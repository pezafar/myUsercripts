// ==UserScript==
// @name         WikiQuickTranslate
// @namespace    zafarpe
// @version      0.1
// @description  Translates Wikipedia pages titles
// @author       Paul-Emile Zafar
// @match        https://fr.wikipedia.org/wiki/*
// @grant        none
// ==/UserScript==

(function() {
    console.log("init");

    //languages panel
    var langPanel = document.getElementById("p-lang");
    console.log(langPanel);


    if(langPanel != null){
        var link = langPanel.getElementsByClassName("interlanguage-link interwiki-en")[0].querySelectorAll("a")[0].title;
        console.log(langPanel.getElementsByClassName("interlanguage-link interwiki-en")[0].querySelectorAll("a")[0].title );
        console.log(link);

        //changes title
        var frTitle = document.getElementById("firstHeading");
        frTitle.innerHTML = frTitle.innerHTML + " ( " + link + " )";

    }



})();