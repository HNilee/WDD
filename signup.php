<?php 
include_once("config_db.php");

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $result = mysqli_query($mysqli, "INSERT INTO userinfo (username, firstname, lastname, email, password) VALUES ('$username', '$firstname', '$lastname', '$email', '$password')");

    if ($result) {
        header("Location: index.html");
        exit();
    } else {
        echo "Terjadi kesalahan: " . mysqli_error($mysqli);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign Up</title>
    <link rel="stylesheet" href="assets/css/signup.css">
</head>
<body>
    <div class="signup-container">
        <h2>Create Your Account</h2>
        <form action="signup.php" method="post">
            <input class="input" type="text" name="username" placeholder="Username" required>
            <input class="input" type="text" name="firstname" placeholder="First Name" required>
            <input class="input" type="text" name="lastname" placeholder="Last Name" required>
            <input class="input" type="email" name="email" placeholder="Email" required>
            <input class="input" type="password" name="password" placeholder="Password" required>
            <input class="submit-btn" type="submit" name="submit" value="Sign Up">
        </form>
    </div>
</body>
</html>
