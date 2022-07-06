window.addEventListener('load', () => {
    const form = document.querySelector('.form');
    const input = document.querySelector('#addTask');
    const taskLi = document.querySelector('#tasks');
    
    //When the add task button is clicked
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;

        if (!task) {
            alert('Please add a task')
            return;
        }

        //Creates the div that holds the task, edit and delete buttons
        const content = document.createElement('div');
        content.classList.add("task");

        const elem = document.createElement('div');
        elem.classList.add('content');

        const taskIn = document.createElement("input");
        taskIn.classList.add('text');
        taskIn.type = 'text';
        taskIn.value = task;
        taskIn.setAttribute('readonly', 'readonly');

        const time = document.createElement('p');
        time.classList.add('time');
        time.innerText = `${getDate()}`;
        time.setAttribute('readonly', 'readonly');

        const actions = document.createElement('div');
        actions.classList.add('action');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');  `1`
        editBtn.innerHTML = "EDIT"

        const delBtn = document.createElement('button');
        delBtn.classList.add('del');
        delBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`

        //Sets the parent and child for each div
        taskLi.appendChild(content);

        content.appendChild(elem);

        elem.appendChild(taskIn);
        elem.appendChild(time);

        content.appendChild(actions);

        actions.appendChild(editBtn);
        actions.appendChild(delBtn);

        //Returns the input field to blank
        input.value = "";

        //Saves the input in local storage
        // localStorage.setItem('TASK', task);
        //location.reload();

        //Functionality for when the edit button is clicked
        editBtn.addEventListener('click', () => {
            if (editBtn.innerText == "EDIT") {
                taskIn.removeAttribute('readonly');
                taskIn.focus();
                editBtn.innerText = "SAVE";
            } else {
                taskIn.setAttribute('readonly', 'readonly');
                time.innerText = `${getDate()}`;
                editBtn.innerText = "EDIT"
            }
        });

        //Functionality for when the delete button is clicked
        delBtn.addEventListener('click', () => {
            taskLi.removeChild(content);
        });

        //Search Button functionality
        const searchInput = document.querySelector('#search');
        const searchBtn = document.querySelector('.searchBtn');
        
        //On click of the search button it loops through and returns values that match
        searchBtn.addEventListener('click', () => {
            const value = searchInput.value.toLowerCase();
            const loop = document.querySelectorAll('.task')
            
            loop.forEach(() => {
                const visible = taskIn.value.toLowerCase().includes(value);
                content.classList.toggle('hide', !visible);  
                /*const close = searchBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
                searchBtn.classList.toggle(close);*/
            })
        })
    });
});

//Returns the date and time the task was added
function getDate() {
    return new Date().toDateString() + ", " + new Date().toLocaleTimeString();
};

///To retrieve data from local storage
/*for (let i = 0; i < localStorage.length; i++) {
    const data = localStorage.key(i);

    const dataValue = localStorage.getItem(data);
}*/