class StickyNote extends Container {
    
    constructor(parent) {
        if (parent == null || parent == undefined || parent == "") {
            super("main-stickyNote-container");
        } else {
            super(parent);
        }
        this.stickyNoteCounter = 0;
        this.stickyNoteCounterLabeled = 1;
        this.stickyNoteContainer = new Map();
        this.buttonsContainer = new Map();
        this.titleContainer = new Map();
        this.textContainer = new Map();
        this.stickyNoteTitle = "";
    }
    
    #updateStickyNoteCounter() {
        this.stickyNoteCounter++;
        this.stickyNoteCounterLabeled++;
    }
    
    #addStickyNoteBody() {
        var elementName = "element-" + this.getStickyNoteCounter;
        let stickyNote = this.createElement("div", elementName, "stickyNote-container");
        let buttonContainer = this.createElement("div", "", "buttons-container");

        let clockBtn = this.createElement("a", ("clock-" + this.getStickyNoteCounter), "");
        let optionBtn = this.createElement("a", ("options-" + this.getStickyNoteCounter), "");
        let closeBtn = this.createElement("a", ("close-" + this.getStickyNoteCounter), "");
        
        let clockBtnImg = this.createElement("i", "", "fa fa-clock-o");
        let optionBtnImg = this.createElement("i", "", "fa fa-cog");
        let closeBtnImg = this.createElement("i", "", "fa fa-trash")

        clockBtn.appendChild(clockBtnImg);
        optionBtn.appendChild(optionBtnImg);
        closeBtn.appendChild(closeBtnImg);

        buttonContainer.appendChild(clockBtn);
        buttonContainer.appendChild(optionBtn);
        buttonContainer.appendChild(closeBtn);

        this.appendChild(stickyNote, buttonContainer);
        this.stickyNoteContainer.set(elementName, stickyNote);
        this.buttonsContainer.set(("bce-" + this.getStickyNoteCounter), buttonContainer);
        
    }

    #addContentBody() {
        let container_title = this.createElement("div", "", "title-container");
        let container_text = this.createElement("div", "", "text-container");
        let titleTag = this.createElement("label", "titleTag");
        let textField = this.createElement("textarea", "textField");
        titleTag.innerText = this.getTitle;

        this.appendChild(container_title, titleTag);
        this.appendChild(container_text, textField);

        this.titleContainer.set(("titleContainer-" + this.getStickyNoteCounter), container_title);
        this.textContainer.set(("textContainer-" + this.getStickyNoteCounter), container_text);

        var elementName = "element-" + this.getStickyNoteCounter;
        this.appendChild(this.getStickyNoteContainer(elementName), container_title);
        this.appendChild(this.getStickyNoteContainer(elementName), container_text);
    }

    createStickyNote(title) {
        if (title == undefined || title == "") {
            this.setTitle = ("Sticky Note " + this.stickyNoteCounterLabeled);
        } else {
            this.setTitle = title;
        }
        this.#addStickyNoteBody();
        this.#addContentBody();

        this.stickyNoteContainer.forEach(e => {
            this.appendChild(this.getParentContainer, e);
        });
        
        this.#updateStickyNoteCounter();
    }

    removeStickyNote(stickyNoteId) {
        this.stickyNoteContainer.forEach((k,v) => {
            var index = k.id.slice(k.id.length - 1);
            if (k.id == stickyNoteId) {
                this.stickyNoteContainer.get(v).remove();
                this.stickyNoteContainer.delete(k.id);
                this.buttonsContainer.get(("bce-" + index)).remove();
                this.buttonsContainer.delete(("bce-" + index));
                this.titleContainer.get(("titleContainer-" + index)).remove();
                this.titleContainer.delete(("titleContainer-" + index));
                this.textContainer.get(("textContainer-" + index)).remove();
                this.textContainer.delete(("textContainer-" + index));
                this.stickyNoteCounter--;
            }
        });
    }

    get getParent() {
        return this.getParentContainer
    }
    get getStickyNoteCounter() {
        return this.stickyNoteCounter;
    }
    get getStickyNoteContainer() {
        return this.stickyNoteContainer;
    }
    getStickyNoteContainer(key) {
        return this.stickyNoteContainer.get(key);
    }
    get getButtonsContainer() {
        return this.buttonsContainer;
    }
    getButtonsContainerElement(key) {
        return this.buttonsContainer.get(key);
    }
    get getTitleContainer() {
        return this.titleContainer;
    }
    getTitleContainerElement(key) {
        return this.titleContainer.get(key);
    }
    get getTextContainer() {
        return this.textContainer;
    }
    getTextContainerElement(key) {
        return this.textContainer.get(key);
    }
    get getTitle() {
        return this.stickyNoteTitle;
    }
    set setTitle(title) {
        this.stickyNoteTitle = title;
    }
}