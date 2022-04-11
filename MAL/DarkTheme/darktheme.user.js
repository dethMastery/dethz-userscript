// ==UserScript==
// @name    shiftyy's MyAnimeList Dark+
// @namespace   https://suphakit.net/
// @match        https://myanimelist.net/*
// @version      1.1.0
// @description  Just 1 key skipping
// @author       Dethz
// @resource    css1   https://raw.githubusercontent.com/dethMastery/dethz-userscript/main/MAL/DarkTheme/Component/css1.css
// @grant       GM_getResourceText
// @grant       GM_addStyle
// ==/UserScript==

console.log('start: add CSS');
var call1 = GM_getResourceText("css1");
GM_addStyle(call1);
console.log('done: add CSS');