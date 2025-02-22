document.getElementById("loginForm").addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPassword").value;

  // Basic validation
  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    let storedUser = new Array();
    storedUser = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    if (storedUser.some((v) => {
      return v.email == email && v.password == password;
    })) {
      alert("Login Successful!");
      let currentUser = storedUser.filter((v) => {
        return v.email == email && v.password == password
      })[0];
      localStorage.getItem('users', currentUser);
      window.location.href = "index.html";
    } else {
      alert("Invalid user email or password. Please try again.");
    }
  } catch (error) {
    console.error("Error saving data:", error);
    alert("An error occurred while signing up.");
  }

});
