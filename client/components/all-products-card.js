import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

/**
 * COMPONENT
 */
export const AllProductsCard = (props) => {
  const {product} = props
  return (
    <Card
      border="#ECAE19"
      className="all-products-card"
      style={{
        color: 'black',
        backgroundColor: '#D0D9E6',
      }}
    >
      <Card.Img
        variant="top"
        src={product.imageUrl}
        // width="100" height="250"
      />
      <Card.Body>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
        <Card.Text>{product.price} Sickles</Card.Text>
      </Card.Body>
    </Card>
  )
}

/**
 * REDUX CONTAINER
 */
export default AllProductsCard

/**
 * PROP TYPES
 */
AllProductsCard.propTypes = {
  product: PropTypes.object,
}
