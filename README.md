# cryptographic-js

This is an encryption/decryption module such as AES.  
The supported algorithms are as follows.  

- AES-256-CTR
- AES-192-CTR
- AES-128-CTR
- AES-256-CBC
- AES-192-CBC
- AES-128-CBC
- AES-256-CFB
- AES-192-CFB
- AES-128-CFB

## Installation

Install.

```sh
npm install cryptographic-js;
```

## API
See [API.md](./API.md) for API reference.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).

## Examples

There are some examples in "./examples/main.ts" in this package.Here is the first one to get you started.

## Usage

### Encrypt with AES-256-CTR.

```js
import { AES256CTR } from 'cryptographic-js';

// Cryptographic module.
const aes256ctr = new AES256CTR();

// Plaintext to encrypt.
const plaintext = 'Hello, World!';

// Generate keys and IV in hexadecimal character format.
// If you do not specify'hex', you can get the key and IV as Buffer type.
const key = aes256ctr.createKey('hex');
const iv = aes256ctr.createIV('hex');

// Encrypt.
const encrypted = aes256ctr.encrypt(plaintext, key, iv);

// Decrypt.
const decrypted = aes256ctr.decrypt(encrypted, key, iv);
console.log(decrypted);// Hello, World!
```

### Encrypt with AES-256-CBC.

```js
import { AES256CBC } from 'cryptographic-js';

// Cryptographic module.
const aes256cbc = new AES256CBC();

// Plaintext to encrypt.
const plaintext = 'Hello, World!';

// Generate keys and IV in hexadecimal character format.
// If you do not specify'hex', you can get the key and IV as Buffer type.
const key = aes256cbc.createKey('hex');
const iv = aes256cbc.createIV('hex');

// Encrypt.
const encrypted = aes256cbc.encrypt(plaintext, key, iv);

// Decrypt.
const decrypted = aes256cbc.decrypt(encrypted, key, iv);
console.log(decrypted);// Hello, World!
```

### Encrypt with AES-256-CBC.

```js
import { AES256CFB } from 'cryptographic-js';

// Cryptographic module.
const aes256cfb = new AES256CFB();

// Plaintext to encrypt.
const plaintext = 'Hello, World!';

// Generate keys and IV in hexadecimal character format.
// If you do not specify'hex', you can get the key and IV as Buffer type.
const key = aes256cfb.createKey('hex');
const iv = aes256cfb.createIV('hex');

// Encrypt.
const encrypted = aes256cfb.encrypt(plaintext, key, iv);

// Decrypt.
const decrypted = aes256cfb.decrypt(encrypted, key, iv);
console.log(decrypted);// Hello, World!
```

## License

[MIT licensed](./LICENSE.txt)