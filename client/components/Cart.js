import React, {useEffect} from 'react'
import {CartItem} from './CartItem'
import {fetchCartItems} from '../store/cart'
import {connect} from 'react-redux'

const dummyData = [
  {
    id: 1,
    name: 'beans',
    price: '1',
    imageUrl: 'https://i.imgur.com/DLrwUP7.png',
  },
  {
    id: 2,
    name: 'a wand',
    price: '10',
    imageUrl: 'https://i.imgur.com/jim3MSJ.png',
  },
]

export const Cart = (props) => {
  useEffect(() => {
    props.getCartItems()
  }, [])
  const {products} = props
  return (
    <div>
      <h3>Cart</h3>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div>$$$Cart Total$$$</div>
      <button type="submit">Checkout</button>
    </div>
  )
}

const mapState = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatch = (dispatch) => ({
  getCartItems: (userId) => dispatch(fetchCartItems(userId)),
})

export default connect(mapState, mapDispatch)(Cart)