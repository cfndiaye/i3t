<?php
//Récupère et envoie les preinscriptions par email.
//$objet = $_POST['subject'];
$civilite = verify($_POST['civilite']);
$prenom = verify($_POST['prenom']);
$nom = verify($_POST['nom']);
$datenaissance = verify($_POST['datenaissance']);
$email = verify($_POST['email']);
$telephone = verify($_POST['telephone']);
$formation = verify($_POST['formation']);
$niveau = verify($_POST['niveau']);

function verify($data){
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>