const fs = require('fs');

const colors = require('colors');

let listadoPorHacer = []

const crear = (descripcion) => {
    cargarDB();
    let porhacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porhacer);
    guardarDB();
    return porhacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data,
        (err) => {
            if (err) throw new Error('No se pudo grabar');
        }

    );
}


const cargarDB = () => {
    try {

        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    listadoPorHacer.forEach(tarea => {
        if (tarea.descripcion == descripcion) {
            tarea.completado = completado;
            console.log(tarea.completado);
        }
    });
    guardarDB();
}

const borrar = (descripcion) => {
    cargarDB();
    var index = listadoPorHacer.findIndex(tarea => descripcion === tarea.descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }
    return false;
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}