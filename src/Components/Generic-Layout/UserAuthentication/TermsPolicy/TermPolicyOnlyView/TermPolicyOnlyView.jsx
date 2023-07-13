//Import Libraries/Packages
import React, { useState } from 'react'
import { createPortal } from 'react-dom'

//Import Styles
import "./TermPolicyOnlyView.css"

//Import Local components/files etc..
import TermPolicyOnlyViewContent from './SubComponent/TermPolicyOnlyViewContent'


function TermPolicyOnlyView() 
{
    /* React State Hook */
    const [ShowTPP, setShowTPP] = useState(false)

  return (
    <>
            <a onClick={()=>{setShowTPP(true)}}>Term and privacy policy</a>
            {ShowTPP && createPortal(<TermPolicyOnlyViewContent setShowTPP={setShowTPP} />,document.body)}
    </>
  )
}

export default TermPolicyOnlyView