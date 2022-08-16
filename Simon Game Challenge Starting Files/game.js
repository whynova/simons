
var butcol = ["red", "blue", "green", "yellow"];
var path = [];
var userpath=[];

var started = false;
var level =0;

$(document).keypress(function(){
  if(!started)
  {
    $("#level-title").text("level "+level);
    newseq();
    started= true;
  }
});

$(".btn").click(function()
{
  var userccolour = $(this).attr("id");
  userpath.push(userccolour);
  //console.log(userpath);
  playsound(userccolour);
  pressme(userccolour);

  checkanswer(userpath.length-1);
}
);

function checkanswer(currlev){
  if(path[currlev]===userpath[currlev]){
    console.log("right");
    if(path.length === userpath.length)
    {
      setTimeout(function(){
        newseq();},1000);
    }

  }
  else
  {
    console.log("wrong");
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 1000);
  $("#level-title").text("Game Over, Press Any Key to Restart");
  startover();
  }
}
function startover(){
  level=0;
  path =[];
  started = false;
}

function newseq(){
  userpath=[];
  level++;
  $("#level-title").text("Level "+level);
  var rnum = Math.random()*4;
  rnum = Math.floor(rnum);
  var rccolour = butcol[rnum];
  path.push(rccolour);
  $("#"+rccolour).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(rccolour);
}
 function playsound(name)
 {
   var audio = new Audio("sounds/"+name+".mp3");
   audio.play();
 }
 function pressme(name)
 {
   $("#"+name).addClass("pressed");
   setTimeout(function () {
     $("#"+name).removeClass("pressed");
   }, 100);
 }
