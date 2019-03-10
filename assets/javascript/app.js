var questionArray = [
    {
        question: "Who is credited as the designer of the many statues which decorated the Parthenon?",
        answerChoices: ["Praxiteles", "Phidias", "Scopas", "Hesoid"],
        correctAnswer: "Phidias",
        image: "../images/parthenon.jpg",
        fact: "The enormous number of the figures in the Parthenon, probably exceeding 500, of which 50 were colossal, and the size and complexity of the Athene, which was of gold, ivory, wood, and precious stones, standing 40 feet in height, make it impossible that these vast works could have been executed by the hand of a single artist. But Phidias is universally spoken of as the designer and presiding genius of the entire decoration; and, although some of the metopes are probably of an earlier school, the colossal groups of the pediments and the whole of the frieze have the stamp of one master mind."
    },
    {
        question: "Which artist was struck in the face with a mallet by an envious rival, disfiguring him for life?",
        answerChoices: ["Titan", "Rembrandt", "Michelangelo", "Raphael"],
        correctAnswer: "Michelangelo",
        image: "../images/michelangelo.jpg",
        fact: "While studying at the Academy of Ancient Art in the Medici Palace, Michelangelo not only developed his genius as a sculptor, but also excited the wrath of his rival, Torregiano, who struck him with a mallet, crushing the nose on his face and disfiguring him for life."
    },
    {
        question: "Which artist was best known for a painting of his mother?",
        answerChoices: ["Johannes Vermeer", "James Abott McNeil Whistler", "Pierre-August Renoir", "Francisco Goya"],
        correctAnswer: "James Abbot McNeil Whistler",
        image: "../images/arrangementgreyandblack.jpg",
        fact: "Whistler's most famous painting is Arrangement in Grey and Black No. 1 (1871), commonly known as Whistler's Mother. Anna McNeill Whistler posed for the painting while living in London with her son."
    },
    {
        question: "What art movement was Yoko Ono associated with during the 1960s?",
        answerChoices: ["Fluxus", "Dadaism", "Futurism", "Post-Impressionism"],
        correctAnswer: "Fluxus",
        image: "../images/yokoono.png",
        fact: "Yoko Ono helped to define the Fluxus movement which emerged in New York in the 60's. Part Dada, part Bauhaus and part Zen, the new aesthetic presumed that all media and all artistic disciplines were fair game for combination and fusion. Fluxus objects and performances are characterized by minimalist but often expansive gestures which often contain heavy doses of burlesque."
    },
    {
        question: "How many paintings did Vincent Van Gogh sell during his lifetime?",
        answerChoices: ["1", "27", "193", "842"],
        correctAnswer: "1",
        image: "../images/redvineyard.jpg",
        fact: "Although he created more than 900 paintings, Van Gogh sold only one during his lifetime, 'Red Vineyard at Arles' which was purchased by the sister of one of his friends."
    },
    {
        question: "Which artist sold a balloon dog for $58.4 million?",
        answerChoices: ["Jeff Koons", "Jasper Johns", "Christopher Wool", "Gerhart Richter"],
        correctAnswer: "Jeff Koons",
        image: "../images/balloondog.jpg",
        fact: "In a November 2013 sale at Christie's New York, Jeff Koons sold Balloon Dog (Orange) (a mirror-polished stainless steel sculpture) for $58.4 million, breaking the world record for the highest price ever paid for an artwork by a living artist."
    },
    {
        question: 'Who painted "The Scream"?',
        answerChoices: ["Vincent Van Gogh", "Otto Meuller", "Wassily Kandinsky", "Edvard Munch"],
        correctAnswer: "Edvard Munch",
        image: "../images/thescream.jpg",
        fact: 'Edvard Munch painted "The Scream" after a walk with two friends during which he sensed an "endless scream passing through nature". To describe this experience, he developed an exciting, violent, and emotionally charged style that is recognized by most critics as leading to the birth of German Expressionism.'
    },
    {
        question: 'Which late 19th-century French painter was known for his pictures of ballet dancers?',
        answerChoices: ["Gustave Caillebotte", "Claude Monet", "Paul Cezanne", "Edgar Degas"],
        correctAnswer: "Edgar Degas",
        image: "../images/ballerinas.jpg",
        fact: 'Edgar Degas is acknowledged as the master of drawing human figures in motion. In the early 1870s, the female ballet dancer became his favorite theme. He sketched from a live model in his studio and combined poses into groupings that depicted rehearsal and performance scenes. Although he worked in many mediums, he preferred pastels to all others.'
    },
    {
        question: 'English artist Andy Brown created a portrait of Queen Elizabeth II using what?',
        answerChoices: ["Tea bags", "Fish bones", "Socks", "Bubblegum"],
        correctAnswer: "Tea bags",
        image: "../images/andybrown.jpg",
        fact: 'English artist Andy Brown created a portrait of Queen Elizabeth II out of 1000 used and unused tea bags!'
    },
    {
        question: 'Which art critic coined the term "impressionism?',
        answerChoices: ["Jacob Burckhardt", "John Ruskin", "Roger Fry", "Louis Leroy"],
        correctAnswer: "Louis Leroy",
        image: "../images/impressionism.jpg",
        fact: 'Louis Leroy, an art critic for the French newspaper Le Charivari, coined the term "impressionists" to satirize the artists involved in an 1874 art show entitled The Exhibition of Impressionists. In his review, he wrote: "Impression I was certain of it. I was just telling myself that, since I was impressed, there had to be some impression in it -- and what freedom, what ease of workmanship! A preliminary drawing for a wallpaper pattern is more finished than this seascape." The term was subsequently adopted by the artists themselves and has become the name of one of the most influential movements in the history of art.'
    }
]

var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredAnswers = 0;
var countdown = 30;
var isRunning = false;
var intervalId;

//Game begins after clicking start button
$("#start").on("click", function(){
    $(".titlepage").empty();
    displayQuestion();
});

//this function displays both the questions and answer choices 
function displayQuestion(){
    $("#question").empty();
    $("#answerchoices").empty();
    //we're going to randomize the questions to be displayed
    var randomIndex = Math.floor(Math.random() * questionArray.length);
    var chosenQuestion = questionArray[randomIndex];
    console.log(chosenQuestion.question);
    //now we display it to the html
    $("#question").html("<h3>" + chosenQuestion.question + "</h3>");
    
    //now we need to display the answer choices
    $("#answerChoices").append("<p class='answer'>" + chosenQuestion.answerChoices[0] + "</p>");
    $("#answerChoices").append("<p class='answer'>" + chosenQuestion.answerChoices[1] + "</p>");
    $("#answerChoices").append("<p class='answer'>" + chosenQuestion.answerChoices[2] + "</p>");
    $("#answerChoices").append("<p class='answer'>" + chosenQuestion.answerChoices[3] + "</p>");
}

$(".answer").on("click", function(){
    var userAnswer = $(this).html();
    console.log(userAnswer);


});

function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    isRunning = true;
    countdown--;
  }