import React from 'react'
import "../Styles/register.css"

const Confirm = () => {
    return (
        <div className="confirmation-page">
            <div className='header'>
                <div id="logo">408ETR</div>
                <div className='header-nav-links'>
                    <div>HIGHWAY</div>
                    <div>TOLLS</div>
                    <div>PAYMENTS</div>
                    <div>MYACCOUNT</div>
                    <div>HELP</div>
                </div>
            </div>
            <div className="page-content">
                <div className="page-title">
                    Email sent!
                </div>
                <div id="account-input">
                    Please check the inbox for the email you provided us. <br></br>
                    Use the link in the email to verify your account.
                </div>

            </div>
        </div>
    )
}

export default Confirm