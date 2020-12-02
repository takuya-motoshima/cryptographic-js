import {
  AES256CTR,
  AES192CTR,
  AES128CTR,
  AES256CBC,
  AES192CBC,
  AES128CBC,
  AES256CFB,
  AES192CFB,
  AES128CFB
} from 'cryptographic-js';
import { File, Media } from 'nodejs-shared';

/**
 * Encrypt string.
 */
function encryptString(algorithm) {
  // Cryptography module tailored to the algorithm.
  let cipher;
  if (algorithm === 'aes-256-ctr') cipher = new AES256CTR();
  else if (algorithm === 'aes-192-ctr') cipher = new AES192CTR();
  else if (algorithm === 'aes-128-ctr') cipher = new AES128CTR();
  else if (algorithm === 'aes-256-cbc') cipher = new AES256CBC();
  else if (algorithm === 'aes-192-cbc') cipher = new AES192CBC();
  else if (algorithm === 'aes-128-cbc') cipher = new AES128CBC();
  else if (algorithm === 'aes-256-cfb') cipher = new AES256CFB();
  else if (algorithm === 'aes-192-cfb') cipher = new AES192CFB();
  else if (algorithm === 'aes-128-cfb') cipher = new AES128CFB();

  // Encrypt.
  const plaintext = 'Hello, World!';
  const key = cipher.createKey('hex');
  const iv = cipher.createIV('hex');
  const encrypted = cipher.encrypt(plaintext, key, iv);

  // Decrypt.
  const decrypted = cipher.decrypt(encrypted, key, iv);
  console.log(`${algorithm}\n\tKey: ${key}\n\tIV: ${iv}\n\tEncrypted: ${encrypted}\n\tDecrypted: ${decrypted}`);
}

/**
 * Encrypt image.
 */
function encryptImage() {
  // Load the sample image to be encrypted with base64.
  const base64Img = File.readAsBase64('sample.jpg');

  // Create an encryption key and IV.
  const aes256ctr = new AES256CTR();
  const key = aes256ctr.createKey('hex');
  const iv = aes256ctr.createIV('hex');

  // Encrypt image.
  const encrypted = aes256ctr.encrypt(base64Img, key, iv);
  console.log(`Encrypted image: ${encrypted.slice(0,30)}`);

  // Decrypt image.
  const decrypted = aes256ctr.decrypt(encrypted, key, iv);
  console.log(`Decrypted image: ${decrypted.slice(0,30)}`);

  // Output encrypted data, decrypted image, key, IV for debugging.
  Media.writeBase64Image('encryped/decrypted.jpg', decrypted);
  File.write('encryped/key', key);
  File.write('encryped/iv', iv);
}

// AES-256-CTR.
encryptString('aes-256-ctr');

// AES-192-CTR.
encryptString('aes-192-ctr');

// AES-128-CTR.
encryptString('aes-128-ctr');

// AES-256-CBC.
encryptString('aes-256-cbc');

// AES-192-CBC.
encryptString('aes-192-cbc');

// AES-128-CBC.
encryptString('aes-128-cbc');

// AES-256-CFB.
encryptString('aes-256-cfb');

// AES-192-CFB.
encryptString('aes-192-cfb');

// AES-128-CFB.
encryptString('aes-128-cfb');

// Encrypt image.
encryptImage();