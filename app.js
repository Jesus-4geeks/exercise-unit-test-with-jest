const oneEuroIs = {
    'JPY': 156.5, // Japan Yen
    'USD': 1.07, // USD Dollar
    'GBP': 0.87, // British Pound
}


function fromEuroToDollar(euroValue) {
    return euroValue * oneEuroIs['USD'];
}


function fromDollarToYen(dollarValue) {
    return dollarValue / oneEuroIs['USD'] * oneEuroIs['JPY'];
}


function fromYenToPound(yenValue) {
    return yenValue / oneEuroIs['JPY'] * oneEuroIs['GBP'];
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
