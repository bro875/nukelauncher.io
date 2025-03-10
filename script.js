document.addEventListener("DOMContentLoaded", function () {
    const launchButton = document.getElementById("launch-button");
    const mapContainer = document.getElementById("map-container");
    const map = document.getElementById("map");
    const countdownText = document.getElementById("countdown");
    const explosionText = document.getElementById("explosion");
    const successMessage = document.getElementById("success-message");
    const nukeSound = document.getElementById("nuke-sound");

    launchButton.addEventListener("click", function () {
        // Hide the button and show the map
        launchButton.style.display = "none";
        mapContainer.classList.remove("hidden");
    });

    map.addEventListener("click", function (event) {
        const rect = map.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Move the explosion text to the clicked location
        explosionText.style.position = "absolute";
        explosionText.style.left = `${x}px`;
        explosionText.style.top = `${y}px`;
        explosionText.style.fontSize = "100px"; // Make the explosion big
        explosionText.classList.remove("hidden");

        // Start countdown
        let countdown = 5;
        countdownText.textContent = `Launching in ${countdown}...`;
        countdownText.classList.remove("hidden");

        const interval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                countdownText.textContent = `Launching in ${countdown}...`;
            } else {
                clearInterval(interval);
                countdownText.classList.add("hidden");
                explosionText.classList.remove("hidden");
                nukeSound.play();

                // Show "Launch Successful" text
                successMessage.classList.remove("hidden");

                // Hide explosion and map after 5 seconds
                setTimeout(() => {
                    explosionText.classList.add("hidden");
                    successMessage.classList.add("hidden");
                    mapContainer.classList.add("hidden");
                    launchButton.style.display = "block"; // Show button again
                }, 5000);
            }
        }, 1000);
    });
});

        }, 1000);
    });
});


