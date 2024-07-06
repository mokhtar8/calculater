
var input = document.getElementById('input');
var equal = document.getElementById('equal');
var btncc = document.getElementById('btn-c');
var btnde = document.getElementById('btn-de');
var btn = document.querySelectorAll('.button');

btn.forEach(e  => {
e.addEventListener('click',() => {
    input.value+=e.textContent;
    
})
equal.addEventListener('click', () => {
  
 input.value=eval(input.value);

})

});

btncc.addEventListener('click', () => {
  
    input.value='';
   
   })

   btnde.addEventListener('click', () => {
  
   btn.slice(0,-1)
   
   })
