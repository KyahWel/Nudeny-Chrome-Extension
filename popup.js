let isOn = true;
chrome.runtime.sendMessage({isOn: true});

const mainButton = document.getElementById("main");
const images = document.querySelectorAll("img");
mainButton.addEventListener("click", function() {
    if(isOn) {
        mainButton.style.color = "red";
        isOn = false;
        chrome.runtime.sendMessage({isOn: false});
    }
    else{
        chrome.runtime.sendMessage({isOn: true});
        mainButton.style.color = "green";
        isOn = true;
    }
});
