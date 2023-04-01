export const initialState = {
  cart: [],
  user: null,
  recentDelete: '',
}

//Selector
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);
//tallies up item prices
//0 is initial amount
// question mark is optional chaining to prevent breaking

//reducer puts data into data layer

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      }
      
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      )
      //finds index of remove item, in case there are multiple duplicate ids
      let newCart = [...state.cart]

      if (index >= 0) { //means it found item in cart
        newCart.splice(index, 1)
        //removes the item from array
        //doesn't remove the exact item, only the 1st one with the id
      
      } else {
        console.warn(`Cannot remove product (id: ${action.id}) as it is not in the cart`)
      }

      return {
        ...state,
        cart: newCart,
        recentDelete: action.title
      }

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    
    case 'CLEAR_RECENT_DELETE':
      return {
        ...state,
        recentDelete: ''
      }
  }
}

export default reducer