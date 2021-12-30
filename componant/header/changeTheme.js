export const ChangeTheme = function () {

  const theme = document.querySelector('.header-theme');
  const containerBackground = document.querySelector('.container-background')
  const container = document.querySelector('.allTodo');

  const changeTheme = function () {
    let newTheme ='';
    let gradient ='';
    theme.getAttribute('name') == 'light' ? newTheme = 'dark' : newTheme = 'light';
    newTheme == 'dark' ? gradient  = 'linear-gradient(rgb(13, 199, 245), transparent),' : gradient ='';
    containerBackground.style.backgroundImage= `${gradient}url(asset/${containerBackground.getAttribute('name')}.jpg)`;
    theme.className = `header-theme header-theme--${newTheme}`;
    theme.setAttribute('name', newTheme);
    container.className = `allTodo allTodo--${newTheme}`;
    document.querySelector('.header-title').classList = `header-title header-title--${newTheme}`;
    document.querySelector('.form-text').classList =`form-text form-text--${newTheme}`;
    document.querySelector('.form-submit').classList =`form-submit form-submit--${newTheme}`;
    const allTodo = document.querySelectorAll('.allTodo-li');
    for( let i=0; i< allTodo.length; i++) {
      if (!allTodo[i].classList.contains('allTodo-li--finished')){
        allTodo[i].children[1].className =`allTodo-todo allTodo-todo--${newTheme}`
        allTodo[i].className =`allTodo-li allTodo-li--${newTheme}`
      }
    }

  }
  theme.addEventListener('click', changeTheme)
}