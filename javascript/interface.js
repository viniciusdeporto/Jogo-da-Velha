

let squares = document.querySelectorAll(".square");

squares.forEach((square) => {

    square.addEventListener('click', handleClick);

})



function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert("O Jogo Acabou!" + " Jogador " + playerTime + " Ganhou!");

            if(gameOver){
                restartGame();
             }

        }, 10)

   


    };
    upDateSquares();


}


function upDateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];

        if (symbol != "") {
            square.innerHTML = `<div class='${symbol}'></div>`;
        }

    })

}

let reiniciar = document.getElementById("resetarJogo");
reiniciar.addEventListener('click', restartGame);






