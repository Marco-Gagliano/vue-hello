/* 
nome repo: vue-hello
**Descrizione:**
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
**Bonus:**
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/



const app = new Vue({
  // da qui in poi si siscriverà tutto il codice

  
  el:'#app',
  //"EL" el, che sta per elemento", è un parametro obbligato e viene indirizzato all'ID 


  data: {
    messaggio: 'Benvenuto in VueJs'
  }
  // tutte le varibiali che verrano inserite verrano dichiarate in "DATA"

});