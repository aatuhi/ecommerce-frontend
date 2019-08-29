import React from 'react'
import { connect } from 'react-redux'
import {
  Segment, Button, ItemGroup, Item,
} from 'semantic-ui-react'
import { emptyShoppingCart } from '../reducers/shoppingCartReducer'
import ShoppingCartProduct from './ShoppingCartProduct'

const ShoppingCart = (props) => {
  const totalPrice = shoppingCart => shoppingCart.reduce(
    (prev, curr) => Math.round((prev + curr.price * curr.quantity) * 100) / 100,
    0,
  )

  if (!props.shoppingCart || props.shoppingCart.length < 1) {
    return <h2>Shopping cart is empty</h2>
  }

  return (
    <Segment basic>
      <h2>Shopping Cart</h2>
      <div>
        {props.shoppingCart.map(product => (
          <Item.Group divided key={product._id}>
            <ShoppingCartProduct product={product} />
          </Item.Group>
        ))}
      </div>
      {props.shoppingCart.length > 0 && (
        <div>
          Total price:
          <h3>
            {totalPrice(props.shoppingCart)}
            {' '}
€
          </h3>
          <Button type="button" onClick={() => props.emptyShoppingCart()}>
            clear cart
          </Button>
        </div>
      )}
    </Segment>
  )
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart,
})

export default connect(
  mapStateToProps,
  { emptyShoppingCart },
)(ShoppingCart)
