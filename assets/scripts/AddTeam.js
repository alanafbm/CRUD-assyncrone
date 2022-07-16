// responsavel pour ajouter un team 
// ajouter sans reload
// À l’ajout d’une équipe, celle-ci est ajoutée à la liste et pensez à nettoyer les
// champs Nom et Ville.
// Pensez à épargner le serveur pour l’affichage des équipes. À cet effet,remarquez que la requête SQL addTeam retourne l’ID de l’équipe ajoutée.

export default class AddTeam {
  constructor() {
    this.init();
  }

  init() {

    this.addNewTeam();
  }

  addNewTeam() {
    const elFormAdd = document.querySelector('[data-js-add-team]'),
      elNom = elFormAdd.nom,
      elQuartier = elFormAdd.quartier;

    let encodedNom = encodeURIComponent(elNom.value),
      encodedQuartier = encodeURIComponent(elQuartier.value);

    let myInit = {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: 'nom=' + encodedNom + '&quartier=' + encodedQuartier
    };

    fetch('requetes/addTeam.php', myInit)
      .then(function (response) {
        if (response.ok) return response.json();
        else throw new Error('La réponse n\'est pas OK');
      })
      .then(function (data) {

        let id = data;
        console.log(id);

      })
      .catch(function (error) {
        console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
      });
  }


}
