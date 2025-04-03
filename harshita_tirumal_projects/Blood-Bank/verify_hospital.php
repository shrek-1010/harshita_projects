<?php
include 'config/db.php'; // Connect to the database

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $hospital = $_POST['hospital'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM hospitals WHERE hospital_name = ? AND username = ? AND password = ?");
    $stmt->bind_param("sss", $hospital, $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
