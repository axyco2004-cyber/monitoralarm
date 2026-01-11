// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Form Validation and Submission
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

// Set minimum date to today
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');
const today = new Date().toISOString().split('T')[0];
checkinInput.min = today;

// Update checkout minimum date when checkin changes
checkinInput.addEventListener('change', function() {
    const checkinDate = new Date(this.value);
    checkinDate.setDate(checkinDate.getDate() + 1);
    checkoutInput.min = checkinDate.toISOString().split('T')[0];
    
    // Reset checkout if it's before new minimum
    if (checkoutInput.value && new Date(checkoutInput.value) <= new Date(this.value)) {
        checkoutInput.value = '';
    }
});

bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData);
    
    // Validate dates
    const checkin = new Date(data.checkin);
    const checkout = new Date(data.checkout);
    const diffTime = Math.abs(checkout - checkin);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 3) {
        alert('Minimum stay is 3 nights. Please adjust your dates.');
        return;
    }
    
    // Calculate price estimate
    const pricePerNight = 250; // Average price
    const cleaningFee = 100;
    const totalPrice = (diffDays * pricePerNight) + cleaningFee;
    
    // Log booking data (In production, send to server)
    console.log('Booking Request:', {
        ...data,
        nights: diffDays,
        estimatedTotal: `€${totalPrice}`
    });
    
    // Show success message
    bookingForm.style.display = 'none';
    formSuccess.style.display = 'block';
    
    // In a real application, you would send this data to your server
    // Example:
    /*
    fetch('/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...data,
            nights: diffDays,
            estimatedTotal: totalPrice
        }),
    })
    .then(response => response.json())
    .then(data => {
        bookingForm.style.display = 'none';
        formSuccess.style.display = 'block';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error processing your booking. Please try again.');
    });
    */
    
    // Reset form after 5 seconds (optional)
    setTimeout(() => {
        bookingForm.reset();
        bookingForm.style.display = 'block';
        formSuccess.style.display = 'none';
    }, 5000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('.feature, .gallery-item, .amenity, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Gallery lightbox (simple version)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // In a production site, you would implement a proper lightbox/modal
        // For now, just add a subtle animation
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

// Phone number formatting (optional enhancement)
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            e.target.value = value;
        } else if (value.length <= 6) {
            e.target.value = value.slice(0, 3) + ' ' + value.slice(3);
        } else {
            e.target.value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 10);
        }
    }
});

// Email validation helper
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailRegex.test(this.value)) {
        this.style.borderColor = '#e74c3c';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

// Add loading state to form submission
bookingForm.addEventListener('submit', function(e) {
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'Request Booking';
        submitBtn.disabled = false;
    }, 2000);
});

// Console welcome message
console.log('%c Welcome to Casa Loma Villa España! ', 'background: #d4a574; color: white; font-size: 20px; padding: 10px;');
console.log('This is a demo booking website. To integrate real booking functionality, connect to a backend API.');
