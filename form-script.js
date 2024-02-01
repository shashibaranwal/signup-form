let signinBtn = document.getElementById("signinBtn");
let signupBtn = document.getElementById("signupBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");


signinBtn.onclick = function(){
  nameField.style.maxHeight = "0";
  nameField.style.border = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
  nameField.style.maxHeight = "65px";
  nameField.style.border = "1px solid rgb(170, 170, 170)";
  title.innerHTML = "Sign Up";
  signinBtn.classList.add("disable");
  signupBtn.classList.remove("disable");
}
