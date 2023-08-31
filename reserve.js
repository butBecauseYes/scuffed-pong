//storage for functions i will need later

function paddleInCanvas(){
    if(((wristYAverages)/100 * canvas.height)+paddle1Height > height){
      wristYAverages=height-paddle1Height;
    }
    if(wristYAverages < 0){
      wristYAverages = 0;
    }  
  }

//this AMAZING function was literally preventing me from figuring out was wrong
//it took me multiple hours to figure out consistent paddle movement when you have garbage ai and then another thirty minutes to get this
//i'm so happy yay mhm yes yes