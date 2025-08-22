// 1. Создать class View
export default class View {
    constructor(element) {}

    elements = {
        input: document.getElementById('newTask'),
        form: document.getElementById('form'),
        taskList: document.getElementById('tasksList'),
    }

    // 2. создать метод renderTask(taskObject)
    renderTask(taskObject) {
        const taskHTML = `
        <li class="task-item">
            <div class="task-checkbox"></div>
            <div class="task-content">
                <span class="task-text">${taskObject.text}</span>
            </div>
            <button class="task-delete">×</button>
        </li>
        `;
        this.elements.taskList.insertAdjacentHTML('beforeend', taskHTML);
    }

}


// 3. создать переменную lements в которой находим элементы разметки