result.onclick=function(){
    startWrapper.style.height="0px"
    let dateOfBirth=new Date(document.getElementsByName("dateOfBirth")[0].value)
    let Lifetime=document.getElementsByName("Lifetime")[0].value
    let achievedGoal=document.getElementsByName("achievedGoal")[0].value
    let currentGoal=document.getElementsByName("currentGoal")[0].value
    let futureGoal=document.getElementsByName("futureGoal")[0].value
    let z=0;
    let diffTime=new Date(dateOfBirth.valueOf()+(1000*60*60*24*360*Lifetime))

    for(var j=1 ,i=dateOfBirth.valueOf() ;i<diffTime.valueOf();i+=(1000*60*60*24*7), j++){
        let newRectangle=document.createElement("div");
        newRectangle.title=j+"-я неделя"
        flexArea.appendChild(newRectangle);
        if(i<Date.now())
        flexArea.children[(j-1)].style.border="1px solid red"
        else if(z==0 && i>Date.now()){
            z++
            flexArea.children[(j-1)].style.border="3px solid blue"
            newRectangle.title+=". Вы находитесь сдесь."
        }
    }
    
}