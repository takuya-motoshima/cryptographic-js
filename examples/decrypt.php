<?php
/**
 * Decrypt the string given as an argument.
 * 
 * Here is a command execution example:
 * $ php -e decrypt.php --algorithm=AES-256-CTR --encrypted=aB6kH7DQbLYkU8k= --key=0fa36d2c5824f11a627e5c08b6a38be8 --iv=a539ad590aff2b27
 * Hello World
 */
ini_set('display_errors', 1);
ini_set('error_reporting', E_ALL);
// ini_set('log_errors', 'on');
// ini_set('error_log', 'php.log');

try {
  // Get command arguments.
  $options = (object) getopt(null, ['algorithm::', 'encrypted::', 'key::', 'iv::']);

  // Check arguments.
  if (empty($options->algorithm))
    throw new \RuntimeException('The argument "algorithm" is required. e.g.: --algorithm="AES-256-CTR"');
  else if (empty($options->encrypted))
    throw new \RuntimeException('The argument "encrypted" is required. e.g.: --encrypted="AES-256-CTR"');
  else if (empty($options->key))
    throw new \RuntimeException('The argument "key" is required. e.g.: --key="AES-256-CTR"');
  else if (empty($options->iv))
    throw new \RuntimeException('The argument "iv" is required. e.g.: --iv="AES-256-CTR"');

  // Decrypt.
  $decrypted = openssl_decrypt($options->encrypted, $options->algorithm, $options->key, 0, $options->iv);
  echo $decrypted;  
} catch(\Throwable $e) {
  echo 'ERROR - ' . $e->getMessage();
}