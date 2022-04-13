

class About extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div
        class="container mt-16 flex justify-between items-center mx-auto px-8 sm:mt-10 md:px-14 md:mt-16  lg:px-24 lg:mt-44 w-full">
        <section class="w-full">
            <h2 id="about" class="secondary-title">Hakkımda</h2>
            <p class="section-paragraph">Merhaba ben Serkan, yazılım geliştiricisiyim.Bireysel ve kurumsal projelere
                imza attım. Kastamonu Üniversitesi Bilgisayar Programcılığı bölümünden mezun oldum.Açık Öğretim
                Fakültesinde Yönetim Bilişim Sistemleri son sınıf öğrencisiyim. Kocaeli'de yaşıyorum.</p>

            <div id="skills" class="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            </div>
        </section>
    </div>
        `
    }


    getSkills() {

        let skilss = document.querySelector('#skills');
        skills.forEach(skill => {
            const html = `
            <div class=" pt-1">
            <div class="flex mb-2 items-center justify-between">
                <span
                    class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-nav ">
                    ${skill.name}
                </span>
                <span data-percent="${skill.progress}"
                    class="skillPercent ease-in-out duration-1000 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-nav ">
                </span>
            </div>
            <div class="w-full bg-selected-text-600 rounded-full dark:bg-gray-700">
                <div class="skillBar  ease-in-out duration-1000 bg-selected-text-900 text-xs font-bold text-nav text-center p-1 leading-none rounded-full"
                    data-progress="${skill.progress}"> </div>
            </div>
        </div>
            `;

            skilss.innerHTML += html;

        })



    }


    skillBarFiil() {
        let progressBars = document.querySelectorAll(".skillBar");
        let skillBarTexts = document.querySelectorAll(".skillBarText");
        let skillPercents = document.querySelectorAll(".skillPercent");
        const about = document.querySelector("#about")

        function showProgress() {
            progressBars.forEach(progressBar => {
                const value = progressBar.dataset.progress
                progressBar.style.opacity = 1
                progressBar.style.width = `${value}%`
            })
            skillPercents.forEach(skillPercent => {
                const value = skillPercent.dataset.percent
                skillPercent.style.opacity = 1
                skillPercent.textContent = ` ${value}%`
            })
            skillBarTexts.forEach(skillBarText => {
                const value = skillBarText.dataset.progress
                skillBarText.innerHTML = `${value}%`
            })
        }

        function hideProgress() {
            progressBars.forEach(progressBar => {
                progressBar.style.opacity = 0
                progressBar.style.width = `${0}%`
            })

            skillPercents.forEach(skillPercent => {
                skillPercent.style.opacity = 0
                skillPercent.textContent = 0
            })
        }

        window.addEventListener('scroll', this.debounce(scroll))
        function scroll() {
            const sectionPos = progressBars[0].getBoundingClientRect().top
            const screenPos = window.innerHeight
            if (sectionPos < screenPos)
                showProgress();
            else
                hideProgress();
        }
    }



    debounce(func, wait = 15, immediate = true) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }



    connectedCallback() {
        this.getSkills()
        window.addEventListener('scroll', () => {

            this.skillBarFiil();
        })
    }


}

window.customElements.define('about-component', About)