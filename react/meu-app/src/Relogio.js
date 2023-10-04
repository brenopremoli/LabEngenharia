import React from 'react';

function mostraHora(){
  let data = new Date();
  let hora = data.getHours();
  if (hora < 10) {
      hora = "0" + hora;
  }
  let minuto = data.getMinutes();
  if (minuto < 10) {
      minuto = "0" + minuto;
  }
  let segundo = data.getSeconds();
  if (segundo < 10) {
      segundo = "0" + segundo;
  }
  let x = hora + ":" + minuto + ":" + segundo;
  
  let horaElement = document.getElementById('hora');
  if (horaElement) {
    horaElement.textContent = `Relógio: ${x}`;
  }
  
  setTimeout(mostraHora, 1000);
}

function Relogio() {
  mostraHora();

  return (
    <h1 id="hora"></h1>
  );
}

export default Relogio;
