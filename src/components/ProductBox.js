import React from 'react';

const ProductBox = (props) => {
  const variants = props.data.variants.map( variant => {
    if (variant.isSelected === true) {
      return (
        <React.Fragment>
          <p className="">{variant.color}</p>
          <p className="">{variant.price}</p>
        </React.Fragment>
      )
    }
  })
  return (
    <div className="">
      <h2 className="">{props.data.name}</h2>
      {variants}
    </div>
  )
}

export default ProductBox;