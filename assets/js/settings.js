const name = 'John Doe'
const job = 'Full Stack Developer'
const email = 'soleman630@gmail.com'
const phone = '+12133522795'
const facebook = 'https://www.facebook.com/xSuleimanx/'
const github = 'https://github.com/Suleiman700'
const linkedin = 'https://www.linkedin.com/in/suleiman-jaber/'

// set sidebar name
document.querySelector('#sidebar-name').innerText = name

// set sidebar job
document.querySelector('#sidebar-job').innerText = job

// set sidebar email
document.querySelector('#sidebar-email').setAttribute('href', `mailto:${email}`)
document.querySelector('#sidebar-email').innerText = email

// set sidebar phone
document.querySelector('#sidebar-phone').setAttribute('href', `tel:${phone}`)
document.querySelector('#sidebar-phone').innerText = phone

// set sidebar social links
document.querySelector('#facebook-link').setAttribute('href', facebook)
document.querySelector('#github-link').setAttribute('href', github)
document.querySelector('#linkedin-link').setAttribute('href', linkedin)