import React from 'react';

const DropdownColors = (props) => {
  if (props.isVisible === true) {
    return (
      <ul className="filters-panel__dropdown">
        <li className="filters-panel__option">
          <button class="filters-panel__checbox"></button> Red
        </li>
        <li className="filters-panel__option">
          <button class="filters-panel__checbox"></button> Blue
        </li>
        <li className="filters-panel__option">
          <button class="filters-panel__checbox"></button> Green
        </li>
        <li className="filters-panel__option">
          <button class="filters-panel__checbox"></button> Black
        </li>
        <li className="filters-panel__option">
          <button class="filters-panel__checbox"></button> Yellow
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