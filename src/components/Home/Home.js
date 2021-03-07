import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className="country-div">
            {countries.map(country => <Country countries={country} key={country.alpha3Code}></Country>)}
        </div>
    );
};

export default Home;