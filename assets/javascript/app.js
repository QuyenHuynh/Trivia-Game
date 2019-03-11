var questionArray = [
    {
        question: "Who is credited as the designer of the many statues which decorated the Parthenon?",
        answerChoices: ["Praxiteles", "Phidias", "Scopas", "Hesoid"],
        correctAnswer: "Phidias",
        image: "assets/images/parthenon.jpg",
        fact: "Phidias is universally spoken of as the designer and presiding genius of the entire decoration."
    },
    {
        question: "Which artist was struck in the face with a mallet by an envious rival, disfiguring him for life?",
        answerChoices: ["Titan", "Rembrandt", "Michelangelo", "Raphael"],
        correctAnswer: "Michelangelo",
        image: "assets/images/michelangelo.jpg",
        fact: "While studying at the Academy of Ancient Art in the Medici Palace, Michelangelo not only developed his genius as a sculptor, but also excited the wrath of his rival, Torregiano, who struck him with a mallet, crushing the nose on his face and disfiguring him for life."
    },
    {
        question: "Which artist was best known for a painting of his mother?",
        answerChoices: ["Johannes Vermeer", "James Abott McNeil Whistler", "Pierre-August Renoir", "Francisco Goya"],
        correctAnswer: "James Abbot McNeil Whistler",
        image: "assets/images/arrangementgreyblack.jpg",
        fact: "Whistler's most famous painting is Arrangement in Grey and Black No. 1 (1871), commonly known as Whistler's Mother. Anna McNeill Whistler posed for the painting while living in London with her son."
    },
    {
        question: "What art movement was Yoko Ono associated with during the 1960s?",
        answerChoices: ["Fluxus", "Dadaism", "Futurism", "Post-Impressionism"],
        correctAnswer: "Fluxus",
        image: "assets/images/yokoono.png",
        fact: "Yoko Ono helped to define the Fluxus movement which emerged in New York in the 60's."
    },
    {
        question: "How many paintings did Vincent Van Gogh sell during his lifetime?",
        answerChoices: ["1", "27", "193", "842"],
        correctAnswer: "1",
        image: "assets/images/redvineyard.jpg",
        fact: "Although he created more than 900 paintings, Van Gogh sold only one during his lifetime, 'Red Vineyard at Arles' which was purchased by the sister of one of his friends."
    },
    {
        question: "Which artist sold a balloon dog for $58.4 million?",
        answerChoices: ["Jeff Koons", "Jasper Johns", "Christopher Wool", "Gerhart Richter"],
        correctAnswer: "Jeff Koons",
        image: "assets/images/balloondog.jpg",
        fact: "In a November 2013 sale at Christie's New York, Jeff Koons sold Balloon Dog (Orange) (a mirror-polished stainless steel sculpture) for $58.4 million, breaking the world record for the highest price ever paid for an artwork by a living artist."
    },
    {
        question: 'Who painted "The Scream"?',
        answerChoices: ["Vincent Van Gogh", "Otto Meuller", "Wassily Kandinsky", "Edvard Munch"],
        correctAnswer: "Edvard Munch",
        image: "assets/images/thescream.jpg",
        fact: 'Edvard Munch painted "The Scream" after a walk with two friends during which he sensed an "endless scream passing through nature".'
    },
    {
        question: 'Which late 19th-century French painter was known for his pictures of ballet dancers?',
        answerChoices: ["Gustave Caillebotte", "Claude Monet", "Paul Cezanne", "Edgar Degas"],
        correctAnswer: "Edgar Degas",
        image: "assets/images/ballerinas.jpg",
        fact: 'Edgar Degas is acknowledged as the master of drawing human figures in motion. In the early 1870s, the female ballet dancer became his favorite theme.'
    },
    {
        question: 'English artist Andy Brown created a portrait of Queen Elizabeth II using what?',
        answerChoices: ["Tea bags", "Fish bones", "Socks", "Bubblegum"],
        correctAnswer: "Tea bags",
        image: "assets/images/andybrown.jpg",
        fact: 'English artist Andy Brown created a portrait of Queen Elizabeth II out of 1000 used and unused tea bags!'
    },
    {
        question: 'Which art critic coined the term "impressionism?',
        answerChoices: ["Jacob Burckhardt", "John Ruskin", "Roger Fry", "Louis Leroy"],
        correctAnswer: "Louis Leroy",
        image: "assets/images/impressionism.jpg",
        fact: 'Louis Leroy, an art critic for the French newspaper Le Charivari, coined the term "impressionists". The term was subsequently adopted by the artists themselves and has become the name of one of the most influential movements in the history of art.'
    }
]

var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredAnswers = 0;
var time = 20;
var isRunning = false;
var intervalId;
var questionsPassed = (parseInt(correctAnswers) + parseInt(wrongAnswers) + parseInt(unansweredAnswers));


//Randomizes the questions to be displayed
var randomIndex = Math.floor(Math.random() * questionArray.length);
var chosenQuestion = questionArray[randomIndex];

//Game begins after clicking start button
$("#start").on("click", function () {
    $(".titlepage").empty();
    startGame();
});

function startGame() {
    $("#question").empty();
    $("#answerChoices").empty();
    $("#image").empty();
    $("#fact").empty();
    startTimer();
    console.log("Questions passed: " + questionsPassed);

    //re-randomize question
    randomIndex = Math.floor(Math.random() * questionArray.length);
    chosenQuestion = questionArray[randomIndex];
    //display question to html
    $("#question").html("<h3>" + chosenQuestion.question + "</h3>");

    //now we need to display the answer choices
    // Loop through the array of answer choices...
    for (var i = 0; i < chosenQuestion.answerChoices.length; i++) {
        // create buttons for each
        var elem = $("<p>");
        // add classes to use for on-click logic
        elem.addClass("answer-btn");
        // adding data-attributes
        elem.attr("data-name", chosenQuestion.answerChoices[i]);
        // add button text
        elem.text(chosenQuestion.answerChoices[i]);
        // append to div
        $("#answerChoices").append(elem);
    }
    //This function checks whether user's answer is correct or incorrect
    $(".answer-btn").on("click", function () {
        var userAnswer = $(this).html();
        console.log(userAnswer);
        //if correct...
        if (userAnswer === chosenQuestion.correctAnswer) {
            stopTimer();
            console.log("correct!");
            questionsPassed++;
            correctAnswers++;
            $("#question").empty();
            $("#answerChoices").empty();
            $("#timer").empty();
            $("#question").html("<h3>Correct!</h3>");
            $("#image").append('<img src="' + chosenQuestion.image + '" height="200px">');
            $("#fact").html(chosenQuestion.fact);
            //setTimeout to display next question after 3 seconds
            setTimeout(startGame, 1000);
        }
        //if incorrect...
        if (userAnswer !== chosenQuestion.correctAnswer) {
            stopTimer();
            console.log("incorrect!");
            wrongAnswers++;
            questionsPassed++;
            $("#question").empty();
            $("#answerChoices").empty();
            $("#timer").empty();
            $("#question").html("<h3>Incorrect!</h3>");
            $("#image").append('<img src="' + chosenQuestion.image + '" height="200px">');
            $("#fact").html(chosenQuestion.fact);
            //setTimeout to display next question after 3 seconds
            setTimeout(startGame, 1000);
        }
    });
    if (questionsPassed === questionArray.length) {
        stopTimer();
        //clear everything
        $("#question").empty();
        $("#answerChoices").empty();
        $("#image").empty();
        $("#fact").empty();
        $("#timer").empty();
        //display game stats
        $("#question").html("<h3>Game Over!</h3>");
        $("#answerChoices").append('<p class="stats">Correct: ' + correctAnswers + '</p>');
        $("#answerChoices").append('<p class="stats">Incorrect: ' + wrongAnswers + '</p>');
        $("#answerChoices").append('<p class="stats">Unanswered: ' + unansweredAnswers + '</p>');

        //create reset button
        var elem = $("<button>");
        // add classes to use for on-click logic
        elem.addClass("reset-btn");
        // add button text
        elem.text("Try again?");
        // append to div
        $("#answerChoices").append(elem);

        //on-click reset function
        $(".reset-btn").on("click", function () {
            correctAnswers = 0;
            wrongAnswers = 0;
            unansweredAnswers = 0;
            questionsPassed = 0;
            $("#question").empty();
            $("#answerChoices").empty();
            startGame();
        });
    }
}

function startTimer() {
    //reset timer to 30 sec
    time = 20;
    if (isRunning == false) {
        //timer is set to decrement by 1 sec
        intervalId = setInterval(countDown, 1000);
        isRunning = true;
    }
}
function stopTimer() {
    isRunning = false;
    clearInterval(intervalId);
}
function countDown() {
    //display the timer on html
    $("#timer").html("<h5>Time remaining: " + (parseInt(time) - 1) + "<h5>")
    //decrement time
    time--;
    console.log("Time: " + time);

    //if time reaches 0...
    if (time == 0) {
        unansweredAnswers++;
        questionsPassed++;
        //stop the timer
        stopTimer();
        //clear everything
        $("#question").empty();
        $("#answerChoices").empty();
        $("#timer").empty();
        //display correct answer, picture, and fact
        $("#question").html("<h3>Oops! Time's up!</h3>");
        $("#image").append('<img src="' + chosenQuestion.image + '" height="200px">');
        $("#fact").html(chosenQuestion.fact);
        //setTimeout to display next question after 3 seconds
        setTimeout(startGame, 3000);
    }
}