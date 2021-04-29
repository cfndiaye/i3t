<?php
//Récupère et envoie les preinscriptions par email.
//$objet = $_POST['subject'];
$contentType = isset($_SERVER['CONTENT_TYPE'])? trim($_SERVER['CONTENT_TYPE']) : '';
if($contentType === 'application/json'){
  } else {
  echo 'ERREUR';
}
  //recevoir le RAW post data 
  $content = trim(file_get_contents("php://input"));
  $decoded = json_decode($content);
  if(!is_array($decoded)){
    $civilite = verify($decoded->civilite);
    $prenom = verify($decoded->prenom);
    $nom = verify($decoded->nom);
    $datenaissance = verify($decoded->datenaissance);
    $email = verify($decoded->email);
    $telephone = verify($decoded->telephone);
    $formation = verify($decoded->formation);
    $niveau = verify($decoded->niveau);
  }


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