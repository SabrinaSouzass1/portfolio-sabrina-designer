/*ANIMAÇÃO DE PAG*/

const myObserver = new IntersectionObserver (
    (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) (
                entry.target.classList.add('show')
            )
        })
    }
)

const elements = document.querySelectorAll(".hidden")

elements.forEach ((elements) => myObserver.observe(elements))

