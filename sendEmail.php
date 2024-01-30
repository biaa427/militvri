<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from the POST request
    $data = json_decode(file_get_contents("php://input"));

    // Extract data
    $firstName = $data->firstName;
    $lastName = $data->lastName;
    $email = $data->email;
    $phoneNumber = $data->phoneNumber;
    $message = $data->message;

    // Send email
    $to = "your-email@example.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Compose the message
    $emailMessage = "Name: $firstName $lastName\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Phone Number: $phoneNumber\n\n";
    $emailMessage .= "Message:\n$message";

    // Send the email
    mail($to, $subject, $emailMessage, $headers);

    // Respond to the client
    $response = array("message" => "Email sent successfully!");
    echo json_encode($response);
} else {
    // Invalid request
    http_response_code(400);
    echo "Invalid request";
}
?>