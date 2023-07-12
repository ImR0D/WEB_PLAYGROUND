class Modal extends Container {

    constructor(parent) {
        if (parent == null || parent == undefined || parent == "") {
            super("main-sticker-container");
        } else {
            super(parent);
        }
        this.modalContentContainer = null
        this.textContainer = null;
        this.optionContainer = null;
        this.hasModalOpen = false;
        this.hasBody = false;
        this.modalCloseButton = null;
        this.modalTypeOpened = 0;
        this.parentModalContainer = this.#createModalContainer();
    }

    #createModalContainer() {
        var container = this.createElement("div", "", "modal-container");
        var content = this.createElement("div", "", "modal-content")
        var modalCloseButton = this.createElement("i", "modalCloseButton", "fa fa-times modal-close-button")
        
        this.modalCloseButton = modalCloseButton;
        this.modalContentContainer = content;

        this.appendChild(container, modalCloseButton);
        this.appendChild(container, content);
        
        return container;
    }

    #setInnerValue(element, value) {
        element.innerText = value;
    }

    /**
     * @argument 1: Will create the modal to input element;
     * @argument 2: Will create the modal to sticker remove element
     * @param {number} type 
     */

    openModal(type) {
        if (!this.hasBody) {
            if (type == 1) {
                this.#modalContainerAdd();
            } else if (type == 2) {
                this.#modalContainerRemove();
            } else {
                throw new Error("You need to specify the modal type correctly. Read documentation for more information.")
            }
            this.modalTypeOpened = type;
        }
        if (!(this.hasModalOpen)) {
            this.hasModalOpen = true;
            this.appendChild(this.getParentContainer, this.getModalContainer);
        } else {
            throw new Error("Could not possible open modal");
        }
    }

    closeModal() {
        if (this.hasModalOpen) {
            this.hasModalOpen = false;
            this.getModalContainer.remove();
            this.#removeContentBody();
        } else {
            throw new Error("Modal element has no opened");
        }
    }

    #addContentBody() {
        this.textContainer = this.createElement("div", "", "modal-text-container");
        this.optionContainer = this.createElement("div", "", "modal-option-container");
    }

    #removeContentBody() {
        if (!(this.getModalTextContainer == null)) {
            this.getModalTextContainer.remove();
        }
        if (!(this.getModalOptionContainer == null)) {
            this.getModalOptionContainer.remove();
        }
        this.hasBody = false;
    }
    
    #modalContainerAdd() {
        this.#removeContentBody();
        this.#addContentBody();

        var labelElement = this.createElement("label", "", "modal-label-element");
        this.#setInnerValue(labelElement, "Create new Sticker");
        var inputElement = this.createElement("input", "input-title")
            inputElement.type = "text";
            inputElement.placeholder = "Input the Sticker Title";
        var createElementButton = this.createElement("input", "createPostIt")
            createElementButton.type = "button";
            createElementButton.value = "Create Sticker";
        
        this.appendChild(this.textContainer, labelElement);
        this.appendChild(this.optionContainer, inputElement);
        this.appendChild(this.optionContainer, createElementButton);
        this.appendChild(this.modalContentContainer, this.textContainer);
        this.appendChild(this.modalContentContainer, this.optionContainer);
        this.hasBody = true;
    }

    #modalContainerRemove() {
        this.#removeContentBody();
        this.#addContentBody();

        var labelElement = this.createElement("label", "", "modal-label-element");
        var subTextElement = this.createElement("label", "", "modal-subtext red");
        var cancelActionButton = this.createElement("button", "cancelRemoveButton", "cancel-remove");
        var acceptActionButton = this.createElement("button", "acceptRemoveButton", "accept-remove");

        this.#setInnerValue(labelElement, "Deseja realmente realizar essa ação?");
        this.#setInnerValue(subTextElement, "Esta ação não poderá ser desfeita");
        this.#setInnerValue(cancelActionButton, "Cancel");
        this.#setInnerValue(acceptActionButton, "Remove");

        this.appendChild(this.textContainer, labelElement);
        this.appendChild(this.textContainer, subTextElement);
        this.appendChild(this.optionContainer, cancelActionButton);
        this.appendChild(this.optionContainer, acceptActionButton);
        this.appendChild(this.modalContentContainer, this.textContainer);
        this.appendChild(this.modalContentContainer, this.optionContainer);

        this.hasBody = true;
    }

    get getModalContainer() {
        return this.parentModalContainer;
    }

    get getModalContent() {
        return this.modalContentContainer;
    }

    get getModalTextContainer() {
        return this.textContainer;
    }

    get getModalOptionContainer() {
        return this.optionContainer;
    }
    get getModalTypeOpened() {
        return this.modalTypeOpened;
    }

    get getModalCloseButton() {
        return this.modalCloseButton;
    }
}