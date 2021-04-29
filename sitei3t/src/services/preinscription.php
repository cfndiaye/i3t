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

//envoi du mail 
$to = "cfndiaye@gmail.com";

// Toujours definir le content-type pour envoyer un mail html
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=Utf-8" . "\r\n";
$headers .= 'From: <'. $email . '>' . "\r\n";

//Composition du message
$message = "Bonjour veuillez trouver ci-dessous mes informations pour une demande de préinscription" . "\r\n";
$message .= "Prénom et nom: <strong>" . $civilite . " " . $prenom . " " . $nom . "</strong>" . "\r\n";
$message .= "Date de naissance: <strong>" . $datenaissance . "\r\n";
$message .= "Téléphone: <strong>" . $telephone . "\r\n";
$message .= "Filière: <strong>" . $formation. "\r\n";
$message .= "Niveau: <strong>" . $niveau . "\r\n";

//envoie
mail($to,$objet,$message,$headers);
?>