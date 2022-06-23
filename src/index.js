module.exports = function reverse (n) {
    parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n)
    return;
}
