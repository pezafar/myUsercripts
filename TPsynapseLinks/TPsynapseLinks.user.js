// ==UserScript==
// @name         TPsynapseLinks
// @namespace    zafarpe
// @version      0.1
// @description  Add courses links at a slightly better location in the Synapses student space of Télécom Paris
// @author       Paul-Emile Zafar
// @match        https://synapses.telecom-paris.fr/inscriptions-pedagogiques/*
// @grant        none
// @require 
// ==/UserScript==

(function() {
    'use strict';
    console.log('user script starts : improving link location...');

    //gets links rows
    var x = document.querySelectorAll("tr");
    console.log(x);

    //modifies every row of the table
    for(var item of x)
    {
        var y = item.querySelectorAll("td a");
        if (y.length != 0){
            console.log(item.cells[1].innerHTML);
            console.log(y[0].href);

            item.cells[1].innerHTML = '<a href=' + y[0].href + '>' + item.cells[1].innerHTML + '</a>';
        }
    }


    console.log('end');


})();