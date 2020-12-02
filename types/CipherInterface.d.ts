/// <reference types="node" />
export default interface  {
    /**
     * Returns the encryption algorithm name.
     *
     * @type {string}
     */
    readonly algorithm: string;
    /**
     * Returns the byte size of the encryption / decryption key.
     *
     * @type {number}
     */
    readonly keySize: number;
    /**
     * Returns the byte size of the initialization vector.
     *
     * @type {number}
     */
    readonly ivSize: number;
    /**
     * Returns the encrypted text.
     *
     * @param  {string}         plaintext
     * @param  {string|Buffer}  key
     * @param  {string|Buffer}  iv
     * @param  {'hex'|'binary'|'base64'} outputEncoding
     * @return {string}
     */
    encrypt(plaintext: string, key: string | Buffer, iv: string | Buffer, outputEncoding?: 'hex' | 'binary' | 'base64'): string;
    /**
     * Returns the decrypted text.
     *
     * @param  {string}         encrypted
     * @param  {string|Buffer}  key
     * @param  {string|Buffer}  iv
     * @param  {'hex'|'binary'|'base64'} inputEncoding
     */
    decrypt(encrypted: string, key: string | Buffer, iv: string | Buffer, inputEncoding?: 'hex' | 'binary' | 'base64'): string;
}
