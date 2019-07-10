import React from 'react'
import { ReactComponent as CheckmarkIcon } from '../images/check.svg'

const FilterCheckbox = ({name, value}) => (
    <label className="filter-label" for={value}>{name}
        <input type="checkbox" id={value} name={value} className='filter-button'/>
        <span className='filter-button-icon'><CheckmarkIcon className='checkmark'/></span>
    </label>
)

export default FilterCheckbox