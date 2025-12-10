<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Адрес, на который нужно отправить письмо
    $to = "your-email@example.com";

    // Тема письма
    $subject = "Новое сообщение от $name";

    // Сообщение
    $email_message = "Имя: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Сообщение:\n$message";

    // Отправка письма
    // mail($to, $subject, $email_message);

    // Опционально: перенаправление на страницу "Спасибо"
    // header("Location: thank_you.html");
}
?>