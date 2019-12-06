<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<a href="link.html">Texto</a>
	<ul>
		<li>Lista1</li>
		<li>Lista2</li>
	</ul>
	<img src="nombre.jpg" alt="nombre">
<table>
  <tr>
    <th>Hoy</th>
    <th>Mañana</th>
  </tr>
  <tr>
    <td>Soleado</td>
    <td>Mayormente soleado</td>
  </tr>
  <tr>
    <td>19°C</td>
    <td>17°C</td>
  </tr>
  </tr>
</table>
<frameset>
  <frame src="frame_a.htm">
</frameset>
<form action="url.php" method="nombreMetodo">
	<input type="text" name="nombre">
	<input type="input" name="value" value="Guardar">
</form>

<?php 
	for ($i=1; $i <10 ; $i++) { 
		if($i == 5){
			echo "haz llegado al contador 5 EN EL FOR";
		}
	}
	$i=0;
	do{
		$i++;
		if($i == 5){
			echo "haz llegado al contador 5 EN EL FOR";
		}
	}while ( <= 10)

	$x=10;
	$y=20;

	echo $x + $y;
?>
</body>
</html>