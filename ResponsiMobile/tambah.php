<?php
require 'koneksi.php'
$input = file_get_contents('php://input');
$data = json_decode($input, true);
print_r($data);
$pesan = [];
$namafakultas = trim($data['namafakultas']);
$keterangan = trim($data['keterangan']);

if($namafakultas != "and $keterangan !="){
	$query = mysqli_query($koneksi, "insert into fakultas(namafakultas,keterangan) values('$namafakultas','$keterangan')");
	$pesan['status'] = 'berhasil';
}else{
	$pesan['status'] = 'gagal';
}


echo json_encode($pesan);
echo mysqli_error($koneksi);
?>