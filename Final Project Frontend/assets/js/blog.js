var accordion=document.getElementsByClassName('accordion')
var i;
for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.add("active");
        var panel=this.nextElementSibling;
        console.log()
        if(panel.style.display==="block"){
            panel.style.display="none";
        }else{
            panel.style.display="block";
        }
    });
}