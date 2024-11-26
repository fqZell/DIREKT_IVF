const init = () => {
    scrollHeader()
    burgerBanner()
    searchBanner()
    changeLanguage()
    fadeInSection()
    tabsDate()
    aboutSlider()
    burgerFadeIn()
}

document.addEventListener('DOMContentLoaded', init);

burgerBanner = () => {
    const headerBurger = document.querySelector('.header-burger');
    const headerMenu = document.querySelector('.burger-menu');
    const headerEn = document.querySelector('.header-en');
    const headerLine = document.querySelectorAll('.header-line');
    const logo = document.querySelector('.header-logo img');
    const logoTxt = document.querySelector('.header-logo__txt')
    const searchIcon = document.querySelector('.header-search img');
    const headerSearch = document.querySelector('.search-menu');
    const bannerHeight = window.innerHeight;
    const htmlTag = document.querySelector('html')

    if (!headerBurger) return;
    headerBurger.addEventListener('click', () => {

        const scrollPosition = window.scrollY;
        const isInBanner = scrollPosition <= bannerHeight;

        if (headerSearch.classList.contains('active')) {
            document.body.classList.remove('active');
            headerSearch.classList.remove('active');
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
        headerEn.classList.toggle('active');
        headerBurger.classList.toggle('active');
        htmlTag.classList.toggle('active')
        headerLine.forEach(line => {
            line.classList.toggle('active'); 
        });

        if (document.body.classList.contains('active')) {
            logo.src = '../assets/img/logo/logoBlue.svg';
            logoTxt.src = '../assets/img/logo/logoTxtBlue.svg';
            searchIcon.src = '../assets/img/icons/searchBlue.svg';
        } else if (!isInBanner) {
            // Если находимся вне секции баннера, возвращаем изображения в "внешний" вид
            logo.src = '../assets/img/logo/logoBlue.svg';
            logoTxt.src = '../assets/img/logo/logoTxtBlue.svg';
            searchIcon.src = '../assets/img/icons/searchBlue.svg';
        } else if(isInBanner) {
            // Если внутри секции баннера, возвращаем изображения в "баннерный" вид
            logo.src = '../assets/img/logo/logo.svg';
            logoTxt.src = '../assets/img/logo/logoTxt.svg';
            searchIcon.src = '../assets/img/icons/search.svg';
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
    const bannerHeight = window.innerHeight;
    const htmlTag = document.querySelector('html')
   
    if (!searchBurger) return;  
   
    headerBurger.style.display = "flex";  
   
    searchBurger.addEventListener('click', () => {  

        const scrollPosition = window.scrollY;
        const isInBanner = scrollPosition <= bannerHeight;

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
   
    headerBurger.style.display = (headerBurger.style.display === "none" || headerBurger.style.display === "") ? "flex" : "none";  
   
    headerLine.forEach(line => {  
    line.classList.toggle('active'); });  
   
    logo.classList.toggle('active');  
    searchIcon.classList.toggle('active');  
    htmlTag.classList.toggle('active')

    if (document.body.classList.contains('active')) {
        logo.src = '../assets/img/logo/logoBlue.svg';
        logoTxt.src = '../assets/img/logo/logoTxtBlue.svg';
        searchIcon.src = '../assets/img/icons/cross.svg';
    } else if (!isInBanner) {
        // Если находимся вне секции баннера, возвращаем изображения в "внешний" вид
        logo.src = '../assets/img/logo/logoBlue.svg';
        logoTxt.src = '../assets/img/logo/logoTxtBlue.svg';
        searchIcon.src = '../assets/img/icons/searchBlue.svg';
    } else {
        // Если внутри секции баннера, возвращаем изображения в "баннерный" вид
        logo.src = '../assets/img/logo/logo.svg';
        logoTxt.src = '../assets/img/logo/logoTxt.svg';
        searchIcon.src = '../assets/img/icons/search.svg';
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

function scrollHeader() {
    const headerLogo = document.querySelector('.header-logo img');
    const headerLogoTxt = document.querySelector('.header-logo__txt');
    const searchIcon = document.querySelector('.header-search img');
    const headerEn = document.querySelector('.header-en');
    const headerLines = document.querySelectorAll('.header-line');
    const headerWrapper = document.querySelector(".header-wrapper")
    
    const bannerHeight = window.innerHeight; 
    const scrollPosition = window.scrollY;

    if (scrollPosition > bannerHeight) {
        headerLogo.src = '../assets/img/logo/logoBlue.svg'; 
        headerLogoTxt.src = '../assets/img/logo/logoTxtBlue.svg';
        searchIcon.src = '../assets/img/icons/searchBlue.svg';
        headerEn.style.color = "#ffffff";
        headerEn.style.backgroundColor = "#00328A";
        headerLines.forEach(headerLine => {
            headerLine.style.backgroundColor = "#00328A";
        });
        headerWrapper.classList.add('active')
    } else {
        headerLogo.src = '../assets/img/logo/logo.svg'; 
        headerLogoTxt.src = '../assets/img/logo/logoTxt.svg';
        searchIcon.src = '../assets/img/icons/search.svg';
        headerEn.style.color = "#000";
        headerEn.style.backgroundColor = "#fff";
        headerLines.forEach(headerLine => {
            headerLine.style.backgroundColor = "#fff";
        });
        headerWrapper.classList.remove('active')
    }
}

window.addEventListener('scroll', scrollHeader);

function setLineWidths() {
    const portfolioRows = document.querySelectorAll('.portfolio-wrapper__row');

    portfolioRows.forEach(row => {
        const percentageElement = row.querySelector('.portfolio-wrapper__rowEl span');
        const hrElement = row.querySelector('.portfolio-wrapper__rowEl hr');

        if (percentageElement && hrElement) {
            const percentageText = percentageElement.textContent.trim();
            const percentageValue = parseFloat(percentageText.replace(',', '.'));

            const maxWidth = 400; 
            const calculatedWidth = (percentageValue / 100) * maxWidth;
            
            hrElement.style.width = `${calculatedWidth}px`;
        }
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setLineWidths(); 
            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 }); 

const portfolioSection = document.querySelector('#portfolio');
if (portfolioSection) {
    observer.observe(portfolioSection);
}

function setLineHeights() {
    const portfolioRowsRight = document.querySelectorAll('.portfolio-wrapper__col.right .portfolio-wrapper__row');

    portfolioRowsRight.forEach(row => {
        const percentageElement = row.querySelector('span');
        const hrElement = row.querySelector('hr');

        if (percentageElement && hrElement) {
            const percentageText = percentageElement.textContent.trim();
            const percentageValue = parseFloat(percentageText.replace(',', '.'));

            const maxHeight = 600; 
            const calculatedHeight = (percentageValue / 100) * maxHeight;

            hrElement.style.height = `${calculatedHeight}px`;
        }
    });
}

const observerRight = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setLineHeights();
            observerRight.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const portfolioSectionRight = document.querySelector('.portfolio-wrapper__col.right');
if (portfolioSectionRight) {
    observerRight.observe(portfolioSectionRight);
}

const tabsDate = () => {

    const dateActivate = document.querySelectorAll('.tabs-header__numbers span')

    dateActivate.forEach(date => {
        
        date.addEventListener("click", () => {

            dateActivate.forEach(d => {
                d.classList.remove("active")
            });

            date.classList.add('active')

            const dateActive = document.querySelector('.tabs-header__numbers .active')
            const datePaste = document.querySelector('.tabs-date span')
            const tabsContent = document.querySelectorAll('.tabs-content__date span')
        
            const dateActiveTxt = dateActive.textContent
            
            datePaste.innerHTML = `${dateActiveTxt} год`
            tabsContent.forEach(tabsC => {
                tabsC.innerHTML = `Октябрь ${dateActiveTxt} год` 
            });

        })

    });

}

const aboutSlider = () => {

    var swiper = new Swiper(".aboutSwiper", {
        slidesPerView: 8,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            2560: {
                slidesPerView: 8,
            },
            1920: {
                slidesPerView: 8,
            },
            1024: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 5,
            },
            500: {
                slidesPerView: 3,
            },
            300: {
                slidesPerView: 3,
            },
        }
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