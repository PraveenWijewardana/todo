var list = [];

let last = JSON.parse(localStorage.getItem('Tasklist'));
list=last;

list.forEach(task => {
    data+= `<li class="task-item">
            <input type="checkbox" class="task-checkbox" id="task-1">
            <label for="task-1">${task}</label>
            <span class="text-right">${task.t}</span>
            </li>`;
        document.getElementById("noImage").className = "d-none";
       document.getElementById("task-list").innerHTML = data;
});

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
        document.getElementById("noImage").className = "d-none";
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
