const url = 'https://blockchain.info/ticker';

async function recupererPrix() {
  const requete = await fetch(url, {
    method: 'GET'
  });

  if(!requete.ok){
    alert('Un problème est survenu.');
  } else{
    let donnees = await requete.json();
    document.querySelector('span').textContent = donnees.EUR.last;
  }
}

recupererPrix();