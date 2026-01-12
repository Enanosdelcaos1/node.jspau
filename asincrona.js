const fs = require('node:fs');

console.log('=== LECTURA ASÍNCRONA ===');
console.log('Inicio del programa\n');

// ╔════════════════════════════════════════════╗
// ║         LECTURA ASÍNCRONA                  ║
// ╚════════════════════════════════════════════╝
// - NO bloquea la ejecución del programa
// - El programa continúa mientras se leen los archivos en segundo plano
// - Más eficiente para aplicaciones con múltiples operaciones
// - Requiere callbacks, promesas o async/await para procesar los datos

// ============================================
// MÉTODO 1: Promesas con .then() y .catch()
// ============================================

// Lectura asíncrona de lectura1.txt con promesa
console.log('Leyendo lectura1.txt (asíncrono con promesa)...');
// fs.promises.readFile() retorna una promesa que se resuelve cuando termina de leer
// .then() se ejecuta cuando la lectura termina exitosamente
fs.promises.readFile('./archivos/lectura1.txt', 'utf-8')
    .then((datos1) => {
        console.log('Contenido de lectura1.txt:');
        console.log(datos1);
        console.log(`Total de líneas en lectura1.txt: ${datos1.split('\n').length}\n`);
    })
    // .catch() se ejecuta si hay error durante la lectura
    .catch(err => console.error('Error lectura1.txt:', err));

// Lectura asíncrona de lectura2.txt con promesa
console.log('Leyendo lectura2.txt (asíncrono con promesa)...');
// Estas dos promesas se ejecutan en paralelo (al mismo tiempo)
// No esperan la una a la otra como en lectura síncrona
fs.promises.readFile('./archivos/lectura2.txt', 'utf-8')
    .then((datos2) => {
        console.log('Contenido de lectura2.txt:');
        console.log(datos2);
        console.log(`Total de líneas en lectura2.txt: ${datos2.split('\n').length}\n`);
    })
    .catch(err => console.error('Error lectura2.txt:', err));

// ============================================
// MÉTODO 2: async/await (forma moderna)
// ============================================

// Lectura asíncrona con async/await
// async/await hace que el código asíncrono se vea como síncrono (más legible)
async function leerConAsyncAwait() {
    console.log('Leyendo ambos archivos con async/await...\n');
    try {
        // await pausa aquí hasta que se complete la lectura del archivo
        const datos1 = await fs.promises.readFile('./archivos/lectura1.txt', 'utf-8');
        console.log('Lectura1.txt (async/await):');
        console.log(datos1);
        
        // await pausa aquí hasta que se complete la lectura del segundo archivo
        // NOTA: Este archivo se lee DESPUÉS de terminar el primero (secuencial)
        const datos2 = await fs.promises.readFile('./archivos/lectura2.txt', 'utf-8');
        console.log('Lectura2.txt (async/await):');
        console.log(datos2);
    } catch (err) {
        // Si hay error en cualquier punto, se captura aquí
        console.error('Error:', err);
    }
}

// Ejecuta la función async
leerConAsyncAwait();

console.log('Fin del programa (las lecturas asincronas aún están en proceso)');
// NOTA: Este "Fin" se imprime ANTES de que terminen las lecturas
// Porque la ejecución NO está bloqueada (a diferencia de lectura síncrona)
