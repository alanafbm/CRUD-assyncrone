import AddTeam from './AddTeam.js';
import Team from './Team.js';

export const ACTION_FORM = {
  CHANGER: 'changer',
  SUPPRIMER: 'supprimer',
}

document.addEventListener('DOMContentLoaded', function(){

  //action pour ajouter um team
    const elBtnAdd = document.querySelector('[data-js-add]');

    elBtnAdd.addEventListener('click', function() {
        new AddTeam();
    });


  // action pour changer le nom
    const elBtnsChange = document.querySelectorAll('[data-js-change]');

    elBtnsChange.forEach(function (btnChange) {
      btnChange.addEventListener('click', function (e) {
        handleActionForm(e, ACTION_FORM.CHANGER)
      });
    });

    // action pour supprimer le team
    const elBtnsSupprimer = document.querySelectorAll('[data-js-delete]');

    elBtnsSupprimer.forEach(function(btnSupprimer) {
      btnSupprimer.addEventListener('click', function(e) {
        handleActionForm(e, ACTION_FORM.SUPPRIMER);
      })
    })

    function handleActionForm(e, action) {
      e.preventDefault();

      const elForm = e.target.parentElement;
      new Team(elForm, action);
    }
});
