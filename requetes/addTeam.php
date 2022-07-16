<?php 
    require_once('fonctionsDB.php');
    
    if (isset($_POST['nom']) && isset($_POST['quartier'])) {

        $nom = htmlspecialchars($_POST['nom']);
        $quartier = htmlspecialchars($_POST['quartier']);

        $return_id = addTeam($nom, $quartier);
        
        echo $return_id;
    }  
?>