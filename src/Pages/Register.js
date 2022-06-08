import { useNavigate } from "react-router-dom"
import "../Styles/register.css"
import React, { useState } from 'react'

const Register = () => {

    let navigate = useNavigate();

    const registerUser = () => {

        // fetch(`${API_HOST}/shopping-list/${shoppingListId}`, {
        //     method: 'PUT',
        //     mode: 'cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: 'follow', // manual, *follow, error
        //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify(newIngredient) // body data type must match "Content-Type" header
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         // console.log(data)
        //     });;
        console.log("user registered")
        console.log(userDetails)
        console.log(email)

        navigate("../email-sent", { replace: false });

    }

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

    const handleInputChange = e => {
        console.log(e.target.value)
        console.log(e.target.name)
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
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
                    <form id="form" onSubmit={() => registerUser()}>
                        <div className="form-group">
                            <label>
                                First Name:
                                <input type="text" required name="firstname" onChange={(e) => handleInputChange(e)} />
                            </label>
                            <label>
                                Last Name:
                                <input type="text" required name="lastname" onChange={(e) => handleInputChange(e)} />
                            </label>
                            <label>
                                Email:
                                <input type="text" required name="email" onChange={(e) => handleEmailChange(e)} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Account Number:
                                <input type="text" required name="accountnum" onChange={(e) => handleInputChange(e)} />
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