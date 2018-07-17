$(document).ready(function() {

    $("#myInput").focus();

    let wordsIndex = 0;

    let words = [
        {
            correct: "KOTEK",
            scrable: "KEOTK"
        },
        {
            correct: "JABŁKO",
            scrable: "JOKAŁB"
        },
        {
            correct: "DOMEK",
            scrable: "DEOKM"
        },
        {
            correct: "BANAN",
            scrable: "BAANN"
        },
        {
            correct: "PIES",
            scrable: "PSEI"
        },
        {
            correct: "WAKACJE",
            scrable: "WEJAKCA"
        },
        {
            correct: "BLUZA",
            scrable: "BALZU"
        },
        {
            correct: "OGÓREK",
            scrable: "OREKÓG"
        },
        {
            correct: "MORZE",
            scrable: "MEORZ"
        },
        {
            correct: "PODRÓŻ",
            scrable: "PRŻÓDO"
        },
        {
            correct: "PLAŻA",
            scrable: "PALAŻ"
        },
        {
            correct: "PARASOL",
            scrable: "PLORASA"
        }
    ];


    $("#joke-form").on("submit", function (event) {
        event.preventDefault();

        let answer = $("#joke-form").find("input").val().toUpperCase();
        //console.log(answer);

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

    $("#nextWordButton").on("click", function (event) {
        event.preventDefault();
        $("#joke-form")[0].reset();
        $("#myInput").focus();

        let innerWord = words[wordsIndex];
        //console.log(innerWord.scrable);

        $(".scrambled").html(innerWord.scrable);
        $("#nextWordButton").removeClass("visible").addClass("hidden");
        $("#checking").removeClass("visible").addClass("hidden");
    });

});
