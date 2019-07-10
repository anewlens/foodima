import React from 'react'
import './Hero.styles.scss'
import { ReactComponent as RecipeSVG } from '../images/undraw_tasting_de22.svg'
import { ReactComponent as ArrowSVG } from '../images/arrow-right.svg'

const Hero = () => (
    <div className="hero">
        <div className="hero-content">
            <h2 className="hero-content-headline">Recipe Contest</h2>
            <p className="hero-content-text">Recipe contests are like our big, constantly-in-progress dinner party&#8212;and you're invited.</p>
            <button className="btn btn-inline">How they work <ArrowSVG /></button>
        </div>
        <RecipeSVG />
    </div>
)

export default Hero