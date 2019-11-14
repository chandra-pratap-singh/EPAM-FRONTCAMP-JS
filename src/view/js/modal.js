import {ele} from "../../controller/element.js"

let modal = ele("div", "modal fade")
modal.id = "myModal"
let modal_dialog = ele("div", "modal-dialog modal-dialog-centered")
let modal_content = ele("div", "modal-content")

//modal header
let modal_header = ele("div", "modal-header")
let modal_title = ele("h4", "modal-title", "Modal Heading")
modal_title.id = "modal-title"
let close_button = ele("button", "close", "&times;")
close_button.dataset.dismiss = "modal"
modal_header.appendChild(modal_title)
modal_header.appendChild(close_button)

//modal image
let modal_image = ele("img","modal-image")
modal_image.id = "modal-image"
modal_image.src = "";
modal_image.alt = "No Image available";

//modal subtitle
let modal_subtitle = ele("p","modal-subtitle","subtitle")
modal_subtitle.id = "modal-subtitle"

//modal body
let modal_body = ele("div", "modal-body", "Modal body...")
modal_body.id = "modal-content"

//modal footer
let modal_footer = ele("p", "modal-footer")
let redirect_button = ele("button", "btn btn-secondary", "Go to the Source")
redirect_button.id = "redirect-button"
modal_footer.appendChild(redirect_button)

//append every element to modal
modal_content.appendChild(modal_header)
modal_content.appendChild(modal_image)
modal_content.appendChild(modal_subtitle)
modal_content.appendChild(modal_body)
modal_content.appendChild(modal_footer)

modal_dialog.appendChild(modal_content)
modal.appendChild(modal_dialog)

export {modal}