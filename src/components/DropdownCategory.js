import React from 'react';

const DropdownCategory = (props) => {
  console.log(props.isVisible);
  if (props.isVisible === true) {
    return (
      <ul className="">
        <li className="">Torebki</li>
        <li className="">Paski</li>
        <li className="">Portfele</li>
      </ul>
    )
  } else if (props.isVisible === false) {
    return (
      null
    )
  }
}

export default DropdownCategory;