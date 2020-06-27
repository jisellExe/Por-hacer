const descripcion = {
    demand: true,
    alias: 'd'
}
const completado =  {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer',
        {
            descripcion
        })
    .command('actualizar', 'Actualizar el estado de las tareas por hacer',
        {
            descripcion,
            completado
        })
    .command('borrar', 'Eliminar tarea',
        {
            descripcion
        })
    .help()
    .argv



module.exports = {
    argv
}