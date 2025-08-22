import Model from './model.js';
import View from './view.js';

const model = new Model();
const view = new View(model.tasks);

model.addTask('Заверстать стартовый шаблон');
model.addTask('Написать скрипт');
model.addTask('Delete JavaScript');
model.addTask('Delete JavaScript');
model.doneTask(model.tasks[1]);
console.log(model);
