// var eventText=document.getElementsByClassName("eventText")
var saveBtn = document.getElementsByClassName("save")




function save() {

    var eventText=document.getElementsByClassName("eventText")
    console.log("saving activate")
    
    for (i=0;i<eventText.length;i++){
        console.log("saving value: " +eventText[i].value)
        localStorage.setItem("Event"+i, JSON.stringify(eventText[i].value))
        
    }
    

}

function display() {

    var eventText=document.getElementsByClassName("eventText")

    for (j=0;j<9;j++){
        eventText[j].value=JSON.parse(localStorage.getItem("Event"+j))
        console.log("LS getItem: "+JSON.parse(localStorage.getItem("Event"+j)))
    }
}
console.log(saveBtn)

function EL(){
    
    for (k=0;k<9;k++){
    
        console.log(k)
        // saveBtn[k].addEventListener("mousedown", save())
    
    }

}

EL()


display()