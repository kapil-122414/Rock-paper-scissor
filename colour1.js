let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");

const gencomputerchoice=()=>{
    const opt  = ["rock","paper","scissors"];
    const randId= Math.floor(Math.random()*3);
 return opt [randId];

};
//draw game

const drawgame=()=>{
    console.log("DRAw game");
    msg.innerText=" Game was Draw,play again.";
    msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin,userchoice,compchoice)=>{//showwiner function
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("win the user");
        msg.innerText= `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        console.log("win the comp");
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose. ${compchoice} beats  Your ${userchoice}`;
        msg.style.backgroundColor = "red";
        
    }
};



const playgame=(userchoice)=>{
   
         //generate computer choice
         const compchoice=gencomputerchoice();
         

         if(userchoice===compchoice){
            //draw
            drawgame();

        }
        else{
             let userwin=true;
             if(userchoice==="rock"){
                //scissor,paper
               userwin =compchoice==="paper"?false:true;
               }
               else if( userchoice==="paper"){
                //rock, scissor
               userwin= compchoice==="scissor"?false:true;
               }else{
                //rock ,paper
                 userwin=compchoice==="rock"?false:true;
               }
               showwinner(userwin,userchoice,compchoice); //call by user win
        }


};

choices.forEach( (choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
     
     playgame(userchoice);//call by palygame
    });
});