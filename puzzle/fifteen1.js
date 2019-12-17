let lastPiece = 15;
function setMoveAblePiece() {
    let divs = document.getElementById('puzzlearea').getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        if (lastPiece - 4 === i || lastPiece - 1 === i || lastPiece + 1 === i || lastPiece + 4 === i) {
            if (!divs[i].classList.contains("movablepiece"))
                divs[i].classList.add("movablepiece");
        } else {
            divs[i].classList.remove("movablepiece");
        }
    }
    console.log(lastPiece);
}

function checkAndSwap(div) {
    let x = div.x;
    let y = div.y;
    let i = x / 100 + y / 100 * 4;
    if (i - 4 === lastPiece || i - 1 === lastPiece || i + 1 === lastPiece || i + 4 === lastPiece) {
        div.x = ((lastPiece % 4) * 100);
        div.y = (Math.floor(lastPiece / 4) * 100);
        div.style.left = div.x + "px";
        div.style.top = div.y + "px";
        lastPiece = i;
        setMoveAblePiece();
    }
}

window.onload = function () {
    let puzzleArea = document.getElementById('puzzlearea');
    let divs = puzzleArea.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        let div = divs[i];

        let x = ((i % 4) * 100);
        let y = (Math.floor(i / 4) * 100);

        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        div.x = x;
        div.y = y;
        div.onclick = function () {
            checkAndSwap(this);
        };
    }
    setMoveAblePiece();
};
