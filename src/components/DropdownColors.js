import React from 'react';

import CheckboxButton from '../containers/CheckboxButton'

const DropdownColors = (props) => {
  if (props.isVisible === true) {
    return (
      <ul className="filters-panel__dropdown">
        <li className="filters-panel__option">
          <CheckboxButton value="Red" />
        </li>
        <li className="filters-panel__option">
          <CheckboxButton value="Blue" />
        </li>
        <li className="filters-panel__option">
          <CheckboxButton value="Green" />
        </li>
        <li className="filters-panel__option">
          <CheckboxButton value="Yellow" />
        </li>
        <li className="filters-panel__option">
          <CheckboxButton value="Black" />
        </li>
      </ul>
    )
  } else if (props.isVisible === false) {
    return (
      null
    )
  }
}

export default DropdownColors;