var locale = require("Locale").create();

var supported = [ "se", "fi", "no", "dk", "en" ];

var current = locale.getLocale();

var localeAsSet;

var test = supported.indexOf(current);

if (-1 === test) {
    localeAsSet = Titanium.App.Properties.getString("locale");
    console.error("using a non supported language: " + current);
    if (localeAsSet) {
        console.error("there is a selected language: " + localeAsSet);
        locale.setLocale(localeAsSet);
    } else {
        locale.setLocale("en");
        console.error("language set to English");
    }
} else console.debug("supported language: " + current);