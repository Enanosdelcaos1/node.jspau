// ============================================
// ARCHIVO: sincrona-asincrona.js
// DESCRIPCIÓN: Comparación entre lectura de 
// archivos síncrona y asíncrona en Node.js
// ============================================

// Importar el módulo 'fs' (File System) de Node.js
const fs = require('node:fs');

// ╔════════════════════════════════════════════╗
// ║    LECTURA SÍNCRONA - Bloquea la ejecución║
// ╚════════════════════════════════════════════╝
//sistema mono hilo sincrona
console.log('Inicio del programa');

// readFileSync() detiene TODO el programa hasta completar la lectura
const data = fs.readFileSync('./archivos/lectura1.txt', 'utf-8');
// Dividir el contenido en líneas
const lineas = data.split('\n');
console.log(`El archivo tiene ${lineas.length} líneas`);


// ╔════════════════════════════════════════════╗
// ║ LECTURA ASÍNCRONA - NO bloquea la ejecución║
// ╚════════════════════════════════════════════╝

//callbaks, promesas, async/await
// node acepta las promesas
// sistema mono hilo - asincrona promesas
console.log ('\n'+ '#'.repeat(40));
console.log('Inicio de la lectura asincrona con promesa UNO');
console.log('*'.repeat(40));
// PROMESA UNO: Lee lectura1.txt de forma asíncrona
// .then() se ejecuta cuando la lectura termina
fs.promises.readFile('./archivos/lectura1.txt', 'utf-8')
    .then((datosAsincronosUNO) => {
        const lineasAsync = datosAsincronosUNO.split('\n');
        console.log(`[PROMESA UNO] El archivo tiene ${lineasAsync.length} líneas`);
    })
    // .catch() captura cualquier error
    .catch(err => console.error('Error en lectura asincrona UNO:', err));

// Otra lectura asincrona con promesa DOS
console.log ('\n'+ '#'.repeat(40));
console.log('Inicio de la lectura asincrona con promesa DOS');
console.log('*'.repeat(40));
// PROMESA DOS: Lee lectura2.txt de forma asíncrona
// Ejecuta en PARALELO con PROMESA UNO (al mismo tiempo)
fs.promises.readFile('./archivos/lectura2.txt', 'utf-8')
    .then((datosAsincronosDOS) => {
        const lineasAsync2 = datosAsincronosDOS.split('\n');
        console.log(`[PROMESA DOS] El archivo tiene ${lineasAsync2.length} líneas`);
    })
    .catch(err => console.error('Error en lectura asincrona DOS:', err));

// Lectura con async/await (forma moderna y más legible)
async function leerConAsync() {
    console.log ('\n'+ '#'.repeat(40));
    console.log('Inicio de la lectura con async/await');
    console.log('*'.repeat(40));
    try {
        // await pausa la función aquí hasta que se complete la lectura
        const datosAsync = await fs.promises.readFile('./archivos/lectura1.txt', 'utf-8');
        const lineasAsyncAwait = datosAsync.split('\n');
        console.log(`[ASYNC/AWAIT] El archivo tiene ${lineasAsyncAwait.length} líneas`);
    } catch (err) {
        // Captura errores de forma similar a try/catch en código síncrono
        console.error('Error en lectura async/await:', err);
    }
}

// Ejecutar la función async
leerConAsync();

// Lectura con callback (forma antigua)
console.log ('\n'+ '#'.repeat(40));
console.log('Inicio de la lectura con callback');
console.log('*'.repeat(40));
// Método antiguo con callback
// El callback se ejecuta cuando se complete la lectura
fs.readFile('./archivos/lectura2.txt', 'utf-8', (err, datosCallback) => {
    // Primer parámetro es el error (null si no hay error)
    if (err) {
        console.error('Error en lectura callback:', err);
        return;
    }
    const lineasCallback = datosCallback.split('\n');
    console.log(`[CALLBACK] El archivo tiene ${lineasCallback.length} líneas`);
});

console.log('\nFin del programa (nota que la lectura asincrona aún está en proceso)');
// IMPORTANTE: Este mensaje se imprime ANTES de que terminen las lecturas asincronas
// porque no esperamos a que terminen (a diferencia de lectura síncrona)


