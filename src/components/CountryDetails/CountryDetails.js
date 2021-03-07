import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css'

const CountryDetails = () => {
    const {countryName} = useParams()
    const [countryDetails, setCountryDetails] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountryDetails(data[0]))
    },[])
        const {name, capital, population, area, flag, languages, region} = countryDetails
        console.log(countryDetails);
    return (
        <div className="country-container">
            <img src={flag} alt=""/>     
            <h3>Name : {name}</h3>
            <h5>Capital : {capital}</h5>
            <p>Region : {region}</p>
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            {/* <p>Language : {languages.map(lang => <span>{`${lang.name}, `}</span>)}</p> */}
        </div>
    );
};

export default CountryDetails;