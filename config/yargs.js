const descripcion = {
    demand:true,
    alias:'d',
}

const completado = {
    default:true,
    alias:'c',
    desc:'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
            .command('crear', 'Crear un elemento',{
                descripcion
            })
            .command('actualizar', 'Actualizar estado del elemento',{
                descripcion,
                completado
            })
            .command('borrar', 'Elimina una tarea',{
                descripcion
            })
            .help()
            .argv;

module.exports={
    argv
}