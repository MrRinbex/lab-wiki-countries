import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import countryListJson from '../countries.json';


const CountryDetails = (props) => {
    // const [countryFound, setCountryFound] = useState(null)
    const {id} = useParams()
    // useEffect(() => {
      const country = countryListJson.find((country)=>{
            return country.alpha3Code === id
      })
    //   if (country) {

    //     setCountryFound(country);
  
    //   }
    // // }, [countryId])
    


  return (
    <div>
        <h2>{country.name.official}</h2>
        <h2>capital: {country.capital}</h2>

        <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map((el)=>(
                     <li>
                     <Link to={`/${el}`}>
                     {el}
                     </Link>
                     </li>
                     ))}
                    </ul>
                  </td>
                </tr>
    </div>
  )
}

export default CountryDetails