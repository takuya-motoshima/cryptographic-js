# cryptographic-js

This is an encryption/decryption module such as AES. The supported algorithms are as follows.  

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

Examples can be found in examples/.

```sh
$ node examples/aes128cbc.js;
AES128CBC encryption/decryption result: Hello World -> pS6x15zVXCV+jrHD5mi9wA== -> Hello World
Decryption result in PHP: Hello World

$ node examples/aes128cfb.js;
AES128CFB encryption/decryption result: Hello World -> WPyaGRIrKsO0eVs= -> Hello World
Decryption result in PHP: Hello World

$ node examples/aes128ctr.js;
AES128CTR encryption/decryption result: Hello World -> 2vnVo1vaoJiRGtg= -> Hello World
Decryption result in PHP: Hello World

$ node examples/aes192cbc.js;
AES192CBC encryption/decryption result: Hello World -> Ec2sl0BJljNS0RyaZXNVQw== -> Hello World
Decryption result in PHP: Hello World

$ node examples/aes192cfb.js;
AES192CFB encryption/decryption result: Hello World -> 1qG9zOP1INKnLck= -> Hello World
Decryption result in PHP: Hello World

$ node examples/aes192ctr.js;
AES192CTR encryption/decryption result: Hello World -> UFe22J8bEBf7VIs= -> Hello World
Decryption result in PHP: Hello World

$ node examples/aes256cbc.js;
AES256CBC encryption/decryption result: Hello World -> WWPBNfwZS8VMNPFABFXh9A== -> Hello World
Decryption result in PHP: Hello World

$ node examples/aes256cfb.js;
AES256CFB encryption/decryption result: Hello World -> V8nc4jzE8IZA/Vs= -> Hello World
Decryption result in PHP: Hello World

$ node examples/aes256ctr.js;
AES256CTR encryption/decryption result: Hello World -> O+CPx7gnn1paN1I= -> Hello World
Decryption result in PHP: Hello World
```

## Usage

### AES-256-CTR

```js
import {AES256CTR} from 'cryptographic-js';
const cipher = new AES256CTR();

const plainText = 'Hello World';
const key = cipher.createKey('hex');
const iv = cipher.createIV('hex');
const encrypted = cipher.encrypt(plainText, key, iv);
const decrypted = cipher.decrypt(encrypted, key, iv);
console.log(decrypted);// Hello World
```

### AES-256-CBC

```js
import {AES256CBC} from 'cryptographic-js';

const cipher = new AES256CBC();
const plainText = 'Hello World';
const key = cipher.createKey('hex');
const iv = cipher.createIV('hex');
const encrypted = cipher.encrypt(plainText, key, iv);
const decrypted = cipher.decrypt(encrypted, key, iv);
console.log(decrypted);// Hello World
```

### AES-256-CBC

```js
import {AES256CFB} from 'cryptographic-js';

const cipher = new AES256CFB();
const plainText = 'Hello World';
const key = cipher.createKey('hex');
const iv = cipher.createIV('hex');
const encrypted = cipher.encrypt(plainText, key, iv);
const decrypted = cipher.decrypt(encrypted, key, iv);
console.log(decrypted);// Hello World
```

## License

[MIT licensed](./LICENSE.txt)