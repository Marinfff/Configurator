<?php
$connection = mysqli_connect('');

if ($connection == false)
{
    echo 'Access denied!<br>';
    echo mysqli_connect_error();
    die();
}
	$corpus = mysqli_query($connection,"SELECT * FROM corpus");
	$cases=[];
	while(($row = mysqli_fetch_assoc($corpus)) ) {
	  $cases[] = $row;
	}
	header('Content-Type: application/json');
	echo json_encode($cases);
?>
  
