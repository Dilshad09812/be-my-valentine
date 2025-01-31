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

// NO Button Click - Move Randomly **Over the GIF Area**
noBtn.addEventListener("click", () => {
    moveButton(noBtn);
});

// Function to Move NO Button Randomly (Only Over GIF Area)
function moveButton(button) {
    const gif = document.querySelector(".gif");
    const gifRect = gif.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = gifRect.width - buttonRect.width - 10; // Prevent overflow
    const maxY = gifRect.height - buttonRect.height - 10; // Prevent overflow

    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    button.style.position = "absolute";
    button.style.left = `${gifRect.left + randomX}px`;  // Position inside GIF area
    button.style.top = `${gifRect.top + randomY}px`;    // Position inside GIF area
}

// Clear sessionStorage and localStorage on page reload
window.onload = function() {
    sessionStorage.clear();  // Clears session storage
    localStorage.clear();    // Clears local storage
};
