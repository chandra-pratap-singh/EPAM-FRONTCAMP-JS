import {modal} from "../view/js/modal.js"
//This function updates the content of modal on click of continue reading button
let update_modal = (news) =>
{
    document.getElementById("modal-title").innerHTML = news.title;
    document.getElementById("modal-image").src = news.image_url;
    document.getElementById("modal-subtitle").innerHTML = news.sub_title;
    document.getElementById("modal-content").innerHTML = news.message;
    document.getElementById("redirect-button").onclick = () => window.location.href = news.origin_url
}

export {update_modal}