var randomNum;
function initialize() {
    randomNum = Math.floor(Math.random() * 102) + 19;
    console.log("randomNum = " + randomNum);
    $("#randomNbr").html("<h3>Your Random Number is:<br>randomNum</h3>");
}

/* $(document).ready(function() { */
    // }
// });