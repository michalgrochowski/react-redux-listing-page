import React from 'react';

const ProductBox = (props) => {

  const price = props.data.map( variant => {
    if (variant.isSelected === true) {
      return (
        <p className="product-box__price">{variant.price}</p>
      )
    }
  })

  const colors = props.data.map( color => {
    return (
      <button className="product-box__color-button">{color.color}</button>
    )
  })

  return (
    <div className="product-box">
      <h2 className="product-box__title">{props.name}</h2>
      <img className="product-box__image" src={props.photo} alt={props.name} />
      {price}
      <div className="product-box__colors">
        {colors}
      </div>
    </div>
  )
}

export default ProductBox;