class StickerController extends StickyNote {

    /**
     * @param {HTMLElement} parent 
     * @param {string} stickerName 
     */
    constructor(parent, stickerName) {
        super(parent)

    }
    get getSticker() {
        return this.parent.getStickyNoteContainer;
    }

}