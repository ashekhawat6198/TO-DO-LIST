const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");



function addTask(){
    if(inputBox.value==''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerText=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerText="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    svaeData(); 
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        svaeData();

    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        svaeData();
    }
},false);

function svaeData(){
   localStorage.setItem("data",listContainer.innerHTML);

}

function showRTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}

showRTask();