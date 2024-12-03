
const deathDateElement = document.getElementById("death-date");
const weekCountElement = document.getElementById("week-count");

let totalWeeks = 90 * 52; // 90 years in weeks
let ageInWeeks = 0; // To store current age in weeks

// Chart container and download button
const chartContainer = document.getElementById("chart");
const downloadButton = document.getElementById("download-image");

// Function to generate the life chart
function generateLifeChart() {
  chartContainer.innerHTML = ""; // Clear existing chart
  const birthdate = document.getElementById("birthday").value;

  if (!birthdate) {
    alert("Please enter your birthdate.");
    return;
  }

  const birthDate = new Date(birthdate);
  const today = new Date();

  // Calculate the user's age in weeks
  const ageInWeeks = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 7));

  // Total weeks in 90 years
  const totalWeeks = 90 * 52;

  // Generate the chart with filled and unfilled boxes
  for (let i = 0; i < totalWeeks; i++) {
    const box = document.createElement("div");
    box.className = "box";

    // Fill weeks already lived
    if (i < ageInWeeks) {
      box.classList.add("filled");
    } else {
      box.classList.add("unfilled");
    }

    // Append the box to the chart container
    chartContainer.appendChild(box);
  }
}

// Add an event listener to the download button
downloadButton.addEventListener("click", function () {
  // Ensure the chart is rendered before downloading the image
  if (chartContainer.children.length === 0) {
    alert("Please generate the chart first.");
    return;
  }

  // Use html2canvas to capture the chart as an image
  html2canvas(chartContainer).then(function (canvas) {
    // Convert canvas to an image
    const imgData = canvas.toDataURL("image/png");

    // Create an <a> tag to download the image
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'life-chart.png';

    // Trigger the download
    link.click();
  });
});

function updateChart() {
  const birthdate = document.getElementById("birthday").value;
  if (!birthdate) {
    alert("Please enter your birthdate.");
    return;
  }

  const birthDate = new Date(birthdate);
  const today = new Date();
  
  // Update age in weeks (till today)
  ageInWeeks = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 7));

  // Update weeks completed text
  weekCountElement.textContent = `${ageInWeeks} / ${totalWeeks} weeks completed`;

  // Clear and regenerate the chart
  chartContainer.innerHTML = "";
  generateLifeChart();
}

const quotes = [
  "Time flies, but you are the pilot.",
  "Don't count the days, make the days count.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Your time is limited, so don't waste it living someone else's life.",
  "The key to immortality is first living a life worth remembering.",
  "Time waits for no one.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "The trouble is, you think you have time.",
  "Do not wait for leaders; do it alone, person to person.",
  "Life is what happens when you're busy making other plans."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}

// Change quote every 15 seconds
setInterval(newQuote, 15000);

// Call newQuote immediately when the page loads
newQuote();

// Get the button and audio elements
const playMusicButton = document.getElementById('play-music-button');
const audio = document.getElementById('background-music');

// Set the volume of the audio (0.0 is muted, 1.0 is full volume)
audio.volume = 0.03; // Adjust to your preferred volume level

// Toggle play/pause and button text
playMusicButton.addEventListener('click', function() {
  if (audio.paused) {
    // Play the audio
    audio.play();
    playMusicButton.textContent = 'Stop Background Music'; // Change button text
  } else {
    // Pause the audio
    audio.pause();
    playMusicButton.textContent = 'Play Background Music'; // Change button text
  }
});

const sound1 = document.getElementById('sound1');

sound1.volume = 0.2;

// Event listeners for buttons
document.getElementById('heartbeat').addEventListener('click', function() {
  playSound(sound1);
});

// Function to play a specific sound
function playSound(audioElement) {
  // Pause any currently playing audio
  sound1.pause();
  
  // Reset audio to start from the beginning
  audioElement.currentTime = 0;

  // Play the selected audio
  audioElement.play();
}

// Function to randomly trigger ghost movement
function randomizeGhostMovement() {
  const ghost = document.getElementById('ghost');
  


  // Randomize the top position of the ghost to appear at different vertical positions
  const randomTop = Math.random() * 100;
  ghost.style.top = `${randomTop}%`;
  


}

// Call randomize function every 2 seconds to keep the ghost coming randomly
setInterval(randomizeGhostMovement, 1000);
