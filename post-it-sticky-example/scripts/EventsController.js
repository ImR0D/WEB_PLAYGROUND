const addStickyButton = document.getElementById("addSticky");
var modalContainer = null;
var modalCloseButton = null;

var postItRemoveButton = null;
var postItCancelAction = null;
var postItRemoveAction = null;

var modalInputText = "";
var modalCreateSticky = null;

var postItSticky = new Sticky("content-container");

addStickyButton.addEventListener("click", function() {
    openModalScreen(1);
});

function openModalScreen(type) {
    postItSticky.createModal(type);
    modalContainer = postItSticky.getModalContainer();
    modalCloseButton = modalContainer.querySelector("#closeModalButton");
    if (type == 1) {
        modalInputText = postItSticky.getModalContainer().querySelector("#input-title");
        modalCreateSticky = postItSticky.getModalContainer().querySelector("#createPostIt");
        loadPostItEvents();
    }
    loadModalEvents();
}

function closeModalScreen() {
    modalContainer.remove();
}

function loadModalEvents() {
    if (!(modalCloseButton == null)) {
        modalCloseButton.addEventListener("click", function() {
            closeModalScreen();
        });
    }
    if (!(modalCreateSticky == null)) {
        modalCreateSticky.addEventListener("click", function() {
            createStickyPostIt(modalInputText.value);
            closeModalScreen();
            var selector = "close-" + (postItSticky.getStickyCounter() - 1);
            postItRemoveButton = postItSticky.getStickyContainer().querySelector("#" + selector);
            loadPostItEvents();
        });
    }
}

function loadPostItEvents() {
    if (!(postItRemoveButton == null)) {
        postItRemoveButton.addEventListener("click", function(e) {
            openModalScreen(2);
            postItCancelAction = postItSticky.getModalContainer().querySelector("#cancelRemovebtn");
            postItCancelAction.addEventListener("click", () => {closeModalScreen()});
            postItRemoveAction = postItSticky.getModalContainer().querySelector("#acceptRemoveBtn");
            postItRemoveAction.addEventListener("click", () => {
                removeStickPostIt(e.target.parentElement.id);
                closeModalScreen();
            });
        });
    }        
}

function createStickyPostIt(title) {
    postItSticky.createStickyPostIt(title);
}

function removeStickPostIt(clickedElement) {
    if ( !(clickedElement == null || clickedElement == "")){
        postItSticky.removeSticky(clickedElement);
    } else {
        console.error("Sticky Post-it not found or doesn't exist");
    }
    closeModalScreen();
}