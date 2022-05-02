/* 
nome repo: vue-hello
**Descrizione:**
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
**Bonus:**
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/



const app = new Vue({
  // da qui in poi si riscriverà tutto il codice

  
  el:'#app',
  //"EL" el, che sta per elemento", è un parametro obbligato e viene indirizzato all'ID 


  data: {
    messaggioUno: 'Benvenuto in VueJs',
    messaggioDue: '',
    messaggioVerde: 'verde',
    messaggioArancia: 'arancione',
    immagineBonus: 'img/mustang.jpg',
    
  }
  // tutte le varibiali che verrano inserite devono essere dichiarate in "DATA"
  // a ogni fine di una variabile, inserire ","

});