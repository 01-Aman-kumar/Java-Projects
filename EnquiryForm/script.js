let form=document.querySelector("#formData")
let tbody=document.querySelector(".tbody")

let btn=document.querySelector(".btn")
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let fullname=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let phone=document.querySelector("#phone").value;
    let message=document.querySelector("#message").value;
    console.log(fullname,email,phone,message)
    const newRow=document.createElement("tr");
    newRow.innerHTML=`
    <td>${fullname}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${message}</td>
    `;
    tbody.appendChild(newRow);
    form.reset();
    
})
// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     const name=document.getElementById("name").value;
//     const emial=document.getElementById("email").value;
//     const phone=document.getElementById("phone").value;
//     const message=document.getElementById("message").value;
    

// })