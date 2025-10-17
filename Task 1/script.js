// Display current time in milliseconds
function updateTime() {
  const timeEl = document.getElementById("user-time");
  timeEl.textContent = Date.now();
}

// Initial call to display time immediately
updateTime();

// Update every second
setInterval(updateTime, 1000);
