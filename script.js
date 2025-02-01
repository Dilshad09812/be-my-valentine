const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");

// YES Button Click - Change GIF & Hide Buttons
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is the most beautiful blessing of my life. You are my happiness, my peace, and my greatest love. I cherish every moment with you. 💖✨ I love you endlessly, my Bubu jaan! 😘💕";
    gif.src = "https://i.postimg.cc/dVtcJ0bQ/dudu-giving-flowers-bubu-flowers.gif"; // Change GIF
    yesBtn.style.display = "none"; // Hide Yes Button
    noBtn.style.display = "none";  // Hide No Button
});

// NO Button Click - Move Randomly (All Devices)
noBtn.addEventListener("click", () => {
    moveButton(noBtn);
});

// NO Button Hover - Move Randomly (Desktop Only)
noBtn.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) { // Desktop Only
        moveButton(noBtn);
    }
});

// Function to Move NO Button Randomly Above GIF
function moveButton(button) {
    const wrapperRect = document.querySelector(".wrapper").getBoundingClientRect();
    const gifRect = gif.getBoundingClientRect();
    
    const maxX = wrapperRect.width - button.offsetWidth - 20;
    const maxY = gifRect.top - wrapperRect.top - button.offsetHeight - 10; // Above GIF

    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const rand
