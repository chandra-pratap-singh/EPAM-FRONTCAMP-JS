import {ele} from "../../controller/element.js";

// This class is for header of the webpage
class header{
    constructor(){
        this.header_element = ele("div","row header");
        this.left = ele("div", "col-md-8")
        this.left.appendChild(ele("span", "logo", "NEWSFEED"))
        this.left.appendChild(ele("span", "sub-logo", "Yet another newsfeed"))

        this.right = ele("div", "col-md-4")
        this.row = ele("div","row")
        this.subscribe_input_box_container = ele("div","col-8 subscribe-input-box-container")
        this.inp = ele("input","subscribe-input-box")
        this.inp.id = "subscribe-input-box"
        this.inp.placeholder = "Email Id"
        this.subscribe_input_box_container.appendChild(this.inp)
        this.subscribe_button_container = ele("div", "col-4 subscribe-button-container")
        this.input_button = ele("button", "subscribe-button", "Subscribe")
        this.input_button.id = "subscribe-button"
        this.subscribe_button_container.appendChild(this.input_button)
        this.row.appendChild(this.subscribe_input_box_container)
        this.row.appendChild(this.subscribe_button_container)
        this.right.appendChild(this.row)

        this.header_element.appendChild(this.left)
        this.header_element.appendChild(this.right)
    }

    //This function will return the header element to render on homepage
    get_header_element(){
        return this.header_element;
    }

}
export {header}