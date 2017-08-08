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

 <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#321D2E">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <title>Sean Wines | Web Dever</title>
    <style media="screen">
    html,body{margin:0;padding:0;font-family:'Play', sans-serif}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0}html{font-size:1vw}h1,h2,a{color:#fff;text-decoration:none}h1{font-size:3rem}h2,a{font-size:1.25rem;letter-spacing:.25rem;opacity:.9}.blue-star{height:.8rem;width:.8rem;background:#0f95c2;border-radius:50%;filter:blur(3px)}.pink-star{height:.5rem;width:.5rem;background:#fd8697;border-radius:50%}.gray-star{height:1rem;width:1rem;background:#d8d8d8;border-radius:50%;filter:blur(2px)}.cyan-star{height:.6rem;width:.6rem;background:#667dc4;border-radius:50%;filter:blur(2px)}.yellow-star{height:.5rem;width:.5rem;background:#c6d947;border-radius:50%;filter:blur(0.75px)}.teal-star{height:1rem;width:1rem;background:#4c7789;border-radius:50%;filter:blur(1px)}@keyframes flicker{0%{opacity:1}50%{opacity:.25}100%{opacity:1}}#container{background:url("./assets/img/moon-bg.png") no-repeat center center/cover;height:100vh;width:100vw;position:relative;overflow:hidden}#container .callout{position:absolute;bottom:16vh;right:10vw;text-align:center}#container .icon-container{position:absolute;bottom:3vh;right:3vw}#container .icon-container i{color:rgba(255,255,255,0.5);font-size:2rem;margin-left:1rem;transition:0.3s ease-in-out}#container .icon-container i:hover{color:rgba(255,255,255,0.9);cursor:pointer}#container .email-container{background:#3b1d2e;position:absolute;bottom:0;left:0;right:0;bottom:-6rem;z-index:1;text-align:center;height:6.1rem;transition:0.3s ease-in-out}#container .email-container #container .email-container #container .email-container h2{margin-top:2.25rem}#container .show-email{bottom:0}#container hr{width:80%;opacity:.5}.star-1{position:absolute;top:4rem;right:10rem;animation:flicker 2s infinite}.star-1{position:absolute;top:4rem;right:10rem;animation:flicker 3s infinite}.star-2{position:absolute;top:10rem;right:2rem;animation:flicker 2s infinite}.star-3{position:absolute;bottom:3rem;right:16rem;animation:flicker 4s infinite}.star-4{position:absolute;top:8remrem;right:24rem;animation:flicker 4s infinite}.star-5{position:absolute;bottom:4rem;left:10rem;animation:flicker 2s infinite}.star-6{position:absolute;top:20rem;right:20rem;animation:flicker 3s infinite}@media (max-width: 1000px){html{font-size:1.5vw}}@media (max-width: 600px){html{font-size:2.5vw}#container .icon-container{right:3rem}#container .icon-container i{font-size:3rem;margin-left:2rem}#container
    </style>
    <link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet">
    <script src="https://use.fontawesome.com/0b488e2512.js"></script>
  </head>
  <body>
    <main id="container">
      <div class="callout">
        <h1>Thanks for saying hello!</h1>
        <hr>
        <a href="."><h2>RETURN TO HOME</h2></a>
      </div>

      <div class="icon-container">
        <a href="."><i class="fa fa-home" aria-hidden="true"></i></a>
      </div>

      <div class="star-1 blue-star"></div>
      <div class="star-2 pink-star"></div>
      <div class="star-3 cyan-star"></div>
      <div class="star-4 gray-star"></div>
      <div class="star-5 yellow-star"></div>
      <div class="star-6 teal-star"></div>
    </main>
  </body>
</html>
