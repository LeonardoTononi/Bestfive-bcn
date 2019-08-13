<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $emailFrom = $_POST['email'];
  $message = $_POST['text'];

  $mailTo = "info@bestfivebcn.com";
  $headers = "E-mail from: " . $emailFrom;
  $txt = "Name: " . $name . ".\n\n" .
    $message;

  mail($mailTo, $headers, $txt);
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

<!-- <header>
      <h5>
       <img src=" https://img.icons8.com/color/48/000000/paper-plane.png" alt="contact icon">Contact Form
      </h5>
    </header> -->

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
      <label for="email" required>Email</label>
      <input type="email" id="email" name="email" />
    </div>
    <div class="row">
      <label for="textarea">Text</label>
      <textarea name="textarea" id="textarea" cols="20" rows="8" required></textarea>
    </div>
    <div class="row">
      <button type="submit"><i class="far fa-paper-plane"></i> Send</button>
    </div>
  </form>
</div>

<div class="back-button">
  <a href="/index.html">
    <img src="/img/icon/back-hand.png" alt="" />
    <p>Back</p>
  </a>
</div>
</body>

</html>