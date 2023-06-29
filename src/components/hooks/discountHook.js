

const useDiscount = (price , discountPercentage) => {
    const discountedPrice = Math.ceil(price - (price * discountPercentage)/100)
    return discountedPrice
}

export default useDiscount
