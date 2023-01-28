// projects navigation
const projectsLinks = document.querySelectorAll('[data-project-name]')
const projectsPages = document.querySelectorAll('[data-project-page]')

// add event to all nav link
for (let i = 0; i < projectsLinks.length; i++) {
    projectsLinks[i].addEventListener("click", function (event) {

        // get project name
        const projectName = event.target.dataset.projectName

        // check if project page exist
        const found = document.querySelector(`[data-project-page="${projectName}"]`)

        if (found) {
            // hide portfolio
            document.querySelector('[data-page="portfolio"]').classList.remove('active')

            // show chosen project
            document.querySelector(`[data-project-page="${projectName}"]`).classList.add('active')
        }
        else {
            console.error(`Error, cannot find project [${projectName}].\nMake sure the project name and project page are set properly.`)
        }
    });
}

// hide opened projects pages
function hideOpenedProjectsPages() {
    for (const projectPage of projectsPages) {
        projectPage.classList.remove('active')
    }
}