// ╔════════════════════════════════════════════╗
// ║      ARCHIVO Y DESCRIPCIÓN                 ║
// ╚════════════════════════════════════════════╝
// ARCHIVO: index.js
// DESCRIPCIÓN: Archivo principal que demuestra
// funcionalidad básica de Node.js e importación
// de módulos personalizados

// Imprime un mensaje simple en consola
console.log("hello.world");

// Demuestra que console funciona en Node.js
console.log("esto por ahora funciona");

// Más ejemplos de console.log
console.log("nuevo cambio");
console.log("estamos probamdo el node");

// COMENTADO: No se usa 'window' porque es específico de navegadores
// En Node.js no existe el objeto 'window'
//console.log(window); // Esto va a tirar error porque window no existe en Node.js

// COMENTADO: 'global' es el equivalente en Node.js a 'window' en navegadores
//console.log(global); // Esto funciona en Node.js

// COMENTADO: globalThis funciona en cualquier entorno (navegadores y Node.js)
//globalThis.console.log("Esto funciona en cualquier entorno");
console.log("probando otra vez");

// ============================================
// IMPORTACIÓN DE MÓDULOS PERSONALIZADOS
// ============================================

// Importar funciones desde el módulo operaciones-aritmeticas.js
// Sintaxis ES6 Modules (import/export)
// Las funciones importadas: suma, resta, multiplicacion, division
import { suma, resta, multiplicacion, division } from './operaciones-aritmeticas.js';

// ============================================
// PRUEBAS DE FUNCIONES IMPORTADAS
// ============================================

// Probamos la función suma con diferentes valores
console.log(suma(5, 10));      // Resultado: 15
console.log(suma(20, 30));     // Resultado: 50
console.log(suma(-5, 15));     // Resultado: 10 (suma con números negativos)
console.log(suma(0, 0));       // Resultado: 0 (suma de ceros)

