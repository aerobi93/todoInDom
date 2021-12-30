import {AddTask} from  './addTask.js';

const form =
`<form class="form">
    <input type="text" class=" form-text form-text--light" placeholder="entrez un tache" value=''>
    <input type="submit" class=" form-submit form-submit--light" value="ajouter">
  </form>`

const Form = document.querySelector('.header')
Form.insertAdjacentHTML('afterend', form)

AddTask()