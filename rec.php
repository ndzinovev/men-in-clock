<?php
        $hel_bot = $_POST["username"];
    
 
        
        if(empty($hel_bot)){     
            // собираем данные из формы
        $message .= "ПИСЬМО СОИСКАТЕЛЯ" . "<br/>";
        $message .= "Имя соискателя : " . $_POST['dow'] . "<br/>";
        $message .= "Телефон : " . $_POST['phonerw'] . "<br/>";
        $message .= "Что умеет делать " . $_POST['qwe1'] . "<br/>";  
        $message .= "Что умеет делать ХОРОШО : " . $_POST['qwe2'] . "<br/>"; 
        $message .= "Имеет ли права и машину : " . $_POST['qwe3'] . "<br/>";
        $message .= "По какому графику хочет работать : " . $_POST['qwe4'] . "<br/>"; 

        send_mail($message); // отправим письмо
        }    
        else {
            header("Location: http://prrezerv.ru/");
        };
       
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "nfrezerv@yandex.ru"; 
        // тема письма
        $subject = 'Письмо соискателя на работу '.$_SERVER['HTTP_HOST']; // тема письма с указанием адреса сайта
         
        // заголовок письма
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        
        
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }

    