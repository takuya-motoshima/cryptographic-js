import Cipher from '~/Cipher';

export default class extends Cipher {
  /**
   * Returns the encryption algorithm name.
   * 
   * @type {string}
   */
  public readonly algorithm: string = 'aes-256-cfb';

  /**
   * Returns the byte size of the encryption / decryption key.
   * 
   * @type {number}
   */
  public readonly keySize: number = 32;

  /**
   * Returns the byte size of the initialization vector.
   * 
   * @type {number}
   */
  public readonly ivSize: number = 16;
}