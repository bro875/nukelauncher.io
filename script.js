document.addEventListener("DOMContentLoaded", function () {
    const launchButton = document.getElementById("launch-button");
    const mapContainer = document.getElementById("map-container");
    const map = document.getElementById("map");
    const countdownText = document.getElementById("countdown");
    const explosion = document.getElementById("explosion");
    const successMessage = document.getElementById("success-message");
    const nukeSound = document.getElementById("nuke-sound");

    launchButton.addEventListener("click", function () {
        // Hide button and show map
        launchButton.style.display = "none";
        mapContainer.style.display = "block";
    });

    map.addEventListener("click", function (event) {
        const rect = map.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Position explosion emoji
        explosion.style.position = "absolute";
        explosion.style.left = `${rect.left + x}px`;
        explosion.style.top = `${rect.top + y}px`;
        explosion.style.fontSize = "100px"; // Make it big
        explosion.style.background = "none"; // Remove background
        explosion.classList.remove("hidden");

        // Start countdown
        countdownText.innerText = "Launching in 5...";
        countdownText.classList.remove("hidden");

        let countdown = 5;
        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                countdownText.innerText = `Launching in ${countdown}...`;
            } else {
                clearInterval(countdownInterval);
                countdownText.classList.add("hidden");
                successMessage.classList.remove("hidden");

                // Play nuke sound
                nukeSound.play();

                // Remove success message, explosion, and map after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add("hidden");
                    explosion.classList.add("hidden");
                    mapContainer.style.display = "none";
                    launchButton.style.display = "block";
                }, 5000);
            }
        }, 1000);
    });
});
