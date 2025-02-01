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

// NO Button Hover (Desktop) - Move Randomly
noBtn.addEventListener("mouseover", () => {
    if (window.innerWidth > 768) {  // Only on desktop/laptop
        moveButton(noBtn);
    }
});

// NO Button Click (Mobile) - Move Randomly
noBtn.addEventListener("click", () => {
    moveButton(noBtn);
});

// Function to Move NO Button Randomly
function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth - 20; // Prevent overflow
    const maxY = window.innerHeight - button.offsetHeight - 20; // Prevent overflow

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;  
    button.style.top = `${randomY}px`;   
}
