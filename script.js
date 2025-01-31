const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

let isNoClicked = false;

// Function to change the gif and hide the buttons after Yes is clicked
yesBtn.addEventListener("click", () => {
    if (window.innerWidth > 768) {
        // Change text and gif on desktop/laptop
        question.innerHTML = "Being with you is the most beautiful blessing of my life. You are my happiness, my peace, and my greatest love. I cherish every moment with you. 💖✨ I love you endlessly, my Bubu jaan! 😘💕";
        gif.src = "https://i.postimg.cc/dVtcJ0bQ/dudu-giving-flowers-bubu-flowers.gif";
        noBtn.style.display = "none"; // Hide the No button
        yesBtn.style.display = "none"; // Hide the Yes button
    } else {
        moveYesButton(); // Move Yes button on mobile if clicked
    }
});

// Function to move the No button randomly on hover (Desktop)
noBtn.addEventListener("mouseover", () => {
    if (window.innerWidth > 768) {
        moveButton(noBtn);
    }
});

// Function to handle the No button click behavior (Mobile)
noBtn.addEventListener("click", () => {
    moveButton(noBtn); // Move No button randomly on click
    if (!isNoClicked) {
        moveYesButton(); // Center Yes button after No button clicked first time
        isNoClicked = true;
    }
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

// Function to move the Yes button to the center (for Mobile)
function moveYesButton() {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const yesBtnRect = yesBtn.getBoundingClientRect();

    const centerX = (wrapperRect.width - yesBtnRect.width) / 2;
    const centerY = (wrapperRect.height - yesBtnRect.height) / 2;

    yesBtn.style.position = "absolute";
    yesBtn.style.left = centerX + "px";
    yesBtn.style.top = centerY + "px";
}
