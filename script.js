function sendMoney(){
    var enterName = document.getElementById("enterName").nodeValue;
    var enterAmount= parseInt(document.getElementById("enterAmount").value);
    var enterSName=document.getElementById("enterSName").value;
    var findSenderBankAccount = enterSName +"BankBalance";
    var enterSName=parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if(enterAmount>enterSName){
        alert("Insufficient Balance.")
    }
    else
    {
        var findUserBankAccount=enterName+"BankBalance";

        var finalAmount=parseInt(document.getElementById(findUserBankAccount).innerHTML)+enterAmount;
        var myAccountBalance=parseInt(document.getElementById(findSenderBankAccount).innerHTML-enterAmount);
        document.getElementById(findSenderBankAccount).innerHTML=myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML=finalAmount;
        alert("Successful Transaction !! 
        $${enterAmount} is sent to ${enterName}@money.com.")

        

        //transaction history

        var createPTag=document.createElement("li");
        var textNode=document.createTextNode("Rs ${enterAmount} is sent from the sender with Bank-id ${enterSName}@money.com
        to recepient with Bank-id-id ${enterName}@money.com on ${Date()}.");
        createPTag=appendChild(textNode);
        var element=document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}