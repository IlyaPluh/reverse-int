module.exports = function reverse (n) {
    let rev = parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
    return Math.abs(rev);
};
