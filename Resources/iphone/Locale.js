var Locale = function() {
    var localeModule = require("com.shareourideas.locale");
    this.setLocale = function(locale) {
        localeModule.setLocale(locale);
        Titanium.App.Properties.setString("locale", locale);
        this.trigger("localeswitch", {
            locale: locale
        });
    };
    this.resetLocale = function() {
        localeModule.resetLocale();
    };
    this.getLocale = function() {
        var loc = Ti.Locale.currentLanguage;
        return loc;
    };
};

exports.create = function() {
    var locale = new Locale();
    _.extend(locale, Backbone.Events);
    return locale;
};