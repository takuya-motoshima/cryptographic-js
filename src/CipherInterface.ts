export default interface {
  /**
   * Returns the encryption algorithm name.
   * 
   * @type {string}
   */
  public readonly algorithm: string;

  /**
   * Returns the byte size of the encryption / decryption key.
   * 
   * @type {number}
   */
  public readonly keySize: number;

  /**
   * Returns the byte size of the initialization vector.
   * 
   * @type {number}
   */
  public readonly ivSize: number;
 
  /**
   * Returns the encrypted text.
   * 
   * @param  {string} plaintext
   * @param  {string|Buffer} key
   * @param  {string|Buffer} iv
   * @return {string}
   */
  public encrypt(plaintext: string, key: string|Buffer, iv: string|Buffer): string;

  /**
   * Returns the decrypted text.
   * 
   * @param  {string} encrypted
   * @param  {string|Buffer} key
   * @param  {string|Buffer} iv
   * @return {string}
   */
  public decrypt(encrypted: string, key: string|Buffer, iv: string|Buffer): string;
}