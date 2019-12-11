function startTimer() {
    window.setInterval(changeTextSize, 500);
}

function changeTextSize() {
    let txtArea = $("#txtArea");
    let txtSize = (parseFloat(txtArea.css("fontSize")) * 3) / 4;
    txtSize += 2;
    txtArea.css("fontSize", txtSize + "pt");
}

function isVowel(val) {
    if (val == null) return false;
    let regex = "^[a|e|i|o|u|A|E|I|O|U]";
    let pattern = new RegExp(regex);
    return pattern.test(val);
}

function pigLatin() {
    let txtValue = $("#txtArea").val();
    let vals = txtValue.split(" ");
    vals = vals.map(e => isVowel(e) ? e + "ay" : e.substr(1, e.length - 1) + e.substr(0, 1) + "ay");
    txtValue.val(vals.join(" "));
}

function malkovitch() {
    let txtValue = $("#txtArea").val();
    let vals = txtValue.split(" ");
    vals = vals.map(e => e.length >= 5 ? "Malkovitch" : e);
    txtValue.val(vals.join(" "));
}

function onchangeBling() {
    let chechbox = document.getElementById("bling");
    let textArea = document.getElementById("txtArea");
    if (chechbox.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";

    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }
}