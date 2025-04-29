const tabButtons = document.querySelectorAll('.session-button');
const tabContents = document.querySelectorAll('.tab-content');
const content = document.querySelector('.content');

// Backgrounds for different tabs
const bgColors = {
  guidance: '#3D1A26',
  sessions: '#1D3B32',
  scheduling: '#3C2A21',
  approach: '#2D1A2F'
};

// Function to update background
function updateBackground(tabId) {
  const bg = bgColors[tabId];
  if (bg) {
    content.style.backgroundColor = bg;
  }
}

// Set initial background based on the active tab
const initialActiveTab = document.querySelector('.tab-content.active');
if (initialActiveTab) {
  updateBackground(initialActiveTab.id);
}

// On click
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active classes
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active to clicked button and related content
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');

    // Update background based on active tab
    updateBackground(tabId);
  });
});


function toggleFAQ(element) {
  element.classList.toggle('active');
}