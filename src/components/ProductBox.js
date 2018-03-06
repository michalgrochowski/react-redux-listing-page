import React from 'react';

const ProductBox = (props) => {
  console.log(props.photo);
  const price = props.data.map( variant => {
    if (variant.isSelected === true) {
      return (
        <p key={variant.price} className="product-box__price">Price: {variant.price} $</p>
      )
    }
  })

  const colors = props.data.map( color => {
    return (
      <button key={color.color} className="product-box__color-button">{color.color}</button>
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