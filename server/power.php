<?php
$connection = mysqli_connect('');

if ($connection == false)
{
    echo 'Access denied!<br>';
    echo mysqli_connect_error();
    die();
}
	$power = mysqli_query($connection,"SELECT * FROM power");
	$powers=[];
	while(($row = mysqli_fetch_assoc($power)) ) {
	  $powers[] = $row;
	}
	header('Content-Type: application/json');
	echo json_encode($powers);
?>
  
