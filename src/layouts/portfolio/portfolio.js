class Portfolio extends HTMLElement {

    constructor() {
        super()
        this.innerHTML = `

        <div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section id="portfolio-section" class="w-full">
            <h2 id="portfolio" class="secondary-title">Portfolyo</h2>
            <p class="section-paragraph">Projelerim</p>

            <!-- Portfolyo -->
       
        </section>
    </div>
`
    }

    getProjects() {
        const section = document.querySelector('#portfolio-section');
        console.log(section)
        projects.map((p) =>
            section.innerHTML += `
            
            <div class="space-y-12 my-16">
                <div
                    class="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <!-- Portfolyo logo -->
                    <div class="mb-6 lg:mb-0">
                        <img width="100" height="100" fill="none" src="${p.img}">
                    </div>

                    <!-- Portfolyo info -->
                    <div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 class="text-white text-3xl font-semibold">${p.title}</h3>

                        <div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div class="badge"><a href="${p.frontendLink}" target="_blank">Frontend</a></div>
                            <div class="${p.hidden}  badge"> <a href="${p.backendLink}"
                                    target="_blank">Backend</a></div>
                            <div class="badge"><a href="${p.liveLink}" target="_blank">Canlı</a></div>
                        </div>

                        <p class="text-secondary">Frontend: ${p.frontendDescription}
                        </p>
                        <p class="${p.hidden} text-secondary">Backend: ${p.backendDescription}</p>
                    </div>

                </div>

            </div>
            
            `



        )
    }


    connectedCallback() {
        console.log(projects);
        this.getProjects()
    }


}

window.customElements.define('portfolio-component', Portfolio);