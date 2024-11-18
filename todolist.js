var todolist = /** @class */ (function () {
    function todolist() {
        this.task = [];
    }
    todolist.prototype.addTask = function (task) {
        this.task.push(task);
    };
    todolist.prototype.getTasks = function () {
        return this.task;
    };
    todolist.prototype.deleteTask = function (index) {
        this.task.splice(index, 1);
    };
    return todolist;
}());
var user = new todolist();
var addTaskButton = document.getElementById('at');
var myInput = document.getElementById('task');
addTaskButton.addEventListener('click', function (event) {
    event.preventDefault();
    var task = myInput.value;
    if (task.trim() !== '') {
        user.addTask(task);
    }
    myInput.value = '';
    disptask();
});
var displaytask = document.getElementById('tasklist');
function disptask() {
    displaytask.innerHTML = '';
    user.getTasks().forEach(function (task, index) {
        var li = document.createElement('li');
        li.textContent = "Task:".concat(index + 1, " ").concat(task);
        var delbtn = document.createElement('button');
        delbtn.textContent = 'Delete';
        li.appendChild(delbtn);
        displaytask.appendChild(li);
        delbtn.addEventListener('click', function () {
            user.deleteTask(index);
            li.remove();
            disptask();
        });
    });
}
