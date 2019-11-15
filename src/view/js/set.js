import {ele} from "../../controller/element.js"
import {update_modal} from "../../controller/update_modal.js"
import {modal} from "./modal.js"

// This class hold the template for a single news feed
class set{
    constructor(news)
    {
        this.news = news
        this.set = ele("div", "row set")
        this.image_container = ele("div", "col-md-3")
        this.thumb_nail = ele("img","thumb-nail")
        try{ 
            if(news.image_url == "null")
                this.thumb_nail.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMxB2BXLzyCSxVh_gpFFxUywbftMCo6IOV-fwulYRyBrlPFSlI"
            else
                this.thumb_nail.src = news.image_url 
        }
        catch (err){ this.thumb_nail.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMxB2BXLzyCSxVh_gpFFxUywbftMCo6IOV-fwulYRyBrlPFSlI" }
        this.content = ele("div", "col-md-9 news-content")
        this.title = ele("h3", "title", news.title)
        this.sub_title = ele("p", "sub-title", news.sub_title)
        this.message = ele("div", "message", `${news.message.substring(0,150)}...`)
        this.continue_reading_button = ele("button", "continue-reading-button btn btn-primary", "Continue Reading")
        this.continue_reading_button.dataset.target = "#myModal";
        this.continue_reading_button.dataset.toggle = "modal";
        this.continue_reading_button.type = "button";
        this.continue_reading_button.onclick = () => update_modal(news)

        this.image_container.appendChild(this.thumb_nail)
        this.content.appendChild(this.title)
        this.content.appendChild(this.sub_title)
        this.content.appendChild(ele("br"))
        this.content.appendChild(this.message)
        this.content.appendChild(ele("br"))
        this.content.appendChild(ele("br"))
        this.content.appendChild(this.continue_reading_button)
        this.set.appendChild(this.image_container)
        this.set.appendChild(this.content)
    }
}

export {set};