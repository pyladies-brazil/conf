<?php

if($_POST){

    $fileName = 'newsletter.txt'; //set 777 permision for this file. 
    $error = false;
    
    $email = $_POST['email'];
    
    if (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)) 
        $error = true;
    
    
    //If all ok, save emali adress in file
    if($error == false){
        $file = fopen($fileName, a);
        fwrite($file, "$email,");
        fclose($file);
        echo 'OK';
    }
}