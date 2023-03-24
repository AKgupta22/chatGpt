import React from 'react'
import { Link } from 'react-router-dom'
export default function FormWrapper({ headerText, linkText, linkTo, children }) {
    return (
        <div className='main-container'>
            <div className='form-box'>
                <h3 className='form-header'>{headerText}</h3>
                {children}
                <div style={{ textAlign: "center" }}><Link className='link_button' to={linkTo}>{linkText}</Link></div>
            </div>
        </div>
    )
}
