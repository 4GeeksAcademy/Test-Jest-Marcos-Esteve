// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(moneda){
    let yen = moneda*(1/oneEuroIs.USD)*oneEuroIs.JPY;
    yen = Math.round(yen * 100) / 100;
    return yen;
}

function fromEuroToDollar(moneda){
    let dollar = moneda * oneEuroIs.USD;
    dollar = Math.round(dollar * 100) / 100;
    return dollar;
}

function fromYenToPound(moneda){
    let pound = moneda * (1/oneEuroIs.JPY)*oneEuroIs.GBP;
    pound = Math.round(pound * 100) / 100;
    return pound;
}

module.exports = {fromEuroToDollar , sum, fromYenToPound, fromDollarToYen};
console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(3.5))
console.log(fromYenToPound(1))