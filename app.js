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
var contador = 2;

function pintarTareas(pListaTareas) {

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

        listaTareas.innerHTML += '<div><p class= ' + colorPrioridad + ' >' + tarea.titulo + '</p><button id=' + tarea.idTarea + '><i class="far fa-trash-alt"></i></button></div>';
    }



}

pintarTareas(listaTareas1);

function addTareas() {
    var valorInputs = document.getElementsByName('add');
    console.log(valorInputs)
    var tarea = {
        idTarea: contador++,
        titulo: valorInputs[0].value,
        prioridad: valorInputs[1].value
    }
    console.log(tarea)
    listaTareas1.push(tarea)
    pintarTareas(listaTareas1)

}

var guardar =


    function eliminarTarea(pId) {
        var borrarTarea = listaTareas1.find(tarea => tarea.idTarea == pId);
        console.log(borrarTarea)
        var posicionTarea = listaTareas1.findIndex(tarea => tarea.id == borrarTarea.id);
        console.log(posicionTarea)

        listaTareas1.splice(posicionTarea, 1);
        listaTareas.innerHTML = '';
        pintarTareas(listaTareas1);
    }

function filtrarPrioridad() {
    var filtrarTarea = document.getElementById('filtrarTarea').value


    for (tarea of listaTareas1) {
        var tareaFiltrada = listaTareas1.filter((tarea => tarea.prioridad == filtrarTarea))
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

function filtarCaracteres() {
    var caracteres = document.getElementById('buscar').value
    console.log(caracteres)
    var listaCaracteres = new Array();
    for (tarea of listaTareas1) {

        var valor = tarea.titulo.includes(caracteres)
        if (valor == true) {
            listaCaracteres.push(tarea)
        }

    }
    console.log(listaCaracteres)
    pintarTareas(listaCaracteres)
}