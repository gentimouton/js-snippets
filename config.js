// from Maintanable Javascript, by Zakas

// Configuration data externalized
var config = {
    MSG_INVALID_VALUE:  "Invalid value",
    URL_INVALID:        "/errors/invalid.php"
};

function validate(value) {
    if (!value) {
        alert(config.MSG_INVALID_VALUE);
        location.href = config.URL_INVALID;
    }
}
