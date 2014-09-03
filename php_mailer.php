<html>
<body>

<?php
if (isset($_POST['email']))
//if "email" is filled out, send email
  {
  //send email
  $email = $_REQUEST['email'] ;
  $subject = $_REQUEST['subject'] ;
  $message = $_REQUEST['message'] ;
  mail("peaceuponelove@gmail.com", $subject,
  $message, "From:" . $email);
  echo "Thank you for using our mail form";
  }
 
?>

 