$(document).ready(function() {

    $("#myInput").focus();

    let wordsIndex = 0;
    let wordsIndexPL = wordsIndex;
    let wordsIndexEN = wordsIndex;
    let words = wordsPL;


    // obsługa zmiany flagi z EN na PL (ustawiam język EN w grze)
    $("#flagEN").on("click", function() {

        $("#joke-form")[0].reset();
        $("#myInput").focus();
        wordsIndexPL = wordsIndex;
        wordsIndex = wordsIndexEN;
        words = wordsEN;

        let innerWord = words[wordsIndex];
        $(".scrambled").html(innerWord.scrable);

        $("#flagEN").toggleClass("visible flagHidden");
        $("#flagPL").toggleClass("visible flagHidden");
        $("#lang1").text("Jeszcze raz polskie?");
    });


    // obsługa zmiany flagi z PL na EN (ustawiam język PL w grze)
    $("#flagPL").on("click", function() {

        $("#joke-form")[0].reset();
        $("#myInput").focus();
        wordsIndexEN = wordsIndex;
        wordsIndex = wordsIndexPL;
        words = wordsPL;

        let innerWord = words[wordsIndex];
        $(".scrambled").html(innerWord.scrable);

        $("#flagPL").toggleClass("visible flagHidden");
        $("#flagEN").toggleClass("visible flagHidden");
        $("#lang1").text("A może angielskie słówka?")
    });



    //obsługa przycisku "Sprawdź"
    $("#joke-form").on("submit", function (event) {
        event.preventDefault();

        let answer = $("#joke-form").find("input").val().toUpperCase();
        let innerWord = words[wordsIndex];

        if (answer === innerWord.correct) {
            if (wordsIndex === words.length - 1) {
                wordsIndex = 0;
            }
            else wordsIndex++;

            $("#checking")
                .text("Brawo!!!")
                .addClass("visible");
            $("#nextWordButton").addClass("visible")
                .focus();
        } else {
            $("#checking")
                .text("Spróbuj jeszcze raz...")
                .addClass("visible");
            $("#myInput").focus();
        }
    });

    // obsługa przycisku "Następne słowo"
    $("#nextWordButton").on("click", function (event) {
        event.preventDefault();

        //usuwa zawartość input po kliknięciu w "Następne słowo"
        $("#joke-form")[0].reset();
        $("#myInput").focus();

        let innerWord = words[wordsIndex];

        $(".scrambled").html(innerWord.scrable);
        $("#nextWordButton").removeClass("visible").addClass("hidden");
        $("#checking").removeClass("visible").addClass("hidden");
    });

    //obsługa przycisku "Zacznij od początku"
    $("#clearButton").on("click", function () {
        $("#joke-form")[0].reset();
        $("#myInput").focus();
        wordsIndex = 0;
        let innerWord = words[wordsIndex];
        $(".scrambled").html(innerWord.scrable);
    })

});


