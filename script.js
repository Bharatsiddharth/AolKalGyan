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
    const bg = bgColors[tabId];
    if (bg) {
      content.style.backgroundColor = bg;
    }
  });
});



/* First card theme */
// .content {
//     background: #3D1A26;
// }

// .text h2 {
//     color: #D4AF37;
// }

// .text p {
//     color: #F5F5F0;
// }

// .book-button {
//     background: #B57A90;
//     transition: all ease-in-out 0.2s;
// }



/* second card theme green */
// .content {
//     background: #1D3B32;
// }

// .text h2 {
//     color: #D4AF37;
// }

// .text p {
//     color: #F5F5F0;
// }

// .book-button {
//     background: #7AB0A0;
//     transition: all ease-in-out 0.2s;
// }



/* Third card theme */
// .content {
//     background: #3C2A21;
// }

// .text h2 {
//     color: #DBBA5F;
// }

// .text p {
//     color: #F8F3E9;
// }

// .book-button {
//     background: #93644F;
//     transition: all ease-in-out 0.2s;
// }




/* Fourth card theme */
// .content {
//     background: #2D1A2F;
// }

// .text h2 {
//     color: #E0A687;
// }

// .text p {
//     color: #F9F4EC;
// }

// .book-button {
//     background: #9C4D6F;
//     transition: all ease-in-out 0.2s;
// }

