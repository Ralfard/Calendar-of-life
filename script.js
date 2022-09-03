result.onclick=function(){
    result.style.backgroundColor="green"
    let dateOfBirth=document.getElementsByName("dateOfBirth")[0].value
    let Lifetime=document.getElementsByName("Lifetime")[0].value
    let achievedGoal=document.getElementsByName("achievedGoal")[0].value
    let currentGoal=document.getElementsByName("currentGoal")[0].value
    let futureGoal=document.getElementsByName("futureGoal")[0].value

    console.log(dateOfBirth);
    console.log(Lifetime);
    console.log(achievedGoal);
    console.log(currentGoal);
    console.log(futureGoal);

    let diffTime=dateOfBirth+(Lifetime)
}