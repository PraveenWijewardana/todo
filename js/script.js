const list = [];

let last = JSON.parse(localStorage.getItem('Tasklist'));
last.forEach(task => {
    list.push(task);
});

let data;

list.forEach(task => {
    console.log(task);
    if(task.Status =="Active"){
            data+= `<li class="task-item">
            <input type="checkbox" class="task-checkbox" id="task-1">
            <label for="task-1">${task.Task}</label>
            <span class="text-right">${task.Date}</span>
            </li>`;
    }else{
        data+= `<li class="completed">
            <input type="checkbox" class="task-checkbox" id="task-1">
            <label for="task-1">${task.Task}</label>
            <span class="text-right">${task.Date}</span>
            </li>`;
    }
        list.push(task);
       document.getElementById("task-list").innerHTML = data;
});
console.log(list);

function addTask(){
    let data = document.getElementById("task-list").innerHTML;
    let task = document.getElementById("new-task").value;
    let time = document.getElementById("time").value;
    
    if(!(task) || !(time)){
        Swal.fire({
        title: "Enter task and time!",
        icon: "error",
        draggable: true
        });
    }else{
        data+= `<li class="task-item">
            <input type="checkbox" class="task-checkbox" id="task-1">
            <label for="task-1">${task}</label>
            <span class="text-right">${time}</span>
            </li>`;
        //document.getElementById("noImage").className = "d-none";
       document.getElementById("task-list").innerHTML = data;
        let Newtask ={
            Task:task,
            Date:time,
            Status: "Active",
        }

        list.push(Newtask);    
        localStorage.setItem("Tasklist",JSON.stringify(list));
    }


}
