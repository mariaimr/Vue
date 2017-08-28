const vm= new Vue({
  el: 'main' , //elemento
  data: { //modelo
    nuevaTarea: null,
    tareas: [
      'Tarea 1',
      'Tarea 2',
      'tarea 3'
    ]
  },
  methods: {
    agregarTareas(){
      //this, hace referencia a la instancia vue
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea= null;
    }
  }
});
