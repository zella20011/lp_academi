<?php
    $name = $_POST['name'];
    $date = $_POST['date'];
    $nation = $_POST['nation'];
    $educat = $_POST['educat'];
    $email = $_POST['email'];

    //$to      = 'nisehege@p33.org';
    $to      = 'bis-idea2015@yandex.ru';
    $subject = 'Academi';
    $message = 'Имя : '.$name."\r\n".'Дата рождения : '.$date."\r\n".'Гражданство : '.$nation."\r\n".'Образование : '.$educat."\r\n".'email : '.$email."\r\n";
    $headers = 'From: '.$email.'' . "\r\n" .
        'Reply-To: '.$email.'' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    
    echo json_encode(array('success'=>true));

?>