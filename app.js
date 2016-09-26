/**
 * Created by Iaroslav Zhbankov on 26.09.2016.
 */
$.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=447653&lang=en", function(json) {
    $(".quote").html(JSON.stringify(json));
});