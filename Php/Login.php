<?php
require("connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   

    try {
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        // echo "here";

        $stmt = $conn->prepare("SELECT `Password` FROM credentials WHERE `Username` = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        // echo "here";

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $hashed_pwd = $row['Password'];
            if (password_verify($password, $hashed_pwd)) {
                $response = array("success" => true, "message" => "Login successful");
            } else {
                $response = array("success" => false, "message" => "Incorrect password");
            }
        } else {
            $response = array("success" => false, "message" => "User does not exist");
        }

        $stmt->close();
    } catch (Exception $ex) {
        $response = array("success" => false, "message" => "Error: " . $ex->getMessage());
    }
} else {
    $response = array("success" => false, "message" => "Error: Invalid request method");
}

$conn->close();

echo json_encode($response);
?>