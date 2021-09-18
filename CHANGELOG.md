# Changelog

All notable changes to this project will be documented in this file.

## [1.0.2] - 2021-09-18

- Fixed IV length check error message. Refactor the example code.

## [1.0.1] - 2020-12-02

- Added format parameters for encrypted data to the encryption and decryption functions.
    
    ```js
    // Encrypt.
    const cipher = new AES256CTR();
    const plainText = 'Hello, World!';
    const key = cipher.createKey('hex');
    const iv = cipher.createIV('hex');

    // Get encrypted data in base64 format.
    const encoding = 'base64';
    const encrypted = cipher.encrypt(plainText, key, iv, encoding);

    // Decrypt.
    const decrypted = cipher.decrypt(encrypted, key, iv, encoding);
    ````

## [1.0.0] - 2020-12-01

- First release.

[1.0.1]: https://github.com/takuya-motoshima/cryptographic-js/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/takuya-motoshima/cryptographic-js/compare/v1.0.1...v1.0.2