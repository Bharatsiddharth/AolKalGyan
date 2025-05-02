const bgVideo = document.getElementById('bgVideo');

function playFullVideo() {
  const mainContent = document.getElementById('mainContent');
  const videoContent = document.getElementById('videoContent');
  const iframe = document.getElementById('fullVideo');

  mainContent.style.display = 'none';
  videoContent.style.display = 'flex';

  // Force new video load each time
  const baseUrl = 'https://www.youtube.com/embed/y34dS0JJ3fg?autoplay=1&mute=1';
  iframe.src = `${baseUrl}&ts=${Date.now()}`;
}

function closeVideo() {
  const mainContent = document.getElementById('mainContent');
  const videoContent = document.getElementById('videoContent');
  const iframe = document.getElementById('fullVideo');

  iframe.src = ''; // Clear the video
  videoContent.style.display = 'none';
  mainContent.style.display = 'flex';
}


function closeVideo() {
  const mainContent = document.getElementById('mainContent');
  const videoContent = document.getElementById('videoContent');
  const iframe = document.getElementById('fullVideo');

  iframe.src = ''; // remove video
  videoContent.style.display = 'none';
  mainContent.style.display = 'flex';

  if (bgVideo) bgVideo.play();
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




// FAQ CODE
function toggleFAQ(element) {
  element.classList.toggle('active');
}





document.addEventListener("DOMContentLoaded", () => {
  // Testimonial data for each category
  const testimonials = {
    clarity: [
      {
        text: "The instructions were few, they were not complicated, so I followed them. The results were unbelievable. I now have more clarity, more serenity, more confidence. I am so grateful for this process, thank you.",
        author: "Mbali Morgan",
        title: "Teacher, New York",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "It gave me so much confidende and clarity and faith. What i heard is something wich really resonates with me and i can already see the changes thas was told to me.",
        author: "Andrea Markic Vidakovic",
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
        text: "How he discussed things which are not known to anybody, how he discussed about my health challenges etc is beyond imagination.",
        author: "Utkarsh Gupta",
        title: "Fitness Coach, Toronto",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "I just had a great and very pleasant experience with great insight and practical advice about how to improve my health.",
        author: "Yelena",
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
        text: "This session improve my positivity, trust and confidence in my daily routine including in my business.",
        author: "Milú da Graça",
        title: "Financial Advisor, Boston",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "I was at a crossroads in life and the advice was very encouraging and made me feel more confident about my financial future.",
        author: "Janak Naik",
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
        text: "Yes my scan session has been successful ..my family and our relationship has come together and by your grace is improving",
        author: "Ashla",
        title: "Entrepreneur, Jo'burg",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "I was sooo confused about my relationship. Within a very short span of time, I got an idea and confidence to move forward.",
        author: "Anitha Padmanabhan",
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
        text: "The 1st person who told me a job offer that would come to me.. And I was like I don't have anything like that nor have I applied for any... few months later  get a random call and it just happened that I joined an esteemed organization.",
        author: "Dr. Rituparna Saha",
        title: "Former Banker, Now Life Coach",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        text: "I wanted guidance, firstly on future steps for my career and the clear reply washed away worries I had been harbouring for months.",
        author: "Sujata",
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
          <div class="gif-caption">watch this space</div>
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
