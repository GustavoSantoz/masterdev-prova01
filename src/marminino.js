function executar2(numero) {
    switch (true) {
        case numero % 3 === 0 && numero % 4 === 0:
            return "MarMinino";
        case numero % 3 === 0:
            return "Mar";
        case numero % 4 === 0:
            return "Minino";
        default:
            return "";
    }
}
for(i = 1; i <= 100; i++) {
    console.log(i + ": " + executar2(i))
}
module.exports = executar2;