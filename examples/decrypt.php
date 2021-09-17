<?php
// Decrypt characters encrypted by Node.js with PHP
$key = file_get_contents('output/key.txt');
$iv = file_get_contents('output/iv.txt');

// $enc = file_get_contents('output/enc.jpg');
// $dec = openssl_decrypt($enc, 'AES-256-CTR', $key, 0, $iv);
// $dec = base64_decode(substr($dec, strpos($dec, ',') + 1));
// file_put_contents('output/img.jpg', $dec);
// echo 'Output decoded image to output/img.jpg\n';

// $enc = file_get_contents('output/enc.txt');
// $dec = openssl_decrypt($enc, 'AES-256-CTR', $key, 0, $iv);
// echo "Text decoding result: {$dec}\n";
// file_put_contents('output/dec.txt', $dec);

$key = 'k8/tHJ8EYPVv3zy1FmikcLAFezDPOOlO';
$iv = hex2bin('6412d15fb54aa1fa');
$enc = '8245b9df8196613789f66f447e';
$dec = openssl_decrypt($enc, 'AES-256-CTR', $key, 0, $iv);
echo "dec: {$dec}";