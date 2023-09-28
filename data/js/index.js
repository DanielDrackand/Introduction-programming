
//llamadas al html
const icon = document.querySelector('.icon');
const lenguages = document.querySelector('.lenguajes'); 
const imgPc = document.querySelector('.computadora-img');
const textCompu = document.querySelector('.text-compu')
const estancado = document.querySelector('.Estancado');
const estancadoImg = document.querySelector('.img-estancado');
const imgDocument = document.querySelector('.img-documentacion');
const doc = document.querySelector('.Doc');



//function 
//funtion scroll
function scroll(lim/*limite del scroll*/,name/*name de variable*/,clas1/* clase uno*/,clas2/* Clase 2 a la que a cambiar*/){
    //con name.getBoundingClientRect().top; lo que hacemos es seguir el scroll mientras se lo mustra por consola las coordenadas
    //luego a base de esas coordernas (que dependiendo si estamos cerca o lejos sera más grande el número o más chico)decidiremos cuando aplicar el efec
    let posicion = name.getBoundingClientRect().top;
    //aca estamos diciendo:"que la posición del scroll no pase , antes de que cambie de nombre la variable"
    if(posicion <= lim){
        name.classList.remove(clas1);
        name.classList.add(clas2);
    }else{
        name.classList.add(clas1);
        name.classList.remove(clas2);
    }
}

//hacer aparecier el icono {}
setTimeout(() => {
    icon.style.opacity = 1;
},900);

//uso una funcion dentro de la flecha porque tiene parametros la funcion scroll
window.addEventListener('scroll',() => {
    scroll(600.765625,lenguages,'lenguajes','lenguaje-b');
    scroll(550.828125,imgPc,'computadora-img','computadora-img-b');
    scroll(550.828125,textCompu,'text-compu','text-compu-b');
    scroll(550.828125,estancado,'Estancado','Estancado-b');
    scroll(550.828125,estancadoImg,'img-estancado','img-estancado-b');
    scroll(550.828125,imgDocument,'img-documentacion','img-documentacion-b');
    scroll(550.828125,doc,'Doc','Doc-b');
});