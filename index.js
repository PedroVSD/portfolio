const toggleBtn = document.getElementById('theme-toggle')
const htmlElement = document.documentElement

const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme)
}

toggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme')

    if (currentTheme === 'dark') {
        htmlElement.removeAttribute('data-theme')
        localStorage.setItem('theme', 'light')
    } else {
        htmlElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
    }
})