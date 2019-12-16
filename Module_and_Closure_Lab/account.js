let accountInfoList = [];
function Factory() {
    this.createAccount = function (acc, balance) {
        let account = {};
        account.name = acc;
        account.balance = balance;
        return account;
    }
}

function show() {
    let txtArea = $("#txtArea");
    let txt = "";
    accountInfoList.forEach(acc => txt += "Account name: " + acc.name + ", Balance: " + acc.balance + "\n");
    txtArea.val(txt);
}

function createNewAcc () {
    let factory = new Factory();
    let account = factory.createAccount($("#name").val(), $("#dp").val());
    accountInfoList.push(account);
    show();
}