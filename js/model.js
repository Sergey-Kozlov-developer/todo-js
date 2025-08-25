export default class Model {
    constructor () {
        this.tasks = [];
        this.loadFromLocalStorage();
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
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // добавление задачи
    addTask (text) {
        // добавляем id
        let id = 1;
        if (this.tasks.length > 0) {
            // id последнего элемента, во избежании повтора индекса при удалении задач
            id = this.tasks[this.tasks.length - 1]["id"] + 1;

        }
        // создание объекта с новой задачей, с полями status & text
        const newTask = {
            id: id,
            status: 'active',
            text: text,
        }
        this.tasks.push(newTask);
        this.saveToLocalStorage();

        return newTask;
    }

    // ищем задачу по id
    findTask(id) {
        const task = this.tasks.find(function (task) {
            if(task.id === parseInt(id)) {
                return true;
            }
        });
        return task;
    }

    // метод изменения статуса
    changeStatus(task) {
        if (task.status === 'active') {
            task.status = 'done';
        } else {
            task.status = 'active';
        }

        this.saveToLocalStorage();
    }

    // удаление задачи
    removeTask(task) {
        // получаем индекс задачи
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        this.saveToLocalStorage();
    }

}