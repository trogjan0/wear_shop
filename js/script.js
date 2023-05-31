document.querySelector('.button__side-bar').addEventListener('click', () => {
    document.querySelector('.side-bar').classList.add('active');
    document.querySelector('.close__side-bar').classList.add('active');
  })

document.querySelector('.close__side-bar').addEventListener('click', () => {
  document.querySelector('.side-bar').classList.remove('active');
  document.querySelector('.close__side-bar').classList.remove('.close__side-bar.active');
})

document.querySelector('.overlay').addEventListener('click', () => {
  document.querySelector('.side-bar').classList.remove('active');
  document.querySelector('.overlay').classList.remove('.overlay.active');
})

document.querySelector('.close__ad').addEventListener('click', () => {
  document.querySelector('.ad').classList.add('disactive');
})