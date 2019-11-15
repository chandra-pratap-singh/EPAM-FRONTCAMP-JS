// initialise local storage
localStorage.email_list = "";

//get the main section where news feeds need to be rendered
var main = document.getElementById("main");

//add left panel
var node = document.createElement("div");
node.className = "col-md-9";
node.id = "content";
main.appendChild(node);


//add right panel
var right_panel = document.createElement("div");
right_panel.className = "col-md-3 right"
main.appendChild(right_panel);
var select_category = document.createElement("div");
select_category.className = "row select-category";
right_panel.appendChild(select_category);

//Select Category Heading of right panel
var node = document.createElement("h5")
node.innerHTML = "SELECT CATEGORY";
select_category.append(node);

//add dropdown to choose news channel
var select = document.createElement("select")
//create options, add value and append it to list of options
var option = document.createElement("option");
option.innerHTML = "All";
option.value = "all";
select.appendChild(option);
var option = document.createElement("option");
option.innerHTML = "ONE";
option.value = "one";
select.appendChild(option);
var option = document.createElement("option");
option.innerHTML = "TWO";
option.value = "two";
select.appendChild(option);
var option = document.createElement("option");
option.innerHTML = "THREE";
option.value = "three";
select.appendChild(option);
var option = document.createElement("option");
option.innerHTML = "FOUR";
option.value = "four";
select.appendChild(option);
select.appendChild(option);
select_category.appendChild(select);
//end channel selection section by adding a break
node = document.createElement("br");
right_panel.appendChild(node);
//News Channel Selection ends here

// Add subscribe option to the right panel
//use bootstrap classes - rows and cols for wrapper
var subscribe = document.createElement("div");
subscribe.className = "subscribe row";
right_panel.appendChild(subscribe);
var col = document.createElement("div");
col.className = "col";
subscribe.appendChild(col);
var row = document.createElement("div");
row.className = "row";
//Done with wrappers.

//add a heading - subscribe
row.innerHTML = "<h5>SUBSCRIBE</h5>";

//wrappers for subscribe input-box
col.append(row);
var parent = col;
row = document.createElement("div");
row.className = "row";
parent.appendChild(row);
parent = row;
node = document.createElement("div");
node.className = "col-8 col-md-12 col-xl-8 mail-input-box-container";
parent.appendChild(node);
parent = node;
//done with wrappers,

//add an input-box for collecting email-id of the subscriber
var inp = document.createElement("input");
inp.className = "mail-input-box";
inp.id = "mail";
parent.appendChild(inp);

//wrapper for subscribe-button
parent = row;
node = document.createElement("div");
node.className = "col-4 col-md-12 col-xl-4 subscribe-button-container";
parent.appendChild(node);
parent = node;
//done with wrappers,

//add a subscribe button
var btn = document.createElement("button");
btn.className = "subscribe-button";
btn.innerHTML = "Subscribe";
parent.appendChild(btn);


//Addind Modal use bootstrap modal classes
//here code gets very nested so something simullar to version notation is used as a tree structure.
// where m stands for modal and after that every number represent a nested child. like m12 means 2nd child of 1st child of modal
//wrapper classes for modal
var m = document.createElement("div");
m.className = "modal fade";
m.id = "myModal";
main.appendChild(m);
var m1 = document.createElement("div");
m1.className = "modal-dialog modal-dialog-centered";
m.appendChild(m1);
var m11 = document.createElement("div");

//This contains modal containt
m11.className = "modal-content";
m1.appendChild(m11);

// add modal header to wrap title,etc
var m111 = document.createElement("div");
m111.className = "modal-header";
m11.appendChild(m111);

//add title section in modal
var modal_title = document.createElement("h4");
modal_title.style.padding = "20px";
modal_title.style.textAlign = "center !important";
modal_title.innerHTML = "title";
m111.appendChild(modal_title);

//add close button to modal
var modal_close_button = document.createElement("button");
modal_close_button.type = "button";
modal_close_button.className = "close"
modal_close_button.dataset.dismiss = "modal";
modal_close_button.innerHTML = "&times;";
m111.appendChild(modal_close_button);

//add image thumb-nail to modal
var modal_image = document.createElement("div");
modal_image.style.height = "300px";
modal_image.style.backgroundColor = "lightgray";
m11.appendChild(modal_image);

//add subtitle to modal
var modal_sub_title = document.createElement("div");
modal_sub_title.style.padding = "20px";
modal_sub_title.innerHTML = "subtitle";
m11.appendChild(modal_sub_title);

//add message to modal
var modal_message = document.createElement("div");
modal_message.style.padding = "20px";
modal_message.innerHTML = "subtitle";
modal_message.style.textAlign = "justified";
m11.appendChild(modal_message);

//modal design ends here


//update modal content on clicking continue reading
function update_modal(title, sub_title, message){
    console.log (title + ' ' + sub_title + ' ' + message);
    modal_title.innerHTML = title;
    modal_sub_title.innerHTML = sub_title;
    modal_message.innerHTML = message;
}

//render all the news present in array - data
for(var i = 0; i<data.length; i++ )
{
    addset(data[i]);
}

//function to render a single newsfeed on webpage
function addset(obj){
    //set variables for title, subtitle and message of news feed
    let title_content = obj.title;
    let sub_title_content = "posted on " + obj.date + " // Category: Category "+obj.category;
    let message_content = obj.message;

    //create element one by one and structure it
    //content will wrap the complete news feed.
    //use bootstrap row and cols for better allignment
    var parent = document.getElementById("content");
    var set = document.createElement("div");
    set.className = "row set";

    //setup thub-nail section
    var image_container_wraper = document.createElement("div");
    image_container_wraper.className = "col-md-5 col-lg-4 col-xl-3";
    var image_container = document.createElement("div");
    image_container.className = "image-container";

    //setup written section
    var writeup = document.createElement("div");
    writeup.className = "col-md-7 col-lg-8 col-xl-9";

    //setup title
    var title = document.createElement("h5");
    title.innerHTML = obj.title;

    //setup sub-title
    var sub_title = document.createElement("div");
    sub_title.className = "small";
    sub_title.innerHTML = "posted on " + obj.date + " // Category: Category "+obj.category;

    //setup message section
    var message = document.createElement("div");
    message.className = "message";
    message.innerHTML = obj.message;

    //setup continue reading button section
    var continue_reading_container = document.createElement("div");
    continue_reading_container.className = "continue-reading";
    var continue_reading_button = document.createElement("button");
    continue_reading_button.innerHTML = " Continue Reading "
    continue_reading_button.className = "continue-reading-button btn btn-primary";
    continue_reading_button.dataset.target = "#myModal";
    continue_reading_button.dataset.toggle = "modal";
    continue_reading_button.type = "button";

    //update and open modal on clicking continue reading button
    continue_reading_button.addEventListener("click",
    function (){
    modal_title.innerHTML = title_content;
    modal_sub_title.innerHTML = sub_title_content;
    modal_message.innerHTML = message_content;
    }.bind(this));
    var br = document.createElement("br"); 
    continue_reading_container.appendChild(continue_reading_button);

    //add writeup children to writeup
    writeup.appendChild(title);
    writeup.appendChild(sub_title);
    writeup.appendChild(br);
    writeup.appendChild(message);
    writeup.appendChild(br);
    writeup.appendChild(continue_reading_container);

    //append all the components to get set ready for newsfeed
    image_container_wraper.appendChild(image_container);
    set.appendChild(image_container_wraper);
    set.appendChild(writeup);
    parent.appendChild(set);

}

// On changing or selecting news channel this function gets called
// it loops through all the news and filter news from a particular selected news channel.
select.addEventListener("change",function(){
    var v = select.value;
    document.getElementById("content").innerHTML = "";
    for(var i = 0; i<data.length; i++ )
    {   if(data[i].category == v || v == "all") // if selected channel is all render all the news else render the news whose category matches with selected channel
            addset(data[i]);
    }
})


//on clicking subscribe button this function gets called which vallidates the input email id and stores it to local storage
btn.addEventListener("click", function(){
    var pat =  new RegExp('^[A-Za-z]+[A-Za-z0-9_.]*@[A-Za-z]+[.][A-Za-z]+$');
    if(pat.test(inp.value)) //Test if email id is as per the regexp
    {
        if(localStorage.email_list == "") //see if this is the first element if yes then simply save it
            localStorage.email_list = inp.value;
        else
            localStorage.email_list = localStorage.email_list + "|" + inp.value; // if this is not the first element then use "|" as a delimeter
        inp.value = ""; //reset the email-id input box on successfull submition
        alert("Congratulation! you have successfully subscribed!"); // alert on subscribtion
    }
    else{
        alert("Please check your email id"); //alert if mail id is not according to regex
    }
})
