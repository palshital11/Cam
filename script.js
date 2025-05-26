const startBtn = document.getElementById('start-btn');
const video = document.getElementById('webcam');
const status = document.getElementById('status');

startBtn.addEventListener('click', async () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    status.textContent = "Camera access is not supported in this browser.";
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    status.textContent = "Camera access granted.";
    startBtn.style.display = "none";
  } catch (error) {
    console.error("Error accessing camera:", error);
    status.textContent = "Camera access denied or not available.";
  }
});
