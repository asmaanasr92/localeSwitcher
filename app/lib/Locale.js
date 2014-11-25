/**
 * This module provides a simple facade to a third party market place locale switching module
 */
var localeModule = require('com.shareourideas.locale'),
    bound;

setLocale = function(locale) {
    localeModule.setLocale(locale);
    Titanium.App.Properties.setString("locale", locale);
    if (bound) {
        bound.trigger("localeswitch", {
            "locale" : locale
        });
    }
};
resetLocale = function() {
    localeModule.resetLocale();
};
getLocale = function() {
    var loc = Ti.Locale.currentLanguage;
    return loc;
};
bind = function(page) {
    bound = page;
};
module.exports = {
    setLocale : setLocale,
    resetLocale : resetLocale,
    getLocale : getLocale,
    bind : bind
};