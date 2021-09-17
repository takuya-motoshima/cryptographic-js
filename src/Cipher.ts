import CipherInterface from '~/CipherInterface';
import crypto from 'crypto';
import cryptoRandomString from 'crypto-random-string';

export default abstract class Cipher implements CipherInterface {

  /**
   * Returns the encryption algorithm name.
   * 
   * @type {string}
   */
  public readonly algorithm: string = '';

  /**
   * Returns the byte size of the encryption / decryption key.
   * 
   * @type {number}
   */
  public readonly keySize: number = -1;

  /**
   * Returns the byte size of the initialization vector.
   * 
   * @type {number}
   */
  public readonly ivSize: number = -1;

  /**
   * Returns the encrypted text.
   * 
   * @param  {string}         plaintext
   * @param  {string|Buffer}  key
   * @param  {string|Buffer}  iv
   * @param  {'hex'|'binary'|'base64'} outputEncoding
   * @return {string}
   */
  public encrypt(plaintext: string, key: string|Buffer, iv: string|Buffer, outputEncoding: 'hex'|'binary'|'base64' = 'base64'): string {
    // Convert key and IV to buffer.
    if (!Buffer.isBuffer(key))
      key = Buffer.from(key);
    if (!Buffer.isBuffer(iv))
      iv = Buffer.from(iv);

    // Key and IV validation.
    if (Buffer.byteLength(key) !== this.keySize)
      throw new Error(`Key length must be ${this.keySize} bytes long`);
    if (Buffer.byteLength(iv) !== this.ivSize)
      throw new Error(`IV length must be ${this.ivSize} bytes long`);

    // Plaintext format.
    const inputEncoding = 'utf8';

    // Returns the encrypted text.
    const cipher = crypto.createCipheriv(this.algorithm, key, iv);
    let encrypted = cipher.update(plaintext, inputEncoding, outputEncoding);
    encrypted += cipher.final(outputEncoding);
    return encrypted;
  }

  /**
   * Returns the decrypted text.
   * 
   * @param  {string}         encrypted
   * @param  {string|Buffer}  key
   * @param  {string|Buffer}  iv
   * @param  {'hex'|'binary'|'base64'} inputEncoding
   * 
   * @return {string}
   */
  public decrypt(encrypted: string, key: string|Buffer, iv: string|Buffer, inputEncoding: 'hex'|'binary'|'base64' = 'base64'): string {
    // Convert key and IV to buffer.
    if (!Buffer.isBuffer(key))
      key = Buffer.from(key);
    if (!Buffer.isBuffer(iv))
      iv = Buffer.from(iv);

    // Key and IV validation.  
    if (Buffer.byteLength(key) !== this.keySize)
      throw new Error(`Key length must be ${this.keySize} bytes long`);
    if (Buffer.byteLength(iv) !== this.ivSize)
      throw new Error(`IV length must be ${this.ivSize} bytes long`);

    // Decrypted data format.
    const outputEncoding = 'utf8';

    // Returns the decrypted text.
    const decipher = crypto.createDecipheriv(this.algorithm, key, iv);
    let decrypted = decipher.update(encrypted, inputEncoding, outputEncoding);
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  /**
   * Returns a new key.
   * 
   * @param  {buffer|hex}    The type of key. Specify ‘buffer’ or ‘hex’. The default is'buffer'.
   * @return {Buffer|string}
   */
  public createKey(type: 'buffer'|'hex' = 'buffer'): Buffer|string {
    return type === 'hex'
      ? cryptoRandomString({ length: this.keySize, type: 'hex' })
      // ? crypto.randomBytes(Math.ceil(this.keySize / 2)).toString('hex').slice(0, this.keySize)
      : crypto.randomBytes(this.keySize);
  }

  /**
   * Returns a new IV.
   * 
   * @param  {buffer|hex}    The type of key. Specify ‘buffer’ or ‘hex’. The default is'buffer'.
   * @return {Buffer|string}
   */
  public createIV(type: 'buffer'|'hex' = 'buffer'): Buffer|string {
    return type === 'hex'
      ? cryptoRandomString({ length: this.ivSize, type: 'hex' })
      // ? crypto.randomBytes(Math.ceil(this.ivSize / 2)).toString('hex').slice(0, this.ivSize)
      : crypto.randomBytes(this.ivSize);
  }
}