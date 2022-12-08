<?php
require 'koneksi.php'
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];

$id = trim($data['id']);
$namafakultas = trim($data['namafakultas']);
$keterangan = trim($data['keterangan']);

if($namafakultas != "and $keterangan !="){
	$query = mysqli_query($koneksi, "update fakultas set namafakultas='$namafakultas',keterangan='$keterangan' where id='$id'");
	$pesan['status'] = 'berhasil';
} else {
	$pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);
?>