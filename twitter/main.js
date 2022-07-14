// Twittear

var tweetInput = $("#tweetInput");
var centerTwittearbtn = $("#centerTwittearbtn");
var centerTwittear23TwittearDiv = $("#centerTwittear23TwittearDiv");
var centerTweets = $("#centerTweets")


centerTwittearbtn.click(function(){
    console.log("TWITTEAR");

    if (tweetInput != null){
        centerTwittear23TwittearDiv.css("opacity", "1");
        console.log("OPACITY")

        var contenidoTweet = tweetInput.val();
        twittear(contenidoTweet)

    }

    tweetInput.val("")
})

if (tweetInput != null){
    centerTwittearbtn.css("opacity", "1");
}

function twittear(contenidoTweet) {
    var tweet = `<div class="tweet">
    <div class="centerTweetTop">
        <div class="centerTweet1">
            <img src="files/profile.png" alt="profile picture">
        </div>
        <div class="centerTweet2">
            <div class="userTweet">
                <div class="user1">
                    <div class="user1-1">
                        <a href=""><span>Hernan</span></a>
                    </div>
                    <div class="user1-2">
                        <a href=""><span>@arevalohernan</span></a>
                    </div>
                    <div class="user1-3">
                        <span>•</span>
                    </div>
                    <div class="user1-4">
                        <a href=""><span>1min</span></a>
                    </div>
                </div>
            </div>
            <div class="tweetContent">
                <span>${contenidoTweet}</span>
                <span class="hashtag"><a href=""></a></span>
            </div>

        </div>
    </div>
    <div class="tweetIcons2">
        <div class="tweetComment tweetIcon">
            <img class="" src="files/chat.png" alt="">
            <div class="tweetIconsSpan"><span></span></div>
        </div>
        <div class="tweetRetweet tweetIcon">
            <img class="" src="files/retweet-arrows.png" alt="">
            <div class="tweetIconsSpan"><span></span></div>
        </div>
        <div class="tweetFav tweetIcon">
            <img class="" src="files/heart.png" alt="">
            <div class="tweetIconsSpan"><span></span></div>
        </div>
        <div class="tweetShare tweetIcon">
            <img class="" src="files/upload.png" alt="">
        </div>
    </div>`
    
    centerTweets.prepend(tweet);
}

/* Twitter desde botón de la derecha */

var TwittearIzq = $("#leftItemTwittear")

TwittearIzq.click(function(){
    $('html, body').css({
        'overflow': 'visible',
        'height': 'auto'
    });

    return false;
})