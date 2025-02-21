document.getElementById("loginForm").addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPassword").value;

  // Basic validation
  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if(!storedUser){
    alert("No user found!!");
  }

  if(storedUser.email === email && storedUser.password === password){
    alert("Login successful!!");
    window.location.href = "index.html";
  } else {
    alert("Invalid user email or password. Please try again.");
  }

});
