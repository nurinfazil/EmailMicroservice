import React, { useEffect, useState } from 'react'
import "../Styles/register.css"
import "../Styles/display.css"
import { useParams } from "react-router-dom"

const Display = () => {

    const [linkData, setLinkData] = useState({})
    const [email, setEmail] = useState("")
    const [isError, setIsError] = useState(false)
    const [useEffectRunCount, setUseEffectRunCount] = useState(0)
    const { id } = useParams()

    useEffect(() => {
        // call the api which gets information using NONCE

        fetch(`https://t42ekdpltl.execute-api.ca-central-1.amazonaws.com/emaillinks/${id}`)
            .then(response => {
                if (!response.ok) {
                    setIsError(true)
                }
                return response.json();
            })
            .then(data => {
                setLinkData(JSON.parse(data.attributes));
                setEmail(data.email)
                console.log(JSON.parse(data.attributes))
            })


    }, [])

    return (

        isError ? (<div className="display-account">
            <div className='header'>
                <div id="logo">408ETR</div>
                <div className='header-nav-links'>
                    <div>HIGHWAY</div>
                    <div>TOLLS</div>
                    <div>PAYMENTS</div>
                    <div>MYACCOUNT</div>
                    <div>HELP</div>
                </div>
            </div >
            <div className="page-content">
                <div className="page-title">
                    Link Expired
                </div>
                <div id="account-information">
                    This link has expired. If you have already used this link, please request a new one.
                </div>
            </div>
        </div >)
            : (<div className="display-account">
                <div className='header'>
                    <div id="logo">408ETR</div>
                    <div className='header-nav-links'>
                        <div>HIGHWAY</div>
                        <div>TOLLS</div>
                        <div>PAYMENTS</div>
                        <div>MYACCOUNT</div>
                        <div>HELP</div>
                    </div>
                </div >
                <div className="page-content">
                    <div className="page-title">
                        Account Verified!
                    </div>
                    <div id="account-information">
                        <div>
                            <strong>First Name: </strong>
                            <span>{linkData == undefined ? null : linkData.firstName}</span>
                        </div>
                        <div>
                            <strong>Last Name: </strong>
                            <span>  {linkData == undefined ? null : linkData.lastName}</span>
                        </div>
                        <div>
                            <strong>Email: </strong>
                            <span>{email}</span>
                        </div>
                        <div>
                            <strong>Account Number: </strong>
                            <span>{linkData == undefined ? null : linkData.accountNum}</span>
                        </div>
                        <div>
                            <strong>Address: </strong>
                            <span>{linkData == undefined ? null : linkData.address}</span>
                        </div>
                        <div>
                            <strong>Suite or PO#: </strong>
                            <span>{linkData == undefined ? null : linkData.suite}</span>
                        </div>
                        <div>
                            <strong>City: </strong>
                            <span>{linkData == undefined ? null : linkData.city}</span>
                        </div>
                        <div>
                            <strong>Province: </strong>
                            <span>{linkData == undefined ? null : linkData.province}</span>
                        </div>
                    </div>
                </div>
            </div >)


    )
}

export default Display