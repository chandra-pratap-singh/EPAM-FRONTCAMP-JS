import {ele} from "../../controller/element.js";

// This class is for left_section which will contain all the news part on the webpage
class left_section{
    constructor(){
        this.left_section_element = ele("div", " news_section col-md-9 left")
        this.left_section_element.id = "news_section"
    }

    //This function will return the left section element to render on homepage
    get_left_section_element(){
        return this.left_section_element;
    }
}

export {left_section}