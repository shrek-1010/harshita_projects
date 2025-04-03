<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

if (isset($_POST['email']) && isset($_POST['hospital'])) {
    $email = $_POST['email'];
    $hospital = $_POST['hospital'];

    $mail = new PHPMailer(true);
    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'sreemengji3@gmail.com';
        $mail->Password = 'wjmi ibha idqa uyyh';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email content
        $mail->setFrom('sreemengji3@gmail.com', 'Blood Bank');
        $mail->addAddress($email);
        $mail->Subject = 'Blood Donation Request';
        $mail->Body = "Hello, a hospital ($hospital) is requesting your blood donation. Please contact them.";

        $mail->send();
        echo "Request Sent Successfully!";
    } catch (Exception $e) {
        echo "Failed to send request. Error: {$mail->ErrorInfo}";
    }
}
?>
