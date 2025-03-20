document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Tugas tidak boleh kosong!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskValue}</span>
        <div>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Hapus</button>
        </div>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskSpan = li.querySelector('span');
    const taskDiv = li.querySelector('div');
    const currentTask = taskSpan.innerText;

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = currentTask;
    editInput.className = 'edit-input';

    const saveButton = document.createElement('button');
    saveButton.innerText = 'Simpan';
    saveButton.onclick = function() {
        const newTaskValue = editInput.value.trim();
        if (newTaskValue === '') {
            alert('Tugas tidak boleh kosong!');
            return;
        }
        taskSpan.innerText = newTaskValue;
        li.removeChild(editInput);
        li.removeChild(saveButton);
        taskDiv.appendChild(button); // Add back the edit button
        taskDiv.appendChild(button.nextElementSibling); // Add back the delete button
    };

    li.appendChild(editInput);
    li.appendChild(saveButton);
    li.removeChild(button); // Remove the edit button
    li.removeChild(button.nextElementSibling); // Remove the delete button
    li.appendChild(saveButton); // Add the save button
}