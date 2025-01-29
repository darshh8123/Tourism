let isRegistered = false; // Track registration status

// Function to check if the user is registered
function checkRegistration(tripName, tripRate) {
    if (!isRegistered) {
        alert("Please register to book your trip.");
        // Optionally, show the registration form if not registered
        document.getElementById("register").style.display = "block"; // Display registration form
    } else {
        openBookingForm(tripName, tripRate);
    }
}

// Function to handle registration form submission
document.querySelector(".register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Registration logic here (you can add form validation)
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (name && email && password) {
        alert("Registration successful!");
        isRegistered = true; // Set registration status to true
        document.getElementById("register").style.display = "none"; // Hide registration form
    } else {
        alert("Please fill out all fields.");
    }
});

let tripPrice = 1500; // Default price for one person

// Function to open the booking form
function openBookingForm(tripName, price) {
  document.getElementById("trip-name").value = tripName;
  document.getElementById("trip-rate").value = price;
  tripPrice = price; // Update price when a specific trip is selected
  document.getElementById("booking-section").style.display = "block";
}

// Function to update the price based on the number of people
function updatePrice() {
  const numPeople = document.getElementById("num-people").value;
  const totalPrice = tripPrice * numPeople; // Calculate total price
  document.getElementById("trip-rate").value = totalPrice; // Update the displayed price
}

// Function to handle form submission
function handleBooking(event) {
  event.preventDefault(); // Prevent the form from refreshing the page
  
  const tripName = document.getElementById("trip-name").value;
  const userName = document.getElementById("name").value;
  const numPeople = document.getElementById("num-people").value;
  const tripDate = document.getElementById("trip-date").value;
  const totalPrice = document.getElementById("trip-rate").value;

  // Show success message
  document.getElementById("success-trip-name").textContent = tripName;
  document.getElementById("success-message").style.display = "block";
  
  // Hide the booking form
  document.getElementById("booking-form").style.display = "none";
  
  // Optionally, you can reset the form for next use
  document.getElementById("booking-form").reset();
}

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow .slide');

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => slide.style.opacity = 0);

  // Show the current slide
  slides[index].style.opacity = 1;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
  showSlide(currentSlide);
}

// Ensure the first slide is visible on page load
showSlide(currentSlide);

// Set an interval to switch slides every 5 seconds
setInterval(nextSlide, 3500);


// Function to handle the search
function searchTrips() {
  const searchQuery = document.querySelector('.search-bar').value.toLowerCase();
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    const destinationName = item.querySelector('h3').textContent.toLowerCase();
    if (destinationName.includes(searchQuery)) {
      item.style.display = 'block'; // Show item if it matches the search query
    } else {
      item.style.display = 'none'; // Hide item if it doesn't match
    }
  });
}

