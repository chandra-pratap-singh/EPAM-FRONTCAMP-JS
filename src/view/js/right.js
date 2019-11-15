import {ele} from "../../controller/element.js";
import {newsChannels} from "../../model/chennel_list.js"

// This class is about the right section of the webpage where select channel will be present
class right_section{
    constructor(){
        this.right_section_element = ele("div", "col-md-3 right")
        this.select_category = ele("h3","","Select Category")
        this.select = ele("select", "category")
        this.select.id = "category"
        newsChannels.forEach(Element => {
            this.select.append(ele("option", "channel-option", Element, Element.toLowerCase().replace(" ", "-")))
        } )
        this.right_section_element.appendChild(this.select_category)
        this.right_section_element.appendChild(this.select)
    }

    //This function will return the right section element to render on homepage
    get_right_section_element(){
        return this.right_section_element;
    }
}


export {right_section}