var listTodos= document.querySelector('.list ul')
var form_list= document.querySelector('.form-list input')
var button_todos= document.querySelector('.form-list button')

var todos= JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodo(){
   listTodos.innerHTML=''

   for(todo of todos){
      var todoElement= document.createElement('li')
      var todoText= document.createTextNode(todo)

      var linkElement= document.createElement('a')
      linkElement.setAttribute('href', '#')

      var pos= todos.indexOf(todo)
      linkElement.setAttribute('onclick', 'excluirTodo('+ pos +')')

      var linkText= document.createTextNode('Excluir')

      linkElement.appendChild(linkText)

      todoElement.appendChild(todoText)
      todoElement.appendChild(linkElement) //link

      listTodos.appendChild(todoElement)
   }
}


renderTodo()

function addTodo(){
   var todosText= form_list.value

   todos.push(todosText)
   
   form_list.value=''
   renderTodo()
   saveToStorage()
}

button_todos.onclick= addTodo

//Função para excluir o item
function excluirTodo(pos){
   todos.splice(pos, 1)
   renderTodo()
   saveToStorage()
}

//Função para o armazenamento
function saveToStorage(){
   localStorage.setItem('list_todos', JSON.stringify(todos))
}