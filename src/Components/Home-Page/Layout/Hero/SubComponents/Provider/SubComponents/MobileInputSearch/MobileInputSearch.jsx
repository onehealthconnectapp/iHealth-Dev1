//Import Libraries/Packages
import React, { useState } from 'react'

//Import Styles
import "./MobileInputSearch.css";



function MobileInputSearch({diseaseOptns}) 
{
    /* Component`s State */
    const [UserInputSearchData, setUserInputSearchData] = useState()



  return (
    <>
        <section id='MobileInputSearch-wrapper'>

            <p id='MobileInputSearch-topic'>Search & Find a Medical or Wellness Provider</p>

            <div id='MobileInputSearch-input-container'>
                <input type='text' placeholder='Search by Disease, Specialty, or Name' spellCheck="false" autoComplete='false' onChange={(e)=>{setUserInputSearchData(e.target.value)}} onBlur={(e)=>{setTimeout(()=>{setUserInputSearchData("");e.target.value = ""},1000)}} />
            </div>

            { 
                
                UserInputSearchData?.length > 1 && 
                <div id='MobileInputSearch-data-show'>
                    <ul id='MobileInputSearch-data-show-list-data-container'>
                        {diseaseOptns.map((arg,i)=>
                        {
                            return <>
                                <a href='https://www.google.com' target="_blank" key={i+arg}>{arg}</a>
                            </>
                        })}
                        <li>{UserInputSearchData}</li>

                    </ul>
                </div>
            
            }

        </section>
    </>
  )
}

export default MobileInputSearch