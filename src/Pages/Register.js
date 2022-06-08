import { useNavigate } from "react-router-dom"
import "../Styles/register.css"
import React, { useState } from 'react'

const Register = () => {

    let navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        accountNum: "",
        address: "",
        suite: "",
        city: "",
        province: "ontario"
    })

    const [email, setEmail] = useState("")

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, attributes: userDetails })
    };

    const registerUser = (e) => {
        e.preventDefault();

        fetch('https://t42ekdpltl.execute-api.ca-central-1.amazonaws.com/emaillinks/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

        console.log("user registered")
        console.log(JSON.stringify(userDetails))
        // console.log(email)

        navigate("../email-sent", { replace: false });

    }

    const handleInputChange = e => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
        console.log(userDetails)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    return (
        <div className="home-page">
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
                    Create a Web Account
                </div>
                <div id="account-input">
                    <form id="form" onSubmit={(e) => registerUser(e)}>
                        <div className="form-group">
                            <label>
                                First Name:
                                <input type="text" required name="firstName" onChange={(e) => handleInputChange(e)} />
                            </label>
                            <label>
                                Last Name:
                                <input type="text" required name="lastName" onChange={(e) => handleInputChange(e)} />
                            </label>
                            <label>
                                Email:
                                <input type="text" required name="email" onChange={(e) => handleEmailChange(e)} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Account Number:
                                <input type="text" required name="accountNum" onChange={(e) => handleInputChange(e)} />
                            </label>
                            <label>
                                Address (Street Number and Street Name):
                                <input type="text" required name="address" onChange={(e) => handleInputChange(e)} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Suite or PO#:
                                <input type="text" required name="suite" onChange={(e) => handleInputChange(e)} />
                            </label>
                            <label>
                                City:
                                <input type="text" required name="city" onChange={(e) => handleInputChange(e)} />
                            </label>

                            <label for="province">Province:</label>
                            <select required name="province" id="province" onChange={(e) => handleInputChange(e)} >
                                <option value="ontario">Ontario</option>
                            </select>
                        </div>
                        <button type="submit" id="register-button">Register</button>
                    </form>


                </div>

            </div>
        </div>
    )
}

export default Register