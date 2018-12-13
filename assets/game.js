// $(document).ready(function() {
    // Set variables
    var userNumber = 0;
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    var donuts = {
        donut1:
        {
            name: "1",
            value: 0
        },
        donut2:
        {
            name: "2",
            value: 0
        },
        donut3:
        {
            name: "3",
            value: 0
        },
        donut4:
        {
            name: "4",
            value: 0
        }
    };
    var wins = 0;
    var losses = 0;

    // Give donuts values
    // var donutValues = function() {
    //     donuts.donut1.value = Math.floor(Math.random() * 12) + 1;
    //     donuts.donut2.value = Math.floor(Math.random() * 12) + 1;
    //     donuts.donut3.value = Math.floor(Math.random() * 12) + 1;
    //     donuts.donut4.value = Math.floor(Math.random() * 12) + 1;
    // }

    // resets the game
    var reset = function() {
        userNumber = 0;
        // donuts = donutValues();
        targetNumber =  Math.floor(Math.random() * 120) + 19;
        donuts.donut1.value = Math.floor(Math.random() * 12) + 1;
        donuts.donut2.value = Math.floor(Math.random() * 12) + 1;
        donuts.donut3.value = Math.floor(Math.random() * 12) + 1;
        donuts.donut4.value = Math.floor(Math.random() * 12) + 1;
        $("#hunger-level").text("Hunger: " + targetNumber);
        $("#your-score").text(userNumber);
        console.log(userNumber);
        console.log(targetNumber);
        console.log(donuts);
    };

    // add values for donuts
    var donutClick = function(chosenDonut) {
        userNumber += chosenDonut.value;
        $("#your-score").text(userNumber);
        winOrLose();
    };

    // win/lose conditions
    var winOrLose = function() {
        if (userNumber > targetNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
        }
        else if (userNumber === targetNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        }
    };

    // actual game begins
    reset();

    $("#donut1").click(function() {
        donutClick(donuts.donut1);
    });

    $("#donut2").click(function() {
        donutClick(donuts.donut2);
    });

    $("#donut3").click(function() {
        donutClick(donuts.donut3);
    });

    $("#donut4").click(function() {
        donutClick(donuts.donut4);
    });