const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    //button click action class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }
    //sections active class

    allSections.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            console.log(id);
            if (id) {
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')
                //hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                })
                const element = document.getElementById(id);
                element.classList.add('active');
            }
            console.log(e.target);
            console.log(id);
        }

    )


}
PageTransitions();

/*
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
*/