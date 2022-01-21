function sumar(a: number, b: number): number {

    return a + b;
}

const sumarFlecha = (a: number ,b: number ): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 5): number {
    return  numero * base;
}

const resultado = multiplicar(10, 20, 15);

console.log(resultado);
