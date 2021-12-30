export const AddTask = function () {
  const todoUl = document.querySelector('.allTodo');
  const form = document.querySelector('.form');
  const text = document.querySelector('.form-text')
  const allTodo = document.querySelectorAll('.allTodo-todo')
  const handlerlSubmit = function (evt) {
    evt.preventDefault();
    const exist = function () {
      for (let todoText of allTodo) {
        if (todoText.textContent == text.value) {
          alert('cette tache existe deja')
          break
        }
        else return exist
      }
    } 
    if (text.value.trim() && exist()) {
      const theme = document.querySelector('.header-theme').getAttribute('name');
      const todo = `
      <li class='allTodo-li allTodo-li--${theme}'>
        <input type='radio' onclick= 'handlerChange()' class="allTodo-radio"></button>
        <span class="allTodo-todo allTodo-todo--${theme}">${text.value}</span>
      </li>`
    todoUl.insertAdjacentHTML('afterbegin', todo)
    text.value = ""
    }
  } 
  form.addEventListener('submit', handlerlSubmit)
}