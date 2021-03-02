import React, { useState } from 'react'

const HookForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setconfirmError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!")
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password) {
            setconfirmError("Passwords must match!");
        } else {
            setconfirmError("");
        }
    }

    return (
        <>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFirstName } value={ firstName }/>
                </div>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
                <div>
                <label>Last Name: </label>
                    <input type="text" onChange={ handleLastName } value={ lastName }/>
                </div>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail } value={ email }/>
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } value={ password }/>
                </div>
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
                {
                    confirmError ?
                    <p>{ confirmError }</p> :
                    ''
                }
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handleConfirmPassword } value={ confirmPassword }/>
                </div>
            </form>
            <br/>
            <h4>Your Form Data</h4>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Email: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confirmPassword }</p>

        </>
    )
}

export default HookForm
