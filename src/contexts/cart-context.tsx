'use client'

import { CartItem } from '@/@types/cart-item'
import { Product } from '@/@types/product'
import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { cartReducer, initialCartState } from '../reducers/cart-reducer'

interface CartContextProps {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(cartReducer, initialCartState)

  function saveCartInLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }

  function addToCart(product: Product) {
    dispatch({ type: 'ADD_TO_CART', payload: product })
    saveCartInLocalStorage()
  }

  function removeFromCart(productId: number) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } })
    saveCartInLocalStorage()
  }

  function clearCart() {
    dispatch({ type: 'CLEAR_CART' })
    saveCartInLocalStorage()
  }

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) })
    }
  }, [])

  return (
    <CartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
