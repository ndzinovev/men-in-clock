<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message .= "ВЫЗОВ МАСТЕРА" . "<br/>";
        $message .= "Имя пользователя: " . $_POST['vizitname'] . "<br/>";
        $message .= "Номер телефона: " . $_POST['number-phone'] . "<br/>";
        $message .= "Вид работ: " . $_POST['drop-work'] . "<br/>";  
        $message .= "Что нужно сделать: " . $_POST['userwork'] . "<br/>"; 
        $message .= "Метраж работ: " . $_POST['meters'] . "<br/>";
        $message .= "Ближайшее метро: " . $_POST['metro'] . "<br/>"; 
       

        send_mail($message); // отправим письмо
        // выведем сообщение об успехе
       // $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
    //}else{
        // если были ошибки, то выводим их
        //$msg_box = "";
       // foreach($errors as $one_error){
       //     $msg_box .= "<span style='color: red;'>$one_error</span><br/>";
       // }
    }
 
    // делаем ответ на клиентскую часть в формате JSON

    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "nfrezerv@yandex.ru , simpexp@ya.ru"; 
        // тема письма
        $subject = 'Вызов мастера (заказе услуги) с сайта '.$_SERVER['HTTP_HOST']; // тема письма с указанием адреса сайта
         
        // заголовок письма
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        
        
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }

    