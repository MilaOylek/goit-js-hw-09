import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form");let e=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};t.addEventListener("input",a=>{e[a.target.name]=a.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message)return alert("Будь ласка, заповніть всі поля");console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},t.reset()});window.addEventListener("load",()=>{e&&(t.elements.email.value=e.email,t.elements.message.value=e.message)});
//# sourceMappingURL=2-form.js.map
