 const addButton=document.getElementById('taskAdd');
 const taskInput=document.getElementById('taskInput');
 const taskList=document.getElementById('taskList');


 addButton.addEventListener('click',addTask);


 function addTask(){
    const task=taskInput.value.trim();
    
    if(task){
        addTaskElement(task);
        taskInput.value='';
        
    }
    else{
        alert("Please enter a task");
    }
 }



 function addTaskElement(task){
    const listItem=document.createElement('li');
    listItem.textContent=task;


    const deleteButton=document.createElement('button');
    deleteButton.textContent='Delete';
    deleteButton.className='deleteTask';
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click',function(){
        taskList.removeChild(listItem);
     });

    taskList.appendChild(listItem);
 }
const deleteAll=document.getElementById('deleteAll1');
deleteAll.addEventListener('click',function(){
    taskList.innerHTML='';
});

