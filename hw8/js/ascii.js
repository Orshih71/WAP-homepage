"use strict";
let speed = 250;
let curFrame = 0;
let myFunc;
let frames;
function startPlay() {
    $("#start").attr("disabled", true);
    $("#stop").attr("disabled", false);
    $('#txtArea').prop('disabled', true);
    $('#selAnimation').prop('disabled', true);
    frames = $("#txtArea").val().split("=====\n");
    curFrame = 0;
    myFunc = setInterval(intervalPlay, speed);
}

function intervalPlay() {
    clearInterval(myFunc);
    if (curFrame === frames.length) curFrame = 0;
    $("#txtArea").val(frames[curFrame]);
    curFrame++;
    myFunc = setInterval(intervalPlay, speed);
}

function stopPlay() {
    $("#start").attr("disabled", false);
    $("#stop").attr("disabled", true);
    $('#txtArea').prop('disabled', false);
    $('#selAnimation').prop('disabled', false);
    clearInterval(myFunc);
}

function onchangeAnimation() {
    let selected = $("#selAnimation").val();
    $("#txtArea").val(ANIMATIONS[selected]);
}

function onchangeSize() {
    let size = $("#selSize").val();
    $("#txtArea").css("fontSize", size);
}

function onchangeSpeed() {
    speed = document.getElementById('chkSpeed').checked ? 50 : 250;
}