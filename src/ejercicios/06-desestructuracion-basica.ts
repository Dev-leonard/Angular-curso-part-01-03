interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mes',
    detalles: {
        autor: 'Ed sheeran',
        anio: 2015
    }
}
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

// console.log('El volumne actual de: ', volumen);
// console.log('El volumne actual de: ', segundo);
// console.log('El volumne actual de: ', cancion);
// console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] =dbz;

// console.log('Personaje 1:', p1);
// console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);
