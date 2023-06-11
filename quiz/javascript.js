var skip=document.getElementById('skip');
var score=document.getElementById('score');
var totalscore=document.getElementById('totalskip');
var countdown=document.getElementById('countdown');
var count=0;
var scoreCount=0;
var duration=0;
var qaSet=document.querySelectorAll('.question_set');
var qaAnsRow=document.querySelectorAll('.question_set .qa_ans_row input');

skip.addEventListener('click',function(){
    step()
    duration=10
})

qaAnsRow.forEach(function(qaAnsRowSingle){
    qaAnsRowSingle.addEventListener('click',function(){
          setTimeout(function(){
            step();
            duration=10
          },500)

        var valid = this.getAttribute("valid");
            if(valid=="valid"){
                scoreCount+=20;
                score.innerHTML=scoreCount;
                totalscore.innerHTML=scoreCount;
            }else{
                scoreCount-=20;
                score.innerHTML=scoreCount;
                totalscore.innerHTML=scoreCount;
            }

    })
})

function step(){
    count+=1;
    for(var i=0;i<qaSet.length;i++){
        qaSet[i].className='question_set';
    }
    qaSet[count].className='question_set active';
    if (count==5){
        skip.style.display='none';
        clearInterval(durationTime);
        countdown.innerHTML=0;
    }
}

var durationTime=setInterval(function(){
    if(duration == 10){
        duration=0;
    }
    duration+=1;
    countdown.innerHTML=duration;
    if(countdown.innerHTML=="10"){
        step()
    }
},1000);