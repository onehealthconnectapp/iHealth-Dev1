//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./SelectSpecialty.css";



function SelectSpecialty({specialityOptions}) 
{

  
  return (
    <>
      <section className="Select-SFProvider-wrapper SelectSpecialty-wrapper">

        <p className='Select-Select-topic'>Specialty</p>

        <div className='Select-Select-inputselect specialtySelect-select'>
          <select name="Diseases" className="Select-selectOptions">
              <option defaultValue='Select Specialty' >Select Specialty </option>
              {specialityOptions.map((arg,i)=>
              {
                return(<option value={arg} key={i+arg}>{arg}</option>)
              })}
          </select>
        </div>

        <div className='Select-Select-additional-info'>
          <input type="checkbox" />
          <label className="Select-additional-info-text">Treats Children</label>
        </div>

      </section>
    </>
  )
}

export default SelectSpecialty