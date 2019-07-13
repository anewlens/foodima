import React, { useState } from 'react'
import './FilterCollection.styles.scss'
import FilterGroup from './GenericFilters.component'

import {ReactComponent as PlusIcon} from '../images/plus.svg'
import {ReactComponent as XIcon} from '../images/x.svg'

const FilterCollection = ({name, items}) => {

    const [openCollection, setCollection] = useState(false)

    const handleCollection = () => {
        setCollection(!openCollection)
    }

    return (
        <div className="collection">
                <div className="collection-header">
                    <label 
                        htmlFor={name}
                        className='collection-title'>{name} 
                        <input 
                            id={name}
                            type="checkbox"
                            onChange={handleCollection}
                            className='collection-input'/>
                        <span>
                            {openCollection
                                ? <XIcon />
                                : <PlusIcon />}
                        </span>
                    </label>
                </div>
                
                { openCollection
                    ? <FilterGroup items={items}/>
                    : null }
            </div>
    )
}

export default FilterCollection