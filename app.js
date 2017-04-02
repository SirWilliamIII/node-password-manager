/**
 * Created by willcarpenter on 4/2/17.
 */

var storage = require('node-persist');

storage.initSync();

function createAccount(account) {
    if(typeof account === 'undefined'){
        account = [];
    }
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
    return account;

}

function getAccount(accountName) {
    var accounts = storage.getInitSync('accounts');
    var matchedAccount;

    accounts.forEach(function(account) {
        if(account.name === accountName) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}
//
// createAccount({
//     username: 'willy',
//     balance: 100
//});

getAccount('willy');