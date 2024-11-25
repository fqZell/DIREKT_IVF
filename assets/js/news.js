const init = () => {
    burgerBanner()
    searchBanner()
    changeLanguage()
    fadeInSection()
    burgerFadeIn()
    swiperNews()
}

document.addEventListener('DOMContentLoaded', init);


burgerBanner = () => {
    const headerBurger = document.querySelector('.header-burger');
    const headerMenu = document.querySelector('.burger-menu');
    // const infoContent = document.querySelector('.info-layout');
    const headerEn = document.querySelector('.header-en');
    const headerLine = document.querySelectorAll('.header-line');
    const logo = document.querySelector('.header-logo img');
    const logoTxt = document.querySelector('.header-logo__txt')
    const searchIcon = document.querySelector('.header-search img');
    const headerSearch = document.querySelector('.search-menu');
    const htmlTag = document.querySelector('html')

    if (!headerBurger) return;
    headerBurger.addEventListener('click', () => {

        if (headerSearch.classList.contains('active')) {
            document.body.classList.remove('active');
            headerSearch.classList.remove('active');
            // infoContent.classList.remove('active');
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
        // infoContent.classList.toggle('active');
        headerEn.classList.toggle('active');
        headerBurger.classList.toggle('active');
        htmlTag.classList.toggle('active')
        headerLine.forEach(line => {
            line.classList.toggle('active'); 
        });

        if (document.body.classList.contains('active')) {
            logo.src = '../assets/img/logo/logoBlue.svg'; 
        } else {
            logo.src = '../assets/img/logo/logoBlue.svg';
        }

        if (document.body.classList.contains('active')) {
            logoTxt.src = '../assets/img/logo/logoTxtBlue.svg'; 
        } else {
            logoTxt.src = '../assets/img/logo/logoTxtBlue.svg';
        }

        if (document.body.classList.contains('active')) {
            searchIcon.src = '../assets/img/icons/searchBlue.svg'; 
        } else {
            searchIcon.src = '../assets/img/icons/searchBlue.svg';
        }

        searchIcon.classList.toggle('active');
    });
};

searchBanner = () => {
    const searchBurger = document.querySelector('.header-search');  
    const headerBurger = document.querySelector('.header-burger');  
    const searchMenu = document.querySelector('.search-menu');   
    const headerEn = document.querySelector('.header-en');  
    const headerLine = document.querySelectorAll('.header-line');  
    const logo = document.querySelector('.header-logo img');  
    const logoTxt = document.querySelector('.header-logo__txt')
    const searchIcon = document.querySelector('.header-search img');  
    const headerMenu = document.querySelector('.burger-menu');  
    const htmlTag = document.querySelector('html')
   
    if (!searchBurger) return;  
   
    headerBurger.style.display = "flex";  
   
    searchBurger.addEventListener('click', () => {  
    if (headerMenu.classList.contains('active')) {  
    document.body.classList.remove('active');  
    headerMenu.classList.remove('active');  
    headerEn.classList.remove('active');  
    headerBurger.classList.remove('active');  
    headerLine.forEach(line => {  
    line.classList.remove('active'); });  
   
    logo.classList.remove('active');  
    searchIcon.classList.remove('active');  
    }  
   
    document.body.classList.toggle('active');  
    searchMenu.classList.toggle('active');   
    headerEn.classList.toggle('active'); 
    htmlTag.classList.toggle('active') 
   
    headerBurger.style.display = (headerBurger.style.display === "none" || headerBurger.style.display === "") ? "flex" : "none";  
   
    headerLine.forEach(line => {  
    line.classList.toggle('active'); });  
   
    logo.classList.toggle('active');  
    searchIcon.classList.toggle('active');  

    if (document.body.classList.contains('active')) {
        logo.src = '../assets/img/logo/logoBlue.svg'; 
    } else {
        logo.src = '../assets/img/logo/logoBlue.svg';
    }

    if (document.body.classList.contains('active')) {
        logoTxt.src = '../assets/img/logo/logoTxtBlue.svg'; 
    } else {
        logoTxt.src = '../assets/img/logo/logoTxtBlue.svg';
    }

    if (document.body.classList.contains('active')) {
        searchIcon.src = '../assets/img/icons/searchBlue.svg'; 
    } else {
        searchIcon.src = '../assets/img/icons/searchBlue.svg';
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

const fadeInSection = () => {
    // Настройка IntersectionObserver
    const observerOptions = {
        threshold: 0.1 // Секция считается видимой, когда 10% её высоты появляются в области видимости
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Добавляем класс при видимости
                observer.unobserve(entry.target); // Прекращаем отслеживание после появления
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми секциями
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
            item.addEventListener('mouseenter', () => {
                // Скрываем все списки и удаляем класс active у всех крестиков
                document.querySelectorAll('.burger-menu__column.center ul').forEach(ul => ul.classList.add('hidden'));
                document.querySelectorAll('.burger-mobile__lines').forEach(crossEl => crossEl.classList.remove('active'));

                // Показываем соответствующий список и добавляем класс active к конкретному крестику
                list.classList.remove('hidden');
                cross.classList.add('active');
            });

            item.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!list.matches(':hover') && !item.matches(':hover')) {
                        list.classList.add('hidden');
                        cross.classList.remove('active');
                    }
                }, 30000000); // Добавляем небольшую задержку
            });

            // Обрабатываем наведение на список ul
            list.addEventListener('mouseenter', () => {
                list.classList.remove('hidden'); // Оставляем список видимым
            });

            list.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!list.matches(':hover') && !item.matches(':hover')) {
                        list.classList.add('hidden');
                        cross.classList.remove('active');
                    }
                }, 3000000); // Добавляем небольшую задержку
            });
        }
    });
};

const swiperNews = () => {
    const swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        slidesPerView: 4,
        mousewheel: true,
        freeMode: true,
        freeModeMomentum: true,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            // clickable: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        on: {
            slideChange: function (swiper) {
                // Calculate the progress using realIndex
                const totalSlides = swiper.slides.length - swiper.loopedSlides * 2; // Adjust for looped slides
                const realIndex = swiper.realIndex;
                const progress = realIndex / (totalSlides - 1);

                // Get the progress-bar element
                const progressBar = document.querySelectorAll(".progress-bar");
                const lineWidth = document.querySelector(".news-footer__line").offsetWidth;

                // Calculate the width for the progress-bar and constrain it
                const currentWidth = Math.min(lineWidth * progress, lineWidth); // Cap the width at lineWidth
                progressBar.forEach(bar => {
                    bar.style.width = `${currentWidth}px`;
                });
            },
        },
        breakpoints: {
            2560: {
                slidesPerView: 4,
            },
            1920: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            375: {
                slidesPerView: 1,
            },
        },
    });

    // // Add Intersection Observer for slide animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            } else {
                entry.target.classList.remove("slide-in");
            }
        });
    }, { threshold: 0 });

    // // Apply Observer to all slides
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => observer.observe(slide));
};