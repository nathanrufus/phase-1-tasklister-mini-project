document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', (event) =>{
    event.preventDefault()
    let newTodo=event.target.new-task-description.value
    let user=event.target.user.value
    let priority=event.target.priority.value
    console.log(priority)
    createToDo(newTodo,user,priority)
    console.log(newTodo,user)
    form.reset()
  })
});
function Todo(todo,user2,prioritY){
  const li=document.createElement('li')
  const btn=document.createElement('button')
  const user=document.createElement('span')
  btn.addEventListener('click',handleDelete)
  li.addEventListener('mouseover',setColor)
  btn.innerText='x'
  li.innerHTML=`${todo} ${user2} ${prioritY} 
   `
   
  li.appendChild(btn)
  
  
  function setColor(prioritY){
    if(prioritY==='Urgent'){
     prioritY=document.getElementsByTagName('li').style.color = "#cccfffggg";
    }else if(prioritY==='Less Urgent'){
     prioritY= document.getElementsByTagName('li').style.color = "green";
    }
    return prioritY
  }
  setColor()
  document.querySelector('#tasks').appendChild(li)
  }
  
  function handleDelete(e){
    e.target.parentNode.remove()
  }