//Conversor de unidades

// Función para convertir unidades de longitud
function convertirLongitud(valor, unidadInicial, unidadFinal) {
    // Definir las equivalencias de las unidades de longitud
    const equivalencias = {
      kilometros: 0.001,
      hectometros: 0.01,
      decametros: 0.1,
      metros: 1,
      decimetros: 10,
      centimetros: 100,
      milimetros: 1000,
    };
  
    // Convertir el valor a metros
    const valorEnMetros = valor / equivalencias[unidadInicial];
  
    // Convertir el valor de metros a la unidad final
    const valorFinal = valorEnMetros * equivalencias[unidadFinal];
  
    // Retornar el valor final redondeado a 2 decimales
    return Math.round(valorFinal * 100) / 100;
  }
  
  // Función para convertir unidades de área
  function convertirArea(valor, unidadInicial, unidadFinal) {
    // Definir las equivalencias de las unidades de área
    const equivalencias = {
      kilometrosCuadrados: 0.000001,
      hectometrosCuadrados: 0.0001,
      decametrosCuadrados: 0.01,
      metrosCuadrados: 1,
      decimetrosCuadrados: 100,
      centimetrosCuadrados: 10000,
      milimetrosCuadrados: 1000000,
    };
  
    // Convertir el valor a metros cuadrados
    const valorEnMetrosCuadrados = valor / equivalencias[unidadInicial];
  
    // Convertir el valor de metros cuadrados a la unidad final
    const valorFinal = valorEnMetrosCuadrados * equivalencias[unidadFinal];
  
    // Retornar el valor final redondeado a 2 decimales
    return Math.round(valorFinal * 100) / 100;
  }
  
  // Función para convertir unidades de capacidad
  function convertirCapacidad(valor, unidadInicial, unidadFinal) {
    // Definir las equivalencias de las unidades de capacidad
    const equivalencias = {
      kilolitro: 0.001,
      hectolitro: 0.01,
      decalitro: 0.1,
      litro: 1,
      decilitro: 10,
      centilitro: 100,
      mililitro: 1000,
    };
  
    // Convertir el valor a litros
    const valorEnLitros = valor / equivalencias[unidadInicial];
  
    // Convertir el valor de litros a la unidad final
    const valorFinal = valorEnLitros * equivalencias[unidadFinal];
  
    // Retornar el valor final redondeado a 2 decimales
    return Math.round(valorFinal * 100) / 100;
  }
  
  // Obtener la opción seleccionada por el usuario
  const opcion = prompt("Seleccione una opción:\n1. Unidades de longitud\n2. Unidades de área\n3. Unidades de capacidad");
  
  // Realizar la conversión según la opción seleccionada
  if (opcion === "1") {
    const valorInicial = parseFloat(prompt("Ingrese el valor inicial:"));
    const unidadInicial = prompt("Ingrese la unidad inicial (kilometros, hectometros, decametros, metros, decimetros, centimetros, milimetros):");
    const unidadFinal = prompt("Ingrese la unidad final (kilometros, hectometros, decametros, metros, decimetros, centimetros, milimetros):");
  
    const valorFinal = convertirLongitud(valorInicial, unidadInicial, unidadFinal);
    alert(`El valor convertido es: ${valorFinal}`);
  } else if (opcion === "2") {
    const valorInicial = parseFloat(prompt("Ingrese el valor inicial:"));
    const unidadInicial = prompt("Ingrese la unidad inicial (kilometros cuadrados, hectometros cuadrados, decametros cuadrados, metros cuadrados, decimetros cuadrados, centimetros cuadrados, milimetros cuadrados):");
    const unidadFinal = prompt("Ingrese la unidad final (kilometros cuadrados, hectometros cuadrados, decametros cuadrados, metros cuadrados, decimetros cuadrados, centimetros cuadrados, milimetros cuadrados):");
  
    const valorFinal = convertirArea(valorInicial, unidadInicial, unidadFinal);
    alert(`El valor convertido es: ${valorFinal}`);
  } else if (opcion === "3") {
    const valorInicial = parseFloat(prompt("Ingrese el valor inicial:"));
    const unidadInicial = prompt("Ingrese la unidad inicial (kilolitro, hectolitro, decalitro, litro, decilitro, centilitro, mililitro):");
    const unidadFinal = prompt("Ingrese la unidad final (kilolitro, hectolitro, decalitro, litro, decilitro, centilitro, mililitro):");
  
    const valorFinal = convertirCapacidad(valorInicial, unidadInicial, unidadFinal);
    alert(`El valor convertido es: ${valorFinal}`);
  } else {
    alert("Opción inválida");
  }
  