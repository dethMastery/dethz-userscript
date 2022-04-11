// ==UserScript==
// @name    shiftyy's MyAnimeList Dark+
// @namespace   https://suphakit.net/
// @match        https://myanimelist.net/*
// @version      1.0.0
// @description  Just 1 key skipping
// @author       Dethz
// @resource    css1   https://raw.github.com/gist/xxx/xxx/xxx.css
// @resource    css2   https://raw.github.com/gist/xxx/xxx/xxx.css
// ==/UserScript==

console.debug('start: add CSS');
var call1  = GM_getResourceText("css1");
var call2  = GM_getResourceText("css2");
GM_addStyle (call1);
GM_addStyle (call2);
console.debug('done: add CSS');