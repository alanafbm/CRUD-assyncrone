<?php 
    require_once('fonctionsDB.php');
    
    if (isset($_POST['id'])) {

        $id = htmlspecialchars($_POST['id']);
        
        deleteTeam($id);
    }  
?>