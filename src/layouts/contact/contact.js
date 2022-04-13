class Contact extends HTMLElement {
    constructor(){
        super();
        this.innerHTML=`
        
        <div class="container mt-32 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <section class="w-full">
            <h2 id="contact" class="secondary-title">İletişim</h2>
            <p class="section-paragraph">İletişime geçmekten çekinmeyin.</p>

            <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
                <div class="space-y-12">
                    <div>
                        <label class="text-white block mb-6 text-xl font-bold">İsim - Soyisim</label>
                        <input class="w-full border border-input-border bg-input px-4 py-4">
                    </div>
                    <div>
                        <label class="text-white block mb-6 text-xl font-bold">Email</label>
                        <input type="email" class="w-full border border-input-border bg-input px-4 py-4">
                    </div>
                    <div>
                        <label class="text-white block mb-6 text-xl font-bold">Mesaj</label>
                        <textarea type="email"
                            class="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"></textarea>
                    </div>
                    <a  id="submit" class="px-6 py-2 float-right bg-theme text-white font-bold">Henüz Aktif Değil</a>
                </div>

                <div class="mt-12">
                    <!-- Contact info -->
                    <p class="text-secondary">+90 542 366 8385</p>
                    <a href="mailto:email@mydomain.com"
                        class="text-secondary underline mt-3 block">serkanydn96@gmail.com</a>

                    <!-- Socials -->
                    <div class="flex mt-20 space-x-6">
                        <!-- İnstagram -->
                        <a href="https://www.instagram.com/serkandsupek" target="_blank">
                            <i class="bi bi-instagram" style="font-size: 2rem;"></i>
                        </a>
                        <!-- Linkedin -->
                        <a href="https://www.linkedin.com/in/serkanydn" target="_blank">
                            <i class="bi bi-linkedin" style="font-size: 2rem;"></i>
                        </a>
                        <!--Github-->
                        <a href="https://github.com/Serkanydn" target="_blank">
                            <i class="bi bi-github" style="font-size: 2rem;"></i>
                        </a>
                    </div>
                </div>

            </div>

        </section>
    </div>
        
        `
    }

    jock() {
        const submit = document.querySelector('#submit')
        submit.addEventListener('click', () => {
            submit.style.opacity = 0;
            setTimeout(() => {
                submit.style.opacity = 1
            }, 2000)

        })
    }

    connectedCallback() {
        this.jock()
    }
}

window.customElements.define('contact-component', Contact);