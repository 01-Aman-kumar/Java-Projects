let inputElement=document.querySelector("#input")

let btn=document.querySelector(".btn")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(btn.innerHTML=="Show"){
    inputElement.type='text';
    btn.innerHTML="Hide";
    }else{
        inputElement.type='password';
        btn.innerHTML="Show"; 
    }
})