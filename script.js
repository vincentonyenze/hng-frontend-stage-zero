// Update the timestamp with current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById("currentTime");
  const currentTime = Date.now();
  timeElement.textContent = `${currentTime}`;
}

// Initial time update
updateTime();

// Optional: Update time every second
setInterval(updateTime, 1000);

