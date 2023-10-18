/*====================== MENU MOSTRAR E ESCONDER ====================*/
/* !começaremos pegando o id dos elementos menu, toggle e close */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*======= MOSTRAR MENU =====*/
/* !após pegar os elementos menu, toggle e close faremos a validação para mostrar o menu */
/* !Valida se a constante existe */
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    })
}

/*======= MENU ESCONDIDO =====*/
/* !depois de fazer a validação para abrir o menu, farei a validação para esconder ele */
/* !Valida se a constante existe */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*====================== REMOVER MENU CELULAR ====================*/
/*  !após fazer a validação para esconder o menu, faremos com que cada item do menu vá direto para 
    sua respectiva área da página */
//  !após automatizar os botões do menu, voltarei para o index.html fazer a parte MAIN do projeto!
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando nós clicamos em cada nav__link, nós removemos a classe show-menu,
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*====================== HABILIDADES DE ACORDEÃO ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skill-content skills__close'){
        this.parentNode.className = 'skill-content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


/*====================== GUIAS DE QUALIFICAÇÃO ====================*/

const tabs = document.querySelectorAll('.qualification__button'); // Selecionar todos os botões de guia
const tabContents = document.querySelectorAll('.qualification__content'); // Selecionar todos os conteúdos de guia

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target'); // Obter o valor do atributo data-target
        console.log(target);

        // Remover a classe 'qualification__active' de todos os botões de guia
        tabs.forEach(t => {
            t.classList.remove('qualification__active');
        });

        // Adicionar a classe 'qualification__active' apenas ao botão de guia clicado
        tab.classList.add('qualification__active');
        console.log(tab);

        // Esconder todos os conteúdos de guia
        tabContents.forEach(tabContent => {
            tabContent.style.display = 'none';
        });

        // Exibir o conteúdo de guia correspondente ao botão de guia clicado
        document.querySelector(target).style.display = 'block';
    });
});



/*====================== MODAL DE SERVIÇOS ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})




/*====================== PORTFOLIO SWIPER ====================*/
let swiperPortifolio = new Swiper(".portifolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/*====================== DEPOIMENTO ======================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBeween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dinamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*====================== ROLAR SEÇÕES LINK ATIVO ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*====================== MUDAR CABEÇALHO DE FUNDO ====================*/ 
function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);

/*====================== MOSTRAR ROLAR PARA CIMA ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollUp);

/*====================== TEMA DA LUZ ESCURA ====================*/ 
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Tópico previamente selecionado (se o usuário tiver selecionado)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "escuro" : "claro";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Validamos se o usuário escolheu anteriormente um tópico
if (selectedTheme) {
  // Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o tema escuro
  document.body.classList[selectedTheme === "escuro" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Ativar/desativar o tema manualmente com o botão
themeButton.addEventListener("click", () => {
  // Adicionar ou remover o tema escuro/ícone
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Salvamos o tema e o ícone atual que o usuário escolheu
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
