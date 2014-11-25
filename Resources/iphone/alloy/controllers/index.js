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
    function animationHandler() {
        setTimeout(function() {
            welcome.open();
        }, 500);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "absolute",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createView({
        top: "50",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.setSwedish = Ti.UI.createButton({
        top: "10",
        id: "setSwedish",
        titleid: "swedish"
    });
    $.__views.__alloyId0.add($.__views.setSwedish);
    setSwedish ? $.__views.setSwedish.addEventListener("click", setSwedish) : __defers["$.__views.setSwedish!click!setSwedish"] = true;
    $.__views.setDanish = Ti.UI.createButton({
        top: "10",
        id: "setDanish",
        titleid: "danish"
    });
    $.__views.__alloyId0.add($.__views.setDanish);
    setDanish ? $.__views.setDanish.addEventListener("click", setDanish) : __defers["$.__views.setDanish!click!setDanish"] = true;
    $.__views.setNorwegian = Ti.UI.createButton({
        top: "10",
        id: "setNorwegian",
        titleid: "norwegian"
    });
    $.__views.__alloyId0.add($.__views.setNorwegian);
    setNorwegian ? $.__views.setNorwegian.addEventListener("click", setNorwegian) : __defers["$.__views.setNorwegian!click!setNorwegian"] = true;
    $.__views.setFinnish = Ti.UI.createButton({
        top: "10",
        id: "setFinnish",
        titleid: "finnish"
    });
    $.__views.__alloyId0.add($.__views.setFinnish);
    setFinnish ? $.__views.setFinnish.addEventListener("click", setFinnish) : __defers["$.__views.setFinnish!click!setFinnish"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var localeLib = require("locale");
    localeLib.bind($);
    var slideLeft = Ti.UI.createAnimation({
        left: 0,
        duration: 300
    });
    var welcome = Alloy.createController("welcome").getView();
    slideLeft.addEventListener("complete", animationHandler);
    $.on("localeswitch", function(e) {
        console.log("I have switched locale to: " + e.locale);
        $.index.close(slideLeft);
    });
    $.index.open();
    __defers["$.__views.setSwedish!click!setSwedish"] && $.__views.setSwedish.addEventListener("click", setSwedish);
    __defers["$.__views.setDanish!click!setDanish"] && $.__views.setDanish.addEventListener("click", setDanish);
    __defers["$.__views.setNorwegian!click!setNorwegian"] && $.__views.setNorwegian.addEventListener("click", setNorwegian);
    __defers["$.__views.setFinnish!click!setFinnish"] && $.__views.setFinnish.addEventListener("click", setFinnish);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;