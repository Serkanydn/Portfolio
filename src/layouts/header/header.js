class Header extends HTMLElement {

    constructor() {
        super();
        this.innerHTML = `
        
<header class="py-6">
<div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <div class="text-lg font-bold">Serkan Aydın</div>
    <div class="hidden md:flex space-x-12 items-center">
        <a href="#" class="text-selected-text-900">Anasayfa</a>
        <a href="#about">Hakkımda</a>
        <a href="#portfolio">Portfolyo</a>
        <a href="#contact"><button class="px-6 py-2 bg-theme font-bold">İletişim</button></a>
    </div>
    <div class="md:hidden" id="mini-menu-icon">
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                fill="white" />
        </svg>


    </div>

</div>

<div class="flex justify-end">
    <div id="mini-menu" class="hidden flex px-10  flex-col 0 py-3 mt-5  items-end w-full rounded-xl bg-gray-700 md:hidden ">
        <a href="#" class="px-2 py-1">Anasayfa</a>
        <a href="#about" class=" px-2 py-1">Hakkımda</a>
        <a href="#portfolio" class=" px-2 py-1">Portfolyo</a>
        <a href="#contact" class="bg-theme font-bold px-2 py-1">İletişim</a>
    </div>
</div>

</header>

`
    }


    openMiniMenu() {
        let menuIcon = document.querySelector('#mini-menu-icon')
        let menu = document.querySelector('#mini-menu')

        let menuItem = menu.querySelectorAll('a')

        menuItem.forEach(item => item.addEventListener('click', () => {
            menu.classList.toggle('hidden')
        }))
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('hidden')
            menu.style.position = 'absolute'
        })
    }

   
    connectedCallback() {
        this.openMiniMenu();
 
    }
}

window.customElements.define('header-component', Header);