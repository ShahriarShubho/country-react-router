import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'
const Country = (props) => {
    const {name, capital, flag} = props.countries
    // console.log(props.countries);
    const history = useHistory();
    const handleCountry = (countryName) => {
        history.push(`country/${countryName}`);
    }
    return (
        <div className="countries-container col-md-3">
            <img src={flag} alt=""/>
            <Link to={`/country/${name}`}><h3>{name}</h3></Link>
            <p>capital : {capital}</p>
            <button className="btn btn-primary" onClick={() => handleCountry(name)}>Click for Details</button>
        </div>
    );
};

export default Country;