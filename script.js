// Header time change function
var timeText = document.getElementById("currentDay")

timeText.innerText=moment()
setInterval(function(){
    timeText.innerText=moment()
    },
    1000)


// Select save buttons
var saveBtn = document.getElementsByClassName("save")

// Save-to-local-storage function
function save() {

    var eventText=document.getElementsByClassName("eventText")
    console.log("saving activate")
    
    for (i=0;i<eventText.length;i++){
        console.log("saving value: " +eventText[i].value)
        localStorage.setItem("Event"+i, JSON.stringify(eventText[i].value))
        
    }
    

}

// Displays previously saved events
function display() {

    var eventText=document.getElementsByClassName("eventText")

    for (j=0;j<9;j++){
        eventText[j].value=JSON.parse(localStorage.getItem("Event"+j))
        console.log("LS getItem: "+JSON.parse(localStorage.getItem("Event"+j)))
    }
}
console.log(saveBtn)

display()


// Timeblock color coding
var containers = document.getElementsByClassName("hourcontainer")

for (k=0;k<9;k++){

    if (k+9<moment().hour()){
        containers[k].style.backgroundColor = "grey"
    }

    if (k+9==moment().hour()){
        containers[k].style.backgroundColor = "red"
    }

    if (k+9>moment().hour()){
        containers[k].style.backgroundColor = "green"
    }

    
}
