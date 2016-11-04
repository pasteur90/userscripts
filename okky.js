// ==UserScript==
// @name        okky.kr hide top navbar when scrolled down and reappear when scrolled up
// @namespace   inhwan
// @description asdf
// @include     okky.kr/*
// @include     http://okky.kr/*
// @include     https://*.google.com/*
// @version     1
// @grant       none
// ==/UserScript==

$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".sidebar").show();
    } else {
        $(".sidebar").hide();
    }
    this.previousTop = currentTop;
});