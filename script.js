document.getElementById("launch-button").addEventListener("click", function() {
    this.style.display = "none"; // Hide the big red button
    document.getElementById("map-container").classList.remove("hidden"); // Show the map
});

document.getElementById("map").addEventListener("click", function(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    
    document.getElementById("map-container").classList.add("hidden"); // Hide map
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

            document.getElementById("nuke-sound").play(); // Play explosion sound

            // Show explosion at clicked location
            let explosion = document.getElementById("explosion");
            explosion.style.left = x + "px";
            explosion.style.top = y + "px";
            explosion.style.display = "block";

            setTimeout(() => {
                explosion.style.display = "none"; // Hide explosion after 1 second
                let successMessage = document.getElementById("success-message");
                successMessage.classList.remove("hidden");

                setTimeout(() => {
                    successMessage.classList.add("hidden");
                    document.getElementById("launch-button").style.display = "block"; // Reset the button
                }, 5000);

            }, 1000);
        }
    }, 1000);
});

