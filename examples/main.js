const {AES256CTR, AES192CTR, AES128CTR, AES256CBC, AES192CBC, AES128CBC, AES256CFB, AES192CFB, AES128CFB} = require('cryptographic-js');
const {File, Media} = require('nodejs-shared');

const aes256ctr = new AES256CTR(),
      aes192ctr = new AES192CTR(),
      aes128ctr = new AES128CTR(),
      aes256cbc = new AES256CBC(),
      aes192cbc = new AES192CBC(),
      aes128cbc = new AES128CBC(),
      aes256cfb = new AES256CFB(),
      aes192cfb = new AES192CFB(),
      aes128cfb = new AES128CFB();
      // // Encryption with various algorithms.
// for (let cipher of [aes256ctr, aes192ctr, aes128ctr, aes256cbc, aes192cbc, aes128cbc, aes256cfb, aes192cfb, aes128cfb]) {
//   const key = cipher.createKey('hex');
//   const iv = cipher.createIV('hex');
//   const enc = cipher.encrypt('Hello, World!', key, iv);
//   const dec = cipher.decrypt(enc, key, iv);
//   console.log(`${enc} -> ${dec}`);
// }

// Encrypt image.
const key = aes256ctr.createKey('hex');
const iv = aes256ctr.createIV('hex');
console.log(`key: ${key}`);
console.log(`iv: ${iv}`);

// Encrypt image.
// let enc = aes256ctr.encrypt(File.readAsBase64('img.jpg'), key, iv);
// let dec = aes256ctr.decrypt(enc, key, iv);
// Media.writeBase64Image('output/dec.jpg', dec);
// File.write('output/enc.jpg', enc);
// File.write('output/key.txt', key);
// File.write('output/iv.txt', iv);

// Encrypt string.
enc = aes256ctr.encrypt('Hello, World!', key, iv);
dec = aes256ctr.decrypt(enc, key, iv);
console.log(`enc: ${enc}`);
console.log(`dec: ${dec}`);

File.write('output/enc.txt', enc);
console.log('Output dec.jpg, enc.jpg, enc.txt, key.txt, iv.txt to output');