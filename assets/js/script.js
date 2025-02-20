sliderBanner = () => {
    const sliderLayout = document.querySelector('.slider-layout');
    const banners = document.querySelectorAll('.img-banner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slideNumber = document.querySelector('.banner-bottom p');
    const logo = document.querySelector('.header-logo img');

    let currentSlide = 0;
    let rotationDegree = 0;

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

        rotationDegree += 360;
        logo.style.transform = `rotate(${rotationDegree}deg)`;


        if (window.innerWidth < 769) {
            prevButton.style.opacity = '1';
        } else if (currentSlide > 0) {
            prevButton.style.opacity = '1';
        } else {
            prevButton.style.opacity = '0';
        }
    }


    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? banners.length - 1 : currentSlide - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide === banners.length - 1) ? 0 : currentSlide + 1;
        updateSlider();
    });

    window.addEventListener('resize', updateSlider());
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
    const bannerHeight = window.innerHeight;
    const sliderControls = document.querySelector('.slider-controls')
    const htmlTag = document.querySelector('html')
    const sliderBottom = document.querySelector('.banner-bottom')
    const photoWrapper = document.querySelector('.photo-wrapper')

    if (!headerBurger) return;
    headerBurger.addEventListener('click', () => {

        const scrollPosition = window.scrollY;
        const isInBanner = scrollPosition <= bannerHeight;

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

        sliderControls.classList.toggle("active")
        document.body.classList.toggle('active');
        headerMenu.classList.toggle('active');
        infoContent.classList.toggle('active');
        headerEn.classList.toggle('active');
        headerBurger.classList.toggle('active');
        htmlTag.classList.toggle('active')
        sliderBottom.classList.toggle('active')
        photoWrapper.classList.toggle('active')
        searchIcon.classList.toggle('noneAct')
        headerLine.forEach(line => {
            line.classList.toggle('active'); 
        });

        if (document.body.classList.contains('active')) {
            logo.src = './assets/img/logo/logoBlue.svg';
            logoTxt.src = './assets/img/logo/logoTxtBlue.svg';
            searchIcon.src = './assets/img/icons/searchBlue.svg';
        } else if (!isInBanner) {
            logo.src = './assets/img/logo/logoBlue.svg';
            logoTxt.src = './assets/img/logo/logoTxtBlue.svg';
            searchIcon.src = './assets/img/icons/searchBlue.svg';
        } else if(isInBanner) {
            logo.src = './assets/img/logo/logo.svg';
            logoTxt.src = './assets/img/logo/logoTxt.svg';
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
    const bannerHeight = window.innerHeight;
    const sliderControls = document.querySelector('.slider-controls')
    const htmlTag = document.querySelector('html')
    const sliderBottom = document.querySelector('.banner-bottom')
    const photoWrapper = document.querySelector('.photo-wrapper')
   
    if (!searchBurger) return;  
   
    headerBurger.style.display = "flex";  
   
    searchBurger.addEventListener('click', () => {  

        const scrollPosition = window.scrollY;
        const isInBanner = scrollPosition <= bannerHeight;

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
   
    sliderControls.classList.toggle("active")
    document.body.classList.toggle('active');  
    searchMenu.classList.toggle('active');  
    infoContent.classList.toggle('active');  
    headerEn.classList.toggle('active');  
    htmlTag.classList.toggle('active')
    sliderBottom.classList.toggle('active')
    photoWrapper.classList.toggle('active')
   
    headerBurger.style.display = (headerBurger.style.display === "none" || headerBurger.style.display === "") ? "flex" : "none";  
   
    headerLine.forEach(line => {  
    line.classList.toggle('active'); });  
   
    logo.classList.toggle('active');  
    searchIcon.classList.toggle('active');  

    if (document.body.classList.contains('active')) {
        logo.src = './assets/img/logo/logoBlue.svg';
        logoTxt.src = './assets/img/logo/logoTxtBlue.svg';
        searchIcon.src = './assets/img/icons/cross.svg';
    } else if (!isInBanner) {
        logo.src = './assets/img/logo/logoBlue.svg';
        logoTxt.src = './assets/img/logo/logoTxtBlue.svg';
        searchIcon.src = './assets/img/icons/searchBlue.svg';
    } else {
        logo.src = './assets/img/logo/logo.svg';
        logoTxt.src = './assets/img/logo/logoTxt.svg';
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

function scrollHeader() {
    const headerLogo = document.querySelector('.header-logo img');
    const headerLogoTxt = document.querySelector('.header-logo__txt');
    const searchIcon = document.querySelector('.header-search img');
    const headerEn = document.querySelector('.header-en');
    const headerLines = document.querySelectorAll('.header-line');
    const headerWrapper = document.querySelector(".header-wrapper")
    
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
        headerWrapper.classList.add('active')
    } else {
        headerLogo.src = './assets/img/logo/logo.svg'; 
        headerLogoTxt.src = './assets/img/logo/logoTxt.svg';
        searchIcon.src = './assets/img/icons/search.svg';
        headerEn.style.color = "#000";
        headerEn.style.backgroundColor = "#fff";
        headerLines.forEach(headerLine => {
            headerLine.style.backgroundColor = "#fff";
        });
        headerWrapper.classList.remove('active')
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

                const icon = row.querySelector('img');
                if (icon) {
                    icon.src = './assets/img/icons/cross.svg';
                }

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

// const swiperNews = () => {
//     const swiper = new Swiper(".mySwiper", {
//         direction: "horizontal",
//         slidesPerView: 4,
//         mousewheel: true,
//         freeMode: true,
//         freeModeMomentum: true,
//         speed: 1000,
//         pagination: {
//             el: ".swiper-pagination-2",
//             type: "progressbar",
//         },
//         scrollbar: {
//             el: ".swiper-scrollbar",
//             hide: true,
//         },
//         breakpoints: {
//             2560: { slidesPerView: 4 },
//             1920: { slidesPerView: 4 },
//             1440: { slidesPerView: 4 },
//             1024: { slidesPerView: 3, threshold: 0,  },
//             768: { slidesPerView: 2, threshold: 0 },
//             375: { slidesPerView: 1, threshold: 0 },
//         },
//         on: {
//             reachEnd: () => {
//                 document.body.style.overflow = "auto";
//                 swiper.mousewheel.disable();
//             },
//             fromEdge: () => {
//                 document.body.style.overflow = "hidden";
//                 swiper.mousewheel.enable();
//             },
//         },
//     });

//     const swiper2 = new Swiper(".mySwiper2", {
//         direction: "horizontal",
//         slidesPerView: 4,
//         mousewheel: true,
//         freeMode: true,
//         freeModeMomentum: true,
//         speed: 1000,
//         pagination: {
//             el: ".swiper-pagination-1",
//             type: "progressbar",
//         },
//         scrollbar: {
//             el: ".swiper-scrollbar",
//             hide: true,
//         },
//         breakpoints: {
//             2560: { slidesPerView: 4 },
//             1920: { slidesPerView: 4 },
//             1440: { slidesPerView: 4 },
//             1024: { slidesPerView: 3, threshold: 0 },
//             768: { slidesPerView: 2, threshold: 0 },
//             375: { slidesPerView: 1, threshold: 0 },
//         },
//         on: {
//             reachEnd: () => {
//                 document.body.style.overflow = "auto";
//                 swiper2.mousewheel.disable();
//             },
//             fromEdge: () => {
//                 document.body.style.overflow = "hidden";
//                 swiper2.mousewheel.enable();
//             },
//         },
//     });

//     window.addEventListener("wheel", (event) => {
//         if ((swiper.isEnd && event.deltaY > 0) || (swiper2.isEnd && event.deltaY > 0)) {
//             document.body.style.overflow = "auto";
//         } else {
//             document.body.style.overflow = "hidden";
//         }
//     });

//     // Intersection Observer для анимации слайдов
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("slide-in");
//             } else {
//                 entry.target.classList.remove("slide-in");
//             }
//         });
//     }, { threshold: 0.1 });

//     const slides = document.querySelectorAll('.swiper-slide');
//     slides.forEach(slide => observer.observe(slide));
// };

// const sliderPhoto = () => {

//     const slides = [
//         {
//             img: './assets/img/content/photo.jpg',
//             year: '2024',
//             text: 'ВСЕРОССИЙСКИЙ ФОРУМ ТЕХНОЛОГИЧЕСКОГО ПРЕДПРИНИМАТЕЛЬСТВА'
//         },
//         {
//             img: './assets/img/banner1.jpg',
//             year: '2025',
//             text: 'МЕЖДУНАРОДНЫЙ ФОРУМ ИННОВАЦИЙ'
//         },
//         {
//             img: './assets/img/content/image1.jpg',
//             year: '2026',
//             text: 'ВЫСТАВКА ТЕХНОЛОГИЙ И БУДУЩЕГО'
//         }
//     ];
    
    
//     let currentSlide = 0;
//     const imageElement = document.querySelector('.photo-wrapper img');
//     const yearElement = document.querySelector('.photo-content h2');
//     const textElement = document.querySelector('.photo-content p');
//     const photoContent = document.querySelector('.photo-content');

//     function updateSlide() {
//         // Убираем класс active для плавного исчезновения
//         photoContent.classList.remove('active');
//         imageElement.classList.remove('fade');

//         // Задержка перед обновлением слайда для анимации
//         setTimeout(() => {
//             const slide = slides[currentSlide];
//             imageElement.src = slide.img;
//             yearElement.textContent = slide.year;
//             textElement.textContent = slide.text;

//             // Добавляем класс active для плавного появления
//             photoContent.classList.add('active');
//             imageElement.classList.add('fade');

//             // Обновляем индекс слайда
//             currentSlide = (currentSlide + 1) % slides.length;
//         }, 800); // Время задержки соответствует времени плавного исчезновения
//     }

//     updateSlide();
    
//     // Меняем слайд каждые 20 секунды
//     setInterval(updateSlide, 7000);

// }

const sliderPhoto = () => {
    const slides = document.querySelectorAll('.photo-wrapper .slide');
    let currentSlide = 0;

    function updateSlide() {
        slides[currentSlide].classList.remove('active');
        const currentContent = slides[currentSlide].querySelector('.photo-content');
        if (currentContent) {
            currentContent.classList.remove('active');
        }

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add('active');
        const nextContent = slides[currentSlide].querySelector('.photo-content');
        if (nextContent) {
            nextContent.classList.add('active');
        }
    }

    setInterval(updateSlide, 7000);
};

const fadeInSection = () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

const burgerFadeIn = () => {
    const menuItems = document.querySelectorAll('.burger-menu__column ul li');

    menuItems.forEach(item => {
        const index = item.getAttribute('data-index');
        const list = document.querySelector(`.burger-menu__column.center ul[data-index="${index}"]`);
        const cross = document.querySelector(`.burger-mobile__lines[data-index="${index}"]`);

        if (list && cross) {
            const showList = () => {
                document.querySelectorAll('.burger-menu__column.center ul').forEach(ul => ul.classList.add('hidden'));
                document.querySelectorAll('.burger-mobile__lines').forEach(crossEl => crossEl.classList.remove('active'));
                list.classList.remove('hidden');
                cross.classList.add('active');
            };

            const hideList = () => {
                list.classList.add('hidden');
                cross.classList.remove('active');
            };

            item.addEventListener('mouseenter', showList);
            item.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!list.matches(':hover') && !item.matches(':hover')) {
                        hideList();
                    }
                }, 30000);
            });

            list.addEventListener('mouseenter', () => list.classList.remove('hidden'));
            list.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!list.matches(':hover') && !item.matches(':hover')) {
                        hideList();
                    }
                }, 30000);
            });

            item.addEventListener('touchstart', (e) => {
                e.preventDefault();
                showList();
            });

            document.addEventListener('touchstart', (e) => {
                if (!item.contains(e.target) && !list.contains(e.target)) {
                    hideList();
                }
            });
        }
    });
};

const startAnimation = () => {
    document.body.classList.add('no-scroll');
    const html = document.querySelector('html')
    html.style.overflow = 'hidden'

    // Таймер на 3 секунды
    setTimeout(() => {
        const overlay = document.querySelector('.start-overlay');
        overlay.style.opacity = '0';

        setTimeout(() => {
            overlay.remove();
            document.body.classList.remove('no-scroll');
            html.style.overflow = 'scroll'
        }, 500);
    }, 3000);
}

const init = () => {
    sliderBanner()
    burgerBanner()
    searchBanner()
    changeLanguage()
    accordionIndex()
    // swiperNews()
    sliderPhoto()
    fadeInSection()
    burgerFadeIn()
    startAnimation()

    const html = document.querySelector('html')
    html.style.overflowX = 'hidden'
}

document.addEventListener('DOMContentLoaded', init);