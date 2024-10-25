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

window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
    const headerLogo = document.querySelector('.header-logo img');
    const headerLogoTxt = document.querySelector('.header-logo__txt');
    const searchIcon = document.querySelector('.header-search img');
    const headerEn = document.querySelector('.header-en')
    const headerLines = document.querySelectorAll('.header-line')
    const bannerHeight = window.innerHeight; 
    const scrollPosition = window.scrollY;

    if (scrollPosition > bannerHeight) {
        headerLogo.src = './assets/img/logo/logoBlue.svg'; 
        headerLogoTxt.src = './assets/img/logo/logoTxtBlue.svg';
        searchIcon.src = './assets/img/icons/searchBlue.svg';
        headerEn.style.color = "#ffffff"
        headerEn.style.backgroundColor = "#00328A"
        headerLines.forEach(headerLine => {
            headerLine.style.backgroundColor = "#00328A" 
        });
    } else {
        headerLogo.src = './assets/img/logo/logo.svg'; 
        headerLogoTxt.src = './assets/img/logo/logoTxt.svg';
        searchIcon.src = './assets/img/icons/search.svg';
        headerEn.style.color = "#000"
        headerEn.style.backgroundColor = "#fff"
        headerLines.forEach(headerLine => {
            headerLine.style.backgroundColor = "#fff" 
        });
    }
}

// const accordionIndex = () => {
//     const rows = document.querySelectorAll('.accordion-content__row');
//     const contents = document.querySelectorAll('.accordion-content__el');
//     const images = document.querySelectorAll('.accordion-img img');

//     rows.forEach((row, index) => {
//         const icon = row.querySelector('img');

//         row.addEventListener('click', () => {
//             // Проверка текущего состояния контента
//             const isActive = contents[index].classList.contains("active");

//             // Закрываем все контенты и сбрасываем иконки
//             contents.forEach(content => content.classList.remove("active"));
//             rows.forEach(r => {
//                 const img = r.querySelector('img');
//                 if (img) img.src = './assets/img/icons/plus.svg';
//             });

//             if (!isActive) {
//                 // Открыть текущий контент
//                 contents[index].classList.add("active");

//                 // Меняем иконку на крестик
//                 if (icon) icon.src = './assets/img/icons/cross.svg';

//                 // Сброс классов картинок и установка нужной картинки как активной
//                 images.forEach((img, imgIndex) => {
//                     img.classList.remove("active", "disabled");
//                     if (imgIndex === index) {
//                         img.classList.add("active"); // Устанавливаем активной нужную картинку
//                         img.style.display = "block"; // Отображаем активную картинку
//                     } else if (img.classList.contains("disabled")) {
//                         img.style.display = "block"; // Оставляем видимыми картинки с классом disabled
//                     } else {
//                         img.style.display = "none"; // Скрываем все остальные картинки
//                     }
//                 });
//             }
//         });
//     });
// };

// const accordionIndex = () => {
//     const rows = document.querySelectorAll('.accordion-content__row');
//     const contents = document.querySelectorAll('.accordion-content__el');
//     const images = document.querySelectorAll('.accordion-img img');

//     rows.forEach((row, index) => {
//         row.addEventListener('click', () => {
//             const isActive = contents[index].classList.contains("active");

//             contents.forEach(content => content.classList.remove("active"));
//             if (!isActive) {
//                 contents[index].classList.add("active");

//                 images.forEach((img, imgIndex) => {
//                     img.classList.remove("active", "disabled");

//                     if (imgIndex === index) {
//                         img.classList.add("active");
//                     } else if (imgIndex === index + 1 || (index === images.length - 1 && imgIndex === 0)) {
//                         img.classList.add("disabled");
//                     }
//                 });
//             }
//         });
//     });
// };

const accordionIndex = () => {
    const rows = document.querySelectorAll('.accordion-content__row');
    const contents = document.querySelectorAll('.accordion-content__el');
    const images = document.querySelectorAll('.accordion-img img');

    rows.forEach((row, index) => {
        row.addEventListener('click', () => {
            const isActive = contents[index].classList.contains("active");

            contents.forEach(content => content.classList.remove("active"));
            if (!isActive) {
                contents[index].classList.add("active");

                // Сброс классов и установка активного изображения
                images.forEach((img, imgIndex) => {
                    img.classList.remove("active", "disabled");

                    if (imgIndex === index) {
                        img.classList.add("active"); // Текущая картинка активна
                    } else if (imgIndex === (index + 2) % images.length) {
                        img.classList.add("disabled"); // Следующая картинка будет частично видна
                    }
                });
            }
        });
    });
};


const init = () => {
    sliderBanner()
    burgerBanner()
    searchBanner()
    changeLanguage()
    accordionIndex()
}

document.addEventListener('DOMContentLoaded', init);