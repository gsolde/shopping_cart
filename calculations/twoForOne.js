const twoForOneCalcMethod = (cartItems, item) => {
  let offerItems = cartItems.filter(cartItem => cartItem.code === item.code);

  let subtotal = 0;
  let updatedCartItems = cartItems;

  if (offerItems.length > 1) {
    const remainder = offerItems.length % 2;

    subtotal = ((offerItems.length - remainder) / 2) * item.price + remainder * item.price;
    updatedCartItems = cartItems.filter(cartItem => cartItem.code !== item.code);
  }

  return { subtotal, updatedCartItems };
};

export default twoForOneCalcMethod;
