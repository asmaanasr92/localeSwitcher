function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "welcome";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.welcome = Ti.UI.createWindow({
        id: "welcome"
    });
    $.__views.welcome && $.addTopLevelView($.__views.welcome);
    $.__views.label = Ti.UI.createLabel({
        top: "10",
        id: "label",
        textid: "welcome_message"
    });
    $.__views.welcome.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;