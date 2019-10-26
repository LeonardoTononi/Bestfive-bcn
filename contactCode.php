<?php
if (isset($_POST['email'])) {

  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "franinbarcelona@gmail.com";
  $email_subject = "Contact form Bestfive";

  function died($error)
  {
    // your error code can go here
    echo "We are very sorry, but there were error(s) found with the form you submitted. ";
    echo "These errors appear below.<br /><br />";
    echo $error . "<br /><br />";
    echo "Please go back and fix these errors.<br /><br />";
    die();
  }


  // validation expected data exists
  if (
    !isset($_POST['email']) ||
    !isset($_POST['message'])
  ) {
    died('We are sorry, but there appears to be a problem with the form you submitted.');
  }


  $email_from = $_POST['email']; // required
  $message = $_POST['message']; // required

  $error_message = "";
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

  if (!preg_match($email_exp, $email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }

  if (strlen($message) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }

  if (strlen($error_message) > 0) {
    died($error_message);
  }

  $email_message = "Form details below.\n\n";


  function clean_string($string)
  {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
  }

  $email_message .= "Email: " . clean_string($email_from) . "\n";
  $email_message .= "Message: " . clean_string($message) . "\n";

  // create email headers
  $headers = 'From: ' . $email_from . "\r\n" .
    'Reply-To: ' . $email_from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);


  ?>

  <link rel="stylesheet" href="/stylesheets/css/contactFormConfirm.css" type="text/css">

  <body ontouchstart="">
    <header>
      <div>
        <h1>
          best<span>five</span> <br> <span class="small-text">bcn</span>
        </h1>
      </div>
    </header>

    <div class="skyline">
      <img src="/img/homePage/barcelona-city.png" alt="">
    </div>

    <div class="alert">
      <h5><img src="/img/icon/icon-done.png" alt="done icon"> Thank you <br> for contacting us.</h5>
      <p>We will be in touch with you very soon.</p>
      <a href="/" class="btn">Go to Homepage</a>
    </div>

  </body>

<?php
}
?>