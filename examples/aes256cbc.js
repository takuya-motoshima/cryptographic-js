const Cipher = require('../dist/build.common.js').AES256CBC;
// const Cipher = require('cryptographic-js').AES256CBC;

// Encrypt.
const cipher = new Cipher();
const key = cipher.createKey('hex');
const iv = cipher.createIV('hex');
const plainText = 'Hello World';
const encrypted = cipher.encrypt(plainText, key, iv);

// Decrypt.
const decrypted = cipher.decrypt(encrypted, key, iv);
console.log(`AES256CBC encryption/decryption result: ${plainText} -> ${encrypted} -> ${decrypted}`);

// Decrypt the string encrypted with Node.js with PHP.
const algorithm = 'AES-256-CBC';
const spawn = require('child_process').spawn;
const child = spawn('php', [`${__dirname}/decrypt.php`, `--algorithm=${algorithm}`, `--encrypted=${encrypted}`, `--key=${key}`, `--iv=${iv}`]);
child.stdin.setEncoding('utf-8');
child.stdout.on('data', data => {
  console.log(`Decryption result in PHP: ${data.toString()}`);
});