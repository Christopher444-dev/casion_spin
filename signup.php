<?php

$showAlert = false;
$showError = false;
$exists = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //Include file which makes the
    //Database Connection
    include 'dbConnect.php';
    $username = $_POST["username"];
    $password = $_POST["password"];
    $cpassword = $_POST["cpassword"];
    $sql = "select * from users where email = email";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);
    // This sql query is  use to check if
    // the username is already present
    // or not in our Database

    if ($num == 0) {
        if (($password == $cpassword) && $exists == false) {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $sql  = "INSERT INTO `users`  (`username` ,`ZZZZZ` )   ";

        }
    }


}
