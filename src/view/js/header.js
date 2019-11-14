import {ele} from "../../controller/element.js";

let header = ele("div","row header");
let left = ele("div", "col-md-8")
left.appendChild(ele("span", "logo", "NEWSFEED"))
left.appendChild(ele("span", "sub-logo", "Yet another newsfeed"))

let right = ele("div", "col-md-4")
let row = ele("div","row")
let subscribe_input_box_container = ele("div","col-8 subscribe-input-box-container")
let inp = ele("input","subscribe-input-box")
inp.id = "subscribe-input-box"
inp.placeholder = "Email Id"
subscribe_input_box_container.appendChild(inp)
let subscribe_button_container = ele("div", "col-4 subscribe-button-container")
let input_button = ele("button", "subscribe-button", "Subscribe")
input_button.id = "subscribe-button"
subscribe_button_container.appendChild(input_button)
row.appendChild(subscribe_input_box_container)
row.appendChild(subscribe_button_container)
right.appendChild(row)

header.appendChild(left)
header.appendChild(right)
export {header}