console.log("Connected!");

$(document).ready(function () {
    var element = (document.getElementById("search-box").value);
    var str;

    if (element == null || element == '') {
        str = "search";
    } else {
        str = element;
    }

    $(searchBtn).click(function() {
        var url = "http://www.google.com/search?q=" + str;
        window.open(url , "google");
    });

    $(feeling_lucky_key).click(function() {
        var url = "http://www.google.com/search?q=" + str + "btnI";
        window.open(url , google);
    });
});