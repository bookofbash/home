<?php
	$name = $_post['user_name'];
	$email = $_post['user_email'];
	$message = $_post['user_message'];
	$from ='from: demo';
	$to ='harrell.bashir@yahoo.com';
	$subject ='Hello from github.io'

	$body = "From $name\n Email: $email\n Message:\n $message";

	if ($_post["submit"]){
		/*Anything here is performed only if the form is submitted*/
		if (mail ($to, $subject, $body, $from)){
			echo '<p>Your message has been sent!</p>';
		} else {
			echo'<p> Something went wrong, go back and try again!!</p>'
		}		
	}

?>