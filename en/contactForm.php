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