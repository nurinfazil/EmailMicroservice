import React, { useEffect } from 'react'
import "../Styles/register.css"
import "../Styles/display.css"
import { useParams } from "react-router-dom"

const Display = () => {
    const { id } = useParams()

    useEffect(() => {
        // call the api which gets information using NONCE

        const endpointURL = "https://5dj18t1bld.execute-api.ca-central-1.amazonaws.com/hello"

        fetch(`https://5dj18t1bld.execute-api.ca-central-1.amazonaws.com/hello`, {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })
            .then(response => console.log(response.body))
            .then(data => {
                // console.log(data)
            });;

        // console.log(id)
    }, [])

    return (
        <div className="display-account">
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
                    Account Verified!
                </div>
                <div id="account-information">
                    <div>
                        <div>First Name: </div>
                        <div></div>
                    </div>
                    <div>
                        <div>Last Name: </div>
                        <div></div>
                    </div>
                    <div>
                        <div>Email Name: </div>
                        <div></div>
                    </div>
                    <div>
                        <div>Account Number: </div>
                        <div></div>
                    </div>
                    <div>
                        <div>Address: </div>
                        <div></div>
                    </div>
                    <div>
                        <div>Suite or PO#: </div>
                        <div></div>
                    </div>
                    <div>
                        <div>City: </div>
                        <div></div>
                    </div>
                    <div>
                        <div>Province: </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display