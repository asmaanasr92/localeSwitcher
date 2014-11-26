var Locale = function() {
    /**
     * This module provides a simple facade to a third party market place locale switching module
     */
    var localeModule = require('com.shareourideas.locale');

    this.setLocale = function(locale) {
        localeModule.setLocale(locale);
        Titanium.App.Properties.setString("locale", locale);
        this.trigger("localeswitch", {
            "locale" : locale
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
    //mixin to add on, off, bind and unbind functions
    _.extend(locale, Backbone.Events);
    return locale;
};