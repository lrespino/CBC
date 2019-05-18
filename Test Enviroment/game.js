$(document).ready(function(){

    // select random number at start of game
    var Random = Math.floor(Math.random()*101+19)
    
    $('#randomNumber').text(Random);
    
    //random numbers for jewels
    var gem1 = Math.floor(Math.random()*11+1)
    var gem2 = Math.floor(Math.random()*11+1)
    var gem3 = Math.floor(Math.random()*11+1)
    var gem4 = Math.floor(Math.random()*11+1)
    
    var total = 0;
    var wins = 0;
    var losses = 0;
    
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    
    //reset game//
    function reset() {
        Random = Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        gem1 = Math.floor(Math.random()*11+1);
        gem2 = Math.floor(Math.random()*11+1);
        gem3 = Math.floor(Math.random()*11+1);
        gem4 = Math.floor(Math.random()*11+1);
        total = 0;
        $('#finalTotal').text(total);
    }
    
    function check() {
        if (total == Random) {
        alert ("win");
        wins++;
        $('#numberWins').text(wins);
        reset();
        }
        if (total > Random) {
        alert ("lose");
        losses++;
        $('#numberLosses').text(losses);
        reset();
        }
    }
    // //add wins to total//
    // function win() {
    //     alert("win");
    //     wins++;
    //     $('#numberWins').text(wins);
    //     reset();
    // }
    
    // //add loss to total//
    // function losses() {
    //     alert("lose");
    //     losses++;
    //     $('#numberLosses').text(losses);
    //     reset();
    // }
    
    // function score() {
    //     if (total == Random) {
    //         alert("win");
    //         wins++;
    //         $('#numberWins').text(wins);
    //     }
    //     else (total > Random) {
    //         alert("lose");
    //         losses++;
    //         $('#numberLosses').text(losses);
    //     }
    // }
    
    
    
    //clicks for gems
    $('#one').on('click', function() {
        total = total + gem1;
        console.log("New total= " + total);
        $('#finalTotal').text(total);
        check();
    })
    
    $('#two').on('click', function() {
        total = total + gem2;
        console.log("New total= " + total);
        $('#finalTotal').text(total);
        check();
    })
    
    $('#three').on('click', function() {
        total = total + gem3;
        console.log("New total= " + total);
        $('#finalTotal').text(total);
        check();
    })
    
    $('#four').on('click', function() {
        total = total + gem4;
        console.log("New total= " + total);
        $('#finalTotal').text(total);
        check();
    })
    });