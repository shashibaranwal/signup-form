// let signinBtn = document.getElementById("signinBtn");
// let signupBtn = document.getElementById("signupBtn");
// let nameField = document.getElementById("nameField");
// let title = document.getElementById("title");


// signinBtn.onclick = function(){
//   nameField.style.maxHeight = "0";
//   nameField.style.border = "0";
//   title.innerHTML = "Sign In";
//   signupBtn.classList.add("disable");
//   signinBtn.classList.remove("disable");
// }

// signupBtn.onclick = function(){
//   nameField.style.maxHeight = "65px";
//   nameField.style.border = "1px solid rgb(170, 170, 170)";
//   title.innerHTML = "Sign Up";
//   signinBtn.classList.add("disable");
//   signupBtn.classList.remove("disable");
// }

document.getElementById("signupForm").addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPassword").value;

  // Basic validation
  if (!username || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  let newUser = { username, email, password };
  
  try {
    // let users = new Array();
    // let users = JSON.parse(localStorage?.getItem('users')) ? JSON.parse(localStorage.getItem("users")):"";
    localStorage.setItem("user", JSON.stringify(newUser))
    
    // if(users.some((v) => {
    //   return v.email == email || v.username == username;
    // })){
    //   alert("either duplicate username or email")
    // } else {
    //   users.push(newUser);

    //   localStorage.setItem('users', JSON.stringify(users));
    //   alert("Signup successful");
    //   window.location.href = "login.html";
    // }
    // users.push(newUser);

  } catch (error) {
    console.error("Error saving data:", error);
    alert("An error occurred while signing up.");
  }
});
