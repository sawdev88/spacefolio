<?php
  $name	= trim($_POST['name']);
  $to	= "seanwinesdev@gmail.com";
  $subject = "$name sent a message via your contact form";
  $message = "$name says hello!";
  $headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
	$headers .= "X-Priority: 1\r\n";
	$headers .= "X-MSMail-Priority: High\r\n\r\n";
  mail($to, $subject, $message, $headers);
 ?>
