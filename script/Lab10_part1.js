let list = document.getElementById('backcolor');

let radios = document.getElementsByName('color');

let fontcolor = document.getElementById('inner_target');

let backcolor = document.getElementById('outer_target');

radios.forEach((radio)=>{

radio.addEventListener('change',()=>{

fontcolor.style.color = radio.value//chnage font color on on chnage event

})

})

list.addEventListener('change',()=>{

backcolor.style.background = list.value//chnage background color on on chnage event

})

