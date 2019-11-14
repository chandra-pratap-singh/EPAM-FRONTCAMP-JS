//This is a news class whose object will hold the news from data send from api

class news{
    constructor(json_obj)
    {
        //destructuring is used here
        [this.image_url, this.title, this.description, this.sub_title, 
        this.message, this.origin_url ] = 
        [json_obj.urlToImage, json_obj.title, json_obj.description, 
            json_obj.publishedAt, json_obj.content, json_obj.url];
    }
}

export {news}