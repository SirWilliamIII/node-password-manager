/**
 * Created by willcarpenter on 4/2/17.
 */
var crypto = require('crypto-js');

var secretAccount = {
    username: "sneakySOB",
    favoriteSexToy: 'dildo',
    other: 44
};
var passKey = 'To_infinity';

var accountToString = JSON.stringify(secretAccount);

var cryptedAccount = crypto.AES.encrypt(accountToString, passKey);
console.log(cryptedAccount);
var bytes = crypto.AES.decrypt(cryptedAccount, passKey);
var decryptedAccount = bytes.toString(crypto.enc.Utf8);

console.log(decryptedAccount);

var og = JSON.parse(decryptedAccount);

console.log(og);