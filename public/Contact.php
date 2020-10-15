<?php
//======================================================================
// Variables
//======================================================================


//E-mail address. Enter your email
define("__TO__", "dfg_hjkl@mail.ru");

//Success message
define('__SUCCESS_MESSAGE__', "Ваше сообщение было отправлено. Мы ответим в ближайшее время. Спасибо!");

//Error message
define('__ERROR_MESSAGE__', "Ваше сообщение не было отправлено. Пожалуйста, попробуйте еще раз.");

//Messege when one or more fields are empty
define('__MESSAGE_EMPTY_FIELDS__', "Пожалуйста, заполните все поля");

//Send mail
function send_mail($to, $subject, $message, $headers){
    if(@mail($to,$subject,$message,$headers)){
        echo json_encode(array('info' => 'success', 'msg' => __SUCCESS_MESSAGE__));
    } else {
        echo json_encode(array('info' => 'error', 'msg' => __ERROR_MESSAGE__));
    }
}

//Get data form and send mail - Thank you Rafael for your contribution.
if(isset($_POST['name']) and isset($_POST['phone']) and isset($_POST['message'])){
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$subjectForm = 'Письмо с сайта eco-spb. От ';
	$messageForm = $_POST['message'];
	$mail = 'dfg_hjkl@mail.ru';

    if($name == '') {
        echo json_encode(array('info' => 'error', 'msg' => "Пожалуйста, введите Ваше имя."));
        exit();
    } else {
        $to = __TO__;
        $subject = $subjectForm . ' ' . $name. '(телефон: '.$phone.').';
        $message = 'Пользователь ' . $name . ' отправил вам сообщение:<br />' . $messageForm . '<br />
        Связяться с ним можно по телефону <a href="callto:' . $phone . '">' . $phone . '</a>'
        ;

        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $headers .= 'From: ' . $mail . "\r\n";

        send_mail($to,$subject,$message,$headers);
    }
} else {
    echo json_encode(array('info' => 'error', 'msg' => __MESSAGE_EMPTY_FIELDS__));
}
?>