<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $msg = $_POST['msg'];


    $mailTo = "gellertpuskas@icloud.com";
    $headers = "From:".$mailFrom;
    $txt = "You have recieved an e-mail from ".$name.".\n\n".$msg;


    mail($mailTo, $subject, $txt, $headers);
}
?>