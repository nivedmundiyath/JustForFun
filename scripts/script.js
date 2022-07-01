console.log("Welcome to the game")

let turn = 'X';
let gameOver= false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check win
const checkWin= ()=> {
    let boxTexts = document.getElementsByClassName("tickbox");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach( e => {
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== ''))
        {
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won"
            gameOver=true;
        }
    })

}

//Game win

let boxes = document.getElementsByClassName("cell");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".tickbox");
    element.addEventListener('click', ()=> {
        console.log(boxText);

        if (boxText.innerText === "") {
            boxText.innerText= turn;
            turn=changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
          

        }
    })
})

//Add onclick listner to reset button

reset.addEventListener('click', ()=>
{
    console.log('Reset');
    let boxTexts = document.querySelectorAll('.tickbox');
    Array.from(boxTexts).forEach(element => {
        element.innerText= "";
    });
    turn='X';
    gameOver= false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

})