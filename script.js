document.addEventListener("DOMContentLoaded", function() {
    let launchButton = document.getElementById("launch-button");
    let mapContainer = document.getElementById("map-container");
    let map = document.getElementById("map");
    let countdownElement = document.getElementById("countdown");
    let explosion = document.getElementById("explosion");
    let successMessage = document.getElementById("success-message");
    let nukeSound = document.getElementById("nuke-sound");

    launchButton.addEventListener("click", function() {
        console.log("Button clicked"); // Debugging check
        this.style.display = "none";
        mapContainer.classList.remove("hidden");
    });

    map.addEventListener("click", function(event) {
        console.log("Map clicked"); // Debugging check

        let rect = map.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        mapContainer.classList.add("hidden");
        countdownElement.classList.remove("hidden");

        let timeLeft = 5;
        countdownElement.innerText = "Launching in " + timeLeft + "...";

        let countdownInterval = setInterval(function() {
            timeLeft--;
            countdownElement.innerText = "Launching in " + timeLeft + "...";

            if (timeLeft === 0) {
                clearInterval(countdownInterval);
                countdownElement.classList.add("hidden");

                nukeSound.play(); // Play sound
                explosion.style.left = `${x}px`;
                explosion.style.top = `${y}px`;
                explosion.style.display = "block";

                setTimeout(() => {
                    explosion.style.display = "none";
                    successMessage.classList.remove("hidden");

                    setTimeout(() => {
                        successMessage.classList.add("hidden");
                        launchButton.style.display = "block"; // Reset button
                    }, 5000);
                }, 1000);
            }
        }, 1000);
    });
});


