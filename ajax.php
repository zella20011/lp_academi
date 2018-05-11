<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    //$to      = 'nisehege@p33.org';
    $to      = 'bis-idea2015@yandex.ru';
    $subject = 'Academi';
    $message = 'Имя : '.$name."\r\n".'Телефон : '.$phone."\r\n".'Email : '.$email."\r\n".'Сообщение : '.$message."\r\n";
    $headers = 'From: '.$email.'' . "\r\n" .
        'Reply-To: '.$email.'' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    
    echo json_encode(array('success'=>true));

?>