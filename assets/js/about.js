const init = () => {
    burgerBanner()
    searchBanner()
    changeLanguage()
    fadeInSection()
    scrollHeader()
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
    


    if (!headerBurger) return;
    headerBurger.addEventListener('click', () => {

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
        headerLine.forEach(line => {
            line.classList.toggle('active'); 
        });

        if (document.body.classList.contains('active')) {
            logo.src = '../assets/img/logo/logoBlue.svg'; 
        } else {
            logo.src = '../assets/img/logo/logo.svg';
        }

        if (document.body.classList.contains('active')) {
            logoTxt.src = '../assets/img/logo/logoTxtBlue.svg'; 
        } else {
            logoTxt.src = '../assets/img/logo/logoTxt.svg';
        }

        if (document.body.classList.contains('active')) {
            searchIcon.src = '../assets/img/icons/searchBlue.svg'; 
        } else {
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
   
    headerBurger.style.display = (headerBurger.style.display === "none" || headerBurger.style.display === "") ? "flex" : "none";  
   
    headerLine.forEach(line => {  
    line.classList.toggle('active'); });  
   
    logo.classList.toggle('active');  
    searchIcon.classList.toggle('active');  

    if (document.body.classList.contains('active')) {
        logo.src = '../assets/img/logo/logoBlue.svg'; 
    } else {
        logo.src = '../assets/img/logo/logo.svg';
    }

    if (document.body.classList.contains('active')) {
        logoTxt.src = '../assets/img/logo/logoTxtBlue.svg'; 
    } else {
        logoTxt.src = '../assets/img/logo/logoTxt.svg';
    }

    if (document.body.classList.contains('active')) {
        searchIcon.src = '../assets/img/icons/searchBlue.svg'; 
    } else {
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
    
    const bannerHeight = window.innerHeight; 
    // const photoSection = document.querySelector('#photo');
    // const photoSectionPosition = photoSection.getBoundingClientRect().top + window.scrollY;
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
    } else {
        headerLogo.src = '../assets/img/logo/logo.svg'; 
        headerLogoTxt.src = '../assets/img/logo/logoTxt.svg';
        searchIcon.src = '../assets/img/icons/search.svg';
        headerEn.style.color = "#000";
        headerEn.style.backgroundColor = "#fff";
        headerLines.forEach(headerLine => {
            headerLine.style.backgroundColor = "#fff";
        });
    }
}

window.addEventListener('scroll', scrollHeader);