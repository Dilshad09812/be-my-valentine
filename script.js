const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// YES Button Click - Change GIF & Hide Buttons
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is the most beautiful blessing of my life. You are my happiness, my peace, and my greatest love. I cherish every moment with you. 💖✨ I love you endlessly, my Bubu jaan! 😘💕";
    gif.src = "https://i.postimg.cc/dVtcJ0bQ/dudu-giving-flowers-bubu-flowers.gif"; // Change GIF
    yesBtn.style.display = "none"; // Hide Yes Button
    noBtn.style.display = "none";  // Hide No Button
});

// NO Button Click - Move Randomly Anywhere
noBtn.addEventListener("click", () => {
    moveButton(noBtn);  // Move the button randomly anywhere on the page
});

// Function to Move NO Button Randomly (Anywhere on the page)
function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth - 10; // Prevent overflow
    const maxY = window.innerHeight - button.offsetHeight - 10; // Prevent overflow

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;  // Random horizontal position
    button.style.top = `${randomY}px`;   // Random vertical position
}

// Clear sessionStorage and localStorage on page reload
window.onload = function() {
    sessionStorage.clear();  // Clears session storage
    localStorage.clear();    // Clears local storage
};
