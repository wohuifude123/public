<?php

$aa;

function a1()
{
	global $aa;
	$aa = 1;
}


a1();
//echo "aa==".$aa;

function c1()
{
	global $aa;
	echo "aa==".$aa;
}

c1();
?>