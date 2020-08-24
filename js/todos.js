var listTodos= document.querySelector('.list ul')
var form_list= document.querySelector('.form-list input')
var button_todos= document.querySelector('.form-list button')

var todos= [
   "Fazer café",
   "Ligar para o pai",
   "Fazer lista de compras"
]

function renderTodo(){
   listTodos.innerHTML=''

   for(todo of todos){
      var todoElement= document.createElement('li')
      var todoText= document.createTextNode(todo)

      todoElement.appendChild(todoText)
      listTodos.appendChild(todoElement)
   }
}

renderTodo()

function addTodo(){
   var todosText= form_list.value

   todos.push(todosText)
   
   form_list.value=''
   renderTodo()
}

button_todos.onclick= addTodo