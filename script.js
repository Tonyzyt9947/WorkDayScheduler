// var eventText=document.getElementsByClassName("eventText")
var saveBtn = document.getElementsByClassName("save")




function save() {

    var eventText=document.getElementsByClassName("eventText")
    
    for (i=0;i<eventText.length;i++){
        console.log(eventText[i].value)
        localStorage.setItem("Event"+i, JSON.stringify(eventText[i].value))

    }
    

}

function display() {

    var eventText=document.getElementsByClassName("eventText")

    for (i=0;i<9;i++){
        eventText[i].value=JSON.parse(localStorage.getItem("Event"+i))
        console.log(JSON.parse(localStorage.getItem("Event"+i)))
    }
}

save()
display()