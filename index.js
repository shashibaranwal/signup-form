if (window.location.pathname.includes("index.html")) {

    const savedUser = JSON.parse(localStorage.getItem('users'));
    const portfolioData = document.getElementById("portfolio");

    if (savedUser) {
        portfolioData.innerHTML = `
                    <p><strong>Name:</strong> ${savedUser.username}</p>
                    <p><strong>Email:</strong> ${savedUser.email}</p>
                `;
    } else {
        console.error("No user data found in local storage.");
    }
}

