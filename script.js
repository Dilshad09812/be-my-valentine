const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");
const openBtn = document.querySelector(".open-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

// YES Button Click - Change GIF & Hide Buttons
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is the most beautiful blessing of my life. You are my happiness, my peace, and my greatest love. I cherish every moment with you. 💖✨ I love you endlessly, my Bubu jaan! 😘💕";
    gif.src = "https://i.postimg.cc/dVtcJ0bQ/dudu-giving-flowers-bubu-flowers.gif"; // Change GIF
    yesBtn.style.display = "none"; // Hide Yes Button
    noBtn.style.display = "none";  // Hide No Button
    openBtn.style.display = "block"; // Show "Open it bby" Button
});

// NO Button Click - Move Randomly (Mobile)
noBtn.addEventListener("click", () => {
    moveButton(noBtn);
});

// Function to Move NO Button Randomly (Only on Mobile)
function moveButton(button) {
    if (window.innerWidth <= 768) { // Mobile Only
        const wrapperRect = document.querySelector(".wrapper").getBoundingClientRect();
        const maxX = wrapperRect.width - button.offsetWidth - 10;
        const maxY = wrapperRect.height - button.offsetHeight - 10;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }
}

// Open YouTube Modal on "Open it bby" Button Click
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Close Modal when X is clicked
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal if clicked outside of the content area
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
