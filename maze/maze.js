$(function () {
    let state = 1;

    $("#start").on("mousedown", (function () {
        $(".boundary").removeClass("youlose");
        state = 1;
        $("#maze").on("mouseleave", (function () {
            $(".boundary").addClass("youlose");
            $("#status").text("You lost!");
            state = 0;
        }));
        $(".boundary").on("mouseenter", (function () {
            $(".boundary").addClass("youlose");
            state = 0;
        }));
        $("#end").on("mouseenter", (function () {
            if(state === 1) $("#status").text("You win!");
            else $("#status").text("You lost!");
        }));
    }));
});