var localeLib = require("locale");
localeLib.bind($);
function doClick(e) {
    var locale = localeLib.getLocale();
    alert("locale is " + locale);
}

function setSwedish() {
    localeLib.setLocale("se");
}

function setDanish() {
    localeLib.setLocale("dk");
}

function setNorwegian() {
    localeLib.setLocale("no");
}

function setFinnish() {
    localeLib.setLocale("fi");
}

var slideLeft = Ti.UI.createAnimation({
    left : 0,
    duration : 300
});
var welcome = Alloy.createController('welcome').getView();
function animationHandler() {
    setTimeout(function() {
        welcome.open();
    }, 500);
}
slideLeft.addEventListener('complete',animationHandler);
$.on("localeswitch", function(e) {
    console.log("I have switched locale to: " + e.locale);
    $.index.close(slideLeft);
});
$.index.open();