
score=0;
cross=true;

audiog=new Audio('music.mp3');
audiogameover=new Audio('gameover.mp3');


setTimeout(() => {
    audiog.play()
},1000);


document.onkeydown=function(e)

{
    var key=e.value;
    var code=e.keyCode;
    console.log("key code is",code);


   // console.log("key code is:" , event.KeyCode)

if(code==38)
{
   dino=document.querySelector('.dino')
   dino.classList.add('animatedino');
   setTimeout(()=> {
       dino.classList.remove('animatedino')

   },700); 
}


if(code==39)
{
    dino=document.querySelector('.dino');
    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=(dinox+112)+"px";
}
if(code==37)
{
    dino=document.querySelector('.dino');
    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=(dinox-112)+"px";
}
}
setInterval(()=>{
    
dino=document.querySelector('.dino');
obstacle=document.querySelector('.obstacle');
gameover=document.querySelector('.gameover');
dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

offsetx=Math.abs(dx-ox);
offsety=Math.abs(dy-oy);
if(offsetx<93 && offsety<52)
{
    gameover.innerHTML="Game Over- Reload to Start Again"
    obstacle.classList.remove('obstacleAni');
    

   // obstacle.classList.add('obtacledestroy');
    audiogameover.play();
    setTimeout(() => {
        audiogameover.pause();
        audiog.pause();
    }, 1000);
    
}else if(offsetx<65&&cross){
    score+=1;
    console.log(score);
    cross=false;
    update(score);
    setInterval(()=>{
      cross=true;
    },1000);
    
}

},100);

function update(score)
{
    scorecount.innerHTML="Your Score: " +score
}