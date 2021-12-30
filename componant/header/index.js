import { ChangeB } from './changeBackgroundImg.js'
import { ChangeTheme } from './changeTheme.js'
const header = `<header class="header">
  <h1 class=" header-title header-title--light "> todolist</h1>
  <div class="header-changeBackground">&#127956;</div>
  <div name='light' class="header-theme header-theme--light"></div>
</header>
<div class="displayBackground displayBackground--off">
  <figure class="displayBackground-figure">
    <img 
      class="displayBackground-img"
      name='beach' src="asset/beach.jpg"
      alt="beach"
    >
  </figure>
  <figure class="displayBackground-figure">
    <img 
      class="displayBackground-img" 
      name='lake' src="asset/lake.jpg"
      alt="beach"
    >
  </figure>
  <figure class="displayBackground-figure">
    <img 
      class="displayBackground-img"
      name='nature'src="asset/nature.jpg" 
      alt="beach"
    >
  </figure>
  <figure class="displayBackground-figure">
    <img 
      class="displayBackground-img"
      name='sea'
      src="asset/sea.jpg"
      alt="beach"
    >
  </figure>
</div>`
const Header = document.querySelector('.todoContainer')
Header.insertAdjacentHTML('afterbegin', header)

ChangeB();
ChangeTheme();