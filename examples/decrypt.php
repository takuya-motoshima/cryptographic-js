<?php
// Read key, IV and encrypted image.
$key = file_get_contents('encryped/key');
$iv = file_get_contents('encryped/iv');
$encrypted = file_get_contents('encryped/encrypted');
echo "Key: $key" . PHP_EOL;
echo "IV: $iv" . PHP_EOL;
echo 'Encrypted: ' . substr($encrypted, 0, 30) . PHP_EOL;

// Decrypt image.
$decrypted = openssl_decrypt($encrypted, 'AES-256-CTR', $key, 0, $iv);
echo 'Decrypted: ' . substr($decrypted, 0, 30) . PHP_EOL;

// Output decrypted image.
$decrypted = base64_decode(substr($decrypted, strpos($decrypted, ',') + 1));
file_put_contents('encryped/img.jpg', $decrypted);