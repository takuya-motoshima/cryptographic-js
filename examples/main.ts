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

/**
 * Print the result.
 */
function print(algorithms, decrypted, encrypted, key, iv) {
  if (Buffer.isBuffer(key)) key = key.toString('hex');
  if (Buffer.isBuffer(iv)) iv = iv.toString('hex');
  console.log(`${algorithms}\n\tKey: ${key}\n\tIV: ${iv}\n\tEncrypted: ${encrypted}\n\tDecrypted: ${decrypted}`);
}

let key, iv, encrypted, decrypted, plaintext = 'Hello, World!';

// AES-256-CTR. The key and IV are samples that use the Buffer type.
const aes256ctr = new AES256CTR();
key = aes256ctr.createKey();
iv = aes256ctr.createIV();
encrypted = aes256ctr.encrypt(plaintext, key, iv);
decrypted = aes256ctr.decrypt(encrypted, key, iv);
print('AES-256-CTR', decrypted, encrypted, key, iv);

// AES-256-CTR. The key and IV are samples that use the Hex string type.
key = aes256ctr.createKey('hex');
iv = aes256ctr.createIV('hex');
encrypted = aes256ctr.encrypt(plaintext, key, iv);
decrypted = aes256ctr.decrypt(encrypted, key, iv);
print('AES-256-CTR', decrypted, encrypted, key, iv);

// AES-192-CTR. The key and IV are samples that use the Buffer type.
const aes192ctr = new AES192CTR();
key = aes192ctr.createKey();
iv = aes192ctr.createIV();
encrypted = aes192ctr.encrypt(plaintext, key, iv);
decrypted = aes192ctr.decrypt(encrypted, key, iv);
print('AES-192-CTR', decrypted, encrypted, key, iv);

// AES-192-CTR. The key and IV are samples that use the Hex string type.
key = aes192ctr.createKey('hex');
iv = aes192ctr.createIV('hex');
encrypted = aes192ctr.encrypt(plaintext, key, iv);
decrypted = aes192ctr.decrypt(encrypted, key, iv);
print('AES-192-CTR', decrypted, encrypted, key, iv);

// AES-128-CTR. The key and IV are samples that use the Buffer type.
const aes128ctr = new AES128CTR();
key = aes128ctr.createKey();
iv = aes128ctr.createIV();
encrypted = aes128ctr.encrypt(plaintext, key, iv);
decrypted = aes128ctr.decrypt(encrypted, key, iv);
print('AES-128-CTR', decrypted, encrypted, key, iv);

// AES-128-CTR. The key and IV are samples that use the Hex string type.
key = aes128ctr.createKey('hex');
iv = aes128ctr.createIV('hex');
encrypted = aes128ctr.encrypt(plaintext, key, iv);
decrypted = aes128ctr.decrypt(encrypted, key, iv);
print('AES-128-CTR', decrypted, encrypted, key, iv);

// AES-256-CBC. The key and IV are samples that use the Buffer type.
const aes256cbc = new AES256CBC();
key = aes256cbc.createKey();
iv = aes256cbc.createIV();
encrypted = aes256cbc.encrypt(plaintext, key, iv);
decrypted = aes256cbc.decrypt(encrypted, key, iv);
print('AES-256-CBC', decrypted, encrypted, key, iv);

// AES-256-CBC. The key and IV are samples that use the Hex string type.
key = aes256cbc.createKey('hex');
iv = aes256cbc.createIV('hex');
encrypted = aes256cbc.encrypt(plaintext, key, iv);
decrypted = aes256cbc.decrypt(encrypted, key, iv);
print('AES-256-CBC', decrypted, encrypted, key, iv);

// AES-192-CBC. The key and IV are samples that use the Buffer type.
const aes192cbc = new AES192CBC();
key = aes192cbc.createKey();
iv = aes192cbc.createIV();
encrypted = aes192cbc.encrypt(plaintext, key, iv);
decrypted = aes192cbc.decrypt(encrypted, key, iv);
print('AES-192-CBC', decrypted, encrypted, key, iv);

// AES-192-CBC. The key and IV are samples that use the Hex string type.
key = aes192cbc.createKey('hex');
iv = aes192cbc.createIV('hex');
encrypted = aes192cbc.encrypt(plaintext, key, iv);
decrypted = aes192cbc.decrypt(encrypted, key, iv);
print('AES-192-CBC', decrypted, encrypted, key, iv);

// AES-128-CBC. The key and IV are samples that use the Buffer type.
const aes128cbc = new AES128CBC();
key = aes128cbc.createKey();
iv = aes128cbc.createIV();
encrypted = aes128cbc.encrypt(plaintext, key, iv);
decrypted = aes128cbc.decrypt(encrypted, key, iv);
print('AES-128-CBC', decrypted, encrypted, key, iv);

// AES-128-CBC. The key and IV are samples that use the Hex string type.
key = aes128cbc.createKey('hex');
iv = aes128cbc.createIV('hex');
encrypted = aes128cbc.encrypt(plaintext, key, iv);
decrypted = aes128cbc.decrypt(encrypted, key, iv);
print('AES-128-CBC', decrypted, encrypted, key, iv);


// AES-256-CFB. The key and IV are samples that use the Buffer type.
const aes256cfb = new AES256CFB();
key = aes256cfb.createKey();
iv = aes256cfb.createIV();
encrypted = aes256cfb.encrypt(plaintext, key, iv);
decrypted = aes256cfb.decrypt(encrypted, key, iv);
print('AES-256-CFB', decrypted, encrypted, key, iv);

// AES-256-CFB. The key and IV are samples that use the Hex string type.
key = aes256cfb.createKey('hex');
iv = aes256cfb.createIV('hex');
encrypted = aes256cfb.encrypt(plaintext, key, iv);
decrypted = aes256cfb.decrypt(encrypted, key, iv);
print('AES-256-CFB', decrypted, encrypted, key, iv);

// AES-192-CFB. The key and IV are samples that use the Buffer type.
const aes192cfb = new AES192CFB();
key = aes192cfb.createKey();
iv = aes192cfb.createIV();
encrypted = aes192cfb.encrypt(plaintext, key, iv);
decrypted = aes192cfb.decrypt(encrypted, key, iv);
print('AES-192-CFB', decrypted, encrypted, key, iv);

// AES-192-CFB. The key and IV are samples that use the Hex string type.
key = aes192cfb.createKey('hex');
iv = aes192cfb.createIV('hex');
encrypted = aes192cfb.encrypt(plaintext, key, iv);
decrypted = aes192cfb.decrypt(encrypted, key, iv);
print('AES-192-CFB', decrypted, encrypted, key, iv);

// AES-128-CFB. The key and IV are samples that use the Buffer type.
const aes128cfb = new AES128CFB();
key = aes128cfb.createKey();
iv = aes128cfb.createIV();
encrypted = aes128cfb.encrypt(plaintext, key, iv);
decrypted = aes128cfb.decrypt(encrypted, key, iv);
print('AES-128-CFB', decrypted, encrypted, key, iv);

// AES-128-CFB. The key and IV are samples that use the Hex string type.
key = aes128cfb.createKey('hex');
iv = aes128cfb.createIV('hex');
encrypted = aes128cfb.encrypt(plaintext, key, iv);
decrypted = aes128cfb.decrypt(encrypted, key, iv);
print('AES-128-CFB', decrypted, encrypted, key, iv);
