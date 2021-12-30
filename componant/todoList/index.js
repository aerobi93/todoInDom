

const todoList = 
`<ul class="allTodo allTodo--light">
  <li class='allTodo-li allTodo-li--light'>
    <button onclick= 'handlerChange()' type='checkbox'  class="allTodo-radio"></button>
    <span  class="allTodo-todo allTodo-todo--light">test</span>
  </li>
  <li class='allTodo-li allTodo-li--light'>
    <button onclick= 'handlerChange()' type='checkbox'  class="allTodo-radio"></button>
    <span  class="allTodo-todo allTodo-todo--light">test</span>
  </li>
</ul>` 

const TodoList = document.querySelector('.todoContainer')
TodoList.insertAdjacentHTML('beforeend', todoList)

