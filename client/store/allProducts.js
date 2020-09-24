import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_PRODUCTS = 'GOT_PRODUCTS'

/**
 * INITIAL STATE
 */
const defaultProductsList = [{name: '', imageUrl: '', price: ''}]

/**
 * ACTION CREATORS
 */
export const gotProducts = (products) => ({type: GOT_PRODUCTS, products})

/**
 * THUNK CREATORS
 */
export const fetchAllProducts = () => async (dispatch) => {
  try {
    const {data: products} = await axios.get('/api/products')
    dispatch(gotProducts(products))
  } catch (error) {
    console.log(error)
  }
}

/**
 * REDUCER
 */
export default function (state = defaultProductsList, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products
    default:
      return state
  }
}