class todolist{
    private task: string[]=[];
    addTask(task: string){
        this.task.push(task);
    }
    getTasks(){
        return this.task;
    }
    deleteTask(index:number){
        this.task.splice(index,1);
    }
}
const user=new todolist();
const addTaskButton = document.getElementById('at') as HTMLButtonElement;
const myInput = document.getElementById('task') as HTMLInputElement;
addTaskButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    let task=myInput.value;
    if(task.trim()!==''){
        user.addTask(task);
    }

    myInput.value = '';
    disptask();
});

const displaytask=document.getElementById('tasklist') as HTMLUListElement;
function disptask(){
    displaytask.innerHTML='';
    user.getTasks().forEach((task,index) => {
        const li=document.createElement('li');
        li.textContent=`Task:${index+1} ${task}`;
        const delbtn=document.createElement('button');
        delbtn.textContent='Delete';
        li.appendChild(delbtn);
        displaytask.appendChild(li);
        delbtn.addEventListener('click', () => {
            user.deleteTask(index);
            li.remove();
            disptask();
        });
    });
}
