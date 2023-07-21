// Test

class Controller {

    constructor(parent) {
        this.stickyNote = new StickyNote(parent);
        this.modal = new Modal(parent);
    }

    openModalAddstickyNote() {
        this.modal.openModal(1);
    }
    openModalRemovestickyNote() {
        this.modal.openModal(2);
    }
    closeModalScreen() {
        this.modal.closeModal();
    }

    addStickyNote() {
        this.openModalAddstickyNote();
        titleText = this.modal.getModalOptionContainer.firstChild;
        addButton = this.modal.getModalOptionContainer.lastChild;
        addButton.addEventListener(
            "click",
            () => {
                let removestickyNoteButton = null;
                let cid = 0;
                let stickyNoteSize = 0;
                this.stickyNote.createstickyNote(titleText.value);
                this.stickyNote.buttonsContainer.forEach(e => {
                    removestickyNoteButton = e.lastChild;
                    cid = removestickyNoteButton.id.slice((e.id.length - 1));
                    stickyNoteSize = (this.stickyNote.stickyNoteContainer.size - 1);
                    if (cid == stickyNoteSize) {
                        addEventButtonDeleteStickyNote(removestickyNoteButton);
                    }
                });
                this.closeModalScreen();
            }
        );
    }
    
    deleteStickyNote(elementId) {
        openModalRemove();
        btnCancel = modal.getModalOptionContainer.firstChild;
        btnRemove = modal.getModalOptionContainer.lastChild;
        btnCancel.addEventListener("click", () => {
            closeModalScreen();
        })
        btnRemove.addEventListener("click", () => {
            stickyNote.removestickyNote(elementId);
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
    
    addEventButtonDeleteStickyNote(button) {
        if (button == null || button == undefined) {
            this.closeModalScreen();
            throw new Error("Cannot find button element");
        }
        this.stickyNote.stickyNoteContainer.forEach(e => {
            cid = e.id.slice((e.id.length - 1));
            stickyNoteSize = (this.stickyNote.stickyNoteContainer.size - 1);
            if (cid == stickyNoteSize) {
                button.addEventListener("click", function() {
                    this.deleteStickyNote(e.id);
                })
            }
        });
    }
}

// ==================================================================================================================================

const addStickyNoteButton = document.getElementById("addStickyNote");
const stickyNote = new StickyNote();
const modal = new Modal();
let stickyNoteData = new Map();

function openModalInput() {
    modal.openModal(1);
}

function openModalRemove() {
    modal.openModal(2);
}

function closeModalScreen() {
    modal.closeModal();
}

function addStickyNote() {
    openModalInput();
    input = modal.getModalOptionContainer.firstChild;
    btn = modal.getModalOptionContainer.lastChild;
    btn.onclick = function() {
        button = null;
        stickyNote.createStickyNote(input.value);
        stickyNote.buttonsContainer.forEach(e => {
            button = e.lastChild;
            cid = button.id.slice((e.id.length - 1));
            if (cid == (stickyNote.stickyNoteContainer.size - 1)) {
                addEventButtonDeleteStickyNote(button);
            }
        });
        closeModalScreen();
    }
    addCloseModalButtonEvent();
}

function deleteStickyNote(elementId) {
    openModalRemove();
    btnCancel = modal.getModalOptionContainer.firstChild;
    btnRemove = modal.getModalOptionContainer.lastChild;
    btnCancel.addEventListener("click", () => {
        closeModalScreen();
    })
    btnRemove.addEventListener("click", () => {
        stickyNote.removeStickyNote(elementId);
        closeModalScreen();
    });
    addCloseModalButtonEvent();
}

addStickyNoteButton.addEventListener("click", (e) => {
    addStickyNote()
});

function addCloseModalButtonEvent(){
    closeModal = modal.getModalCloseButton;
    closeModal.onclick = function() {
        closeModalScreen();
    };
}

function addEventButtonDeleteStickyNote(button) {
    if (button == null || button == undefined) {
        closeModalScreen();
        throw new Error("Cannot find button element");
    }
    stickyNote.stickyNoteContainer.forEach(e => {
        cid = e.id.slice((e.id.length - 1));
        if (cid == (stickyNote.stickyNoteContainer.size - 1)) {
            button.addEventListener("click", function() {
                deleteStickyNote(e.id);
            })
        }
    });
}

function stickyNoteStoreData() {
    
    data_title = new Array()
    data_text = new Array()

    stickyNote.getTitleContainer.forEach(title => {
        data_title.push(title.querySelector("#titleTag").innerText)
    })
    stickyNote.getTextContainer.forEach(text => {
        data_text.push(text.querySelector("#textField").value)
    })
    
    for (i = 0; i < data_title.length; i++) {
        stickyNoteData.set(data_title[i], data_text[i])
    }
    let mapIterKeys = stickyNoteData.keys()
    let mapIterValues = stickyNoteData.values()
    
    for (i = 0; i < stickyNoteData.size; i++) {
        localStorage.setItem(mapIterKeys.next().value, mapIterValues.next().value)
    }
    
}

setInterval(stickyNoteStoreData, 100)