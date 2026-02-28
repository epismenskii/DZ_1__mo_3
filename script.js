var textColor = prompt("Введите цвет для фона страницы, например red, green, pink и т.п.:");

var textBlock = document.querySelector("#text");

if (textColor) {
    textBlock.style.backgroundColor = textColor;
    if (textBlock.style.backgroundColor == "black") {
        document.querySelector("#text").style.color = "white";
    }
    if (textBlock.style.backgroundColor !== "") {
        document.body.style.backgroundColor = textColor;
        textBlock.innerText = "Фон изменён на " + textColor;
    } 
    else {
        textBlock.innerText = "Ошибка! Введите корректный цвет";
    }
}

var light = prompt("Введите свет светофора (red/yellow/green):")


if (light == null || light == "") {
    alert ("Вы ничего не ввели!")
}
else {
    if (light == "red" || light == "красный") {
        document.querySelector(".red").style.backgroundColor = "red"
        document.querySelector(".title__red").style.visibility = "visible"
    }
    else if (light == "yellow" || light == "желтый") {
        document.querySelector(".yellow").style.backgroundColor = "orange"
        document.querySelector(".title__yellow").style.visibility = "visible"
    }
    else if (light == "green" || light == "зеленый") {
        document.querySelector(".green").style.backgroundColor = "green"
        document.querySelector(".title__green").style.visibility = "visible"
    }
    else {
        alert ("Введите цвет для светофора (red/yellow/green) или (красный/желтый/зеленый)!")
    }
}