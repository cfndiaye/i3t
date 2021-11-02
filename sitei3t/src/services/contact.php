<?php
//Récupère et envoie le formulaire de contact par email
$contentType = isset($_SERVER['CONTENT_TYPE']) ?
  trim($_SERVER['CONTENT_TYPE']) : '';

if ($contentType === 'application/json') {
} else {
  echo 'ERREUR';
}

//Recevoir le RAW post data 
$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content);
if (!is_array($decoded)) {
  $prenom = verify($decoded->prenom);
  $nom = verify($decoded->nom);
  $sujet = verify($decoded->sujet);
  $email = verify($decoded->email);
  $message = verify($decoded->message);
}


function verify($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

//envoie du mail
$to = "i3t.edu@gmail.com";
// Toujours definir le content-type pour envoyer un mail html
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=Utf-8" . "\r\n";
$headers .= "From: <" . $email . ">" . "\r\n";
//Marquage du message 
$message .= "<br/> <hr/>";
$message .= "De: " . $prenom . " " . $nom;
$message .= "<br/> <hr/>";
$message .= "<span>Ce message a été envoyé depuis votre site web www.i3t.sn</span>";
//envoie
mail($to, $sujet, $message, $headers);
