$(document).ready(function() {
    var currSum;
    var randomNum;
    var win = 0;
    var loss = 0;
    var path = "assets/images/";
    var file = ["diamond-small.jpg", "heart-small.jpg", "spade-small.jpg", "club-small.jpg"];
    var position = [10, 100, 190, 280];
    var allowClick = true;

    function initialize() {
        currSum = 0;
        randomNum = Math.floor(Math.random() * 102) + 19;
        $("#rn").text(randomNum);
        $("#win-lose").css("visibility", "hidden");

        for (var i = 0; i < 4; i++) {
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal");
            imageCrystal.attr("id", "image" + [i+1]);
            imageCrystal.attr("src", path + file[i]);
            imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
            imageCrystal.css("position", "absolute");
            imageCrystal.attr("height", "80px");
            imageCrystal.attr("width", "80px");
            imageCrystal.css("top", "10px");
            imageCrystal.css("left", position[i] + "px");
            $(".imgGroup").append(imageCrystal);
        }
    }
    
    initialize();
    
    $(".crystal").on("click", function() {
        if (allowClick) {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            currSum = parseInt(currSum) + parseInt(crystalValue);
            if (currSum < randomNum) {
                $("#sum").html("Your Current Sum is: " + currSum +"&emsp; Keep playing!");
            }
            else if (currSum > randomNum) {
                allowClick = false;
                $("#sum").html("Your Current Sum is: " + currSum +"&emsp; Too high - you lose.");
                loss++;
                $("#loss").html("Losses: &emsp; " + loss);  
                $("#win-lose").html("<h2>Sorry - you lost...</h2><h2>Try again.</h2>");
                $("#win-lose").css("visibility", "visible");
                $("#win-lose").fadeTo(100, 0.0, function() {
                    for (var i=0; i<5; i++) { 
                        $(this).fadeTo(100, 0.0);
                        $(this).fadeTo(500, 1.0);
                    } 
                });
            }
            else {
                allowClick = false;
                $("#sum").html("Your Current Sum is: " + currSum +"&emsp; Equal - you win!!");
                win++;
                $("#win").html("Wins: &emsp; " + win);
                $("#win-lose").html("<h2>Congratulations!</h2><h2>You won!!</h2>");
                $("#win-lose").css("visibility", "visible");
                $("#win-lose").fadeTo(100, 0.0, function() {
                    for (var i=0; i<5; i++) { 
                        $(this).fadeTo(100, 0.0);
                        $(this).fadeTo(500, 1.0);
                    } 
                });
                
            }
        }
    });
    
    $(".btnPlay").on("click", function() {
        currSum = 0;
        allowClick = true;
        randomNum = Math.floor(Math.random() * 102) + 19;
        $("#rn").text(randomNum);

        $("#sum").html("Your Current Sum is: " + currSum +"&emsp; Keep playing!");
        $("#win-lose").css("visibility", "hidden");
        for (var i=0; i<4; i++) {
            $("#image" + i).attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        }
    });

});
