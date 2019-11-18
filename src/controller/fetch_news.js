import { set } from "../view/js/set.js";
import { news } from "../model/news.js";
import {ele} from "./element.js"
let fetch_news = async (url) =>
{
    try {
        let news_section = document.getElementById("news_section")
    news_section.innerHTML = "";
    const response = await fetch(url);
    const myJson = await response.json();
    if(myJson.status === "ok")
        {
            if(myJson.articles.length!=0)
            {
                    myJson.articles.forEach(element => {
                    let news_obj = new news(element)
                    let set_obj = new set(news_obj)
                    news_section.appendChild(set_obj.set)
                    });
            }
            else
                news_section.appendChild(ele("h1","", "No News found!!!"))
        }

    }
    catch(error)
    {
        console.log(error);
        //alert("Some Error Occured!!!");
    }

}

export {fetch_news}
