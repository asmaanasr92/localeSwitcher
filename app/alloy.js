var locale = require("Locale");
var supported = ["se", "fi", "no", "dk", "en"];
var current = locale.getLocale();
var localeAsSet = Titanium.App.Properties.getString("locale");
var test = supported.indexOf(current);
if (test === -1) {
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