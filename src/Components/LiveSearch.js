import React, { useEffect, useState } from 'react';

const countries=[ "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Japan", "Brazil", "China", "India", "Russia", "South Africa", "Mexico", "Argentina", "Italy", "Spain", "Egypt", "Nigeria", "Saudi Arabia", "South Korea", "Turkey", "Greece", "Sweden", "Norway", "Netherlands", "Switzerland", "Belgium", "Portugal", "New Zealand", "Singapore", "Thailand", "Malaysia", "Indonesia", "Philippines", "Vietnam", "Chile", "Peru", "Colombia", "Venezuela", "Pakistan", "Iran", "Iraq", "Egypt", "Morocco", "Kenya", "Uganda", "Ghana", "Ethiopia", "Tunisia", "Senegal", "Algeria", "Tanzania", "Ukraine", "Poland", "Hungary", "Czech Republic", "Austria", "Denmark", "Finland", "Ireland", "Romania", "Bulgaria", "Greece", "Switzerland", "Sweden", "Norway", "Netherlands", "Belgium", "Portugal", "Luxembourg", "Cyprus", "Malta", "Singapore", "Malaysia", "Indonesia", "Thailand", "Philippines", "Vietnam", "Myanmar", "Cambodia", "Laos", "Brunei", "Fiji", "Papua New Guinea", "Solomon Islands", "New Caledonia", "Samoa", "Tonga", "Vanuatu", "Fiji", "Papua New Guinea", "Solomon Islands", "New Caledonia", "Samoa", "Tonga", "Vanuatu" ]


const LiveSearch=()=> {
    const [searchTerm,setSearchTerm]=useState("");
    const [filteredCountries,setFilteredCountries]=useState(countries);

    useEffect(()=>{
        filterCountries()

    },[searchTerm]
    )
    
    const filterCountries=()=>{
        let x=(countries.filter((country)=>country.toLowerCase().includes(searchTerm.toLowerCase())==true))
        setFilteredCountries(x)
    }

  return (
    <div>
        <input type='text' placeholder="" 
        onChange={(event) =>setSearchTerm(event.target.value)}
        value={searchTerm} 
        />
        {/* <button onClick={filterCountries}>Search</button> */}

        <div className='countries'>
            {
                filteredCountries.map((country)=>
                <p>{country}</p>)
            }
        </div>
    </div>
  )
}

export default LiveSearch