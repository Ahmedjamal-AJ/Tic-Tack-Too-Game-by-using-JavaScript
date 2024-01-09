let btn = document.querySelectorAll(".button-option");
let popup = document.querySelector(".popup");
let newGameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msg = document.getElementById("message");


let winningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0, , 4,8],
    [2,4,6],
];

let xTurn = true;
let count = 0;


const disableButtons = () => {
    btn.forEach((e) => (e.disabled = trun));
popup.classList.remove("");

};

const enableButtons = ()  => {
    btn.forEach((e) => {
        e.innerHTML = "";
        e.disabled = false;
    });


popup.classList.add("hide");
};

const winFunction = (letter) => {
    disableButtons();
    if(letter == "X"){
        msg.innerHTML = "&#x1F389; <br> 'X' Wins";
    }
    else{
        msg.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
    
};

const  drawFunction = () => {
    disableButtons();
    msg.innerHTML = "&#x1F389; <br> It's a Draw";
    
};

newGameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});



const winChecker = () => {
    for(let i of winningPattern){
        let[e1, e2, e3] = [
            btn[i[0]].innerHTML,
            btn[i[1]].innerHTML,
            btn[i[2]].innerHTML,
        ];

if(e1 != "" && (e2 != "") & (e3 != ""))
        {
        if(e1 == e2 && e2  == e3){


winFunction(e1);
            }
        }
    }
};

btn.forEach((e) => {
    e.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            e.innerHTML = "X"
            e.disabled = true;
        }
        else {
            xTurn = true;
            e.innerHTML = "O"
            e.disabled = true;
        }

        count += 1;
        if(count == 9){
        drawFunction();
        }
    
    winFunction();
    });
});

window.onload = enableButtons;