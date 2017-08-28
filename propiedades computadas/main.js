const vm= new Vue({
  el: 'main',
  data: {
    mensaje: "Hola mundo :) !",
    tareas: [{
      titulo: 'tarea 1',
      prioridad: true,
      antiguedad: 23
    },
    {
      titulo: 'tarea 2',
      prioridad: false,
      antiguedad: 50
    },
    {
      titulo: 'tarea 3',
      prioridad: false,
      antiguedad: 5
    },
    {
      titulo: 'tarea 4',
      prioridad: true,
      antiguedad: 80
    },
    {
      titulo: 'tarea 5',
      prioridad: true,
      antiguedad: 358
    }
  ]
  },
  methods: {

  },
  computed: {
    mensajeAlReves() {
      return this.mensaje.split('').reverse().join('')
    },
    tareasConPrioridad(){
      return this.tareas.filter(function(tarea){
        return tarea.prioridad;
      });
    },
    tareasPorAntiguedad(){
      return this.tareas.sort(function (a,b){
        return b.antiguedad - a.antiguedad
      });
    }
  }

});
