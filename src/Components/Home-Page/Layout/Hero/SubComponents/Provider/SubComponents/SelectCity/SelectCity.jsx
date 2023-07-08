//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./SelectCity.css";





/* This Function just to simply an example to get location of user and log on the console, this will be changed in the future  */
const GetLocationInfo = () => {navigator.geolocation.getCurrentPosition( position => console.log(position), error => console.log(error));}
/* This Function just to simply an example to get location of user and log on the console, this will be changed in the future  */



function SelectCity({cityList}) 
{
  return (
    <>
      <section className="Select-SFProvider-wrapper SelectCity-wrapper">

          <p className='Select-Select-topic'>City</p>

          <div className='Select-Select-inputselect SelectCity-Select-select'>
            <select name="Diseases" className="Select-selectOptions">
                <option defaultValue='Select City'>Select City</option>
                {cityList.map((arg,i)=>
                {
                  return(<option value={arg} key={i+arg}>{arg}</option>)
                })}
            </select>
          </div>

          <div className='Select-Select-additional-info SelectCity-Location-container'>
            <button onClick={GetLocationInfo} className="Select-additional-Use-location">Use My Location</button>
          </div>

      </section>
    </>
  )
}

export default SelectCity