function pintarTareas(pListaTareas) {
    console.log(pListaTareas)
    listaTareas.innerHTML = '';
    if (pListaTareas.length != 0) {
        var colorPrioridad
        for (tarea of pListaTareas) {
            console.log(tarea)
            switch (tarea.prioridad) {
                case 'urgente':
                    colorPrioridad = 'red';
                    break
                case 'diaria':
                    colorPrioridad = 'blue';
                    break;
                case 'mensual':
                    colorPrioridad = 'green';
                    break;

            }

            listaTareas.innerHTML += '<div><p class= ' + colorPrioridad + ' >' + tarea.titulo + '</p><button name="delete" id=' + tarea.idTarea + '><i class="far fa-trash-alt"></i></button></div>';



        }
        bntnborrar = document.getElementsByName('delete')
        console.log(bntnborrar)
        for (let index = 0; index < bntnborrar.length; index++) {
            bntnborrar[index].addEventListener('click', borrarTarea)

        }

    } else {
        listaTareas.innerHTML = '<h2 class="sinTareas">No hay tareas en la lista</h2>';
    }
}

pintarTareas(listaInicial);






var btnGuardar = document.getElementById('btnAside');

btnGuardar.addEventListener('click', recogerTareas)

function recogerTareas(e) {
    e.preventDefault()

    let recogertarea = document.getElementById('inputTarea').value;
    let recogerPrioridad = document.getElementById('inputPrioridad').value;
    console.log(recogertarea, recogerPrioridad)
    if (recogerTareas == '' || recogerPrioridad == '') {
        let mensaje = document.getElementById('mensaje');
        mensaje.innerText = 'Los campos no pueden estar vacios';
        document.getElementById('form').reset();


    } else {
        mensaje.innerText = '';
        var tarea = {
            idTarea: contador++,
            titulo: recogertarea,
            prioridad: recogerPrioridad
        }
        listaInicial.push(tarea)

        pintarTareas(listaInicial)

        document.getElementById('form').reset();

    }
}


var filtroPrioridad = document.getElementById('buscarPrioridad');
filtroPrioridad.addEventListener('change', recogerFiltroPrioridad)

function recogerFiltroPrioridad(e) {
    let prioridad = e.target.value;
    console.log(prioridad)
    if (prioridad == 'todas las tareas') {
        pintarTareas(listaInicial)
    } else {
        let listaFiltradaPrioridad = filtrarPrioridad(listaInicial, prioridad)
        pintarTareas(listaFiltradaPrioridad)
    }

}


var filtroPrioridad = document.getElementById('buscarContenido');

filtroPrioridad.addEventListener('keypress', recogerCaracteres);





function recogerCaracteres(e) {
    console.log(e.keycode)
    if (e.keyCode == 13) {
        e.preventDefault()
        let buscarCaracteres = e.target.value;
        console.log(buscarCaracteres);
        let listaFiltrarCaracteres = filtarCaracteres(listaInicial, buscarCaracteres)
        pintarTareas(listaFiltrarCaracteres)
    }
}
var bntnborrar = document.getElementsByName('delete')
console.log(bntnborrar)

if (bntnborrar != null) {
    for (tareaId of bntnborrar) {
        tareaId.addEventListener('click', borrarTarea);
    }
}

function borrarTarea(e) {
    console.log(e.target.parentNode.id)
    let id = e.target.parentNode.id
    eliminarTarea(id)

}