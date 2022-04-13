
class Home extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div class="flex flex-wrap md:flex-nowrap">

            <nav class="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block">
                <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                    <a href="#" class="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black  px-2 py-1 rounded-md ml-10 opacity-0">Anasayfa</span>
                    </a>
                    <a href="#about" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hakkımda</span>
                    </a>
                    <a href="#portfolio" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Portfolyo</span>
                    </a>
                    <a href="#contact" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">İletişim</span>
                    </a>
                </div>
            </nav>

            <div class="flex flex-wrap mt-5 lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36 ">
                <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Full Stack<br> Developer
                </h1>
                <div class="w-full flex justify-center md:justify-start">
                    <a href="./serkanaydin_cv.pdf" target="_blank"
                        class="px-8 py-4 bg-theme text-white font-bold mt-8 mb-4 flex items-center space-x-3">
                        <span>CV İndir</span>
                        <div class="  ">
                            <img src="./src/assets/icon/downloadIcon.png" alt="download" class=" ">
                        </div>

                    </a>
                </div>
            </div>
            <img src="./src/assets/images/profil.png" alt="Man" class=" md:absolute  md:mt-0 right-0 -z-1">
        </div>
    </div>
        
        `
    }


    updateList() {
        const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
            return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
        });

        document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
        document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
    }

    connectedCallback() {
        window.addEventListener('scroll', () => {
            this.updateList();
        })
    }
}

window.customElements.define('home-component', Home)