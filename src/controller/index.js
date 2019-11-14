'use strict';

import {ele} from "./element.js";
import {header} from "../view/js/header.js"
import {left} from "../view/js/left.js"
import {right} from "../view/js/right.js"
import {fetch_news} from "./fetch_news.js"
import {update_news} from "./update_news.js"
import {modal} from "../view/js/modal.js"
import {add_subscriber} from "../controller/add_subscriber.js"
import {footer} from "../view/js/footer.js"

//prepare basic page
let body = document.getElementsByTagName("body")[0];
let wrapper = ele("div", "container-fluid wrapper")

//render header
body.appendChild(wrapper)
wrapper.appendChild(header);

//render main section
let main = ele("div", "row main")
wrapper.appendChild(main)

main.appendChild(left)
main.appendChild(right)

//render modal
let row = ele("div", "row")
let col = ele("div", "col")
col.appendChild(modal)
row.appendChild(col)
wrapper.appendChild(row)

//render footer
row = ele("div", "row")
col = ele("div", "col")
col.appendChild(footer)
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