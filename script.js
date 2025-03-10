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
    countdownElement.classList.remove("

