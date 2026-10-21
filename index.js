//enter-btn is for entering your task
const enter = document.getElementById("enter-btn");
//add-btn is adding task
const add = document.getElementById("task-list");
//addTask() is the function in the button input
function addTask(){
if(enter.value==='')
{
    alert("ENTER YOUR TASK");
}
else{
    //you can enter the task and it is displayed 
    let li = document.createElement("li");
    li.innerHTML=enter.value;
    add.appendChild(li);

    //we are adding cross icon below
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);

}
enter.value='';
save();

}

add.addEventListener("click",function(s)
{
    if(s.target.tagName==="LI"){s.target.classList.toggle("check"); save();}
    else if(s.target.tagName==="SPAN"){s.target.parentElement.remove(); save();}
},false
);

function save(){
    localStorage.setItem("data",add.innerHTML);
}

function show(){
    add.innerHTML=localStorage.getItem("data");
}
show();