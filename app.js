const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

console.log(argv)

let comando = argv._[0]

switch (comando) {
    case 'crear':
        console.log("Crear");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log("Listar");
        let listado = porHacer.getListado();
        listado.forEach(element => {
            console.log("==========Por hacer============".green)
            console.log(element.descripcion);
            console.log("Completado: ", element.completado ? "SI" : "NO");
            console.log("===============================".green);
        });

        break;
    case 'borrar':
        console.log("Borrar");
        console.log( porHacer.borrar(argv.descripcion));
        break;
    case 'actualizar':
        console.log("Actualizar");
        porHacer.actualizar(argv.descripcion);
        break;
    default:
        console.log("Comando desconocido");

        break;
}