// Test Phase

class Controller {

    constructor(parent) {
        this.sticker = new Sticker(parent);
        this.modal = new Modal(parent);
    }

    openModalAddSticker() {
        this.modal.openModal(1);
    }
    openModalRemoveSticker() {
        this.modal.openModal(2);
    }
    closeModalScreen() {
        this.modal.closeModal();
    }

    addSticker() {
        this.openModalAddSticker();
        titleText = this.modal.getModalOptionContainer.firstChild;
        addButton = this.modal.getModalOptionContainer.lastChild;
        addButton.addEventListener(
            "click",
            () => {
                let removeStickerButton = null;
                let cid = 0;
                let stickerSize = 0;
                this.sticker.createSticker(titleText.value);
                this.sticker.buttonsContainer.forEach(e => {
                    removeStickerButton = e.lastChild;
                    cid = removeStickerButton.id.slice((e.id.length - 1));
                    stickerSize = (this.sticker.stickerContainer.size - 1);
                    if (cid == stickerSize) {
                        addEventButtonDeleteSticker(removeStickerButton);
                    }
                });
                this.closeModalScreen();
            }
        );
    }
    
    deleteSticker(elementId) {
        openModalRemove();
        btnCancel = modal.getModalOptionContainer.firstChild;
        btnRemove = modal.getModalOptionContainer.lastChild;
        btnCancel.addEventListener("click", () => {
            closeModalScreen();
        })
        btnRemove.addEventListener("click", () => {
            sticker.removeSticker(elementId);
            closeModalScreen();
        });
        addCloseModalButtonEvent();
    }

    addCloseModalButtonEvent(){
        closeModal = modal.getModalCloseButton;
        closeModal.onclick = function() {
            closeModalScreen();
        };
    }
    
    addEventButtonDeleteSticker(button) {
        if (button == null || button == undefined) {
            this.closeModalScreen();
            throw new Error("Cannot find button element");
        }
        this.sticker.stickerContainer.forEach(e => {
            cid = e.id.slice((e.id.length - 1));
            stickerSize = (this.sticker.stickerContainer.size - 1);
            if (cid == stickerSize) {
                button.addEventListener("click", function() {
                    this.deleteSticker(e.id);
                })
            }
        });
    }
}

// ==================================================================================================================================

const addStickerButton = document.getElementById("addSticker");
const sticker = new Sticker();
const modal = new Modal();
let dataStickers = new Map();

function openModalInput() {
    modal.openModal(1);
}

function openModalRemove() {
    modal.openModal(2);
}

function closeModalScreen() {
    modal.closeModal();
}

function addSticker() {
    openModalInput();
    input = modal.getModalOptionContainer.firstChild;
    btn = modal.getModalOptionContainer.lastChild;
    btn.onclick = function() {
        button = null;
        sticker.createSticker(input.value);
        sticker.buttonsContainer.forEach(e => {
            button = e.lastChild;
            cid = button.id.slice((e.id.length - 1));
            if (cid == (sticker.stickerContainer.size - 1)) {
                addEventButtonDeleteSticker(button);
            }
        });
        closeModalScreen();
    }
    addCloseModalButtonEvent();
}

function deleteSticker(elementId) {
    openModalRemove();
    btnCancel = modal.getModalOptionContainer.firstChild;
    btnRemove = modal.getModalOptionContainer.lastChild;
    btnCancel.addEventListener("click", () => {
        closeModalScreen();
    })
    btnRemove.addEventListener("click", () => {
        sticker.removeSticker(elementId);
        closeModalScreen();
    });
    addCloseModalButtonEvent();
}

addStickerButton.addEventListener("click", (e) => {
    addSticker()
});

function addCloseModalButtonEvent(){
    closeModal = modal.getModalCloseButton;
    closeModal.onclick = function() {
        closeModalScreen();
    };
}

function addEventButtonDeleteSticker(button) {
    if (button == null || button == undefined) {
        closeModalScreen();
        throw new Error("Cannot find button element");
    }
    sticker.stickerContainer.forEach(e => {
        cid = e.id.slice((e.id.length - 1));
        if (cid == (sticker.stickerContainer.size - 1)) {
            button.addEventListener("click", function() {
                deleteSticker(e.id);
            })
        }
    });
}

function PersistData() {

    sticker.stickerContainer.forEach(e => {
        dataStickers.set(e.id, e)
    });

    dataStickers.forEach(e => {
        teste = JSON.stringify(e)
        console.log(e)
        console.log(teste)
    })
    
    localStorage.setItem('StickerMap', dataStickers)
}

function LoadData() {
    parent = sticker.getParent;
    if (localStorage.hasOwnProperty("Stickers")) {
        parent.appendChild(localStorageData.forEach(e => {
            console.log(e)
        }))
    }
    console.log(localStorage)
}