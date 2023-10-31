let icon = document.querySelector('.icon');
let share = document.querySelector('.share')
let down = document.querySelector('.down')

//?creating icon event

icon.addEventListener('click', e =>{
    e.preventDefault();
     share.classList.toggle('active') 
     down.classList.toggle('active')
     icon.classList.toggle('active')
    
})