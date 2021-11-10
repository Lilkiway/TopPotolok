<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.5.1/src/Exception.php';
require 'PHPMailer-6.5.1/src/PHPMailer.php';
require 'PHPMailer-6.5.1/src/SMTP.php';

$name = $_POST['name'];
$phone = $_POST['phone'];

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';   
$mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com'; 
$mail->SMTPAuth = true; 
$mail->Username = 'Ваш логин (без @...)';
$mail->Password = 'Ваш пароль';
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;
$mail->setFrom('Ваш Email');
$mail->addAddress('Email получателя');

$mail->isHTML(true); 
$mail->Subject = 'Перезвонить'; // Заголовок письма
$mail->Body = "Имя $name . Телефон $phone"; // Текст письма

if(!$mail->send()) {
 echo 'Message could not be sent.';
 echo "Mailer Error: $mail->ErrorInfo";
} else {
 echo 'ok';
}
?>