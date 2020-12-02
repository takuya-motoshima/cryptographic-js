# AES256CTR class.

AES-256-CTR algorithm encryption and decryption.

## Methods

### encrypt()

Encrypt with AES-256-CTR.

###### Syntax
```js
AES256CTR.encrypt(
    plaintext: string,
    key: string|Buffer,
    iv: string|Buffer,
    outputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string 
```

###### Parameters
- __plaintext__: string  
    Plaintext to encrypt.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __outputEncoding__: 'hex'|'binary'|'base64'  
    The format of the encrypted data to be output. The default is base64.

###### Returns
Returns an encrypted string.

### decrypt()

Decrypts the character string encrypted with AES-256-CTR.

###### Syntax
```js
AES256CTR.decrypt(
    encrypted: string,
    key: string|Buffer,
    iv: string|Buffer,
    inputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string 
```

###### Parameters
- __encrypted__: string  
    Encrypted string.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __inputEncoding__: 'hex'|'binary'|'base64'  
    The format of the input decrypted data. The default is base64.

###### Returns
Returns an decrypted string.

### createKey()

Generates and returns an encryption key for AES-256-CTR.

###### Syntax
```js
AES256CTR.createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns the encryption key.

### createIV()

Generates and returns IV for AES-256-CTR.

###### Syntax
```js
AES256CTR.createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns an initialization vector for encryption.

# AES192CTR class.

AES-192-CTR algorithm encryption and decryption.

## Methods

### encrypt()

Encrypt with AES-192-CTR.

###### Syntax
```js
AES192CTR.encrypt(
    plaintext: string,
    key: string|Buffer,
    iv: string|Buffer,
    outputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __plaintext__: string  
    Plaintext to encrypt.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __outputEncoding__: 'hex'|'binary'|'base64'  
    The format of the encrypted data to be output. The default is base64.

###### Returns
Returns an encrypted string.

### decrypt()

Decrypts the character string encrypted with AES-192-CTR.

###### Syntax
```js
AES192CTR.decrypt(
    encrypted: string,
    key: string|Buffer,
    iv: string|Buffer,
    inputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __encrypted__: string  
    Encrypted string.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __inputEncoding__: 'hex'|'binary'|'base64'  
    The format of the input decrypted data. The default is base64.

###### Returns
Returns an decrypted string.

### createKey()

Generates and returns an encryption key for AES-192-CTR.

###### Syntax
```js
AES192CTR.createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns the encryption key.

### createIV()

Generates and returns IV for AES-192-CTR.

###### Syntax
```js
AES192CTR.createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns an initialization vector for encryption.

# AES128CTR class.

AES-128-CTR algorithm encryption and decryption.

## Methods

### encrypt()

Encrypt with AES-128-CTR.

###### Syntax
```js
AES128CTR.encrypt(
    plaintext: string,
    key: string|Buffer,
    iv: string|Buffer,
    outputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __plaintext__: string  
    Plaintext to encrypt.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __outputEncoding__: 'hex'|'binary'|'base64'  
    The format of the encrypted data to be output. The default is base64.

###### Returns
Returns an encrypted string.

### decrypt()

Decrypts the character string encrypted with AES-128-CTR.

###### Syntax
```js
AES128CTR.decrypt(
    encrypted: string,
    key: string|Buffer,
    iv: string|Buffer,
    inputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __encrypted__: string  
    Encrypted string.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __inputEncoding__: 'hex'|'binary'|'base64'  
    The format of the input decrypted data. The default is base64.

###### Returns
Returns an decrypted string.

### createKey()

Generates and returns an encryption key for AES-128-CTR.

###### Syntax
```js
AES128CTR.createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns the encryption key.

### createIV()

Generates and returns IV for AES-128-CTR.

###### Syntax
```js
AES128CTR.createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns an initialization vector for encryption.

# AES256CBC class.

AES-256-CBC algorithm encryption and decryption.

## Methods

### encrypt()

Encrypt with AES-256-CBC.

###### Syntax
```js
AES256CBC.encrypt(
    plaintext: string,
    key: string|Buffer,
    iv: string|Buffer,
    outputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __plaintext__: string  
    Plaintext to encrypt.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __outputEncoding__: 'hex'|'binary'|'base64'  
    The format of the encrypted data to be output. The default is base64.

###### Returns
Returns an encrypted string.

### decrypt()

Decrypts the character string encrypted with AES-256-CBC.

###### Syntax
```js
AES256CBC.decrypt(
    encrypted: string,
    key: string|Buffer,
    iv: string|Buffer,
    inputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __encrypted__: string  
    Encrypted string.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __inputEncoding__: 'hex'|'binary'|'base64'  
    The format of the input decrypted data. The default is base64.

###### Returns
Returns an decrypted string.

### createKey()

Generates and returns an encryption key for AES-256-CBC.

###### Syntax
```js
AES256CBC.createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns the encryption key.

### createIV()

Generates and returns IV for AES-256-CBC.

###### Syntax
```js
AES256CBC.createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns an initialization vector for encryption.

# AES192CBC class.

AES-192-CBC algorithm encryption and decryption.

## Methods

### encrypt()

Encrypt with AES-192-CBC.

###### Syntax
```js
AES192CBC.encrypt(
    plaintext: string,
    key: string|Buffer,
    iv: string|Buffer,
    outputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __plaintext__: string  
    Plaintext to encrypt.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __outputEncoding__: 'hex'|'binary'|'base64'  
    The format of the encrypted data to be output. The default is base64.

###### Returns
Returns an encrypted string.

### decrypt()

Decrypts the character string encrypted with AES-192-CBC.

###### Syntax
```js
AES192CBC.decrypt(
    encrypted: string,
    key: string|Buffer,
    iv: string|Buffer,
    inputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __encrypted__: string  
    Encrypted string.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __inputEncoding__: 'hex'|'binary'|'base64'  
    The format of the input decrypted data. The default is base64.

###### Returns
Returns an decrypted string.

### createKey()

Generates and returns an encryption key for AES-192-CBC.

###### Syntax
```js
AES192CBC.createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns the encryption key.

### createIV()

Generates and returns IV for AES-192-CBC.

###### Syntax
```js
AES192CBC.createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns an initialization vector for encryption.

# AES128CBC class.

AES-128-CBC algorithm encryption and decryption.

## Methods

### encrypt()

Encrypt with AES-128-CBC.

###### Syntax
```js
AES128CBC.encrypt(
    plaintext: string,
    key: string|Buffer,
    iv: string|Buffer,
    outputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __plaintext__: string  
    Plaintext to encrypt.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __outputEncoding__: 'hex'|'binary'|'base64'  
    The format of the encrypted data to be output. The default is base64.

###### Returns
Returns an encrypted string.

### decrypt()

Decrypts the character string encrypted with AES-128-CBC.

###### Syntax
```js
AES128CBC.decrypt(
    encrypted: string,
    key: string|Buffer,
    iv: string|Buffer,
    inputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __encrypted__: string  
    Encrypted string.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __inputEncoding__: 'hex'|'binary'|'base64'  
    The format of the input decrypted data. The default is base64.

###### Returns
Returns an decrypted string.

### createKey()

Generates and returns an encryption key for AES-128-CBC.

###### Syntax
```js
AES128CBC.createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns the encryption key.

### createIV()

Generates and returns IV for AES-128-CBC.

###### Syntax
```js
AES128CBC.createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns an initialization vector for encryption.

# AES256CFB class.

AES-256-CFB algorithm encryption and decryption.

## Methods

### encrypt()

Encrypt with AES-256-CFB.

###### Syntax
```js
AES256CFB.encrypt(
    plaintext: string,
    key: string|Buffer,
    iv: string|Buffer,
    outputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __plaintext__: string  
    Plaintext to encrypt.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __outputEncoding__: 'hex'|'binary'|'base64'  
    The format of the encrypted data to be output. The default is base64.

###### Returns
Returns an encrypted string.

### decrypt()

Decrypts the character string encrypted with AES-256-CFB.

###### Syntax
```js
AES256CFB.decrypt(
    encrypted: string,
    key: string|Buffer,
    iv: string|Buffer,
    inputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __encrypted__: string  
    Encrypted string.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __inputEncoding__: 'hex'|'binary'|'base64'  
    The format of the input decrypted data. The default is base64.

###### Returns
Returns an decrypted string.

### createKey()

Generates and returns an encryption key for AES-256-CFB.

###### Syntax
```js
AES256CFB.createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns the encryption key.

### createIV()

Generates and returns IV for AES-256-CFB.

###### Syntax
```js
AES256CFB.createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns an initialization vector for encryption.

# AES192CFB class.

AES-192-CFB algorithm encryption and decryption.

## Methods

### encrypt()

Encrypt with AES-192-CFB.

###### Syntax
```js
AES192CFB.encrypt(
    plaintext: string,
    key: string|Buffer,
    iv: string|Buffer,
    outputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __plaintext__: string  
    Plaintext to encrypt.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __outputEncoding__: 'hex'|'binary'|'base64'  
    The format of the encrypted data to be output. The default is base64.

###### Returns
Returns an encrypted string.

### decrypt()

Decrypts the character string encrypted with AES-192-CFB.

###### Syntax
```js
AES192CFB.decrypt(
    encrypted: string,
    key: string|Buffer,
    iv: string|Buffer,
    inputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __encrypted__: string  
    Encrypted string.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __inputEncoding__: 'hex'|'binary'|'base64'  
    The format of the input decrypted data. The default is base64.

###### Returns
Returns an decrypted string.

### createKey()

Generates and returns an encryption key for AES-192-CFB.

###### Syntax
```js
AES192CFB.createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns the encryption key.

### createIV()

Generates and returns IV for AES-192-CFB.

###### Syntax
```js
AES192CFB.createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns an initialization vector for encryption.

# AES128CFB class.

AES-128-CFB algorithm encryption and decryption.

## Methods

### encrypt()

Encrypt with AES-128-CFB.

###### Syntax
```js
AES128CFB.encrypt(
    plaintext: string,
    key: string|Buffer,
    iv: string|Buffer,
    outputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __plaintext__: string  
    Plaintext to encrypt.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __outputEncoding__: 'hex'|'binary'|'base64'  
    The format of the encrypted data to be output. The default is base64.

###### Returns
Returns an encrypted string.

### decrypt()

Decrypts the character string encrypted with AES-128-CFB.

###### Syntax
```js
AES128CFB.decrypt(
    encrypted: string,
    key: string|Buffer,
    iv: string|Buffer,
    inputEncoding: 'hex'|'binary'|'base64' = 'base64'
): string
```

###### Parameters
- __encrypted__: string  
    Encrypted string.

- __key__: string|Buffer  
    Encryption key.

- __iv__: string|Buffer  
    Encryption initialization vector.

- __inputEncoding__: 'hex'|'binary'|'base64'  
    The format of the input decrypted data. The default is base64.

###### Returns
Returns an decrypted string.

### createKey()

Generates and returns an encryption key for AES-128-CFB.

###### Syntax
```js
AES128CFB.createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns the encryption key.

### createIV()

Generates and returns IV for AES-128-CFB.

###### Syntax
```js
AES128CFB.createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string 
```

###### Parameters
- __type__: 'buffer'|'hex'  
    The type of key. Specify ‘buffer’ or ‘hex’.  
    The default is'buffer'.

###### Returns
Returns an initialization vector for encryption.