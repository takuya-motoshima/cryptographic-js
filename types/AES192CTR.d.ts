import Cipher from '~/Cipher';
export default class extends Cipher {
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
}
