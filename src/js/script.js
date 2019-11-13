localStorage.email_list = "";


var main = document.getElementById("main");

//add left panel
var node = document.createElement("div");
node.className = "col-md-9"
node.id = "content"
main.appendChild(node);


//add right panel
var right_panel = document.createElement("div");
right_panel.className = "col-md-3 right"
main.appendChild(right_panel);
var select_category = document.createElement("div");
select_category.className = "row select-category";
right_panel.appendChild(select_category);
var node = document.createElement("h5")
node.innerHTML = "SELECT CATEGORY";
select_category.append(node);
var select = document.createElement("select")
//select.className = ""
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

node = document.createElement("br");
right_panel.appendChild(node);

var subscribe = document.createElement("div");
subscribe.className = "subscribe row";
right_panel.appendChild(subscribe);
var col = document.createElement("div");
col.className = "col";
subscribe.appendChild(col);
var row = document.createElement("div");
row.className = "row";
row.innerHTML = "<h5>SUBSCRIBE</h5>";
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
var inp = document.createElement("input");
inp.className = "mail-input-box";
inp.id = "mail";
parent.appendChild(inp);
parent = row;
node = document.createElement("div");
node.className = "col-4 col-md-12 col-xl-4 subscribe-button-container";
parent.appendChild(node);
parent = node;
var btn = document.createElement("button");
btn.className = "subscribe-button";
btn.innerHTML = "Subscribe";
parent.appendChild(btn);


/*var row = document.createElement("div");
row.className = "row";
main.appendChild(row);
var col = document.createElement("div");
row.appendChild(col);*/
var m = document.createElement("div");
m.className = "modal fade";
m.id = "myModal";
main.appendChild(m);
var m1 = document.createElement("div");
m1.className = "modal-dialog modal-dialog-centered";
m.appendChild(m1);
var m11 = document.createElement("div");
m11.className = "modal-content";
m1.appendChild(m11);
var m111 = document.createElement("div");
m111.className = "modal-header";
m11.appendChild(m111);
var modal_title = document.createElement("h4");
modal_title.style.padding = "20px";
modal_title.style.textAlign = "center !important";
modal_title.innerHTML = "title";
m111.appendChild(modal_title);
var modal_close_button = document.createElement("button");
modal_close_button.type = "button";
modal_close_button.className = "close"
modal_close_button.dataset.dismiss = "modal";
modal_close_button.innerHTML = "&times;";
m111.appendChild(modal_close_button);
var modal_image = document.createElement("div");
modal_image.style.height = "300px";
modal_image.style.backgroundColor = "lightgray";
m11.appendChild(modal_image);
var modal_sub_title = document.createElement("div");
modal_sub_title.style.padding = "20px";
modal_sub_title.innerHTML = "subtitle";
m11.appendChild(modal_sub_title);
var modal_message = document.createElement("div");
modal_message.style.padding = "20px";
modal_message.innerHTML = "subtitle";
modal_message.style.textAlign = "justified";
m11.appendChild(modal_message);

//update modal
function update_modal(title, sub_title, message){
    console.log (title + ' ' + sub_title + ' ' + message);
    modal_title.innerHTML = title;
    modal_sub_title.innerHTML = sub_title;
    modal_message.innerHTML = message;
}

for(var i = 0; i<data.length; i++ )
{
    addset(data[i]);
}

function addset(obj){
    let title_content = obj.title;
    let sub_title_content = "posted on " + obj.date + " // Category: Category "+obj.category;
    let message_content = obj.message;
    var parent = document.getElementById("content");
    var set = document.createElement("div");
    set.className = "row set";
    var image_container_wraper = document.createElement("div");
    image_container_wraper.className = "col-md-5 col-lg-4 col-xl-3";
    var image_container = document.createElement("div");
    image_container.className = "image-container";
    var writeup = document.createElement("div");
    writeup.className = "col-md-7 col-lg-8 col-xl-9";
    var title = document.createElement("h5");
    title.innerHTML = obj.title;
    var sub_title = document.createElement("div");
    sub_title.className = "small";
    sub_title.innerHTML = "posted on " + obj.date + " // Category: Category "+obj.category;
    var message = document.createElement("div");
    message.className = "message";
    message.innerHTML = obj.message;
    var continue_reading_container = document.createElement("div");
    continue_reading_container.className = "continue-reading";
    var continue_reading_button = document.createElement("button");
    continue_reading_button.innerHTML = " Continue Reading "
    continue_reading_button.className = "continue-reading-button btn btn-primary";
    continue_reading_button.dataset.target = "#myModal";
    continue_reading_button.dataset.toggle = "modal";
    continue_reading_button.type = "button";
    //continue_reading_button.onclick = update_modal(obj.title, obj.date, obj.message);
    continue_reading_button.addEventListener("click",
    function (){
    modal_title.innerHTML = title_content;
    modal_sub_title.innerHTML = sub_title_content;
    modal_message.innerHTML = message_content;
    }.bind(this));
    var br = document.createElement("br"); 
    
    continue_reading_container.appendChild(continue_reading_button);
    writeup.appendChild(title);
    writeup.appendChild(sub_title);
    writeup.appendChild(br);
    writeup.appendChild(message);
    writeup.appendChild(br);
    writeup.appendChild(continue_reading_container);

    image_container_wraper.appendChild(image_container);

    set.appendChild(image_container_wraper);
    set.appendChild(writeup);
    parent.appendChild(set);

}

select.addEventListener("change",function(){
    var v = select.value;
    document.getElementById("content").innerHTML = "";
    for(var i = 0; i<data.length; i++ )
    {   if(data[i].category == v || v == "all")
            addset(data[i]);
    }
})

btn.addEventListener("click", function(){
    var pat =  new RegExp('^[A-Za-z]+[A-Za-z0-9_.]*@[A-Za-z]+[.][A-Za-z]+$');
    if(pat.test(inp.value))
    {
        if(localStorage.email_list == "")
            localStorage.email_list = inp.value;
        else
            localStorage.email_list = localStorage.email_list + "|" + inp.value;
        inp.value = "";
        alert("Congratulation! you have successfully subscribed!");
    }
    else{
        alert("Please check your email id");
    }
})
