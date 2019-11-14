import {myStorage} from "../model/subscribers.js"

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

let add_subscriber = (email_id) =>
{
    if (storageAvailable('localStorage'))
     {   
        try{
        let subscribers = JSON.parse(myStorage.getItem("subscribers"))
        subscribers.push(email_id)
        myStorage.setItem("subscribers", JSON.stringify(subscribers))
        alert("Succesfully Registered!!!")
        document.getElementById("subscribe-input-box").value = ""
        }
        catch(error)
        {
            alert("Some Error Occured")
            console.log(error)
        }
    }
    else
        alert("Sorry, No space for new user.")
}

export {add_subscriber}