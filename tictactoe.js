let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX,playerO
let click_count = 0;
// let win = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    click_count = 0;
    // win = false;
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turnO) {//playerO
            box.innerHTML = "O";
            box.style.color = "blue";
            turnO = false;
            click_count = 0;
        } else {//playerX
            box.innerHTML = "X";
            turnO = true;
            click_count = 0;
        }
        box.disabled = true;

        // checkWinner();
    });
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        click_count++;
        console.log(click_count);
        if (click_count >= 9) {
            checkWinner() === false;
            matchDraw();
            click_count = 0;
        }
        else
        {
            checkWinner();
        }
    });
});

const matchDraw = () => {
    msg.innerHTML = "Match is draw";
    msgContainer.classList.remove("hide");
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerHTML,
        //     boxes[pattern[1]].innerHTML,
        //     boxes[pattern[2]].innerHTML
        // );

        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val)
                // console.log("winner", pos1val);
                // win = true;
            showWinner(pos1val);
        }
        // else if (click_count == 9 && win === false) {
        //     draw();
        // }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);