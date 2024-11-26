console.log('nokturnalplague')

const openMenu = document.getElementById('menuButton')
const closeMenu = document.getElementById('closeButton')
const navigation = document.querySelector('.navigation__mobile')

const arrowContainer = document.querySelectorAll('.processo__itens-arrow')

const expandButtons = document.querySelectorAll('.open-arrow')
const expandFaqs = document.querySelectorAll('.faq__item-expand')
const expandedFaqs = document.querySelectorAll('.faq__item-expanded')

const header = document.querySelector('header')
const headerContainer = document.querySelector('.header__container')
const currentPage = window.location.pathname.split('/').pop();

openMenu.addEventListener('click', () => {
    navigation.style.top = '0';
})

closeMenu.addEventListener('click', () => {
    navigation.style.top = '-100vh';
})

//Executa novamente ao redimensionar a janela
window.addEventListener('resize', () => {

});

function processo() {
    const arrowSrc = window.innerWidth >= 1439 ? './src/pictures/sequence-right.svg' : './src/pictures/sequence-down.svg'

    arrowContainer.forEach(container => {
        const arrow = document.createElement('img')
        arrow.src = arrowSrc
        container.appendChild(arrow)
    })
}

processo()

expandButtons.forEach((expandButton, index) => {
    expandButton.addEventListener('click', () => {
        const expandFaq = expandFaqs[index];
        const expandedFaq = expandedFaqs[index];
        const arrowImg = expandButton.querySelector('img');

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

window.addEventListener('resize', () => {
    // Remove setas anteriores (evitar duplicação)
    document.querySelectorAll('.processo__itens-arrow img').forEach(arrow => arrow.remove())
    processo()
    headerSize()
});
