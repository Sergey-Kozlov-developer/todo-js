import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.tasks);

// обновляем данные счетчика
function updateTaskCount() {
    view.updateTaskCount(model.tasks.length);
}

// submit прослушка формы
view.elements.form.addEventListener('submit', function (e) {
    e.preventDefault();
    // добавляем задачу
    const newTask = model.addTask(view.elements.input.value);
    // рендер задачи
    view.renderTask(newTask);
    // очищаем поле ввода после добавления задачи
    view.clearInput();
    updateTaskCount();
});

// нажатие на чекбокс или кнопку удалить
view.elements.taskList.addEventListener('click', function (e) {

    // проверяем клик по checkbox
    if (e.target.getAttribute('data-type') && e.target.getAttribute('data-type') === 'checkbox') {
        const id =e.target.closest('.task-item').dataset.id;
        const task = model.findTask(id);
        model.changeStatus(task);
        view.changeStatus(task);
    }

    // удалить task
    if (e.target.hasAttribute('data-delete')) {
        const id =e.target.closest('.task-item').dataset.id;
        const task = model.findTask(id);
        model.removeTask(task);
        view.removeTask(task);
        updateTaskCount();
    }


});


