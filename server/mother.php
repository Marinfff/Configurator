<?php
$connection = mysqli_connect('');

if ($connection == false)
{
    echo 'Access denied!<br>';
    echo mysqli_connect_error();
    die();
}
	$motherboard = mysqli_query($connection,"SELECT * FROM motherboard");
	$motherboards=[];
	while(($row = mysqli_fetch_assoc($motherboard)) ) {
	  $motherboards[] = $row;
	}
	header('Content-Type: application/json');
	echo json_encode($motherboards);
?>
  
