<?php
$connection = mysqli_connect('');

if ($connection == false)
{
    echo 'Access denied!<br>';
    echo mysqli_connect_error();
    die();
}
	$hdd = mysqli_query($connection,"SELECT * FROM hdd");
	$hdds=[];
	while(($row = mysqli_fetch_assoc($hdd)) ) {
	  $hdds[] = $row;
	}
	header('Content-Type: application/json');
	echo json_encode($hdds);
?>
  
