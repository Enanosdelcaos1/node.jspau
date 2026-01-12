const fs = require('node:fs');

console.log('=== LECTURA SÍNCRONA ===');
console.log('Inicio del programa');

// ╔════════════════════════════════════════════╗
// ║         LECTURA SÍNCRONA                   ║
// ╚════════════════════════════════════════════╝
// - Bloquea la ejecución del programa hasta que termine de leer el archivo
// - El código espera a que termine antes de pasar a la siguiente línea
// - Más simple pero menos eficiente en aplicaciones con muchas operaciones

// Lectura síncrona de lectura1.txt
console.log('\nLeyendo lectura1.txt (síncrono)...');
// readFileSync() detiene todo hasta que lea completamente el archivo
const datos1 = fs.readFileSync('./archivos/lectura1.txt', 'utf-8');
console.log('Contenido de lectura1.txt:');
console.log(datos1);
// Contamos cuántas líneas hay dividiendo por saltos de línea
console.log(`\nTotal de líneas en lectura1.txt: ${datos1.split('\n').length}`);

// Lectura síncrona de lectura2.txt
console.log('\n---');
console.log('Leyendo lectura2.txt (síncrono)...');
// Este bloque se ejecuta DESPUÉS de que termine la lectura anterior
// Nuevamente bloquea hasta completar la lectura
const datos2 = fs.readFileSync('./archivos/lectura2.txt', 'utf-8');
console.log('Contenido de lectura2.txt:');
console.log(datos2);
console.log(`\nTotal de líneas en lectura2.txt: ${datos2.split('\n').length}`);

console.log('\nFin del programa');
// Nota: En lectura síncrona, el programa siempre llega aquí DESPUÉS de leer todos los archivos
