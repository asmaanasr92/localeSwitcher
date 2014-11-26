function Controller() {
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
    function openWelcomeIOS() {
        var welcome = Alloy.createController("welcome").getView();
        $.navWin.openWindow(welcome);
    }
    function openWelcomeAndroid() {
        var welcome = Alloy.createController("welcome").getView();
        welcome.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.navWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "navWin",
        layout: "absolute"
    });
    $.__views.navWin && $.addTopLevelView($.__views.navWin);
    $.__views.__alloyId1 = Ti.UI.createView({
        top: "50",
        layout: "vertical",
        id: "__alloyId1"
    });
    $.__views.navWin.add($.__views.__alloyId1);
    $.__views.setSwedish = Ti.UI.createButton({
        top: "10",
        id: "setSwedish",
        titleid: "swedish"
    });
    $.__views.__alloyId1.add($.__views.setSwedish);
    setSwedish ? $.__views.setSwedish.addEventListener("click", setSwedish) : __defers["$.__views.setSwedish!click!setSwedish"] = true;
    $.__views.setDanish = Ti.UI.createButton({
        top: "10",
        id: "setDanish",
        titleid: "danish"
    });
    $.__views.__alloyId1.add($.__views.setDanish);
    setDanish ? $.__views.setDanish.addEventListener("click", setDanish) : __defers["$.__views.setDanish!click!setDanish"] = true;
    $.__views.setNorwegian = Ti.UI.createButton({
        top: "10",
        id: "setNorwegian",
        titleid: "norwegian"
    });
    $.__views.__alloyId1.add($.__views.setNorwegian);
    setNorwegian ? $.__views.setNorwegian.addEventListener("click", setNorwegian) : __defers["$.__views.setNorwegian!click!setNorwegian"] = true;
    $.__views.setFinnish = Ti.UI.createButton({
        top: "10",
        id: "setFinnish",
        titleid: "finnish"
    });
    $.__views.__alloyId1.add($.__views.setFinnish);
    setFinnish ? $.__views.setFinnish.addEventListener("click", setFinnish) : __defers["$.__views.setFinnish!click!setFinnish"] = true;
    $.__views.button = Ti.UI.createButton({
        top: "10",
        id: "button",
        titleid: "welcome_message"
    });
    $.__views.__alloyId1.add($.__views.button);
    openWelcomeAndroid ? $.__views.button.addEventListener("click", openWelcomeAndroid) : __defers["$.__views.button!click!openWelcomeAndroid"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var localeLib = require("locale");
    localeLib.bind($);
    $.on("localeswitch", function(e) {
        alert("switched to " + e.locale);
    });
    $.navWin.open();
    __defers["$.__views.setSwedish!click!setSwedish"] && $.__views.setSwedish.addEventListener("click", setSwedish);
    __defers["$.__views.setDanish!click!setDanish"] && $.__views.setDanish.addEventListener("click", setDanish);
    __defers["$.__views.setNorwegian!click!setNorwegian"] && $.__views.setNorwegian.addEventListener("click", setNorwegian);
    __defers["$.__views.setFinnish!click!setFinnish"] && $.__views.setFinnish.addEventListener("click", setFinnish);
    __defers["$.__views.button!click!openWelcomeIOS"] && $.__views.button.addEventListener("click", openWelcomeIOS);
    __defers["$.__views.setSwedish!click!setSwedish"] && $.__views.setSwedish.addEventListener("click", setSwedish);
    __defers["$.__views.setDanish!click!setDanish"] && $.__views.setDanish.addEventListener("click", setDanish);
    __defers["$.__views.setNorwegian!click!setNorwegian"] && $.__views.setNorwegian.addEventListener("click", setNorwegian);
    __defers["$.__views.setFinnish!click!setFinnish"] && $.__views.setFinnish.addEventListener("click", setFinnish);
    __defers["$.__views.button!click!openWelcomeAndroid"] && $.__views.button.addEventListener("click", openWelcomeAndroid);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;