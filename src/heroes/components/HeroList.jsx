
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(()=>getHeroesByPublisher(publisher),[publisher]);
    
    return (
        <div className="ProductList">
            {heroes.map(heroe=>(
                <HeroCard key={heroe.id} {...heroe}/>
                    
            ))}
        </div>
    )
}
HeroList.propTypes={
    publisher:PropTypes.string.isRequired
}

