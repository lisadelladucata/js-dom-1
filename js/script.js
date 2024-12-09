// DOM elements
const imgElm = document.getElementById('img')
const onElm = document.getElementById('light-on')
const offElm = document.getElementById('light-off')
const btnChangeElm =document.getElementById('change-light')

// events

btnChangeElm.addEventListener("click" , function(){
    if(offElm.style.display === 'block'){
        offElm.style.display = 'none';
        onElm.style.display='block';
    } else{
        offElm.style.display = 'block';
        onElm.style.display = 'none';
    }
})