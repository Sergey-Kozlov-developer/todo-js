export default class Model {
    constructor () {
        this.tasks = [];
        this.loadFromLocalStorage()
    }
    // загрузка данных из localStorage и проверка
    loadFromLocalStorage() {
        const data = localStorage.getItem("tasks");
        if (data) {
            this.tasks = JSON.parse(data);
        }
    }

    // сохраняем данные в ocalStorage
    saveToLocalStorage () {
        localStorage.setItem('task', JSON.stringify(this.tasks));
    }

    // добавление задачи
    addTask (text) {
        // создание объекта с новой задачей, с полями status & text
        const newTask = {
            status: 'active',
            text: text,
        }
        this.tasks.push(newTask);
    }
    // метод изменения статуса
    doneTask(task) {
        task.status = 'active';
    }
    // удаление задачи
    removeTask(task) {
        // получаем индекс задачи
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }

}