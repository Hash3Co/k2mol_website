// src/utils/slider.js
export function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    if (!slides || slides.length === 0) {
        console.warn('No slides found');
        return;
    }
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let slideInterval;
    let isTransitioning = false;
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'exit');
        if (index === 0) {
            slide.classList.add('active');
            const bgImage = slide.getAttribute('data-bg') || slide.style.backgroundImage;
            if (bgImage) {
                slide.style.backgroundImage = bgImage;
            }
        }
    });
    
    function changeSlide(index) {
        if (isTransitioning || index === currentIndex) return;
        isTransitioning = true;
        
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[index];
        
        if (!currentSlide || !nextSlide) {
            isTransitioning = false;
            return;
        }
        
        const bgImage = nextSlide.getAttribute('data-bg') || nextSlide.style.backgroundImage;
        if (bgImage) {
            nextSlide.style.backgroundImage = bgImage;
        }
        
        currentSlide.classList.remove('active');
        currentSlide.classList.add('exit');
        nextSlide.classList.add('active');
        nextSlide.classList.remove('exit');
        
        setTimeout(() => {
            slides.forEach(s => s.classList.remove('exit'));
            isTransitioning = false;
        }, 2000);
        
        currentIndex = index;
    }
    
    function nextSlide() {
        if (isTransitioning) return;
        const nextIndex = (currentIndex + 1) % totalSlides;
        changeSlide(nextIndex);
    }
    
    function prevSlide() {
        if (isTransitioning) return;
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        changeSlide(prevIndex);
    }
    
    function startAutoSlide() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 6000);
    }
    
    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            stopAutoSlide();
            nextSlide();
            setTimeout(startAutoSlide, 8000);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            stopAutoSlide();
            prevSlide();
            setTimeout(startAutoSlide, 8000);
        }
    });
    
    slides.forEach(slide => {
        const bgImage = slide.getAttribute('data-bg');
        if (bgImage) {
            const img = new Image();
            img.src = bgImage;
        }
    });
    
    startAutoSlide();
    
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
    }
    
    let touchStartX = 0;
    if (slider) {
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoSlide();
        }, { passive: true });
        
        slider.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) nextSlide();
                else prevSlide();
            }
            setTimeout(startAutoSlide, 8000);
        }, { passive: true });
    }
    
    console.log(`✨ Premium hero slider initialized with ${totalSlides} slides`);
}