
let insertarFecha = document.getElementById(`fecha`);
let insertarHora = document.getElementById(`hora`);

function dia(numero) {
  if (numero === 0) {
    return "Domingo";
  } else if (numero === 1) {
    return "Lunes";
  } else if (numero === 2) {
    return "Martes";
  } else if (numero === 3) {
    return "Miercoles";
  } else if (numero === 4) {
    return "Jueves";
  } else if (numero === 5) {
    return "Viernes";
  } else if (numero === 6) {
    return "Sabado";
  }
}

function mes(numero) {
  if (numero === 0) {
    return "Enero";
  } else if (numero === 1) {
    return "Febrero";
  } else if (numero === 2) {
    return "Marzo";
  } else if (numero === 3) {
    return "Abril";
  } else if (numero === 4) {
    return "Mayo";
  } else if (numero === 5) {
    return "Junio";
  } else if (numero === 6) {
    return "Julio";
  } else if (numero === 7) {
    return "Agosto";
  } else if (numero === 8) {
    return "Septiembre";
  } else if (numero === 9) {
    return "Octubre";
  } else if (numero === 10) {
    return "Noviembre";
  } else if (numero === 11) {
    return "Diciembre";
  }
}

function segundos(numero){
    if(numero < 10){
        return "0" + numero;
    } else {
        return numero
    }
}

function sistemaHorario(numero){
    if(numero >= 0 && numero < 12){
        return "AM"
    } else {
        return "PM"
    }
}

setInterval(() => {
    let fecha = new Date();
    insertarFecha.innerHTML = `${dia(fecha.getDay())} ${fecha.getDate()} de ${mes(
        fecha.getMonth()
      )} del ${fecha.getFullYear()}`;
      insertarHora.innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${segundos(fecha.getSeconds())} ${sistemaHorario(fecha.getHours())}`;
}, 1000);

