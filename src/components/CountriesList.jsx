import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import countryListJson from '../countries.json';

console.log(countryListJson)
const CountriesList = (props) => {
    
    const [countryList, setCountryList] = useState(countryListJson)
    
    return (
        <div >
        {countryList.map((country) => {
        return (
        <div className='countries-list'>
           
            <Link to={`/${country.alpha3Code}`}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
            </Link>
        </div>
            )
        })}        
    </div>
  )
}

export default CountriesList