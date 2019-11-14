//This is out main controller file

'use strict';

import {ele} from "./element.js";
import {header} from "../view/js/header.js"
import {left_section} from "../view/js/left.js"
import {right_section} from "../view/js/right.js"
import {fetch_news} from "./fetch_news.js"
import {update_news} from "./update_news.js"
import {modal} from "../view/js/modal.js"
import {add_subscriber} from "../controller/add_subscriber.js"
import {footer} from "../view/js/footer.js"

//prepare basic page
let body = document.getElementsByTagName("body")[0];
let wrapper = ele("div", "container-fluid wrapper");
body.appendChild(wrapper);

//render header
let header_element = new header()
wrapper.appendChild(header_element.get_header_element());

//render main section
let main = ele("div", "row main")
wrapper.appendChild(main)

//render left panel
let left_section_element = new left_section()
main.appendChild(left_section_element.get_left_section_element())

//render right panel
let right_section_element = new right_section()
main.appendChild(right_section_element.get_right_section_element())

//render modal
let modal_element = new modal();
let row = ele("div", "row")
let col = ele("div", "col")
col.appendChild(modal_element.get_modal_element())
row.appendChild(col)
wrapper.appendChild(row)

//render footer
let footer_elemen = new footer();
row = ele("div", "row")
col = ele("div", "col")
col.appendChild(footer_elemen.get_footer_element());
row.appendChild(col)
body.appendChild(row)

//fetch news
var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b036cb7b801f4bc580212febf53bfcc9`;
fetch_news(url);

//update news
let category = document.getElementById("category")
category.addEventListener("change",()=>update_news(category.value));

//subscribe
document.getElementById("subscribe-button").onclick = () => {
    let email_id = document.getElementById("subscribe-input-box").value
    var pat =  new RegExp('^[A-Za-z]+[A-Za-z0-9_.]*@[A-Za-z]+[.][A-Za-z]+$');
    if(pat.test(email_id))
    {
        add_subscriber(email_id)
    }
    else{
        alert("Please check your email id");
    }
}