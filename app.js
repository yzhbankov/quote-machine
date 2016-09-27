/**
 * Created by Iaroslav Zhbankov on 26.09.2016.
 */

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var button = document.querySelector(".nextButton");
button.addEventListener('click', function () {
    var ticks = 0;
    var clock = setInterval(function () {
        ticks++;
        $(".quoteText").css("opacity", (0.1 * (10 - ticks)).toString());
        $(".quoteAuthor").css("opacity", (0.1 * (10 - ticks)).toString());
        if (ticks == 10) {
            clearInterval(clock);
            randomQuote();
            $(".quoteText").css("opacity", 1);
            $(".quoteAuthor").css("opacity", 1);
            document.body.style.backgroundColor = getRandomColor();
        }
    }, 50);

});

function randomQuote() {
    $.ajax({
        url: "http://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function (response) {
            $(".quoteText").html('"' + response.quoteText + '"');
            $(".quoteAuthor").html('- ' + response.quoteAuthor);
        }
    });
}
randomQuote();

