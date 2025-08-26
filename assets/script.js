
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-blur');
            } else {
                navbar.classList.remove('navbar-blur');
            }
        });

        // Hero Slider
        class HeroSlider {
            constructor() {
                this.slides = document.querySelectorAll('.hero-slide');
                this.dots = document.querySelectorAll('.slider-dot');
                this.currentSlide = 0;
                this.slideInterval = 5000;
                
                this.init();
            }
            
            init() {
                this.updateSlider();
                this.setupDots();
                this.startAutoPlay();
            }
            
            updateSlider() {
                this.slides.forEach((slide, index) => {
                    if (index === this.currentSlide) {
                        slide.style.opacity = '1';
                        slide.classList.add('active');
                    } else {
                        slide.style.opacity = '0';
                        slide.classList.remove('active');
                    }
                });
                
                this.dots.forEach((dot, index) => {
                    if (index === this.currentSlide) {
                        dot.style.opacity = '1';
                    } else {
                        dot.style.opacity = '0.5';
                    }
                });
                
                // Trigger fade-in animation for active slide content
                const activeSlide = this.slides[this.currentSlide];
                const content = activeSlide.querySelector('.fade-in');
                content.style.opacity = '0';
                content.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }, 100);
            }
            
            setupDots() {
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        this.currentSlide = index;
                        this.updateSlider();
                        this.resetAutoPlay();
                    });
                });
            }
            
            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.slides.length;
                this.updateSlider();
            }
            
            startAutoPlay() {
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, this.slideInterval);
            }
            
            resetAutoPlay() {
                clearInterval(this.autoPlayInterval);
                this.startAutoPlay();
            }
        }

        // Initialize slider
        const slider = new HeroSlider();

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animation elements
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
            animatedElements.forEach(el => observer.observe(el));
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Service cards hover effect
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
    