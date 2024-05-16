var inactiveColor = "white";
var activeColor = "rgb(200, 200, 200)";

var body

var keyboardAndMouse

var keyboard1
var keyboard2
var keyboardType = 1;
var numpad
var numpadExists = true;

var optionsDropDown

var KeepHighlight = false;
var optionsDroppedDown = true;

var PressedKeys = {};

var copyright = document.createElement("p");
copyright.innerHTML = "Gamefull.nl ©"
copyright.style = "display: flex; justify-content: center;"

function onLoad() {
    keyboardAndMouse = document.getElementById("keyboardAndMouse");
    keyboard1 = document.getElementById("keyboard1");
    keyboard2 = document.getElementById("keyboard2");
    numpad = document.getElementById("keyboardNumpad");
    optionsDropDown = document.getElementById("dropDownOptions");
    body = document.getElementsByTagName("BODY")[0];
    body.appendChild(copyright);
    ChangeKeyboard(0);
    ToggleOptionsDropDown();
}

document.addEventListener("DOMContentLoaded", function(){
    onLoad()
});

//change key position
function PressKey(key, trueFalse) {
    var keyElement = document.getElementById(key)
    if(keyElement != null) {
        if (trueFalse == true)
        {
            keyElement.style = "transform: translateY(calc(1.2*var(--defaultSize)));z-index: -1;";
        }
        else
        {
            keyElement.style = "transform: translateY(0);z-index: 0;";
        }
    }
}
//options
function ToggleOptionsDropDown() {
    var options = document.getElementById("options")
    var dropDownLogo = document.getElementById("dropDownLogo")
    if (optionsDroppedDown) {
        optionsDropDown.parentNode.removeChild(optionsDropDown)
        optionsDroppedDown = false
        dropDownLogo.innerHTML = ">"
        options.style.marginBottom = "6.1rem"
    }
    else {
        optionsDroppedDown = true
        options.appendChild(optionsDropDown)
        dropDownLogo.innerHTML = "V"
        options.style.marginBottom = 0
    }
}
function ChangeKeyboard(Type) {
    var keyboardSelectionOption1 = document.getElementById("keyboardSelectionOption1");
    var keyboardSelectionOption2 = document.getElementById("keyboardSelectionOption2");
    var keyboardSelectionOption3 = document.getElementById("keyboardSelectionOption3");

    switch (Type) {
        case 0:
            keyboardSelectionOption1.style.backgroundColor = activeColor
            keyboardSelectionOption2.style.backgroundColor = inactiveColor
            keyboardSelectionOption3.style.backgroundColor = inactiveColor
            if (keyboardType == 1) {
                keyboard1.parentNode.removeChild(keyboard1);
                keyboardAndMouse.appendChild(keyboard2);
                keyboardType = 2;
            }
        break;
        case 1:
            keyboardSelectionOption1.style.backgroundColor = inactiveColor
            keyboardSelectionOption2.style.backgroundColor = activeColor
            keyboardSelectionOption3.style.backgroundColor = inactiveColor
            if (keyboardType == 2) {
                keyboard2.parentNode.removeChild(keyboard2);
                keyboardAndMouse.appendChild(keyboard1);
                keyboardType = 1;
            }
            if (numpadExists) {
                numpad.parentNode.removeChild(numpad);
                numpadExists = false;
            }
        break;
        case 2:
            keyboardSelectionOption1.style.backgroundColor = inactiveColor
            keyboardSelectionOption2.style.backgroundColor = inactiveColor
            keyboardSelectionOption3.style.backgroundColor = activeColor
            if (keyboardType == 2) {
                keyboard2.parentNode.removeChild(keyboard2);
                keyboardAndMouse.appendChild(keyboard1);
                keyboardType = 1;
            }
            if (numpadExists == false) {
                keyboard1Main.appendChild(numpad)
                numpadExists = true
            }
        break
    }
}
//add eventlisteners
document.addEventListener("keydown" ,function(input){
    input.preventDefault()
    PressKey(input.code, true);
})
document.addEventListener("keyup" ,function(input){
    PressKey(input.code, false);
})
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

/*
old

function ToggleKeepHighlight() {
    var ToggleThingy = document.getElementById("ToggleKeepHighlight")
    if (KeepHighlight) {
        ToggleThingy.style.backgroundColor = inactiveColor
        PaintKeysToInactive()
        KeepHighlight = false;
    }
    else {
        ToggleThingy.style.backgroundColor = activeColor
        KeepHighlight = true;
    }
}
function SavePressedKeys(code) {
    PressedKeys[code] = code
}
function PaintKeysToInactive() {
    for (key in PressedKeys) {
        if(document.getElementById(key) != null) {
            document.getElementById(key).style.backgroundColor = inactiveColor;
        }
    }
}

document.addEventListener("keydown" ,function(input){
    input.preventDefault()
    ChangeKeyColor(input.code, activeColor)
    if (KeepHighlight) {
        SavePressedKeys(input.code)
    }
})
document.addEventListener("keyup" ,function(input){
    if (KeepHighlight == false) {
        ChangeKeyColor(input.code, inactiveColor)
    }
})
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);
*/