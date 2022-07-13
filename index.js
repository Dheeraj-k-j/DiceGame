function myFunction() {
    let i = Math.floor(6 * (Math.random()) + 1);
    let value1 = "images/dice" + i + ".png";
    document.querySelector(".firstHalf .image img").setAttribute("src", value1);

    let j = Math.floor(6 * (Math.random()) + 1);
    let value2 = "images/dice" + j + ".png";
    document.querySelector(".secondHalf .image img").setAttribute("src", value2);

    if (i > j) {
        document.querySelector("h1").innerHTML = "Player 1 Won";
    }
    else if (j > i) {
        document.querySelector("h1").innerHTML = "Player 2 Won";
    }
    else{
        document.querySelector("h1").innerHTML = "It is a Draw";
    }
}