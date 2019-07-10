import React, {useState} from 'react'
import './RecipesFilter.styles.scss'
import GenericFilters from './GenericFilters.component'
import FilterCollection from './FilterCollection.component'


const RecipesFilter = () => {

    return (
        <div className="recipesFilter">
            <div className="recipesFilter-header">
                <h3 className="recipesFilter-title">Filter by:</h3>
                <button className="clearFilter">Clear Filter</button>
            </div>

            <GenericFilters />

            <FilterCollection name='Meal'/>

            <FilterCollection name='Dish Type'/>

            <FilterCollection name='Diet'/>

            <FilterCollection name='Recipe Time'/>
            
        </div>
    )
}

export default RecipesFilter