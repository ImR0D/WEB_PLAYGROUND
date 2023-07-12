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