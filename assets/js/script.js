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
    const logoTxt = document.querySelector('.header-logo__txt')
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

        if (document.body.classList.contains('active')) {
            logo.src = './assets/img/logo/logoBlue.svg'; 
        } else {
            logo.src = './assets/img/logo/logo.svg';
        }

        if (document.body.classList.contains('active')) {
            logoTxt.src = './assets/img/logo/logoTxtBlue.svg'; 
        } else {
            logoTxt.src = './assets/img/logo/logoTxt.svg';
        }

        if (document.body.classList.contains('active')) {
            searchIcon.src = './assets/img/icons/searchBlue.svg'; 
        } else {
            searchIcon.src = './assets/img/icons/search.svg';
        }

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
    const logoTxt = document.querySelector('.header-logo__txt')
    const searchIcon = document.querySelector('.header-search img');  
    const headerMenu = document.querySelector('.burger-menu');  
   
    if (!searchBurger) return;  
   
    headerBurger.style.display = "flex";  
   
    searchBurger.addEventListener('click', () => {  
    if (headerMenu.classList.contains('active')) {  
    document.body.classList.remove('active');  
    headerMenu.classList.remove('active');  
    infoContent.classList.remove('active');  
    headerEn.classList.remove('active');  
    headerBurger.classList.remove('active');  
    headerLine.forEach(line => {  
    line.classList.remove('active'); });  
   
    logo.classList.remove('active');  
    searchIcon.classList.remove('active');  
    }  
   
    document.body.classList.toggle('active');  
    searchMenu.classList.toggle('active');  
    infoContent.classList.toggle('active');  
    headerEn.classList.toggle('active');  
   
    headerBurger.style.display = (headerBurger.style.display === "none" || headerBurger.style.display === "") ? "flex" : "none";  
   
    headerLine.forEach(line => {  
    line.classList.toggle('active'); });  
   
    logo.classList.toggle('active');  
    searchIcon.classList.toggle('active');  

    if (document.body.classList.contains('active')) {
        logo.src = './assets/img/logo/logoBlue.svg'; 
    } else {
        logo.src = './assets/img/logo/logo.svg';
    }

    if (document.body.classList.contains('active')) {
        logoTxt.src = './assets/img/logo/logoTxtBlue.svg'; 
    } else {
        logoTxt.src = './assets/img/logo/logoTxt.svg';
    }

    if (document.body.classList.contains('active')) {
        searchIcon.src = './assets/img/icons/searchBlue.svg'; 
    } else {
        searchIcon.src = './assets/img/icons/search.svg';
    }

    });  
} 

changeLanguage = () => {
    const languageBtn = document.querySelector('.header-en')
    const language = document.querySelector('.header-en p')

    languageBtn.addEventListener("click", () => {

        language.innerHTML = language.innerHTML === "RU" ? "EN" : "RU"

    })
}

// window.addEventListener('scroll', scrollHeader);

// function scrollHeader() {
//     const headerLogo = document.querySelector('.header-logo img');
//     const headerLogoTxt = document.querySelector('.header-logo__txt');
//     const searchIcon = document.querySelector('.header-search img');
//     const headerEn = document.querySelector('.header-en')
//     const headerLines = document.querySelectorAll('.header-line')
//     const bannerHeight = window.innerHeight; 
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > bannerHeight) {
//         headerLogo.src = './assets/img/logo/logoBlue.svg'; 
//         headerLogoTxt.src = './assets/img/logo/logoTxtBlue.svg';
//         searchIcon.src = './assets/img/icons/searchBlue.svg';
//         headerEn.style.color = "#ffffff"
//         headerEn.style.backgroundColor = "#00328A"
//         headerLines.forEach(headerLine => {
//             headerLine.style.backgroundColor = "#00328A" 
//         });
//     } else {
//         headerLogo.src = './assets/img/logo/logo.svg'; 
//         headerLogoTxt.src = './assets/img/logo/logoTxt.svg';
//         searchIcon.src = './assets/img/icons/search.svg';
//         headerEn.style.color = "#000"
//         headerEn.style.backgroundColor = "#fff"
//         headerLines.forEach(headerLine => {
//             headerLine.style.backgroundColor = "#fff" 
//         });
//     }
// }

function scrollHeader() {
    const headerLogo = document.querySelector('.header-logo img');
    const headerLogoTxt = document.querySelector('.header-logo__txt');
    const searchIcon = document.querySelector('.header-search img');
    const headerEn = document.querySelector('.header-en');
    const headerLines = document.querySelectorAll('.header-line');
    
    const bannerHeight = window.innerHeight; 
    const photoSection = document.querySelector('#photo');
    const photoSectionPosition = photoSection.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = window.scrollY;

    if (scrollPosition > bannerHeight && scrollPosition < photoSectionPosition) {
        headerLogo.src = './assets/img/logo/logoBlue.svg'; 
        headerLogoTxt.src = './assets/img/logo/logoTxtBlue.svg';
        searchIcon.src = './assets/img/icons/searchBlue.svg';
        headerEn.style.color = "#ffffff";
        headerEn.style.backgroundColor = "#00328A";
        headerLines.forEach(headerLine => {
            headerLine.style.backgroundColor = "#00328A";
        });
    } else {
        headerLogo.src = './assets/img/logo/logo.svg'; 
        headerLogoTxt.src = './assets/img/logo/logoTxt.svg';
        searchIcon.src = './assets/img/icons/search.svg';
        headerEn.style.color = "#000";
        headerEn.style.backgroundColor = "#fff";
        headerLines.forEach(headerLine => {
            headerLine.style.backgroundColor = "#fff";
        });
    }
}

window.addEventListener('scroll', scrollHeader);

const accordionIndex = () => {
    const rows = document.querySelectorAll('.accordion-content__row');
    const contents = document.querySelectorAll('.accordion-content__el');
    const images = document.querySelectorAll('.accordion-img img');

    rows.forEach((row, index) => {
        row.addEventListener('click', () => {
            const isActive = contents[index].classList.contains("active");

            // Сброс всех контентов и иконок
            contents.forEach(content => content.classList.remove("active"));
            rows.forEach(r => {
                const icon = r.querySelector('img'); 
                if (icon) {
                    icon.src = './assets/img/icons/plus.svg';
                }
            });

            if (!isActive) {
                contents[index].classList.add("active");

                // Установка активной иконки для текущего ряда
                const icon = row.querySelector('img');
                if (icon) {
                    icon.src = './assets/img/icons/cross.svg';
                }

                // Управление классами картинок для анимации
                images.forEach((img, imgIndex) => {
                    img.classList.remove("active", "disabled");
                    if (imgIndex === index) {
                        img.classList.add("active");
                    } else if (imgIndex === (index + 1) % images.length) {
                        img.classList.add("disabled");
                    } 
                });
            }
        });
    });
};

const swiperNews = () => {

    const swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        slidesPerView: 4,
        mousewheel: true,
        freeMode: true,
        freeModeMomentum: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            progress: function (swiper, progress) {

                // Получаем элемент progress-bar
                const progressBar = document.querySelector(".progress-bar");
                const lineWidth = document.querySelector(".news-footer__line").offsetWidth;

                // Рассчитываем ширину для прогресс-бара
                const currentWidth = lineWidth * progress;
                progressBar.style.width = `${currentWidth}px`;
            },
        },
    });

    // Добавляем Intersection Observer для анимации появления
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            } else {
                entry.target.classList.remove("slide-in");
            }
        });
    }, { threshold: 0.1 }); // Порог, при котором слайд считается видимым

    // Применяем Observer ко всем слайдам
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => observer.observe(slide)); 
}

const sliderPhoto = () => {

    const slides = [
        {
            img: './assets/img/content/photo.jpg',
            year: '2024',
            text: 'ВСЕРОССИЙСКИЙ ФОРУМ ТЕХНОЛОГИЧЕСКОГО ПРЕДПРИНИМАТЕЛЬСТВА'
        },
        {
            img: './assets/img/banner1.jpg',
            year: '2025',
            text: 'МЕЖДУНАРОДНЫЙ ФОРУМ ИННОВАЦИЙ'
        },
        {
            img: './assets/img/banner2.jpg',
            year: '2026',
            text: 'ВЫСТАВКА ТЕХНОЛОГИЙ И БУДУЩЕГО'
        }
    ];
    
    
    let currentSlide = 0;
    const imageElement = document.querySelector('.photo-wrapper img');
    const yearElement = document.querySelector('.photo-content h2');
    const textElement = document.querySelector('.photo-content p');
    const photoContent = document.querySelector('.photo-content');

    function updateSlide() {
        // Убираем класс active для плавного исчезновения
        photoContent.classList.remove('active');
        imageElement.classList.remove('fade');

        // Задержка перед обновлением слайда для анимации
        setTimeout(() => {
            const slide = slides[currentSlide];
            imageElement.src = slide.img;
            yearElement.textContent = slide.year;
            textElement.textContent = slide.text;

            // Добавляем класс active для плавного появления
            photoContent.classList.add('active');
            imageElement.classList.add('fade');

            // Обновляем индекс слайда
            currentSlide = (currentSlide + 1) % slides.length;
        }, 500); // Время задержки соответствует времени плавного исчезновения
    }
    
    // Меняем слайд каждые 3 секунды
    setInterval(updateSlide, 5000);

}

const init = () => {
    sliderBanner()
    burgerBanner()
    searchBanner()
    changeLanguage()
    accordionIndex()
    swiperNews()
    sliderPhoto()
}

document.addEventListener('DOMContentLoaded', init);