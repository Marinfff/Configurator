<?php
$connection = mysqli_connect('');

if ($connection == false)
{
    echo 'Access denied!<br>';
    echo mysqli_connect_error();
    die();
}
	$cpu = mysqli_query($connection,"SELECT * FROM cpu");
	$cpus=[];
	while(($row = mysqli_fetch_assoc($cpu)) ) {
	  $cpus[] = $row;
	}
	header('Content-Type: application/json');
	echo json_encode($cpus);
?>
