// ==UserScript==
// @name         Slitherioblog.com
// @namespace    http://slitherioblog.com
// @version      2.1.5
// @description  Slither.io Mods, Unlock skin, bots, play with friends
// @author       Slitherioblog.com
// @match        http://slither.io/*
// @match        https://slither.io/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var slitherScript = document.createElement("SCRIPT");
    var customSkins = document.createElement("SCRIPT");
    var chatVod = document.createElement("SCRIPT");
    var script = document.createElement("SCRIPT");
    script.src = "https://code.jquery.com/jquery-2.2.4.min.js";
    chatVod.src = "//st1.chatovod.com/api/js/v1.js?2";
    document.getElementsByTagName('head')[0].appendChild(script);
    script.addEventListener("load", function () {
        document.getElementsByTagName('head')[0].appendChild(chatVod);
        chatVod.addEventListener("load", function () {
            var chatovodOnLoad = chatovodOnLoad || [];
            chatovodOnLoad.push(function() {
                chatovod.addChatButton({host: "slitherioblog.chatovod.com", align: "bottomLeft",
                    width: 680, height: 480, defaultLanguage: "en"});
                jQuery('div.chatovodButton').css('bottom','10px');
                jQuery('div.chatovodButton').css('left','205px');
            });
        });
        slitherScript.src = "http://slitherioblog.com/chrome/main.js";
        document.getElementsByTagName('head')[0].appendChild(slitherScript);
        customSkins.src = "http://slitherioblog.com/chrome/customskins.js";
        document.getElementsByTagName('head')[0].appendChild(customSkins);
    });
    var socket = document.createElement("SCRIPT");
    socket.src = "http://slitherioblog.com/chrome/socket.io.js";
    document.getElementsByTagName('head')[0].appendChild(socket);
    var css = document.createElement("LINK");
    css.href = "http://slitherioblog.com/chrome/bootstrap.css";
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.media = 'screen';
    document.getElementsByTagName('head')[0].appendChild(css);
    var iframe = document.createElement("IFRAME");
    iframe.src = "http://slitherioblog.com/chrome/statcounter.html";
    iframe.width = '0';
    iframe.height = '0';
    document.getElementsByTagName('body')[0].appendChild(iframe);
})();