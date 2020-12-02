# Changelog

## [1.0.1] - 2020-12-02

- Added format parameters for encrypted data to the encryption and decryption functions.
    
    ```js
    // Encrypt.
    const cipher = new AES256CTR();
    const plaintext = 'Hello, World!';
    const key = cipher.createKey('hex');
    const iv = cipher.createIV('hex');

    // Get encrypted data in base64 format.
    const encoding = 'base64';
    const encrypted = cipher.encrypt(plaintext, key, iv, encoding);

    // Decrypt.
    const decrypted = cipher.decrypt(encrypted, key, iv, encoding);
    ````

## [1.0.0] - 2020-12-01

- First release.