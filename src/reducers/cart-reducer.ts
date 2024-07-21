import { CartAction } from '@/@types/cart-action'
import { CartItem } from '@/@types/cart-item'

export interface CartState {
  cart: CartItem[]
}

export const initialCartState: CartState = {
  cart: [],
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = action.payload
      const existingProduct = state.cart.find((item) => item.id === product.id)

      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
        }
      }
    }

    case 'REMOVE_FROM_CART': {
      const productId = action.payload.productId
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      }
    }

    case 'CLEAR_CART':
      return { ...state, cart: [] }

    case 'SET_CART':
      return { ...state, cart: action.payload }

    default:
      return state
  }
}
