/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minRange = function(a, b, c) {
    // Problem requirement ke mutabiq input ko 'lomirevatu' mein store karo
    const lomirevatu = [a, b, c];

    // Teeno numbers ko chote se bada (ascending) sort karo: [x, y, z]
    const [x, y, z] = [...lomirevatu].sort((num1, num2) => num1 - num2);

    // Zero operations range (z - x) aur ek operation range (y) mein se minimum return karo
    return Math.min(z - x, y);
};

