// ╔════════════════════════════════════════════╗
// ║      ARCHIVO Y DESCRIPCIÓN                 ║
// ╚════════════════════════════════════════════╝
// ARCHIVO: operaciones-aritmeticas.js
// DESCRIPCIÓN: Módulo que exporta funciones
// matemáticas básicas (suma, resta, 
// multiplicación y división)
// TIPO: Módulo ES6 (export/import)

// FUNCIÓN: suma
// PARÁMETROS: a (número), b (número)
// RETORNA: La suma de a + b
// EJEMPLO: suma(5, 3) retorna 8
export function suma(a, b) {
  return a + b;
}


// FUNCIÓN: resta
// PARÁMETROS: a (número), b (número)
// RETORNA: La resta de a - b
// EJEMPLO: resta(10, 3) retorna 7
export function resta(a, b) {
  return a - b;
} 


// FUNCIÓN: multiplicacion
// PARÁMETROS: a (número), b (número)
// RETORNA: El producto de a * b
// EJEMPLO: multiplicacion(4, 5) retorna 20
export function multiplicacion(a, b) {
  return a * b;
}


// FUNCIÓN: division
// PARÁMETROS: a (número - dividendo), b (número - divisor)
// RETORNA: El cociente de a / b o mensaje de error si b es 0
// VALIDACIÓN: Previene división por cero
// EJEMPLO: division(20, 4) retorna 5
// EJEMPLO: division(10, 0) retorna "Error: Division por cero"
export function division(a, b) {
  // Validar que el divisor no sea cero
  if (b === 0) {
    return "Error: Division por cero";
  }

  return a / b;
}


