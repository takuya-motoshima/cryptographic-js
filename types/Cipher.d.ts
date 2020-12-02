/// <reference types="node" />
import CipherInterface from '~/CipherInterface';
export default abstract class Cipher implements CipherInterface {
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
     *
     * @return {string}
     */
    decrypt(encrypted: string, key: string | Buffer, iv: string | Buffer, inputEncoding?: 'hex' | 'binary' | 'base64'): string;
    /**
     * Returns a new key.
     *
     * @param  {buffer|hex}    The type of key. Specify ‘buffer’ or ‘hex’. The default is'buffer'.
     * @return {Buffer|string}
     */
    createKey(type?: 'buffer' | 'hex'): Buffer | string;
    /**
     * Returns a new IV.
     *
     * @param  {buffer|hex}    The type of key. Specify ‘buffer’ or ‘hex’. The default is'buffer'.
     * @return {Buffer|string}
     */
    createIV(type?: 'buffer' | 'hex'): Buffer | string;
}
