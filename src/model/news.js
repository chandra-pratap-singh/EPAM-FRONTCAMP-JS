class news{
    //let(image_url, title, discription, sub_title, message, origin_url)
    constructor(json_obj)
    {
        //console.log(json_obj)
        [this.image_url, this.title, this.description, this.sub_title, 
        this.message, this.origin_url ] = 
        [json_obj.urlToImage, json_obj.title, json_obj.description, 
            json_obj.publishedAt, json_obj.content, json_obj.url];
    }
}

export {news}