            // Currency converter
const EUR = 0.9;
const UAH = 35;
const GBP = 0.8;

let amount;
let currency;

function amountValidation(){
    amount = Number(prompt('Enter USD amount to convert'));
    if (amount >= 0){
        return amount;
    } else {
        alert('Please enter correct value');
        return amountValidation();
    }
}
amountValidation()

function currencyValidation(){
    currency = String(prompt('Enter currency EUR, UAH or GBP'));
    if (currency == "EUR" || currency == "UAH" || currency == "GBP"){
        return currency;
    } else {
        alert('Unsupported currency');
        return currencyValidation();
    }
}
currencyValidation()

function convertCurrency(){ 
if (currency == "EUR"){console.log(amount * EUR + ` ${currency}`)};
if (currency == "UAH"){console.log(amount * UAH + ` ${currency}`)};
if (currency == "GBP"){console.log(amount * GBP + ` ${currency}`)};
}
convertCurrency()