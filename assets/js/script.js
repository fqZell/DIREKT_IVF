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
    const infoContent = document.querySelector('.info-layout');
    const headerEn = document.querySelector('.header-en');
    const headerLine = document.querySelectorAll('.header-line');
    const logo = document.querySelector('.header-logo img');
    const searchIcon = document.querySelector('.header-search img');
    const headerSearch = document.querySelector('.search-menu');


    if (!headerBurger) return;
    headerBurger.addEventListener('click', () => {

        if (headerSearch.classList.contains('active')) {
            document.body.classList.remove('active');
            headerSearch.classList.remove('active');
            infoContent.classList.remove('active');
            headerEn.classList.remove('active');
            headerBurger.classList.remove('active');
            headerLine.forEach(line => {
                line.classList.remove('active'); 
            });
    
            logo.classList.remove('active');
            searchIcon.classList.remove('active');
        }

        document.body.classList.toggle('active');
        headerMenu.classList.toggle('active');
        infoContent.classList.toggle('active');
        headerEn.classList.toggle('active');
        headerBurger.classList.toggle('active');
        headerLine.forEach(line => {
            line.classList.toggle('active'); 
        });

        logo.classList.toggle('active');
        searchIcon.classList.toggle('active');
    });
};

searchBanner = () => {
    const searchBurger = document.querySelector('.header-search');
    const headerBurger = document.querySelector('.header-burger');
    const searchMenu = document.querySelector('.search-menu');
    const infoContent = document.querySelector('.info-layout');
    const headerEn = document.querySelector('.header-en');
    const headerLine = document.querySelectorAll('.header-line');
    const logo = document.querySelector('.header-logo img');
    const searchIcon = document.querySelector('.header-search img');
    const headerMenu = document.querySelector('.burger-menu');

    if (!searchBurger) return;
    searchBurger.addEventListener('click', () => {

        if (headerMenu.classList.contains('active')) {
            document.body.classList.remove('active');
            headerMenu.classList.remove('active');
            infoContent.classList.remove('active');
            headerEn.classList.remove('active');
            headerBurger.classList.remove('active');
            headerLine.forEach(line => {
                line.classList.remove('active'); 
            });
    
            logo.classList.remove('active');
            searchIcon.classList.remove('active');
        }

        document.body.classList.toggle('active');
        searchMenu.classList.toggle('active');
        infoContent.classList.toggle('active');
        headerEn.classList.toggle('active');
        headerBurger.classList.toggle('active');
        headerLine.forEach(line => {
            line.classList.toggle('active'); 
        });

        logo.classList.toggle('active');
        searchIcon.classList.toggle('active');

    })
}

const init = () => {
    sliderBanner()
    burgerBanner()
    searchBanner()
}

document.addEventListener('DOMContentLoaded', init);