function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0){
        alert("Enter a positive number.")
        document.getElementById("principal").focus();
    }
    var rate      = document.getElementById("rate").value;
    var years     = document.getElementById("years").value;
    var interest  = principal * (rate / 100) * years;
    // add amount to principal
    let amount    = interest + parseInt(principal);
    var year      = new Date().getFullYear() + parseInt(years);

    var interestString = "If you deposit" + principal + " at an interest rate of " + rate + " You will receive an amount of " + amount + "in the year " + year + ".";
    document.getElementById("result").innerText = interestString
}