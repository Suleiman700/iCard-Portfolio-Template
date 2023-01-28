
// theme button
const themeBtn = document.querySelector('#open-theme-settings')

// theme modal
const themeModal = document.querySelector('[data-theme-modal]')
const themeModalOverlay = document.querySelector('[data-theme-modal-overlay]')
const themeModalCloseBtn = document.querySelector('[data-theme-modal-close-btn]')

// open theme modal
themeBtn.addEventListener('click', () => {
    showThemeModal()
})

// close theme modal
themeModalCloseBtn.addEventListener('click', () => {
    hideThemeModal()
})

themeModalOverlay.addEventListener("click", () => {
    hideThemeModal()
});

const showThemeModal = () => {
    themeModal.classList.toggle('active')
    themeModalOverlay.classList.toggle('active')
}

const hideThemeModal = () => {
    themeModal.classList.toggle('active')
    themeModalOverlay.classList.toggle('active')
}



// ==========================================================



// choose theme
const themeButtons = document.querySelectorAll('.theme-btn')
for (const themeButton of themeButtons) {
    themeButton.addEventListener('click', (event) => {
        const themeName = event.target.dataset.theme
        pickThem(themeName)
    })
}

/**
 * pick theme
 * @param _themeName {string} example: red
 */
const pickThem = (_themeName) => {
    document.documentElement.style.setProperty('--active-theme', `var(--${_themeName})`);
    document.documentElement.style.setProperty('--theme-active-color', `var(--${_themeName})`);
    document.documentElement.style.setProperty('--theme-icon-color', `var(--${_themeName})`);
    document.documentElement.style.setProperty('--theme-button-text-color', `var(--${_themeName})`);
    document.documentElement.style.setProperty('--theme-scrollbar-thumb', `var(--${_themeName})`);
    document.documentElement.style.setProperty('--theme-line-color', `var(--${_themeName})`);
    document.documentElement.style.setProperty('--theme-img-filter', `var(--${_themeName})`);
}