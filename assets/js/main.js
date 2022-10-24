// aficher add

function saveTask() {
    // Recuperer task attributes a partir les champs input
    let new_title       = document.getElementById('title');
    let new_type        = document.querySelectorAll('input[Type="radio"]');
    let new_priority    = document.getElementById('priority');
    let new_status      = document.getElementById('status');
    let new_date        = document.getElementById('date');
    let new_description = document.getElementById('description');

    let is_true;

    for (let i = 0; i < new_type.length; i++) {
        if (new_type[i].checked) {
            is_true = new_type[i].value;
        }
    }

    // Créez task object
    let infoTask = {
        title       : new_title.value,
        type        : is_true,
        priority    : new_priority.value,
        status      : new_status.value,
        date        : new_date.value,
        description : new_description.value,
    }
    console.log(infoTask);

    // Ajoutez object au Array
    tasks.push(infoTask);

    // refresh tasks
    console.log(tasks);
    afficherData();
}