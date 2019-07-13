import React from 'react'
import "./FilterGroup.styles.scss"

import FilterCheckbox from './FilterCheckbox.component'

const GenericFilters = ({items}) => (
    <div className="genericFilters filterGroup">

        {items.map(filter => <FilterCheckbox
                                name={filter.name}
                                value={filter.value} />)}
    </div>
)

export default GenericFilters