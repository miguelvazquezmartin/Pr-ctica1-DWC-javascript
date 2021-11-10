class Zombi {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
    atacar() {
        console.log(`${this.nombre} ataca a un pájaro y le causa ${this.potencia} puntos de daño`);
    }
}

let zombie = new Zombi('Zombie', 150, 30);


//Ejercicio 1

class Jugador {
    constructor(nombreJuga, ocupacionJuga, puntosJuga, faccionJuga){
        this.nombreJuga = nombreJuga;
        this.ocupacionJuga = ocupacionJuga;
        this.puntosJuga = puntosJuga;
        this.faccionJuga = faccionJuga;
        this.maxVida = 100;
    }

    toString(){
        console.log(`${this.nombreJuga} es ${this.ocupacionJuga} tiene ${this.puntosJuga} puntos de vida y es ${this.faccionJuga}`)
    }
}

let jugador1 = new Jugador('Miguel', 'defensa', 100, 'verde');
let jugador2 = new Jugador('Ana', 'atacante', 90, 'rojo');

jugador1.toString();
jugador2.toString();

let listaJugadores = [jugador1, jugador2];

listaJugadores.toString();

//Ejercicio 2

class Abominacion extends Zombi {

        ataqueMultiple() {
            this.potencia = this.potencia * 3;
            console.log(`${this.nombre} ataca a un mapache y le causa ${this.potencia} puntos de daño ya que atacó 3 veces consecutivas`);
        }
}

let abominacion = new Abominacion('Abominación', 300, 60);

zombie.atacar();

abominacion.ataqueMultiple();

//Ejercicio 3

class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
 
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}
 
let manzana = new Consumible('Manzana');

let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    maxPuntosVida: 10,
    consumir: function (consumible) {
        consumible.consumir(this);
    }
}
 
ricardo.consumir(manzana);

class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
        this.maxPuntosVida = 10;
        this.puntosVida = ricardo.puntosVida;
    }
 
    consumir(jugador) {
        this.poder = this.maxPuntosVida - this.puntosVida;
        console.log(jugador.nombre + " consume " + this.nombre + " y recupero " + this.poder + " puntos de vida.");
    }
}

let plantaCurativa = new PlantaCurativa('Hierva');

ricardo.consumir(plantaCurativa);

//Ejercicio 4

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Laura", puntuacion: 210 },
];


puntuaciones.sort((a, b) => {
    if(a.puntuacion > b.puntuacion) {
        return -1;
    }
    if(a.puntuacion < b.puntuacion) {
        return 1;
    }
});

let mayor = puntuaciones.filter(pasa => pasa.puntuacion >= 100);


console.log(mayor);
