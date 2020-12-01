import Cipher from '~/Cipher';

export default class extends Cipher {
  /**
   * Returns the encryption algorithm name.
   * 
   * @type {string}
   */
  public readonly algorithm: string = 'aes-192-ctr';

  /**
   * Returns the byte size of the encryption / decryption key.
   * 
   * @type {number}
   */
  public readonly keySize: number = 24;

  /**
   * Returns the byte size of the initialization vector.
   * 
   * @type {number}
   */
  public readonly ivSize: number = 16;
}