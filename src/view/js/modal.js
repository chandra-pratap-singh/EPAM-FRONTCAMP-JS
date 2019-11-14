import {ele} from "../../controller/element.js"

// This class is about the modal to be displayed on continue reading
class modal{
    constructor(){
        this.modal_element = ele("div", "modal fade")
        this.modal_element.id = "myModal"
        this.modal_dialog = ele("div", "modal-dialog modal-dialog-centered")
        this.modal_content = ele("div", "modal-content")

        //modal header
        this.modal_header = ele("div", "modal-header")
        this.modal_title = ele("h4", "modal-title", "Modal Heading")
        this.modal_title.id = "modal-title"
        this.close_button = ele("button", "close", "&times;")
        this.close_button.dataset.dismiss = "modal"
        this.modal_header.appendChild(this.modal_title)
        this.modal_header.appendChild(this.close_button)

        //modal image
        this.modal_image = ele("img","modal-image")
        this.modal_image.id = "modal-image"
        this.modal_image.src = "";
        this.modal_image.alt = "No Image available";

        //modal subtitle
        this.modal_subtitle = ele("p","modal-subtitle","subtitle")
        this.modal_subtitle.id = "modal-subtitle"

        //modal body
        this.modal_body = ele("div", "modal-body", "Modal body...")
        this.modal_body.id = "modal-content"

        //modal footer
        this.modal_footer = ele("p", "modal-footer")
        this.redirect_button = ele("button", "btn btn-secondary", "Go to the Source")
        this.redirect_button.id = "redirect-button"
        this.modal_footer.appendChild(this.redirect_button)

        //append every element to modal
        this.modal_content.appendChild(this.modal_header)
        this.modal_content.appendChild(this.modal_image)
        this.modal_content.appendChild(this.modal_subtitle)
        this.modal_content.appendChild(this.modal_body)
        this.modal_content.appendChild(this.modal_footer)

        this.modal_dialog.appendChild(this.modal_content)
        this.modal_element.appendChild(this.modal_dialog)
    }

    //This function will return the modal element to render on homepage
    get_modal_element(){
        return this.modal_element;
    }
}


export {modal}