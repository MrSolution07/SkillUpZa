<?php


require("connect.php");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    try {
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
       
        // Validate the user
        $sql = "SELECT * FROM credentials WHERE Username = '$username' AND Password = '$password'";
        $result = $conn->query($sql);
       
        if ($result->num_rows > 0) {
            echo json_encode(array("success" => true));
           
        } else {
            echo json_encode(array("success" => false, "message" => "Incorrect username or password"));
        }
    } catch (Exception $e) {
        echo json_encode(array("success" => false, "message" => "Error: " . $e->getMessage()));
    }
}

$conn->close();
?>