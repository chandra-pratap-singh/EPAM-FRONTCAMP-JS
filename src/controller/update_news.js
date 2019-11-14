import { fetch_news } from "./fetch_news.js";

let update_news = (value) => {
    let url = "";
    if(value === "all")
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b036cb7b801f4bc580212febf53bfcc9`;
    else
        url = `https://newsapi.org/v2/top-headlines?sources=${value}&apiKey=b036cb7b801f4bc580212febf53bfcc9`;
    
        //let left = document.getElementById("news_section");
        fetch_news(url);
    }

    export {update_news};