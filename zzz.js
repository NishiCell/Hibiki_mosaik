document.addEventListener("DOMContentLoaded",function(){

document.getElementById("B2").addEventListener("click", function(){
        document.getElementById("target").style.visibility="hidden";
});

document.getElementById("B1").addEventListener("click", function(){
        document.getElementById("target").style.visibility="visible";
});


document.getElementById("pushit").addEventListener("click", function(){
        document.getElementById("about").innerHTML="消せます";
});

})