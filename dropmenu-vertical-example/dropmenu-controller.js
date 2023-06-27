dropmenu_btn = document.getElementsByName("content");
dropcontent = document.getElementsByClassName("dropmenu");

function setVisibilityContents(visible_content) {
    for (var i = 0; i < dropcontent.length; i++) {
        elementStyle = dropcontent[i].children[1].style.display
        if (elementStyle == "flex") {
            dropcontent[i].children[1].style.display = "none";
        } else if (dropmenu_btn[i].id == visible_content) {
            dropcontent[i].children[1].style.display = "flex";
        } else {
            dropcontent[i].children[1].style.display = "none";
        }
    }
}

setVisibilityContents();
dropmenu_btn[0].addEventListener("click", function(){
    setVisibilityContents(dropmenu_btn[0].id);
});
dropmenu_btn[1].addEventListener("click", function(){
    setVisibilityContents(dropmenu_btn[1].id);
});
dropmenu_btn[2].addEventListener("click", function(){
    setVisibilityContents(dropmenu_btn[2].id);
});
dropmenu_btn[3].addEventListener("click", function(){
    setVisibilityContents(dropmenu_btn[3].id);
});
dropmenu_btn[4].addEventListener("click", function(){
    setVisibilityContents(dropmenu_btn[4].id);
});
dropmenu_btn[5].addEventListener("click", function(){
    setVisibilityContents(dropmenu_btn[5].id);
});