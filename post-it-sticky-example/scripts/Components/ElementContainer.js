class Container {
    
    constructor(parent) {
        this.parent_container = this.#setParentContainer(parent);
    }

    /**
     * Create generic element
     * 
     * To create new Element it will necessary passing the type:
     * 
     * The type is the tag element, like "div", "a", "p", etc...
     * 
     * Is it possible ommit the parameters id and className and create only a simple div.
     * You can just ignore them passing to param an empty value as {""}
     * 
     * @example
     * To create a div with class name "Element" and ommit the id you just pass:
     *    createElement("div", "", "Element")
     * To create a div with id "Element" and ommit the class name you just pass:
     *    createElement("div", "Element") or
     *    createElement("div", "Element", "")
     * Or you can create only one simple generic container with no id or class
     *    createElement("div");
     * @param {HTMLElement} type 
     * @param {string} elementID 
     * @param {string} elementClassName 
     * @returns 
     */
    createElement(type, elementID, elementClassName) {
        if (type == undefined || type == "" || type == null) {
            type = "div";
        }
        var element = document.createElement(type);

        if (!(elementID == undefined || elementID == "" || elementID == null)) {
            element.id = elementID
        }
        if (!(elementClassName == undefined || elementClassName == "" ||  elementClassName == null)) {
            element.className = elementClassName;
        }
        
        return element;
    }
    /**
     * Set the parent container this will be passing to the constructor
     * If the param is not passing than the content parent will be as default
     * the "main-sticker-container".
     * 
     * The main ".html" file may contain a 'section' with the parent id to turn the parent element
     * 
     * The default is: <section id="main-sticker-container"></section>
     * @param {*} parent 
     * @returns parent
     */
    #setParentContainer(parent) {
        var element = null;
        if (parent == "" || parent == undefined) {
            parent = "main-sticker-container";
            element = this.createElement("div", parent);
        } else {
            element = document.getElementById(parent);
        }
        return element;
    }

    /**
     * Get parent container
     */
    get getParentContainer() {
        return this.parent_container;
    }

    appendChild(parent, child) {
        if 
        (!(parent == undefined || parent == null || parent == "") &&
         !(child == undefined || child == null || child == "")) 
        {
            parent.append(child);
        } else {
            throw ReferenceError("An error has occurred! Could not possible add the child element to the parent element");
        }
    }
}