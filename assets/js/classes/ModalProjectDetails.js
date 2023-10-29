
class ModalProjectDetails {
    modalId = 'modal-project-details'

    tryLink = ''
    sourceCodeLink = ''

    constructor() {}

    /**
     * show or hide modal
     * @param _option {boolean}
     */
    setShown(_option) {
        if (_option === true) {
            $(`#${this.modalId}`).modal('show')
        }
        else {
            $(`#${this.modalId}`).modal('hide')
        }
    }

    /**
     * set modal title
     * @param _text {string}
     */
    setTitle(_text) {
        document.querySelector(`#${this.modalId} #project-title`).innerHTML = _text
    }

    /**
     * set modal image
     * @param _imageSrc {string}
     */
    setImage(_imageSrc) {
        document.querySelector(`#${this.modalId} #project-image`).src = _imageSrc
    }

    /**
     * set project short description
     * @param _text {string}
     */
    setShortDescription(_text) {
        document.querySelector(`#${this.modalId} #project-short-description`).innerHTML = _text

        // hide if text is empty
        if (_text === '' || !_text.length) {
            document.querySelector(`#${this.modalId} #project-short-description`).style.display = 'none'
        }
        else {
            document.querySelector(`#${this.modalId} #project-short-description`).style.display = 'block'
        }
    }

    /**
     * set project long description
     * @param _text {string}
     */
    setLongDescription(_text) {
        document.querySelector(`#${this.modalId} #project-long-description`).innerHTML = _text

        // hide if text is empty
        if (_text === '' || !_text.length) {
            document.querySelector(`#${this.modalId} #project-long-description`).style.display = 'none'
        }
        else {
            document.querySelector(`#${this.modalId} #project-long-description`).style.display = 'block'
        }
    }

    /**
     * set try button link
     * @param _link {string}
     */
    setTryButtonLink(_link) {
        this.tryLink = _link
        document.querySelector(`#${this.modalId} #try-button`).addEventListener('click', () => {
            window.open(
                this.tryLink,
                '_blank' // <- This is what makes it open in a new window.
            );
        })

        // hide button if link is empty
        if (_link === '' || !_link.length) {
            document.querySelector(`#${this.modalId} #try-button`).style.display = 'none'
        }
        else {
            document.querySelector(`#${this.modalId} #try-button`).style.display = 'inline'
        }
    }

    /**
     * set source code button link
     * @param _link {string}
     */
    setSourceCodeButtonLink(_link) {
        this.sourceCodeLink = _link
        document.querySelector(`#${this.modalId} #source-code-button`).addEventListener('click', () => {
            window.open(
                this.sourceCodeLink,
                '_blank' // <- This is what makes it open in a new window.
            );
        })

        // hide button if link is empty
        if (_link === '' || !_link.length) {
            document.querySelector(`#${this.modalId} #source-code-button`).style.display = 'none'
        }
        else {
            document.querySelector(`#${this.modalId} #source-code-button`).style.display = 'inline'
        }
    }
}

export default new ModalProjectDetails()
