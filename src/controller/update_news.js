import { fetch_news } from "./fetch_news.js";
//on selection of any particular news channel this channel prepares the respective url and send it fetch function to update news section
let update_news = (value) => {
    let url = "";
    if(value === "all")
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b036cb7b801f4bc580212febf53bfcc9`;
    else
        url = `https://newsapi.org/v2/top-headlines?sources=${value}&apiKey=b036cb7b801f4bc580212febf53bfcc9`;
    fetch_news(url);
    }

    export {update_news};