result.onclick=function(){

    startWrapper.style.display="none"
    finishWrapper.style.display="block"

    let dateOfBirth=new Date(document.getElementsByName("dateOfBirth")[0].value)
    let Lifetime=document.getElementsByName("Lifetime")[0].value
    let achievedGoal=document.getElementsByName("achievedGoal")[0].value
    let currentGoal=document.getElementsByName("currentGoal")[0].value
    let futureGoal=document.getElementsByName("futureGoal")[0].value
    let z=0;
    let diffTime=new Date(dateOfBirth.valueOf()+(1000*60*60*24*360*Lifetime))
    let livedLife=0; //содержит колличество уже прожитых недель
    

    
    for(var j=1 ,i=dateOfBirth.valueOf() ;i<diffTime.valueOf();i+=(1000*60*60*24*7), j++){
        let newRectangle=document.createElement("div");
        newRectangle.title=j+"-я неделя."
        flexArea.appendChild(newRectangle);
        if(i<Date.now()){
            flexArea.children[(j-1)].style.border="1px solid red"
            newRectangle.title+=" Прожитая неделя"
        }
        else if(z==0 && i>Date.now()){
            z++
            livedLife=j-1;
            flexArea.children[(j-1)].style.border="3px solid blue"
            newRectangle.title+=" Вы находитесь сдесь."
        }
    }
    for(var index=0, x=j/100, c=0;c<livedLife;index++, c+=x)
    finishWrapper.children[0].innerText="Вы прожили "+livedLife+" недель это примерно "+index+"% от предпологаемого срока вашей жизни, за это время вы достигли: \n"+achievedGoal;
    finishWrapper.children[2].innerText="Вы сейчас проживаете "+(Number(livedLife)+1)+" неделю своей жизни, вашей целью на данный момент является: \n"+currentGoal;
    finishWrapper.children[3].innerText="Предположительно вы проживете еще "+(j-livedLife)+" недель, вам еще предстоит сделать:\n"+futureGoal;

}