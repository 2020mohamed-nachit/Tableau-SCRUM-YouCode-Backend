// aficher add

function data(){
    return {
    title       : document.getElementById("title").value,
    type        : document.querySelector('input[type="radio"]').checked,
    priority    : document.getElementById("priority").value,
    status      : document.getElementById("status").value,
    date        : document.getElementById("date").value,
    description : document.getElementById("description").value,
    }
}

function saveTask() {
    let laselement = data();

    let isco;
    if (document.getElementById("feature").checked)
    {
        isco = "feature";
    }
    else
        isco = "Bug";

    let info_tasks = {
        title       : laselement.title,
        type        : isco,
        priority    : laselement.priority,
        status      : laselement.status,
        date        : laselement.date,
        description : laselement.description,
    }

    tasks.push(info_tasks);
    afficherData();
    
}

//aficher data.js

const toDoTask = document.getElementById("to-do-tasks");
const inProgress = document.getElementById("in-progress-tasks");
const doneTask = document.getElementById("done-tasks");

afficherData();

function afficherData() 
{
    toDoTask.innerHTML = "";
    inProgress.innerHTML = "";
    doneTask.innerHTML = "";
    
    let to_do_count = 0;
    let in_progress_count = 0;
    let well_done_count = 0;
    for(let i=0;i<tasks.length;i++)
    {
        if (tasks[i].status == "To Do")
        {
            toDoTask.innerHTML += `
                <div class="d-flex justify-content-end fs-2">
                    <i class="fa-sharp fa-solid fa-pen-to-square pe-4" onclick="first_edit(${i})"></i>
                    <i class="fa-solid fa-trash" onclick="del(${i})"></i>
                </div>
                <div class="bg-white w-100 border-0 border-top d-flex py-2 ">
                    <div class="px-2 ">
                        <i class="bi bi-question-circle text-success fs-3 "></i> 
                    </div>
                    <div class="text-start ">
                        <div class="h6 ">${tasks[i].title}</div>
                        <div class="text-start ">
                            <div class="text-gray ">#${i+1} created in 2022-10-08</div>
                            <div title="${tasks[i].description}"> ${(tasks[i].description).length > 30 ? tasks[i].description.substring(0,60) + "  ..." : tasks[i].description}</div>
                        </div>
                        <div class=" ">
                            <span class="btn btn-primary ">${tasks[i].priority}</span>
                            <span class="btn btn-light text-black ">${tasks[i].type}</span>
                        </div>
                    </div>
                </div>`;
                to_do_count++;
        }
        else if (tasks[i].status == "In Progress")
        {
            inProgress.innerHTML += `
                <div class="d-flex justify-content-end fs-2">
                    <i class="fa-sharp fa-solid fa-pen-to-square pe-4" onclick="first_edit(${i})"></i>
                    <i class="fa-solid fa-trash" onclick="del(${i})"></i>
                </div>
                <div class="bg-white w-100 border-0 border-top d-flex py-2 ">
                    <div class="px-2 ">
                        <i class="bi bi-question-circle text-success fs-3 "></i> 
                    </div>
                    <div class="text-start ">
                        <div class="h6 ">${tasks[i].title}</div>
                        <div class="text-start ">
                            <div class="text-gray ">#${i+1} created in ${tasks[i].date}</div>
                            <div title="${tasks[i].description}"> ${(tasks[i].description).length > 30 ? tasks[i].description.substring(0,60) + "  ..." : tasks[i].description}</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>
                                <span class="btn btn-primary p-2">${tasks[i].priority}</span>
                                <span class="btn btn-light text-black p-2">${tasks[i].type}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
                in_progress_count++;
        }
        else if (tasks[i].status == "Done")
        {
            doneTask.innerHTML += `
                <div class="d-flex justify-content-end fs-2">
                    <i class="fa-sharp fa-solid fa-pen-to-square pe-4" onclick="first_edit(${i})"></i>
                    <i class="fa-solid fa-trash" onclick="del(${i})"></i>
                </div>
                <div class="bg-white w-100 border-0 border-top d-flex py-2 ">
                    <div class="px-2 ">
                        <i class="bi bi-question-circle text-success fs-3 "></i> 
                    </div>
                    <div class="text-start ">
                        <div class="h6 ">${tasks[i].title}</div>
                        <div class="text-start ">
                            <div class="text-gray ">#${i+1} created in ${tasks[i].date}</div>
                            <div title="${tasks[i].description}"> ${(tasks[i].description).length > 30 ? tasks[i].description.substring(0,60) + "  ..." : tasks[i].description}</div>
                        </div>
                        <div class=" ">
                            <span class="btn btn-primary ">${tasks[i].priority}</span>
                            <span class="btn btn-light text-black ">${tasks[i].type}</span>
                        </div>
                    </div>
                </div>`;
                well_done_count++;
        }
    }
    document.getElementById('to-do-tasks-count').innerText = to_do_count;
    document.getElementById('in-progress-tasks-count').innerText = in_progress_count;
    document.getElementById('done-tasks-count').innerText = well_done_count;
}


function del(i){
    tasks.splice(i, 1);
    afficherData();
}

function first_edit(p)
{
    $('#exampleModal1').modal('show')

    if(tasks[p].type== "Bug"){
        document.getElementById("feature1").checked = false;
        document.getElementById("Bug1").checked = true;
    }
    else{
        document.getElementById("Bug1").checked = false;
        document.getElementById("feature1").checked = true;
    }

    document.getElementById("title5").value = tasks[p].title,
    document.getElementById("priority5").value = tasks[p].priority,
    document.getElementById("status5").value = tasks[p].status,
    document.getElementById("date5").value  = tasks[p].date,
    document.getElementById("description5").value = tasks[p].description,

    document.getElementById("edityo").innerHTML = `<button class="add btn btn-primary  col-2" type="button" onclick="ediit(${p})" >Update</button>`;
}

function ediit(h)
{
    if(tasks[h].type== "Bug"){
        
        tasks[h].type = document.getElementById("Bug1").innerText = "Feature";
    }
    else if(tasks[h].type== "Feature"){
        
        tasks[h].type = document.getElementById("feature1").innerText = "Bug";
    }

    tasks[h].title       = document.getElementById("title5").value,
    tasks[h].priority    = document.getElementById("priority5").value,
    tasks[h].status      = document.getElementById("status5").value,
    tasks[h].date        = document.getElementById("date5").value,
    tasks[h].description = document.getElementById("description5").value;
    afficherData();
}