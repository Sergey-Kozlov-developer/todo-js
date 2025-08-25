// 1. Создать class View
export default class View {
    constructor(tasks) {
        // тут нужно использовать стрелочную ф-ию, чтобы не терялся контекст this,
        // а ссылся на объект/
        // в обычной ф-ции this ссылается на глобальный window
        tasks.forEach((task) => {
            this.renderTask(task);
            this.updateTaskCount(tasks.length);
        })
    }

    elements = {
        input: document.getElementById('newTask'),
        form: document.getElementById('form'),
        taskList: document.getElementById('tasksList'),
        taskCount: document.getElementById('taskCount'),
    }

    // обновление кол-ва задач
    updateTaskCount(count) {
        this.elements.taskCount.textContent = `Всего задач: ${count}`;
    }

    // 2. создать метод renderTask(taskObject)
    renderTask(taskObject) {

        const completeClass = taskObject.status === 'done' ? 'completed' : '';
        const checked = taskObject.status === 'done' ? 'checked' : '';

        const taskHTML = `
        <li class="task-item ${completeClass}" data-id="${taskObject.id}">
            <div class="task-checkbox ${checked}" data-type="checkbox"></div>
            <div class="task-content" data-type="checkbox">
                <span class="task-text">${taskObject.text}</span>
            </div>
            <button class="task-delete" data-delete>×</button>
        </li>
        `;
        this.elements.taskList.insertAdjacentHTML('beforeend', taskHTML);

    }

    // очищение input
    clearInput() {
        this.elements.input.value = '';
    }

    changeStatus(taskObject) {
        const taskElement = this.elements.taskList.querySelector(`[data-id="${taskObject.id}"]`);
        const checkbox = taskElement.querySelector('.task-checkbox');

        if (taskObject.status === 'done') {
            taskElement.classList.add('completed');
            checkbox.classList.add('checked');
        } else {
            taskElement.classList.remove('completed');
            checkbox.classList.remove('checked');
        }
    }

    removeTask(taskObject) {
        const taskElement = this.elements.taskList.querySelector(`[data-id="${taskObject.id}"]`);
        taskElement.remove();
    }

}
