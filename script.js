document.getElementById("map").addEventListener("click", function(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    
    // Hide map and start countdown
    let mapContainer = document.getElementById("map-container");
    mapContainer.classList.add("hidden"); 
    let countdownElement = document.getElementById("countdown");
    countdownElement.classList.remove("hidden");

    let timeLeft = 5;
    countdownElement.innerText = "Launching in " + timeLeft + "...";

    let countdownInterval = setInterval(function() {
        timeLeft--;
        countdownElement.innerText = "Launching in " + timeLeft + "...";
        
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            countdownElement.classList.add("hidden");

            // Play explosion sound
            document.getElementById("nuke-sound").play();

            // Show explosion at clicked location
            let explosion = document.getElementById("explosion");
            explosion.style.left = (x - explosion.offsetWidth / 2) + "px"; // Center explosion
            explosion.style.top = (y - explosion.offsetHeight / 2) + "px"; // Center explosion
            explosion.style.display = "block";

            // Hide map at the same time as explosion appears
            setTimeout(() => {
                mapContainer.classList.add("hidden"); // Hide the map
            }, 1000);

            // Show "Launch Successful!" after explosion
            setTimeout(function() {
                explosion.style.display = "none";
                let successMessage = document.getElementById("success-message");
                successMessage.classList.remove("hidden");

                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.classList.add("hidden");
                    document.getElementById("launch-button").style.display = "block"; // Reset button
                }, 5000);

            }, 1000); // Explosion lasts for 1 second
        }
    }, 1000);
});

