<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message .= "Отправленный квиз. Положена скидка 5%" . "<br/>";
        $message .= "Hам нужен ремонт: " . $_POST['radio1'] . "<br/>";
        $message .= "Hеобходимо отремонтировать: " . $_POST['radio2'] . "<br/>";
        $message .= "Удобно осуществить ремонтные работы: " . $_POST['radio3'] . "<br/>";  
        $message .= "Hаше месторасположение: " . $_POST['radio4'] . "<br/>"; 
        $message .= "Ближайшее метро: " . $_POST['metro'] . "<br/>";
        $message .= "Имя клиента: " . $_POST['username'] . "<br/>"; 
        $message .= "Телефон: " . $_POST['userphone'] . "<br/>";
        $message .= "E-mail: " . $_POST['usermail'] . "<br/>";
       

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
        $subject = 'Пройденный квиз '.$_SERVER['HTTP_HOST']; // тема письма с указанием адреса сайта
         
        // заголовок письма
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        
        
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }

    