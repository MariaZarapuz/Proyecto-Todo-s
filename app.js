var listaTareas1 = new Array();

listaTareas1 = [{
        idTarea: 0,
        titulo: 'Estudiar Javascript',
        prioridad: 'urgente'
    },
    {
        idTarea: 1,
        titulo: 'Dormir',
        prioridad: 'diaria'
    },
    {
        idTarea: 2,
        titulo: 'Salir a comer',
        prioridad: 'mensual'
    }
]
var listaTareas = document.getElementById('listaTareas');
var contador = 0;

function pintarTareas(pListaTareas) {

    console.log(listaTareas)
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

        listaTareas.innerHTML += '<div><p class= ' + colorPrioridad + ' >' + tarea.titulo + '</p><button id=' + tarea.idTarea + '>Eliminar</button></div>';
    }



}

pintarTareas(listaTareas1);

function addTareas(pId, pTitulo, pPrioridad) {
    var tarea = {
        idTarea: pId,
        titulo: pTitulo,
        prioridad: pPrioridad
    }
    listaTareas1.push(tarea)
    pintarTareas()

}


function eliminarTarea(pId) {
    var borrarTarea = listaTareas1.find(tarea => tarea.idTarea == pId);
    console.log(borrarTarea)
    var posicionTarea = listaTareas1.findIndex(tarea => tarea.id == borrarTarea.id);
    console.log(posicionTarea)

    listaTareas1.splice(posicionTarea, 1);
    listaTareas.innerHTML = '';
    pintarTareas();
}

function filtrarPrioridad(pPrioridad) {

    for (tarea of listaTareas1) {
        var tareaFiltrada = listaTareas1.filter((tarea => tarea.prioridad == pPrioridad))
    }
    listaTareas1.innerHTML = tareaFiltrada

    pintarTareas(tareaFiltrada)
    console.log(tareaFiltrada)
}

function vaciarDom() {
    var domTarea = listaTareas.getElementsByTagName('div')
    console.log(domTarea)
    domTarea.removeChild(domTarea)

}

function filtarCaracteres(pdato) {
    var listaCaracteres = new Array();
    for (tarea of listaTareas1) {

        var valor = tarea.titulo.includes(pdato)
        if (valor == true) {
            listaCaracteres.push(tarea)
        }

    }
    console.log(listaCaracteres)
    pintarTareas(listaCaracteres)
}