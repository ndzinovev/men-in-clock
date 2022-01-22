<?php
    
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $hel_bot = $_POST["username"];
    
 
    
    if(empty($hel_bot)){     
        // собираем данные из формы
        
        $message .= "Имя клиента: " . $_POST['dow'] . "<br/>"; 
        $message .= "Телефон: " . $_POST['userphone'] . "<br/>";
        $message .= "E-mail: " . $_POST['usermail'] . "<br/>";
        $message .= "Текст вопроса : " . $_POST['question'] . "<br/>";

                  
        send_mail($message); // отправим письмо
        
    }
    else {
        header("Location: http://prrezerv.ru/");
    };
      
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "nfrezerv@yandex.ru , simpexp@ya.ru"; 
        // тема письма
        $subject = 'Вопрос бригадиру '.$_SERVER['HTTP_HOST']; // тема письма с указанием адреса сайта
         
        // заголовок письма
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        
        
         
        // отправляем письмо 
       mail($mail_to, $subject, $message, $headers);
            
    }
    

    