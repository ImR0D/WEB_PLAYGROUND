class StickerController extends Sticker {

    /**
     * @param {HTMLElement} parent 
     * @param {string} stickerName 
     */
    constructor(parent, stickerName) {
        super(parent)
    }
    get getSticker() {
        return this.parent.getStickerContainer;
    }

}

const addStickerButton = document.getElementById("addSticker");
const sticker = new Sticker();
const modal = new Modal();

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