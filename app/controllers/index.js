var localeLib = require("Locale").create();

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

localeLib.on("localeswitch", function(e) {
    $.setDanish.setTitle(L('danish'));
    $.setSwedish.setTitle(L('swedish'));
    $.setFinnish.setTitle(L('finnish'));
    $.setNorwegian.setTitle(L('norwegian'));
    $.button.setTitle(L('welcome_message'));
});

function openWelcomeIOS() {
    var welcome = Alloy.createController('welcome').getView();
    $.navWin.openWindow(welcome);
};
function openWelcomeAndroid() {
    var welcome = Alloy.createController('welcome').getView();
    welcome.open();
};

$.navWin.open();