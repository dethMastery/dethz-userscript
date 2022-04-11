// ==UserScript==
// @name         AMQ skip
// @namespace    https://suphakit.net/
// @version      1.0.0
// @description  Just 1 key skipping
// @author       Dethz
// @match        https://animemusicquiz.com/*
// @icon         https://suphakit.net/landing.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('keydown', (event) => {
        if (event.code === 'Backquote') {
            quiz.skipClicked()
        }
      });
})();