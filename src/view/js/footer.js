import {ele} from "../../controller/element.js"

// This class is for footer of the webpage
class footer{
    constructor(){
        this.footer_element = ele("div", "footer", "&copy;NewsFeed");
    }
    //This function will return the footer element to render on homepage
    get_footer_element(){
        return this.footer_element;
    }
}

export {footer}