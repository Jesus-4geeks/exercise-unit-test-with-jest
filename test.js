const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('One euro is 1.07 dollars', () => {
    const dollars = fromEuroToDollar(1);
    
    expect(dollars).toBe(1.07);
});

test('One dollar is 146.2617 yen', () => {
    let yen = fromDollarToYen(1);

    yen = Math.round(yen * 1e4) / 1e4; // Rounded to 4 decimals

    expect(yen).toBe(146.2617);
});

test('One yen is 0.0056 pounds', () => {
    let pounds = fromYenToPound(1);

    pounds = Math.round(pounds * 1e4) / 1e4; // Rounded to 4 decimals

    expect(pounds).toBe(0.0056);
});
