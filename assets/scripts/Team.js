import { ACTION_FORM } from "./main";
// responsavel pelo changer e pelo supprimer
export default class Team {
  constructor(elForm, action) {
    this.action = action; // ['supprimer', 'changer']
    this.elForm = elForm;
    this.id = this.elForm.dataset.jsTeam;
    this.newName = this.elForm.querySelector('[name="nom"]').value;

    this.init()
  }
init(){
  ACTION_FORM.CHANGER === this.action ? this.modifierNomTeam() : this.supprimerTeam(); 
}

  modifierNomTeam() {
    const encodedNom = encodeURIComponent(this.newName);
    const encodedId = encodeURIComponent(this.id);

    const myInit = {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: 'nom=' + encodedNom + '&id=' + encodedId
    };

    fetch(`requetes/changeTeamName.php?nom=${this.newName}&id=${this.id}`, myInit)
      .then(function (response) {
        if (response.ok) {
          const newLabel = this.elForm.querySelector('[data-js-label]')
          newLabel.innerText = `${this.newName} : `;
          this.elForm.querySelector('[name="nom"]').value = '';
          return response;
        }
        else throw new Error('La réponse n\'est pas OK');
      }.bind(this))
      .catch(function (error) {
        console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
      });
  };

  supprimerTeam(){
    const encodedNom = encodeURIComponent(this.newName);
    const encodedId = encodeURIComponent(this.id);

    const myInit = {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: 'nom=' + encodedNom + '&id=' + encodedId
    };

    fetch(`requetes/deleteTeam.php?nom=${this.newName}&id=${this.id}`, myInit)
      .then(function (response) {
        if (response.ok) {
          let allTeams = document.querySelector('[data-js-all-teams]');
          allTeams.removeChild(this.elForm);
          return response;
        }
        else throw new Error('La réponse n\'est pas OK');
      }.bind(this))
      .catch(function (error) {
        console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
      });
  }

}
