function CalculateDiscount (price, status, percent) {
    let discount = 0;
    discount = price * percent / 100;
    return discount;
}

module.exports.CalculateDiscount = CalculateDiscount;
