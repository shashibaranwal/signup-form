if (window.location.pathname.includes("index.html")) {
    try {
        const savedUser = JSON.parse(localStorage.getItem('users'));
        const portfolioData = document.getElementById("portfolio");

        if (portfolioData) { 
            if (savedUser) {
                portfolioData.innerHTML = `
                    <p><strong>Name:</strong> ${savedUser.username}</p>
                    <p><strong>Email:</strong> ${savedUser.email}</p>
                `;
            } else {
                console.error("No user data found in local storage.");
            }
        } else {
            console.error("Element with id 'portfolio' does not exist.");
        }
    } catch (error) {
        console.error("Error parsing localStorage:", error);
    }
}
