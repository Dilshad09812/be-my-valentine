const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// YES Button Click - Change GIF & Hide Both Buttons
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is the most beautiful blessing of my life. You are my happiness, my peace, and my greatest love. I cherish every moment with you. 💖✨ I love you endlessly, my Bubu jaan! 😘💕";
    gif.src = "https://i.postimg.cc/dVtcJ0bQ/dudu-giving-flowers-bubu-flowers.gif"; // Change GIF
    yesBtn.style.display = "none"; // Hide Yes Button
    noBtn.style.display = "none";  // Hide No Button
});

// NO Button Click (Mobile Mode)
noBtn.addEventListener("click", () => {
    moveButton(noBtn);
});

// NO Button Hover (Desktop Mode)
noBtn.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) { // Desktop only
        moveButton(noBtn);
    }
});

// Function to Move NO Button Randomly (Prevents Disappearance)
function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth - 20; // Prevent overflow
    const maxY = window.innerHeight - button.offsetHeight - 20; // Prevent overflow

    const randomX = Math.max(10, Math.floor(Math.random() * maxX)); // Ensure visibility
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;  
    button.style.top = `${randomY}px`;   
    button.style.display = "block";  // **Fix for No Button Disappearing**
}
