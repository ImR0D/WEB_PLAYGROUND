
// Support functions
function logEventName(eventName) {
    console.log("Added Script Event Component [" + eventName.name + "]")
}

function addEventScript(event) {
    document.body.append(event);
}

// Import Event Functions
function importEvent1() {
    var loadScript = document.createElement("script");
    loadScript.src = "scripts/Components/ElementContainer.js"
    loadScript.name = "Element Component"
    logEventName(loadScript);
    addEventScript(loadScript);
}
function importEvent2() {
    var loadScript = document.createElement("script");
    loadScript.src = "scripts/Components/ModalContainer.js";
    loadScript.name = "Modal Component";
    logEventName(loadScript);
    addEventScript(loadScript);
}
function importEvent3() {
    var loadScript = document.createElement("script");
    loadScript.src = "scripts/Components/StickyNoteContainer.js";
    loadScript.name = "Sticky Note Component";
    logEventName(loadScript);
    addEventScript(loadScript);
}
function importEvent4() {
    var loadScript = document.createElement("script");
    loadScript.src = "scripts/Controllers/EventController.js";
    loadScript.name = "Event Controller";
    logEventName(loadScript);
    addEventScript(loadScript);
}
function importEvent5() {
    var loadScript = document.createElement("script");
    loadScript.src = "scripts/Controllers/ModalController.js";
    loadScript.name = "Test Controller - Modal";
    logEventName(loadScript);
    addEventScript(loadScript);
}
function importEvent6() {
    var loadScript = document.createElement("script");
    loadScript.src = "scripts/Controllers/StickyNoteController.js";
    loadScript.name = "Test Controller - Sticky Note";
    logEventName(loadScript);
    addEventScript(loadScript);
}


// Load Events
importEvent1();
importEvent2();
importEvent3();
importEvent4();
importEvent5();
importEvent6();