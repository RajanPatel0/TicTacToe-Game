let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgbtn=document.querySelector("#new-btn");
let msgcontain=document.querySelector(".msg-contain");
let msg=document.querySelector("#msg");

// let arr=["apple","banana","litchi"];  //1D Array,2D below
let winpattern=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,4,6],
   [2,5,8],
   [3,4,5],
   [6,7,8],
];

const resetgame=()=>{
   turnO=true;
   let count=0;
   enableboxes();
   msgcontain.classList.add("hide");
};

let count =0;
let turnO=true;//playerX,playerY -- entry start
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
      // console.log("box was clicked");
      // let count=0;
      if(turnO){
         box.innerText="O";
         box.classList.add("discolor");
         box.classList.remove("discolor1");
         turnO=false;
      }else{
         box.innerText="X"
         box.classList.add("discolor1");
         box.classList.remove("discolor");
         turnO=true;
      }
      box.disabled=true;
      count++;
      checkwinr();

      if(count===9 && !checkwinr()){
         gamedraw();
      }
   });
});

const gamedraw=()=>{
   msg.innerText=`Its a draw-NO WINNER`;
   msgcontain.classList.remove("hide");
   disableboxes();
};


const disableboxes=()=>{
   for(let box of boxes){
      box.disabled=true;
   }
};
const enableboxes=()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
      // box.classList.innerText.add("hide")//-it hides all boxes
   }
};

const showwinr=(winner)=>{
   msg.innerText=`Congratulations!  winner is ${winner}`;
   msgcontain.classList.remove('hide');
   disableboxes();
};

const checkwinr=()=>{
   for(let pattern of winpattern){
      // console.log(
      //    pattern[0],
      //    pattern[1],
      //    pattern[2],
      // );
      // console.log(
      //    boxes[pattern[0]].innerText,
      //    boxes[pattern[1]].innerText,
      //    boxes[pattern[2]].innerText,
      // );
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;

      if(pos1val!="" && pos2val!="" && pos3val!=""){
         if(pos1val===pos2val && pos2val===pos3val){
            // console.log("Winner",pos3val);
            showwinr(pos3val);
            return true;
         } 
      }
   }
}; 

newgbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
