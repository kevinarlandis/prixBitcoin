const url = 'https://blockchain.info/ticker';

function recupererPrix() {
  
  let requete = new XMLHttpRequest(); 
  requete.open('GET', url); 
  requete.responseType = 'json'; 
  requete.send(); 

  // Dèss qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; 
        let prixEnEuros = reponse.EUR.last;
        document.querySelector('#price_label').textContent = prixEnEuros;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
  console.log('Prix actualisé');
}

setInterval(recupererPrix, 1000);