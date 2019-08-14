<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $emailFrom = $_POST['email'];
  $text = $_POST['message'];

  $mailTo = "info@bestfivebcn.com";
  $data = "You have received an e-mail from " . $name . ".\n\n";
  $headers = "E-mail: " . $emailFrom;
  $message = "Message: " . $text;

  mail($mailTo, $headers, $data, $message);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />

  <link rel="stylesheet" href="/stylesheets/css/contactForm.css" />

  <link rel="manifest" href="/manifest.json" />
  <link rel=“apple-touch-icon” sizes="512x512" href=“/img/violetHand-bg.jpf”> <meta name="“apple-mobile-web-app-status-bar”" content="“white”" />
  <meta name="theme-color" content="white" />

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />

  <link rel="icon" href="/img/homePage/violetHand.png" type="image/png" />
  <title>Contact Form</title>
</head>

<div class="contact-form">
  <!-- <div class="closeBtnForm">
        <p>x</p>
      </div> -->
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <div class="row">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="row">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="row">
      <label for="message">Message</label>
      <textarea name="message" cols="20" rows="8" required></textarea>
    </div>
    <div class="row">
      <button type="submit" name="submit"><i class="far fa-paper-plane"></i> Send</button>
    </div>
  </form>
</div>

<a href="/index.html">
  <div class="back-button">
    <img src="/img/icon/back-hand.png" alt="" />
    <p>Back</p>
  </div>
</a>

</body>

</html>