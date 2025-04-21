let userSeq = [];
let gameSeq = [];
let highest=0;
let btns = ["red", "yellow", "green", "purple"];

let level=0;
let started = false;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(!started){
        started= true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250); 
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },250); 
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let rndm = Math.floor(Math.random() * 4);
    rndm = btns[rndm];
    gameSeq.push(rndm);
    console.log(gameSeq);
    let btn = document.querySelector(`.${rndm}`);
    btnFlash(btn);

}

function checkSeq(idx){
    if(started){
        if(gameSeq[idx] === userSeq[idx]){
            if(userSeq.length == gameSeq.length){
                setTimeout(levelUp,1000);
            }
        }
        else{
            if(highest<level){ highest=(level-1)};
            h2.innerText = `Game Over! Your score was ${level -1 }. \n Press any key to start over. \n Highest Score: ${highest}`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(()=>{
                document.querySelector("body").style.backgroundColor="white";
            },250);
            reset();
        }
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userSeq.push(btn.id);
    console.log(userSeq);

    checkSeq(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    level = 0;
    userSeq=[];
    gameSeq=[];
}