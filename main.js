window.onload=function(){
    const answer=document.getElementById("code")
    const button=document.getElementById("button");
    button.onclick=function(){}
    
    answer.onchange=function(e){
        let number=9893078826;
        if(e.target.value==number){
            window.location.href="complete.html";
        }
        else{
            alert("Wrong code, try again!")
        }
    }

}
