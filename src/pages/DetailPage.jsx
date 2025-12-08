import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function DetailPage(){
    const {countryName} = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getCountryData() {
            try{
                setLoading(true);
                const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`);
                const data = await res.json();

                setCountry(data[0])
            }catch(error){
                console.error("Error: ", error);
            }finally{
                setLoading(false);
            }
        }
        getCountryData();
    }, [countryName]);
    
    if (loading) return <div className="container">Loading details...</div>;
    if (!country) return <div className="container">Country not found!</div>;

    return (
        <div className="container">
            
            <Link to= "/" className="back-btn">
                <span>← </span>Back
            </Link>

            <div className="country-details">
                <div className="flag-section">
                    <img src={country.flags.svg} alt={country.name.common} />
                </div>

                <div className="info-section">
                    <h1>{country.name.common}</h1>

                    <div className="info-columns">
                        <div className="info-left">
                            <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common}</p>
                            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Sub Region:</strong> {country.subregion}</p>
                            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
                        </div>

                        <div className="info-right">
                            <p><strong>Top Level Domain:</strong> {country.tld ? country.tld[0] : "N/A"}</p>
                            <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
                            <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
                        </div>
                    </div>
                    {country.borders && (
                        <div className="border-section">
                            <strong>Border Countries:</strong>
                            <div className="borders-list">
                                {country.borders.map((border) => (
                                    <span key={border} className="border-tag">{border}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>    
            </div>
        </div>
    );
}

export default DetailPage;