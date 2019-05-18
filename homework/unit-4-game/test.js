
$(document).ready(function(){

    // The random number shown at the start of the game should be between 19 - 120.
    function randomNumber() {
        return Math.floor(Math.random() * 101) + 19;
    }
    // Each crystal should have a random hidden value between 1 - 12.
    function gemRandomNumber() {
        return Math.floor(Math.random() * 12) + 1;
    }

    //Setting global vars
    var targetNumber;
    var score
    var wins = 0;
    var losses = 0;

    //Start function for when new round begins
    function Start() {
        targetNumber = randomNumber();
        $("#target").text(targetNumber);
        score = 0;
        $("#score").html(score);

        $("#gem1").val(gemRandomNumber);
        $("#gem2").val(gemRandomNumber);
        $("#gem3").val(gemRandomNumber);
        $("#gem4").val(gemRandomNumber);

    }
    Start();

    //onclick funciton for when each gem is clicked
    $(".gem").on("click", function () {
        var gem = $(this);

        score = score + parseInt(gem.val());

        $("#score").html(score);

        if (score > targetNumber) {
            losses++;
            $("#losses").html(losses);
            Start();
        } else if (score === targetNumber) {
            wins++;
            $("#wins").html(wins);
            Start();
        }


    })
})
