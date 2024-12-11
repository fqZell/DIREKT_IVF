const init = () => {
    burgerBanner()
    searchBanner()
    changeLanguage()
    fadeInSection()
    burgerFadeIn()
    tebsHonors()
    popup()
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
        searchIcon.src = '../assets/img/icons/cross.svg'; 
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

const tebsHonors = () => {
    const honorsWrapper = document.querySelectorAll('.portfolio-wrapper');
    if (!honorsWrapper.length) return;
    const honorsNumbers = document.querySelectorAll('.honors-bottom__numbers span');
    if (!honorsNumbers.length) return;
    const prevButton = document.querySelector('.honors-bottom__prev span');
    const nextButton = document.querySelector('.honors-bottom__next span');
    const fullPrevButton = document.querySelector('.honor-full__prev');
    const fullNextButton = document.querySelector('.honor-full__next');

    if (!prevButton || !nextButton || !fullPrevButton || !fullNextButton) return;

    honorsNumbers.forEach((numbers, index) => {
        numbers.addEventListener('click', () => {
            updateActiveSlide(index);
        });
    });

    let currentIndex = Array.from(honorsWrapper).findIndex(wrapper => wrapper.classList.contains('active'));

    // Функция для обновления активного слайда и номера
    function updateActiveSlide(newIndex) {
        honorsWrapper[currentIndex].classList.remove('active');
        honorsNumbers[currentIndex].classList.remove('active');

        currentIndex = newIndex;

        honorsWrapper[currentIndex].classList.add('active');
        honorsNumbers[currentIndex].classList.add('active');
    }

    // Функция переключения слайдов с зацикливанием
    function switchSlide(newIndex) {
        updateActiveSlide((newIndex + honorsWrapper.length) % honorsWrapper.length);
    }

    // Обработчики событий для стандартных кнопок переключения
    prevButton.addEventListener('click', () => switchSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => switchSlide(currentIndex + 1));

    // Обработчики событий для кнопок полного переключения
    fullPrevButton.addEventListener('click', () => updateActiveSlide(0)); // В начало
    fullNextButton.addEventListener('click', () => updateActiveSlide(honorsWrapper.length - 1)); // В конец
};

const popup = () => {

    const cards = document.querySelectorAll('.portfolio-card');
    const popupOverlay = document.querySelector('.popup-overlay');
    // const popupImage = document.querySelector('.popup-image');
    const popupTitle = document.querySelector('.popup-title__portfolio');
    const popupButton = document.querySelector('.popup-content__button');
    const popupSubtitle = document.querySelector('.popup-subtitle__portfolio')
    const popupClose = document.querySelector('.popup-close')

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // const imgSrc = card.querySelector('img').src;
            const titleText = card.querySelector('.portfolio-card__title').innerText;
            const buttonText = card.querySelector('.portfolio-card__button button').innerText
            const subtitle = card.querySelector('.portfolio-card__description p').innerText

            // Установка картинки и заголовка в popup
            // popupImage.src = imgSrc;
            popupTitle.innerText = titleText;
            popupButton.innerText = buttonText;
            popupSubtitle.innerText = subtitle

            // Показ popup
            popupOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    popupClose.addEventListener('click', () => {
        popupOverlay.classList.add('hidden');
        setTimeout(() => {
            popupOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            popupOverlay.classList.remove('hidden');
        }, 500);
    })

    // Закрытие popup по клику на overlay
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.add('hidden');
            setTimeout(() => {
                popupOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
                popupOverlay.classList.remove('hidden');
            }, 500);
        }
    });


}