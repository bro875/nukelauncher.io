document.getElementById("launch-button").addEventListener("click", function() {
    this.style.display = "none"; // Hide the button
    document.getElementById("map-container").classList.remove("hidden"); // Show map
});

document.getElementById("map").addEventListener("click", function(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    
    // Hide map and start countdown
    document.getElementById("map-container").classList.add("hidden");
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
            explosion.style.left = x + "px";
            explosion.style.top = y + "px";
            explosion.style.display = "block";

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
