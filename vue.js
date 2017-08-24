//Vue.js
/*const vm= new Vue({
    el: 'main',
    data: {
        conectado: false,
        edad: 44,
    }
});*/

const vm= new Vue({
    el: 'main',
    data: {
        laborales: ['lunes','martes','miercoles','jueves','viernes'],
        tareas:[{nombre: 'x', edad: 23},
                {nombre: 'y', edad: 24},
                {nombre: 'z', edad: 25},
              ],
        persona: {
          nombre: 'Maria',
          apellido: 'Martinez',
          ciudad: 'Medellin'
        }
    },
});
