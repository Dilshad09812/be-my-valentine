const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    if (window.innerWidth > 768) {
        question.innerHTML = "Being with you is the most beautiful blessing of my life. You are my happiness, my peace, and my greatest love. I cherish every moment with you. 💖✨ I love you endlessly, my Bubu jaan! 😘💕";
        gif.src = "https://i.postimg.cc/dVtcJ0bQ/dudu-giving-flowers-bubu-flowers.gif";
        noBtn.style.display = "none"; // Hide the No button
    } else {
        moveYesButton(); // Move Yes button on mobile
    }
    yesBtn.style.display = "none"; // Hide the Yes button after it is clicked
});

// Function to move a button randomly within the wrapper
function moveButton(button) {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = wrapperRect.width - buttonRect.width;
    const maxY = wrapperRect.height - buttonRect.height;

    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// Function to move the Yes button (for mobile)
function moveYesButton() {
    moveButton(yesBtn);
}
