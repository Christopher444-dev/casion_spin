<?php

$serve_name = "127.0.0.1";
$username = "root";
$password = "123456";
$database = "Gamble_users";
//create connection
$conn = mysqli_connect($serve_name, $username, $password, $database);
// $connection = mysqli_connect('hostname', 'username', 'password', 'database');kk
if ($conn) {
    echo "success";
} else {
    die("Error".mysqli_connect_error());
    echo "success";
}
