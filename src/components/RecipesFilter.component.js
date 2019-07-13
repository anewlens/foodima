import React, {useState} from 'react'
import './RecipesFilter.styles.scss'
import GenericFilters from './GenericFilters.component'
import FilterCollection from './FilterCollection.component'
import Filters from '../data/filters'


const RecipesFilter = () => {

    const GenericFIlters = [
        {
            name: 'Contest Winners',
            value: 'contest-winner'
        },
        {
            name: 'Featured',
            value: 'featured'
        },
        {
            name: 'Test Kitchen Approved',
            value: 'approved'
        }
    ]

    return (
        <div className="recipesFilter">
            <div className="recipesFilter-header">
                <h3 className="recipesFilter-title">Filter by:</h3>
                <button className="clearFilter">Clear Filter</button>
            </div>

            <GenericFilters items={GenericFIlters}/>

            {
                Filters.map(filter => <FilterCollection
                                    name={filter.name}
                                    items={filter.items} />)
            }
            
        </div>
    )
}

export default RecipesFilter