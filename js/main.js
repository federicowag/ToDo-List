let tareas = [];

function agregarTarea() {
    const textoTarea = prompt("Ingrese una tarea nueva");
    tareas.push({ texto: textoTarea, completed: false });
    console.log("Tarea agregada:", textoTarea);
}

function estadoTarea() {
    const indice = prompt("Ingrese el número de tarea para marcar como completa:");
    tareas[indice - 1].completed = !tareas[indice - 1].completed;
    console.log("Tarea marcada como:", tareas[indice - 1].completed ? "completada" : "incompleta");
}

function eliminarTarea() {
    const indice = prompt("Ingrese el número de la tarea a eliminar");
    const tareaEliminada = tareas.splice(indice - 1, 1);
    console.log("Tarea eliminada:", tareaEliminada[0].texto);
}

function mostrarTareas() {
    console.log("Lista de Tareas:");
    tareas.forEach((tarea, indice) => {
        console.log(indice + 1 + ". [" + (tarea.completed ? "x" : " ") + "] " + tarea.texto);
    });
}

let continuar = true;
while (continuar) {
    const opcion = prompt("Selecciona una opcion:\n1. Agregar tarea\n2. Marcar tarea como completada\n3. Eliminar tarea\n4. Ver tareas\n5. Salir");
    switch (opcion) {
        case "1":
            agregarTarea();
            break;
        case "2":
            estadoTarea();
            break;
        case "3":
            eliminarTarea();
            break;
        case "4":
            mostrarTareas();
            break;
        case "5":
            continuar = false;
            console.log("Hasta luego");
            break;
        default:
            console.log("Por favor seleccione una opcion valida.");
            break;
    }
}
