import React, { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

function HomePage() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    useEffect(() => {
        async function fetchCountries() {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
                const data = await res.json(); 
                
                console.log(data); 
                setCountries(data); 
                
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false); 
            }
        }

        fetchCountries();

    }, []);

    const filteredCountries = countries.filter((country) => {
        const matchesSearch = country.name.common.toLowerCase().includes(search.toLocaleLowerCase());

        const matchesRegion = region === "" || country.region === region;
        return matchesSearch && matchesRegion;
        
    })

    return (
        <div className="container">
            <div className="inputs-section">
                <input 
                    type="text" 
                    placeholder="Search for a country..."
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    className="search-input"
                    />

                <select 
                value= {region} 
                onChange={(e) => setRegion(e.target.value)}
                className="region-select">
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            
            {loading && <div className="loader"></div>}

            {!loading && (
                <div className="countries-grid">
                    {filteredCountries.map((country, index) => (
                        <CountryCard key={index} country={country} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomePage;