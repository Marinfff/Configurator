<?php
$connection = mysqli_connect('');

if ($connection == false)
{
    echo 'Access denied!<br>';
    echo mysqli_connect_error();
    die();
}
	$ram = mysqli_query($connection,"SELECT * FROM ram");
	$rams=[];
	while(($row = mysqli_fetch_assoc($ram)) ) {
	  $rams[] = $row;
	}
	header('Content-Type: application/json');
	echo json_encode($rams);
?>