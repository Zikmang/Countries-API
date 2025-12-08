import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';

function CountryCard({country}){
    return(
        <Link to={`/country/${encodeURIComponent(country.name.common)}`} className= "card-link">
            <div className="country-card">
                <img src={country.flags.png} className="flag-img" alt="" />
                <div className="card-info">
                    <h3 className="country-name">{country.name.common}</h3>
                    <div className="details">
                        <p>
                            <strong>Population:</strong> {country.population.toLocaleString()}
                        </p>
                        <p>
                            <strong>Region:</strong> {country.region}
                        </p>
                        <p>
                            <strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}
                        </p>
                        
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard;