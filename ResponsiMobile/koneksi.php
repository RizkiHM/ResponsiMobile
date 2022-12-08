<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-ALlow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, HEAD, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

$koneksi = mysqli_connect('localhost','root','','responsicrud') or die ('koneksi gagal');
?>