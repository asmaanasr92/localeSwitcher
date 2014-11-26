/*
 * This module will check to see if the device locale is set to
 * one of the supported locales or if the app has been changed to a supported
 * locale.  If not, the app is set to English language
 */
var locale = require("Locale").create();
var supported = ["se", "fi", "no", "dk", "en"];
var current = locale.getLocale();
var localeAsSet;
var test = supported.indexOf(current);
if (test === -1) {
    localeAsSet = Titanium.App.Properties.getString("locale");
    console.error("using a non supported language: " + current);
    if (localeAsSet) {
        console.error("there is a selected language: " + localeAsSet);
        locale.setLocale(localeAsSet);
    } else {
        locale.setLocale("en");
        console.error("language set to English");
    }
} else {
    console.debug("supported language: " + current);
}