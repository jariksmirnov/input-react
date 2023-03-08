import React, { useState } from "react";
export const Login = () => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');

    const handleSubmit = (e) => {
        e.prevenetDefault ();
        console.log (email);

    }

    return (
        <form onSubmit = {handleSubmit}>
            <label for = "email">email</label>
            <input value = {email} type = "email" placeholder="yourmail@gmail.com" id = "email" name = "email" />
            <label for = "password">password</label>
            <input value = {pass} type = "password" placeholder="***********" id = "password" name = "password" />
            <button type = "submit">Log In</button>
        </form>
    )
}