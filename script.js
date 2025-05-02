const bgVideo = document.getElementById('bgVideo');

// Pause the video on page load
window.addEventListener('DOMContentLoaded', () => {
  bgVideo.pause();
});

// Play video when "Know More" button is clicked
function playBackgroundVideo() {
  bgVideo.play();
}

const tabButtons = document.querySelectorAll('.session-button2');
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





document.addEventListener("DOMContentLoaded", () => {
  // Testimonial data for each category
  const testimonials = {
    clarity: [
      {
        text: "The instructions were few and they were not complicated, so l followed them. And the results were unbelievable. I now have more <span class='highlight'>clarity</span>, more serenity, more confidence. I'm so grateful for this process, thank you.",
        author: "Sarah Johnson, 42",
        title: "Teacher, New York",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "Finding <span class='highlight'>clarity</span> in my life's purpose was something I struggled with for years. This scanning process helped me see things I never noticed before. The fog has lifted.",
        author: "James Wilson, 38",
        title: "Software Engineer, Seattle",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: 'gif',
        url: '/earth-5498_256.gif'
      }
    ],
    health: [
      {
        text: "My <span class='highlight'>health</span> issues seemed chronic until I tried this scanning solution. The personalized approach helped me identify root causes that doctors had missed for years.",
        author: "Michael Chen, 45",
        title: "Fitness Coach, Toronto",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "The <span class='highlight'>health</span> benefits I've experienced are remarkable. Sleep quality improved, energy levels increased, and my chronic pain has decreased significantly.",
        author: "Lisa Rodriguez, 39",
        title: "Nurse Practitioner, Miami",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
     
      {
        type: 'gif',
        url: '/earth-5498_256.gif'
      }
    ],
    wealth: [
      {
        text: "My relationship with <span class='highlight'>wealth</span> has completely transformed. I've broken through limiting beliefs and created new opportunities I never thought possible.",
        author: "Jennifer Lee, 48",
        title: "Financial Advisor, Boston",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "The <span class='highlight'>wealth</span> scanning revealed blocks I didn't know I had. Within months of implementing the solutions, my income doubled and my savings grew.",
        author: "Robert Miller, 52",
        title: "Entrepreneur, Austin",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
     
      {
        type: 'gif',
        url: '/earth-5498_256.gif'
      }
    ],
    relationships: [
      {
        text: "The instructions were few and they were not complicated, so l followed them. And the results were unbelievable. I now have more clarity, more serenity, more confidence. <span class='highlight'>There's also been a positive shift in a significant relationship</span>. I'm so grateful for this process, thank you.",
        author: "Mbali Morgan, 66",
        title: "Entrepreneur, Jo'burg",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "My <span class='highlight'>relationships</span> have deepened in ways I never thought possible. The scanning revealed patterns that were holding me back from true connection.",
        author: "Thomas Wright, 41",
        title: "Psychologist, Melbourne",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      
      {
        type: 'gif',
        url: '/earth-5498_256.gif'
      }
    ],

    career: [
      {
        text: "My <span class='highlight'>career</span> was stagnant for years until I discovered this scanning process. Within months, I found my true calling and transitioned to work I love.",
        author: "Daniel Brown, 49",
        title: "Former Banker, Now Life Coach",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "The <span class='highlight'>career</span> insights I gained were invaluable. I realized I was in the right field but wrong role. Making that shift has brought fulfillment.",
        author: "Olivia Martinez, 35",
        title: "Creative Director, Barcelona",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      
      
      {
        type: 'gif',
        url: '/earth-5498_256.gif'
      }
    ],
  }

  // Get DOM elements
  const categories = document.querySelectorAll(".category")
  const testimonialCarousel = document.querySelector(".testimonial-carousel")
  const dots = document.querySelectorAll(".dot")

  // Set initial active category and testimonial
  let activeCategory = "relationships"
  let activeTestimonialIndex = 0

  // Initialize the testimonial carousel
  updateTestimonialCarousel()

  // Add event listeners to categories
  categories.forEach((category) => {
    category.addEventListener("click", function () {
      // Update active category
      const categoryName = this.getAttribute("data-category")
      setActiveCategory(categoryName)

      // Reset testimonial index and update carousel
      activeTestimonialIndex = 0
      updateTestimonialCarousel()
      updateDots()
    })
  })

  // Add event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      activeTestimonialIndex = index
      updateTestimonialCarousel()
      updateDots()
    })
  })

  // Function to set active category
  function setActiveCategory(categoryName) {
    activeCategory = categoryName

    // Update UI
    categories.forEach((cat) => {
      if (cat.getAttribute("data-category") === categoryName) {
        cat.classList.add("active")
      } else {
        cat.classList.remove("active")
      }
    })
  }

  // Function to update testimonial carousel
  function updateTestimonialCarousel() {
    const currentItems = testimonials[activeCategory];
    const currentItem = currentItems[activeTestimonialIndex];
    const authorSection = document.querySelector(".testimonial-author");
  
    let content = '';
    if(currentItem.type === 'gif') {
      content = `
        <div class="gif-card">
          <img src="${currentItem.url}" alt="Solution GIF">
          <div class="gif-caption">See it in action!</div>
        </div>
      `;
      // Hide author section for GIFs
      authorSection.style.display = 'none';
    } else {
      content = `
        <div class="testimonial">
          ${currentItem.text}
        </div>
      `;
      // Show author section for testimonials
      authorSection.style.display = 'flex';
      
      // Update author info
      document.querySelector(".author-name").textContent = currentItem.author;
      document.querySelector(".author-title").textContent = currentItem.title;
      document.querySelector(".author-image").src = currentItem.image;
    }
  
    testimonialCarousel.innerHTML = content;
  }

  // Function to update dots
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === activeTestimonialIndex) {
        dot.classList.add("active")
      } else {
        dot.classList.remove("active")
      }
    })
  }

  // Auto-rotate testimonials every 5 seconds
  setInterval(() => {
    const currentTestimonials = testimonials[activeCategory]
    activeTestimonialIndex = (activeTestimonialIndex + 1) % currentTestimonials.length
    updateTestimonialCarousel()
    updateDots()
  }, 5000)
})
