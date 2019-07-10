import React from 'react'
import "./FilterGroup.styles.scss"

import FilterCheckbox from './FilterCheckbox.component'

const GenericFilters = () => (
    <div className="genericFilters filterGroup">
        <FilterCheckbox
            name="Contest Winners"
            value="contest" />

        <FilterCheckbox
            name="Featured"
            value="featured" />

        <FilterCheckbox
            name="Test Kitchen Approved"
            value="approved" />
    </div>
)

export default GenericFilters