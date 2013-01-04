// from Maintanable Javascript, by Zakas
// For more robust templating, you may want to consider a solution such as Handlebars

function sprintf(text) {
    var i=1, args=arguments;
    return text.replace(/%s/g, function() {
        return (i < args.length) ? args[i++] : "";
    });
}

// usage
var templateText = '<li><a href="%s">%s</a></li>'
var result = sprintf(templateText, "/item/4", "Fourth item");
