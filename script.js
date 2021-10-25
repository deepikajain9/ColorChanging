var inp = document.querySelector('input');
var redcolor = document.querySelector('#redcolor');
var greencolor = document.querySelector('#greencolor');
var bluecolor = document.querySelector('#bluecolor');
var button = document.querySelector('button');

button.addEventListener('click',function(){
     var colortheme = `rgb(${Number(redcolor.value)},${Number(greencolor.value)},${ Number(bluecolor.value) })`;
     document.querySelector('#rectngl').style.backgroundColor = colortheme ;
});