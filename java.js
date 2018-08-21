var player = document.getElementById("player");
function moveRect(e) {
    switch (e.keyCode) {
    case 38:   // если нажата клавиша вверх
        player.style.marginTop = 38 + "vh";
        break;
    case 40:   // если нажата клавиша вниз
        player.style.marginTop = 48 + "vh";
        break;
    }
}
addEventListener("keydown", moveRect);