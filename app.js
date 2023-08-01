//Elementos del html
let $caja = document.getElementById('caja');
let $mujerB = document.getElementById('mujer');
let $siguienteB = document.getElementById('siguiente');

//Variables
let todosPersonajes = [];
let pagina = 1;


//Mostrar personajes en el HTML
function mostrar (array) {
    $caja.innerHTML = '';
    for( let i=0; i<array.length; i++){
        $caja.innerHTML += `<div>
        <img src=${array[i].image}>
        <h2>Nombre: ${array[i].name}</h2>
        <p>Genero: ${array[i].gender}</p>
        <p>Especie: ${array[i].species}</p>
    </div>`
    };
};

// Fetch
function usarFetch (numeroPagina) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`)
    .then((data)=>{
        return data.json();
    })
    .then((data)=>{
        todosPersonajes = data.results;
        mostrar(todosPersonajes);
    });
};

usarFetch(pagina);


// Filtros
function mostrarMujeres () {
    let resultado = todosPersonajes.filter((personaje)=>{
        return personaje.gender === 'Female';
    })
    mostrar(resultado);
};

// function todos(){
//     // mostrar en el html todos
// };

// funcion que se fije si deshabilitar una pagina

//paginado
function siguientePagina () {
    pagina++;
    // $siguienteB.style.visibility = 'hidden';
    // function(pagina)

    //Completarlo
    if(pagina===1){
        anterior.disabled = true
    }else if(pagina===42){
        $siguienteB.disabled = true;
    } else 
    {
        $siguienteB.disabled = false
    }
    usarFetch(pagina);
}

function ultimaPagina () {
    usarFetch(42)
    $siguienteB.style.visibility = 'hidden';
    // $siguienteB.classList.add
};

//Eventos
$mujerB.addEventListener('click',mostrarMujeres);

$siguienteB.addEventListener('click',siguientePagina)


