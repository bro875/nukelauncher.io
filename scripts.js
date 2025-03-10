document.getElementById("launch-button").addEventListener("click", function() {
    // Hide main page and show animation
    document.getElementById("main-page").classList.add("hidden");
    document.getElementById("animation").classList.remove("hidden");

    // Play explosion sound
    const sound = document.getElementById("sound");
    sound.play();

    // Show map after animation finishes
    setTimeout(function() {
        document.getElementById("map").classList.remove("hidden");
    }, 3000); // 3-second animation delay
});

document.getElementById("confirm-launch").addEventListener("click", function() {
    // Hide the map and show countdown
    document.getElementById("map").classList.add("hidden");
    document.getElementById("countdown").classList.remove("hidden");

    // Countdown logic
    let countdown = 5;
    const countdownTimer = document.getElementById("countdown-timer");
    const interval = setInterval(function() {
        countdown--;
        countdownTimer.innerText = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            setTimeout(function() {
                // After 5-second countdown, show "Launch successful" message and transition
                document.getElementById("countdown").innerHTML = `<h2>Launch successful!</h2>`;
                setTimeout(function() {
                    // Go back to the main page after 10 seconds
                    location.reload();
                }, 10000); // 10-second transition delay
            }, 1000); // 1-second delay after countdown
        }
    }, 1000); // Update every second
});
