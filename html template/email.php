<?php
	if($_POST) {
		$yourEmail = "kondrav@live.ca";

		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$message = $_POST['message'];
		
		$responseRefresh = "Redirecting in 5 seconds.<br>";
		$responseFillData = "Please fill all the data.<br>";
		$responseValidEmail = "Please enter valid email.<br>";
		$responseCompleted = "Form successfully submitted.<br>";
		$responseFailed = "Form failed to be submitted.<br>";
		
		$response = "" . $responseRefresh;
		
		$hasError = false;
		if($fname == "" || $lname == "" || $email == "" || $phone == "") {
			$hasError = true;
			$response = $responseFillData . $response;
		}
		
		if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i", $email)) {
			$hasError = true;
			$response = $responseValidEmail . $response;
		}
		
		if($hasError) {
			header("refresh:5;url=index.html#contact");
			echo $response;
			return false;
		}
		
		$text = "First Name: $fname \n
				Last Name: $lname \n
				E-mail: $email \n
				Phone: $phone \n
				Message: \n
				$message";

		if(mail($yourEmail, $fname . " " . $lname . " sent a message via Resume Website", $text, "From: " . $email)) {
			$response = $responseCompleted . $response;
		}
		else {
			$response = $responseFailed . $response;
		}
		
		header("refresh:5;url=index.html#contact");
		echo $response;
	}
?>