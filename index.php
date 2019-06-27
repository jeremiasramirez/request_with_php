<?php 

$host = "your host";
$db = "your db name";
$pass = "your pass";
$user ="your user";
$conection = new mysqli($host, $user, $pass, $db);


$statement = "SELECT  * FROM yourtable";

$exec = $conection->query($statement);

while($row= mysqli_fetch_array($exec)){
	echo "<p>". $row["campo"] . "</p>";
}


?>