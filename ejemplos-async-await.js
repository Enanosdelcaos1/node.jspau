
// ╔════════════════════════════════════════════╗
// ║         EJEMPLOS DE ASYNC/AWAIT            ║
// ╚════════════════════════════════════════════╝

const fs = require('node:fs');


// ╔════════════════════════════════════════════╗
// ║   EJEMPLO 1: Async/Await básico            ║
// ╚════════════════════════════════════════════╝

async function ejemplo1() {
    console.log('\n--- EJEMPLO 1: Async/Await básico ---');
    
    try {
        // await pausa aquí hasta que se complete la promesa
        const datos = await fs.promises.readFile('./archivos/lectura1.txt', 'utf-8');
        console.log('Contenido leído:');
        console.log(datos);
    } catch (error) {
        console.error('Error:', error.message);
    }
}


// ╔════════════════════════════════════════════╗
// ║   EJEMPLO 2: Múltiples awaits secuenciales ║
// ╚════════════════════════════════════════════╝

async function ejemplo2() {
    console.log('\n--- EJEMPLO 2: Múltiples awaits secuenciales ---');
    
    try {
        console.log('Leyendo archivo 1...');
        // Espera a que termine la lectura 1
        const datos1 = await fs.promises.readFile('./archivos/lectura1.txt', 'utf-8');
        console.log(`Archivo 1: ${datos1.split('\n').length} líneas\n`);
        
        console.log('Leyendo archivo 2...');
        // Espera a que termine la lectura 2
        const datos2 = await fs.promises.readFile('./archivos/lectura2.txt', 'utf-8');
        console.log(`Archivo 2: ${datos2.split('\n').length} líneas`);
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}


// ╔════════════════════════════════════════════╗
// ║   EJEMPLO 3: Awaits en paralelo con        ║
// ║         Promise.all() (MÁS EFICIENTE)     ║
// ╚════════════════════════════════════════════╝

async function ejemplo3() {
    console.log('\n--- EJEMPLO 3: Promise.all() - Paralelo (MÁS RÁPIDO) ---');
    
    try {
        console.log('Leyendo AMBOS archivos al mismo tiempo...\n');
        
        // Promise.all() ejecuta ambas promesas en paralelo
        const [datos1, datos2] = await Promise.all([
            fs.promises.readFile('./archivos/lectura1.txt', 'utf-8'),
            fs.promises.readFile('./archivos/lectura2.txt', 'utf-8')
        ]);
        
        console.log(`Archivo 1: ${datos1.split('\n').length} líneas`);
        console.log(`Archivo 2: ${datos2.split('\n').length} líneas`);
        console.log('✓ Ambos archivos leídos en paralelo (más eficiente)');
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}


// ╔════════════════════════════════════════════╗
// ║   EJEMPLO 4: Loop con await                ║
// ╚════════════════════════════════════════════╝

async function ejemplo4() {
    console.log('\n--- EJEMPLO 4: Loop con await ---');
    
    try {
        const archivos = ['lectura1.txt', 'lectura2.txt'];
        
        for (const archivo of archivos) {
            console.log(`\nLeyendo ${archivo}...`);
            // await dentro de un loop espera cada lectura antes de pasar a la siguiente
            const datos = await fs.promises.readFile(`./archivos/${archivo}`, 'utf-8');
            console.log(`✓ ${archivo}: ${datos.split('\n').length} líneas`);
        }
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}


// ╔════════════════════════════════════════════╗
// ║   EJEMPLO 5: Manejo de errores con         ║
// ║         try/catch (vs .catch())            ║
// ╚════════════════════════════════════════════╝

async function ejemplo5() {
    console.log('\n--- EJEMPLO 5: Manejo de errores con try/catch ---');
    
    try {
        // Intentar leer un archivo que NO existe
        const datos = await fs.promises.readFile('./archivos/archivo-inexistente.txt', 'utf-8');
    } catch (error) {
        // Se ejecuta si hay error
        console.error('✓ Error capturado:');
        console.error(`  - Tipo: ${error.code}`);
        console.error(`  - Mensaje: ${error.message}`);
    }
}


// ╔════════════════════════════════════════════╗
// ║   EJEMPLO 6: Función que retorna promesa  ║
// ║         (sin ser async)                    ║
// ╚════════════════════════════════════════════╝

// Función que devuelve una promesa (tradicional)
function obtenerDatos(archivo) {
    return fs.promises.readFile(`./archivos/${archivo}`, 'utf-8');
}

async function ejemplo6() {
    console.log('\n--- EJEMPLO 6: Llamar función que retorna promesa ---');
    
    try {
        // Usar await con cualquier función que retorne promesa
        const datos = await obtenerDatos('lectura1.txt');
        console.log('Datos obtenidos:');
        console.log(datos.substring(0, 50) + '...'); // Mostrar primeros 50 caracteres
    } catch (error) {
        console.error('Error:', error.message);
    }
}


// ╔════════════════════════════════════════════╗
// ║   EJEMPLO 7: Async/Await con setTimeout    ║
// ║         (simulación de demora)             ║
// ╚════════════════════════════════════════════╝

// Función que retorna promesa después de X ms
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ejemplo7() {
    console.log('\n--- EJEMPLO 7: Async/Await con demoras ---');
    
    console.log('Iniciando...');
    
    // Esperar 2 segundos
    await esperar(2000);
    console.log('✓ Pasaron 2 segundos');
    
    // Esperar 1 segundo más
    await esperar(1000);
    console.log('✓ Pasó 1 segundo más');
    
    console.log('✓ Total: 3 segundos');
}


// ╔════════════════════════════════════════════╗
// ║   EJECUTAR TODOS LOS EJEMPLOS              ║
// ╚════════════════════════════════════════════╝

async function ejecutarTodos() {
    console.log('╔════════════════════════════════════════════╗');
    console.log('║    EJECUTANDO EJEMPLOS DE ASYNC/AWAIT      ║');
    console.log('╚════════════════════════════════════════════╝');
    
    await ejemplo1();
    await ejemplo2();
    await ejemplo3();
    await ejemplo4();
    await ejemplo5();
    await ejemplo6();
    await ejemplo7();
    
    console.log('\n╔════════════════════════════════════════════╗');
    console.log('║    ✓ TODOS LOS EJEMPLOS COMPLETADOS        ║');
    console.log('╚════════════════════════════════════════════╝\n');
}

// Ejecutar todos los ejemplos
ejecutarTodos();
