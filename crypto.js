/**
 * Created by willcarpenter on 4/2/17.
 */
var crypto = require('crypto-js');

var secretMessage = 'The thing is at the spot in the town that you chose';
var secretKey = "The I before I am";

var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);


var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decrypt = bytes.toString(crypto.enc.Utf8);

console.log('The decrypted message is ' + decrypt);