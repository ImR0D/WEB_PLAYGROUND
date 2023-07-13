class ModalController extends Modal {

    constructor(parent, sticker) {
        super(parent)
        this.sticker = sticker;
        this.modal = new Modal();
    }
    
    openModalInput() {
        this.modal.openModal(1);
        this.addCloseModalButtonEvent();
    }
    openModalRemove() {
        this.modal.openModal(2);
        this.addCloseModalButtonEvent();
    }
    closeModalScreen() {
        this.modal.closeModal();
    }
    addCloseModalButtonEvent() {
        this.modal.getModalCloseButton.addEventListener(
            "click",
            () => this.closeModalScreen()
        );
    }
    addEventButtonDeleteSticker(button) {
        if (button == null || button == undefined) {
            this.closeModalScreen();
            throw new Error("Cannot find button element");
        }
        sticker.stickerContainer.forEach(e => {
            cid = e.id.slice((e.id.length - 1));
            if (cid == (sticker.stickerContainer.size - 1)) {
                button.addEventListener("click", function() {
                    sticker.deleteSticker(e.id);
                })
            }
        });
    }
}