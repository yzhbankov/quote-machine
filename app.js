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
            randomQuote();
        }
        if (ticks > 10) {
            $(".quoteText").css("opacity", (0.1 * (ticks - 10)).toString());
            $(".quoteAuthor").css("opacity", (0.1 * (ticks - 10)).toString());
        }
        if (ticks == 20) {
            clearInterval(clock);
        }
    }, 50);
    var color = getRandomColor();
    document.body.style.backgroundColor = color;
    $(".nextButton").css("background-color", color);
    $(".twitterButton").css("background-color", color);
    $(".quoteText").css("color", color);
    $(".quoteAuthor").css("color", color);
});

function randomQuote() {
    $.ajax({
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
        type: "POST",
        contentType: 'application/x-www-form-urlencoded',
        headers: {
            "X-Mashape-Key": 'qhyhrKUqBcmshva9qkFDbjNSwNKNp1Ho8TTjsnVyCWLAGdFEWb'
        },
        dataType: 'json',
        success: function (response) {
            $(".quoteText").html('"' + response.quote);
            $(".quoteAuthor").html('- ' + response.author);
            $(".twitterButton").attr("href", "https://twitter.com/intent/tweet?text=" + '"' + response.quote + '" ' +
                response.author);
        }
    });
}
randomQuote();

