import React from 'react';

const DropdownCategory = (props) => {
  if (props.isVisible === true) {
    return (
      <ul className="filters-panel__dropdown">
        <li className="filters-panel__option">
          <button class="filters-panel__checbox"></button> Bags
        </li>
        <li className="filters-panel__option">
          <button class="filters-panel__checbox"></button> Belts
        </li>
        <li className="filters-panel__option">
          <button class="filters-panel__checbox"></button> Wallets
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