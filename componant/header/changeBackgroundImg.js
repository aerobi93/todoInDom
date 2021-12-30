export const ChangeB = function () {
  const entityBackground = document.querySelector('.header-changeBackground');
  const displayBackground = document.querySelector('.displayBackground')
  const pictureForBackground = document.querySelectorAll ('.displayBackground-img')
  const containerBackground = document.querySelector('.container-background')
  const theme = document.querySelector('.header-theme');

  const changeDisplayBackground = function (evt) {
      getComputedStyle(displayBackground, []).display == 'none' ?
      displayBackground.className = 'displayBackground': 
      displayBackground.className= 'displayBackground--off'
  };
  const changeBackgroundImg = function (evt) {
    let gradient=''
    theme.getAttribute('name') == 'dark' ? 
    gradient  = 'linear-gradient(rgb(13, 199, 245), transparent),' :''
    containerBackground.style.backgroundImage = `${gradient} url(asset/${evt.target.name}.jpg)`;
    containerBackground.setAttribute('name', evt.target.name);
    displayBackground.className= 'displayBackground--off'

  }

  entityBackground.addEventListener('click',changeDisplayBackground);
  for (let picture of pictureForBackground) {
    picture.addEventListener('click', changeBackgroundImg)
  }
}