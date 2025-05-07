let Form=document.querySelector("#Form");
let error=document.querySelector(".error")
Form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const username=document.getElementById("name").value.trim();
    const phone=document.getElementById("phone").value.trim();
    const email=document.getElementById("email").value.trim();
    const message=document.getElementById("message").value.trim();
    
    if(username.length<3){
        error.innerHTML="plz enter your valid name"
    }else if(!email.includes("@")){
        error.innerHTML="plz enter valid email"
    }else if(phone.length<10){
        error.innerHTML="enter valid phone number"
    }else{
        error.innerHTML="";
        alert("Form submit successfully");
        Form.reset();
    }
    
})