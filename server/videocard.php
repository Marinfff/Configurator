<?php
$connection = mysqli_connect('');

if ($connection == false)
{
    echo 'Access denied!<br>';
    echo mysqli_connect_error();
    die();
}
	$video = mysqli_query($connection,"SELECT * FROM video");
	$videos=[];
	while(($row = mysqli_fetch_assoc($video)) ) {
	  $videos[] = $row;
	}
	header('Content-Type: application/json');
	echo json_encode($videos);
?>
  
