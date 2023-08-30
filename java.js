var screen = document.getElementById("screen");
var button = document.querySelectorAll(".cal");
for (item of button) {
    item.addEventListener('click',(e)=>{
       
       if (e.target.innerHTML=='AC') {
        screen.value=null;
       }
      else if (e.target.innerHTML=='x') {
        screen.value= screen.value + '*';
       }
       else if (e.target.innerHTML=='=') {
       try{
        screen.value=eval(screen.value);
       }
       catch{
        screen.value= 'ERROR'
       }
       }
       else{
        screen.value += e.target.innerHTML;
       }
    })
}
function remove()
{
    screen.value = screen.value.slice(0,-1);
}
function change(){
    if(screen.value<0 || screen.value>0){
        screen.value=-1 * screen.value;
    }
    else{
        screen.value= screen.value;
    }

}