// 1. Создать class View
export default class View {
    constructor(tasks) {
        // тут нужно использовать стрелочную ф-ию, чтобы не терялся контекст this,
        // а ссылся на объект/
        // в обычной ф-ции this ссылается на глобальный window
        tasks.forEach((task) => {
            this.renderTask(task);
        })
    }

    elements = {
        input: document.getElementById('newTask'),
        form: document.getElementById('form'),
        taskList: document.getElementById('tasksList'),
    }

    // 2. создать метод renderTask(taskObject)
    renderTask(taskObject) {

        const completeClass = taskObject.status === 'done' ? 'completed' : '';
        const checked = taskObject.status === 'done' ? 'checked' : '';

        const taskHTML = `
        <li class="task-item ${completeClass}">
            <div class="task-checkbox ${checked}"></div>
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