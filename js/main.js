// DOM Elements
const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const revealElements = document.querySelectorAll('.reveal');
const progressBar = document.querySelector('.progress-bar');
const testimonials = document.querySelectorAll('.testimonial');
const sliderDots = document.querySelectorAll('.slider-dot');
const mobileBreakpoint = 768;
let currentTestimonial = 0;

// Toggle mobile navigation
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        if (navToggle.classList.contains('active')) {
            navToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= mobileBreakpoint) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Dark mode toggle
if (themeToggle) {
    // Check for saved theme preference or respect OS preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// Scroll reveal animation
function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
        }
    }
}

// Scroll progress bar
function updateProgressBar() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollPosition / documentHeight) * 100;
    
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

// Testimonial slider
function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    sliderDots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    sliderDots[index].classList.add('active');
    currentTestimonial = index;
}

// Auto advance testimonials
function autoAdvanceTestimonials() {
    if (testimonials.length > 0) {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
}

// Initialize testimonial slider
if (testimonials.length > 0 && sliderDots.length > 0) {
    showTestimonial(0);
    
    // Set up click handlers for slider dots
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    // Auto advance every 5 seconds
    setInterval(autoAdvanceTestimonials, 5000);
}

// Update gallery filter
function setupGalleryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length && galleryItems.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to current button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items with animation
                galleryItems.forEach(item => {
                    item.style.animation = 'none';
                    item.offsetHeight; // Trigger reflow
                    
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.6s forwards';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Form validation
function setupFormValidation() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    
                    // Add error message if it doesn't exist
                    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
                        const errorMessage = document.createElement('div');
                        errorMessage.classList.add('error-message');
                        errorMessage.textContent = 'Dieses Feld wird benötigt.';
                        input.parentNode.insertBefore(errorMessage, input.nextSibling);
                    }
                } else {
                    input.classList.remove('error');
                    if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
                        input.nextElementSibling.remove();
                    }
                }
            });
            
            if (!isValid) {
                event.preventDefault();
            }
        });
        
        // Real-time validation
        form.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', function() {
                if (this.hasAttribute('required') && this.value.trim()) {
                    this.classList.remove('error');
                    if (this.nextElementSibling && this.nextElementSibling.classList.contains('error-message')) {
                        this.nextElementSibling.remove();
                    }
                }
            });
        });
    }
}

// Event listeners
window.addEventListener('scroll', () => {
    revealOnScroll();
    updateProgressBar();
});

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
    setupGalleryFilter();
    setupFormValidation();
    revealOnScroll();
    updateProgressBar();
});

// Handle resize events
window.addEventListener('resize', () => {
    if (window.innerWidth > mobileBreakpoint && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    }
});