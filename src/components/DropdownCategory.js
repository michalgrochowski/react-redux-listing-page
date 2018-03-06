import React from 'react';

import CheckboxButton from '../containers/CheckboxButton'

const DropdownCategory = (props) => {
  if (props.isVisible === true) {
    return (
      <ul className="filters-panel__dropdown">
        <li className="filters-panel__option">
          <CheckboxButton value="Bags" />
        </li>
        <li className="filters-panel__option">
          <CheckboxButton value="Belts" />
        </li>
        <li className="filters-panel__option">
          <CheckboxButton value="Wallets" />
        </li>
      </ul>
    )
  } else if (props.isVisible === false) {
    return (
      null
    )
  }
}

export default DropdownCategory;