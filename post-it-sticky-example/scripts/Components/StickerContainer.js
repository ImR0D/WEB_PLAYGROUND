class Sticker extends Container {
    
    constructor(parent) {
        if (parent == null || parent == undefined || parent == "") {
            super("main-sticker-container");
        } else {
            super(parent);
        }
        this.stickerCounter = 0;
        this.stickerCounterLabeled = 1;
        this.stickerContainer = new Map();
        this.buttonsContainer = new Map();
        this.titleContainer = new Map();
        this.textContainer = new Map();
        this.stickerTitle = "";
    }
    
    #updateStickerCounter() {
        this.stickerCounter++;
        this.stickerCounterLabeled++;
    }
    
    #addStickerBody() {
        var elementName = "element-" + this.getStickerCounter;
        let sticker = this.createElement("div", elementName, "sticker-container");
        let buttonContainer = this.createElement("div", "", "buttons-container");

        let clockBtn = this.createElement("a", ("clock-" + this.getStickerCounter), "");
        let optionBtn = this.createElement("a", ("options-" + this.getStickerCounter), "");
        let closeBtn = this.createElement("a", ("close-" + this.getStickerCounter), "");
        
        let clockBtnImg = this.createElement("i", "", "fa fa-clock-o");
        let optionBtnImg = this.createElement("i", "", "fa fa-cog");
        let closeBtnImg = this.createElement("i", "", "fa fa-trash")

        clockBtn.appendChild(clockBtnImg);
        optionBtn.appendChild(optionBtnImg);
        closeBtn.appendChild(closeBtnImg);

        buttonContainer.appendChild(clockBtn);
        buttonContainer.appendChild(optionBtn);
        buttonContainer.appendChild(closeBtn);

        this.appendChild(sticker, buttonContainer);
        this.stickerContainer.set(elementName, sticker);
        this.buttonsContainer.set(("bce-" + this.getStickerCounter), buttonContainer);
        
    }

    #addContentBody() {
        let container_title = this.createElement("div", "", "title-container");
        let container_text = this.createElement("div", "", "text-container");
        let titleTag = this.createElement("label", "titleTag");
        let textField = this.createElement("textarea", "textField");
        titleTag.innerText = this.getTitle;

        this.appendChild(container_title, titleTag);
        this.appendChild(container_text, textField);

        this.titleContainer.set(("titleContainer-" + this.getStickerCounter), container_title);
        this.textContainer.set(("textContainer-" + this.getStickerCounter), container_text);

        var elementName = "element-" + this.getStickerCounter;
        this.appendChild(this.getStickerContainer(elementName), container_title);
        this.appendChild(this.getStickerContainer(elementName), container_text);
    }

    createSticker(title) {
        if (title == undefined || title == "") {
            this.setTitle = ("Sticker " + this.stickerCounterLabeled);
        } else {
            this.setTitle = title;
        }
        this.#addStickerBody();
        this.#addContentBody();

        this.stickerContainer.forEach(e => {
            this.appendChild(this.getParentContainer, e);
        });
        
        this.#updateStickerCounter();
    }

    removeSticker(stickerId) {
        this.stickerContainer.forEach((k,v) => {
            var index = k.id.slice(k.id.length - 1);
            if (k.id == stickerId) {
                this.stickerContainer.get(v).remove();
                this.stickerContainer.delete(k.id);
                this.buttonsContainer.get(("bce-" + index)).remove();
                this.buttonsContainer.delete(("bce-" + index));
                this.titleContainer.get(("titleContainer-" + index)).remove();
                this.titleContainer.delete(("titleContainer-" + index));
                this.textContainer.get(("textContainer-" + index)).remove();
                this.textContainer.delete(("textContainer-" + index));
                this.stickerCounter--;
            }
        });
    }

    get getStickerCounter() {
        return this.stickerCounter;
    }
    get getStickerContainer() {
        return this.stickerContainer;
    }
    getStickerContainer(key) {
        return this.stickerContainer.get(key);
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
        return this.stickerTitle;
    }
    set setTitle(title) {
        this.stickerTitle = title;
    }
}