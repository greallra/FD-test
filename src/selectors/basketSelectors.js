export const getBasketTotal = (basketItems) =>{
    if(basketItems.length === 0) return;
    let sumOfMains = basketItems[0].mains.reduce(function (accumulator, currentValue) {
        return accumulator + Number(currentValue.Price)
    },0)
    let sumOfAdditionals = basketItems[0].additionals.reduce(function (accumulator, currentValue) {
        return accumulator + Number(currentValue.Price)
    },0)
    return sumOfMains + sumOfAdditionals;
}
