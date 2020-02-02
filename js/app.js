var listaInicial = new Array();

listaInicial = [{
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
var contador = 3;



function eliminarTarea(pId) {
    console.log(pId)
    var borrarTarea = listaInicial.find(tarea => tarea.idTarea == pId);
    console.log(borrarTarea)
    var posicionTarea = listaInicial.findIndex(tarea => tarea.idTarea == borrarTarea.idTarea);
    console.log(posicionTarea)

    listaInicial.splice(posicionTarea, 1);
    listaTareas.innerHTML = '';
    pintarTareas(listaInicial);
}


function filtrarPrioridad(pListaTareas, pfiltrarTarea) {
    var filtrarTarea = new Array();

    for (tarea of pListaTareas) {
        var tareaFiltrada = pListaTareas.filter((tarea => tarea.prioridad == pfiltrarTarea))
        filtrarTarea.push(tarea)
        console.log(tarea)
    }

    return tareaFiltrada

}


function filtarCaracteres(pListaTareas, pCaracteres) {
    var listaCaracteres = new Array();
    for (tarea of pListaTareas) {
        var caracter = tarea.titulo.toLowerCase()
        var valor = caracter.includes(pCaracteres);
        if (valor == true) {
            listaCaracteres.push(tarea)
        }
        console.log(valor)

    }
    return listaCaracteres
}