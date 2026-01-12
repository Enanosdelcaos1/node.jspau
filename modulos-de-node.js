// ============================================
// ARCHIVO: modulos-de-node.js
// DESCRIPCIÓN: Ejemplos del módulo OS de Node.js
// El módulo OS proporciona información sobre
// el sistema operativo y recursos de la máquina
// ============================================

// Importar el módulo 'os' de Node.js
// 'node:os' es la forma moderna (Node.js 14+)
const so = require('node:os');

console.log('============================================');
console.log('EJEMPLOS DEL MÓDULO OS DE NODE.JS');
console.log('============================================\n');

// ============================================
// 1. PLATFORM() - Identificar el SO
// ============================================
console.log('1. PLATFORM - Identificar el Sistema Operativo:');
// platform() retorna: 'win32', 'darwin' (macOS), 'linux', 'aix', etc.
const plataforma = so.platform();
console.log(`   Plataforma: ${plataforma}`);
// Identificar qué tipo de SO es
if (plataforma === 'win32') console.log('   Esto es Windows');
else if (plataforma === 'darwin') console.log('   Esto es macOS');
else if (plataforma === 'linux') console.log('   Esto es Linux');
console.log();

// ============================================
// 2. ARCH() - Arquitectura del procesador
// ============================================
console.log('2. ARCH - Arquitectura del Procesador:');
// arch() retorna: 'x64', 'x32', 'arm64', etc.
console.log(`   Arquitectura: ${so.arch()}`);
console.log('   (x64: 64 bits, x32: 32 bits, arm64: ARM 64 bits)');
console.log();

// ============================================
// 3. TYPE() - Tipo de SO
// ============================================
console.log('3. TYPE - Tipo de Sistema Operativo:');
// type() retorna el nombre del SO (Windows_NT, Darwin, Linux)
console.log(`   Tipo: ${so.type()}`);
console.log();

// ============================================
// 4. RELEASE() - Versión del SO
// ============================================
console.log('4. RELEASE - Versión del Sistema Operativo:');
// release() retorna la versión del SO (10.0.19041, etc.)
console.log(`   Versión: ${so.release()}`);
console.log();

// ============================================
// 5. HOSTNAME() - Nombre de la máquina
// ============================================
console.log('5. HOSTNAME - Nombre de la Máquina:');
console.log(`   Nombre: ${so.hostname()}`);
console.log('   (Útil para identificar equipos en redes)');
console.log();

// 6. FREEMEM() - Memoria disponible
console.log('6. FREEMEM - Memoria RAM Disponible:');
const memLibre = so.freemem();
const memLibreGB = (memLibre / 1024 / 1024 / 1024).toFixed(2);
console.log(`   Memoria libre: ${memLibre} bytes`);
console.log(`   Memoria libre: ${memLibreGB} GB`);
console.log();

// 7. TOTALMEM() - Memoria total
console.log('7. TOTALMEM - Memoria RAM Total:');
const memTotal = so.totalmem();
const memTotalGB = (memTotal / 1024 / 1024 / 1024).toFixed(2);
console.log(`   Memoria total: ${memTotal} bytes`);
console.log(`   Memoria total: ${memTotalGB} GB`);
const porcentajeUso = ((1 - memLibre / memTotal) * 100).toFixed(2);
console.log(`   Porcentaje usado: ${porcentajeUso}%`);
console.log();

// 8. CPUS() - Información de CPUs
console.log('8. CPUS - Información de Procesadores:');
const cpus = so.cpus();
console.log(`   Total de núcleos: ${cpus.length}`);
console.log(`   Modelo: ${cpus[0].model}`);
console.log(`   Velocidad: ${cpus[0].speed} MHz`);
console.log();

// 9. HOMEDIR() - Directorio del usuario
console.log('9. HOMEDIR - Directorio Home del Usuario:');
console.log(`   Ruta: ${so.homedir()}`);
console.log('   (Carpeta de documentos y archivos del usuario)');
console.log();

// 10. UPTIME() - Tiempo desde último reinicio
console.log('10. UPTIME - Tiempo desde Último Reinicio:');
const uptime = so.uptime();
const horas = Math.floor(uptime / 3600);
const minutos = Math.floor((uptime % 3600) / 60);
const segundos = Math.floor(uptime % 60);
console.log(`    Uptime: ${uptime} segundos`);
console.log(`    Uptime: ${horas} horas, ${minutos} minutos, ${segundos} segundos`);
console.log();

// 11. LOADAVG() - Carga del sistema
console.log('11. LOADAVG - Carga Promedio del Sistema:');
const [carga1, carga5, carga15] = so.loadavg();
console.log(`    Carga 1 minuto: ${carga1.toFixed(2)}`);
console.log(`    Carga 5 minutos: ${carga5.toFixed(2)}`);
console.log(`    Carga 15 minutos: ${carga15.toFixed(2)}`);
console.log();

// 12. USERINFO() - Información del usuario
console.log('12. USERINFO - Información del Usuario:');
const usuario = so.userInfo();
console.log(`    Usuario: ${usuario.username}`);
console.log(`    Home: ${usuario.homedir}`);
console.log(`    UID: ${usuario.uid}`);
console.log();

// 13. NETWORKINTERFACES() - Interfaces de red
console.log('13. NETWORKINTERFACES - Interfaces de Red:');
const interfaces = so.networkInterfaces();
for (const [nombre, direcciones] of Object.entries(interfaces)) {
  console.log(`    ${nombre}:`);
  for (const dir of direcciones) {
    if (dir.family === 'IPv4') {
      console.log(`      - IPv4: ${dir.address}`);
    }
  }
}

console.log('\n============================================');
console.log('FIN DE EJEMPLOS');
console.log('============================================');





