sliderBanner = () => {
    const sliderLayout = document.querySelector('.slider-layout');
    const banners = document.querySelectorAll('.img-banner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slideNumber = document.querySelector('.banner-bottom p');
    const logo = document.querySelector('.header-logo img'); // Логотип

    let currentSlide = 0;
    let rotationDegree = 0; // Стартовый угол поворота логотипа

    function updateSlider() {
        const offset = -currentSlide * 100; 
        sliderLayout.style.transform = `translateX(${offset}%)`;

        banners.forEach((banner, index) => {
            const bannerContent = banner.querySelector('.banner-content');
            const img = banner.querySelector('img');

            bannerContent.classList.remove('active');
            img.classList.remove('active');

            if (index === currentSlide) {
                setTimeout(() => {
                    bannerContent.classList.add('active');
                    img.classList.add('active');
                }, 2000);
            }
        });

        const breakpoints = document.querySelectorAll('.banner-breakpoint');
        breakpoints.forEach((bp, index) => {
            bp.classList.toggle('active', index === currentSlide);
        });

        slideNumber.textContent = (currentSlide + 1).toString().padStart(2, '0');

        rotationDegree += 180;
        logo.style.transform = `rotate(${rotationDegree}deg)`; 
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? banners.length - 1 : currentSlide - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide === banners.length - 1) ? 0 : currentSlide + 1;
        updateSlider();
    });

    updateSlider(); 
}

burgerBanner = () => {
    const headerBurger = document.querySelector('.header-burger');
    const headerMenu = document.querySelector('.burger-menu');

    headerBurger.addEventListener('click', () => {

        document.body.style.overflow = 'hidden';
        headerMenu.classList.toggle('active');

    })
}

searchBanner = () => {
    const searchBurger = document.querySelector('.header-search');
    const searchMenu = document.querySelector('.search-menu');

    searchBurger.addEventListener('click', () => {

        document.body.style.overflow = 'hidden';
        searchMenu.classList.toggle('active');

    })
}

const init = () => {
    sliderBanner()
    burgerBanner()
    searchBanner()
}

document.addEventListener('DOMContentLoaded', init);