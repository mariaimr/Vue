const vm= new Vue({
  el: 'main',
  data: {
    minimo: 5,
    juegos: [{
      titulo: 'Peli 1',
      genero: 'drama',
      puntuacion: 3
    },
    {
      titulo: 'Peli 2',
      genero: 'terror',
      puntuacion: 5
    },
    {
      titulo: 'Peli 3',
      genero: 'suspenso',
      puntuacion: 2
    },
    {
      titulo: 'Peli 4',
      genero: 'infantil',
      puntuacion: 9
    },
    {
      titulo: 'Peli 5',
      genero: 'drama',
      puntuacion: 10
    }
  ]
  },
  computed: {
    mejoresJuegos(){
      return this.juegos.filter(function(juego){
        return juego.puntuacion >= this.minimo;
      })
    }
  }
 });
