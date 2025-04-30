let inputs = document.querySelector("#input");
let text=document.querySelector(".text");
let btn1=document.querySelector(".btn1");
btn1.addEventListener("click",()=>{
    let value=inputs.value;
    if(value=="") return;
    let delbtn=document.createElement("button");
    delbtn.textContent="Delete";
    let li=document.createElement("li");
    li.innerHTML=value;
    
    li.appendChild(delbtn);
    text.prepend(li)
    console.log(text);
    delbtn.addEventListener("click",()=>{
        li.remove();
    })
    inputs.value="";
})