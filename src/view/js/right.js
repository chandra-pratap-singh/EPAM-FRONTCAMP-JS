import {ele} from "../../controller/element.js";
import {newsChannels} from "../../model/chennel_list.js"

let right = ele("div", "col-md-3 right")
let select_category = ele("h3","","Select Category")
let select = ele("select", "category")
select.id = "category"
newsChannels.forEach(Element => {
    select.append(ele("option", "channel-option", Element, Element.toLowerCase().replace(" ", "-")))
} )
//select.append(ele("option", "channel-option", "bbc-news", "bbc-news"))
right.appendChild(select_category)
right.appendChild(select)


export {right}