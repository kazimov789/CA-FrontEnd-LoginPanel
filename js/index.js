const loginBtn = document.querySelector("#login");
const userArea = document.querySelector("#user-area");
const commentArea = document.querySelector("#comment-area");




loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const usarname = document.querySelector("#usarname").value;
  const password = document.querySelector("#password").value;
  if (usarname === "admin" && password === "admin") {
    const loginArea = document.querySelector("#login-area");
    loginArea.style.display = "none";
    userArea.style.display = "block";
  } else {
    alert("Kod Yanlisdir");
  }
});

const shareBtn = document.querySelector("#share");
const inputs = document.querySelectorAll("#input");
const inputValue = {};

inputs.forEach((input)=>{
  input.addEventListener("change",function () {
    const { name : inputName , value} = this;
    inputValue[inputName]=value;
})
});

shareBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  const shareInfos = document.querySelectorAll(".share-info");
  
  shareInfos.forEach((shareInfo)=>{
    shareInfo.innerText+=inputValue[shareInfo.id];
    
  });
  userArea.style.display="none";
  commentArea.style.display="block";
});


// shareBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     const firstname = document.querySelector("#firstname").value;
//     const lastname = document.querySelector("#lastname").value;
//     const comment = document.querySelector("#comment").value;
//     document.querySelector("#NameOfUser").innerText = firstname;
//     document.querySelector("#LastNameOfUser").innerText = lastname;
//     document.querySelector("#message").innerText = comment;

//     userArea.style.display="none";
//     commentArea.style.display="block";
// })