console.log('nokturnalplague')

const openMenu = document.getElementById('menuButton')
const closeMenu = document.getElementById('closeButton')
const navigation = document.querySelector('.navigation__mobile')

const arrowContainer = document.querySelectorAll('.processo__itens-arrow')

const faqItens = document.querySelectorAll('.faq__item')
const expandButtons = document.querySelectorAll('.open-arrow')
const expandFaqs = document.querySelectorAll('.faq__item-expand')
const expandedFaqs = document.querySelectorAll('.faq__item-expanded')

const header = document.querySelector('header')
const headerContainer = document.querySelector('.header__container')
const currentPage = window.location.pathname.split('/').pop();

const width = window.innerWidth

openMenu.addEventListener('click', () => {
    navigation.style.top = '0';
})

closeMenu.addEventListener('click', () => {
    navigation.style.top = '-100vh';
})

function processo() {
    const arrowSrc = window.innerWidth >= 1439 ? './src/pictures/sequence-right.svg' : './src/pictures/sequence-down.svg'

    arrowContainer.forEach(container => {
        const arrow = document.createElement('img')
        arrow.src = arrowSrc
        container.appendChild(arrow)
    })
}

processo()

faqItens.forEach((faqItem, index) => {
    faqItem.addEventListener('click', () => {
        const expandFaq = expandFaqs[index];
        const expandedFaq = expandedFaqs[index];
        const arrowImg = expandButtons[index].querySelector('img');

        if (arrowImg.src.includes('arrow-down.svg')) {
            expandFaq.style.borderRadius = '16px 0 0 0';
            arrowImg.src = './src/pictures/arrow-up.svg';
            expandedFaq.style.display = 'block';
        } else {
            expandFaq.style.borderRadius = '16px 0 16px 16px';
            arrowImg.src = './src/pictures/arrow-down.svg';
            expandedFaq.style.display = 'none';
        }
    });
});

function headerSize() {
    const headerContainerSize = headerContainer.offsetHeight

    if (currentPage === 'index.html' || currentPage === '') {
        header.style.height = '100vh'
    } else {
        header.style.height = `${headerContainerSize}px`
        header.style.backgroundPosition = 'top'
    }

}

headerSize()

function redimensionarImagemHeader() {
    const header = document.querySelector('header')

    if (width < 600) {
        if (currentPage === 'index.html' || currentPage === '') {
            header.style.backgroundImage = 'url("./src/pictures/header-img-small.jpg")'
        } else {
            header.style.backgroundImage = 'url("./pictures/header-img-small.jpg")'
        }
    } else if (width >= 600 && width < 1440) {
        if (currentPage === 'index.html' || currentPage === '') {
            header.style.backgroundImage = 'url("./src/pictures/header-img-medium.jpg")'
        } else {
            header.style.backgroundImage = 'url("./pictures/header-img-medium.jpg")'
        }
    } else if (width >= 1440 && width < 2880) {
        if (currentPage === 'index.html' || currentPage === '') {
            header.style.backgroundImage = 'url("./src/pictures/header-img-large.jpg")'
        } else {
            header.style.backgroundImage = 'url("./pictures/header-img-large.jpg")'
        }
    } else {
        header.style.backgroundImage = 'url("./src/pictures/header-img-original.jpg")'
    }
}

function redimensionarImagensBody() {
    const imagemCard = document.getElementById('img-card')
    const imagemCta = document.getElementById('img-cta')

    if (currentPage === 'index.html' || currentPage === '') {
        if (width < 600) {
            imagemCard.src = './src/pictures/card-img-small.jpg'
            imagemCta.src = './src/pictures/cta-img-small.jpg'
        } else if (width >= 600 && width <1440 ) {
            imagemCard.src = './src/pictures/card-img-medium.jpg'
            imagemCta.src = './src/pictures/cta-img-medium.jpg'
        } else if (width >= 1440 && width < 2880) {
            imagemCard.src = './src/pictures/card-img-large.jpg'
            imagemCta.src = './src/pictures/cta-img-large.jpg'
        } else {
            imagemCard.src = './src/pictures/card-img-original.jpg'
            imagemCta.src = './src/pictures/cta-img-original.jpg'
        }
    }
}

window.addEventListener('load', () => {
    redimensionarImagemHeader()
    redimensionarImagensBody()
})

window.addEventListener('resize', () => {
    // Remove setas anteriores (evitar duplicação)
    document.querySelectorAll('.processo__itens-arrow img').forEach(arrow => arrow.remove())
    processo()
    headerSize()
    redimensionarImagemHeader()
    redimensionarImagensBody()
});
