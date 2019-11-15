//This function creates and return the requested element by seting its class name and innerHtml.

let ele = (name, class_name = "", content = "", value = "") => {
    let a =  document.createElement(name);
    a.className = class_name;
    a.innerHTML = content;
    if(name === "option" || name === "input")
        a.value = value;
    return a;
}

export {ele};