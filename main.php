<?php
$errors="";
$mail=$_REQUEST['mail'];
$fname=$_REQUEST['fname'];
$lname=$_REQUEST['lName'];
$mobile=$_REQUEST['mobile'];
if(empty($fname) ||

empty($lname) ||

empty($mobile)||

empty($mail))

{

echo "please fill All the Fields";

}

else
{
   
    $message="Name:$fname $lname."."Mobile:$mobile."."email:$mail";
    mail("neeraj19099@gmail.com","EdgeCube Message",$message,"From:$mail");
   echo  "<script type='text/javascript'>window.history.go(-1);</script>";
}

?>